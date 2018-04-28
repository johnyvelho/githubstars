const KEY_USER_TOKEN = 'userToken';
const client_id = 'bc4de80cc77785806529';
export const login_url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user,public_repo,repo,repo_deployment,repo:status,read:repo_hook,read:org,read:public_key,read:gpg_key`;

export function redirectToLoginIfNotAuthenticated() {
    return !isAuthenticated() ? window.location.href = login_url : null;
}

export function setUserToken(token) {
    localStorage.setItem(KEY_USER_TOKEN, token);
}

export function getUserToken() {
    return localStorage.getItem(KEY_USER_TOKEN);
}

export function isAuthenticated() {
    return getUserToken() != null;
}