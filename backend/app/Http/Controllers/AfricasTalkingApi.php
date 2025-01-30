<?php

namespace App\Http\Controllers;

use AfricasTalking\SDK\AfricasTalking;
use App\Models\Recipients;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;

class AfricasTalkingApi extends Controller implements HasMiddleware
{
    
    public static function middleware()
    {
        return [
            'auth:sanctum'
        ];
    }
    
    public function sendSMS(Request $request)
    {
        $username = 'aaronnevalinz';
        $apiKey = 'atsk_fd6c1e449d3eb1603d63f9d3ad4b00de879ff9add15be43c67bf377a85f304c7b42273af';

        $AT = new AfricasTalking($username, $apiKey);

        $sms = $AT->sms();

        $fields = $request->validate([
            'to' => 'required',
            'message' => 'required',
            'title'=>'required',
        ]);

        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }

        try {
            $result = $sms->send($fields);
            $connects = $user->connects->connects;
            $successful = 0;
            foreach ($result['data']->SMSMessageData->Recipients as $recipient) {
                if ($recipient->statusCode === 101) {
                    $successful++;
                }
            }
            $connects -= $successful;
            $user->connects->update(['connects' => $connects]);
            
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to send SMS: ' . $e->getMessage()]);
        }

        // Parse and store response data in the database
        if (!isset($result['data']->SMSMessageData->Recipients) || empty($result['data']->SMSMessageData->Recipients)) {
            return response()->json(['error' => 'Failed to send SMS or no recipients found'], 500);
        }
        $recipients = $result['data']->SMSMessageData->Recipients;

        $campaign = $request->user()->campaigns()->create([
            'title' => $request->title ?? 'Untitled Campaign',
            'message' => $fields['message'],
            'recipients' => count($recipients),
            'status' => 'sent',
        ]);

        foreach ($recipients as $recipient) {
            Recipients::create([
                'campaign_id' => $campaign->id,
                'number' => $recipient->number,
                'status_code' => $recipient->statusCode,
                'status' => $recipient->status,
                'cost' => $recipient->cost,
                'message_id' => $recipient->messageId,
            ]);
        }

        
        return [
            'result' => $result,
            'campaign' => $campaign
        ];
    }
}
