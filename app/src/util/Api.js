import axios from 'axios';

export const api_url = process.env.REACT_APP_API_URL;

const instance = axios.create({
    baseURL: api_url,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export async function getAccessToken(code) {
    let response = await instance.get(`/oauth/access-token?code=${code}`);

    return response;
}