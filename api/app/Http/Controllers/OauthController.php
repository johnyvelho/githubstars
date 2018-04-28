<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OauthController extends Controller
{
    public function accessToken(Request $request)
    {
        try {
            $clientGuzzle = new \GuzzleHttp\Client(['base_uri' => 'https://github.com']);
            $response = $clientGuzzle->post('/login/oauth/access_token', [
                'headers' => [
                    'Accept' => 'application/json'
                ],
                'json' => [
                    'client_id' => env('GITHUB_CLIENT_ID'),
                    'client_secret' => env('GITHUB_CLIENT_SECRET'),
                    'code' => $request->input('code')
                ]
            ]);

            $data = json_decode($response->getBody()->getContents(), true);

            if (isset($data['error'])) {
                return response()->json(['error' => $data['error_description']], 400);
            }

            return response()->json($data, $response->getStatusCode());
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

}
