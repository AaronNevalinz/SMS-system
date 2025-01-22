<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    //
    
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'password' => 'required|string|confirmed',
            'connects'=>'string'
        ]);
        
        $user = User::create($fields);
        
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'user'=> $user,
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }
    public function login(Request $request)
    {
        // Validate the inputs gotten from the frontend application
        $fields =$request->validate([
            'email' => 'required|email|exists:users',
            'password'=>'required'
        ]);

        $user = User::where('email', $fields['email'])->first();

        // when the user is not found or the password is incorrect
        if( !$user || !Hash::check($fields['password'], $user->password)){
            return [
                'errors'=>[
                    'email'=>['The provided credentials are incorrect']
                ]
                ];
        }

        // if the user is found, generate a new token and return the user and plain
        $token = $user->createToken($user->name);

        return [
            'user'=>$user,
            'token'=>$token->plainTextToken
        ];
    }
}
