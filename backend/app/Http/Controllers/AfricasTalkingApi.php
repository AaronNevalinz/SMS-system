<?php

namespace App\Http\Controllers;

use AfricasTalking\SDK\AfricasTalking;
use Illuminate\Http\Request;

class AfricasTalkingApi extends Controller
{
    //
    public function sendSMS(Request $request)
    {
        $username = 'aaronnevalinz';
        $apiKey = 'atsk_fd6c1e449d3eb1603d63f9d3ad4b00de879ff9add15be43c67bf377a85f304c7b42273af';

        $AT = new AfricasTalking($username, $apiKey);

        $sms = $AT->sms();

        $fields = $request->validate([
            'to' => 'required',
            'message' => 'required',
            // 'from' => 'required'
        ]);

        $result = $sms->send($fields);

        return [
            'result' => $result
        ];
    }
}
