<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        ]);

        // return $request->name;
        
        $user = User::create($fields);

        $user->connects()->create(['connects' => 25]);

        $token = $user->createToken($user->name)->plainTextToken;
        
        return response()->json([
            'user'=> $user,
            'access_token' => $token,
        ]);
    }



    public function login(Request $request)
    {
        // Validate the inputs gotten from the frontend application
        $fields =$request->validate([
            'email' => 'required|email|exists:users',
            'password'=>'required'
        ]);

        // grab the user using queries
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
            'access_token'=>$token->plainTextToken
        ];
    }



    
    // This route has got to be protected, so that it is only accessible by the logged in users
    public function logout(Request $request){
        if ($request->user()) {
            // revoke all tokens
            $request->user()->tokens()->delete();

            // Revoke the token that was used to authenticate the current request...
            // $request->user()->currentAccessToken()->delete();

            return response()->json([
                'message' => 'Logged out successfully'
            ]);
        } else {
            return response()->json([
                'message' => 'No authenticated user found'
            ], 401);
        }
    }
}
