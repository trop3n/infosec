<?php
public function searchBlindSecure(Request $request)
{
    $email = $request->input('email');
    $users = User::where('email', $email)->get();
    if (isset($users) && count($users) > 0) {
        return view('user', ['users' => $users]);
    } else {
        return view('user', ['message' => 'User not found']);
    }
}