<?php

namespace App\Http\Controllers;

use AfricasTalking\SDK\AfricasTalking;
use Illuminate\Http\Request;

class AfricasTalkingApi extends Controller
{
    //
    public function sendSMS(Request $request)
    {
        $username = 'sandbox';
        $apiKey = 'atsk_a1de847d4aa9ce19c08263ba485e1d9c7a5fb820b69d716a5de077bc65dbe5e5a4d92c92';

        $AT = new AfricasTalking($username, $apiKey);

        $sms = $AT->sms();

        $fields = $request->validate([
            'to' => 'required',
            'message' => 'required',
            'from' => 'required'
        ]);

        $result = $sms->send($fields);

        return [
            'result' => $result
        ];
    }
}
