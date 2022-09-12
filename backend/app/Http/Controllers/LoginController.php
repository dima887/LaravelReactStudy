<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * New User Registration
     *
     * @param RegisterUserRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterUserRequest $request)
    {
        $user = User::create($request->all());
        Auth::login($user);
        return response()->json([
            'user' => $user,
            'message' => 'registration successful'
        ], 200);
    }

    /**
     * User authentication
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $authuser = auth()->user();
            return response()->json(['user' => $authuser, 'message' => 'LoginPage successful'], 200);
        } else {
            return response()->json(['message' => 'Invalid email or password'], 401);
        }
    }

    /**
     * Sign Out
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged Out'], 200);
    }
}
