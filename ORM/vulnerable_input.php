<?php
public function searchBlindVulnerable(Request $request)
{
    $users = [];
    $email = $request->input('email');
    $users = Admins::whereRaw("email = '$email'")->get();
    if ($users) {
        return view('user', ['users' => $users]);
    } else {
        return view('user', ['message' => 'User not found']);
    }
}