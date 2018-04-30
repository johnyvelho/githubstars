import * as Auth from './../Auth';

test('user must be not authenticated', () => {
    expect(Auth.isAuthenticated()).toBeFalsy();
});

test('user must be redirected to login', () => {
    expect(Auth.redirectToLoginIfNotAuthenticated()).toBeDefined();
});

test('set and receive user token', () => {
    Auth.setUserToken('usertoken');
    expect(Auth.getUserToken()).toBe('usertoken');
});

test('user must be authenticated', () => {
    Auth.setUserToken('usertoken');
    expect(Auth.isAuthenticated()).toBeTruthy();
});

test('user must be not redirected to login', () => {
    expect(Auth.redirectToLoginIfNotAuthenticated()).toBeNull();
});

test('set and receive user data', () => {
    Auth.setUserData({name: 'test'});
    expect(Auth.getUserData().name).toBe('test');
});

test('add starrable repositorie', () => {
    Auth.setUserData({name: 'test', starredRepositoriesId: []});
    expect(Auth.getStarrableRepositories().length).toBe(0);

    Auth.addStarrableRepository('1');
    expect(Auth.getStarrableRepositories().length).toBe(1);
});

test('remove starrable repositorie', () => {
    Auth.setUserData({name: 'test', starredRepositoriesId: ['1', '2']});
    expect(Auth.getStarrableRepositories().length).toBe(2);

    Auth.removeStarrableRepository('1');
    expect(Auth.getStarrableRepositories().length).toBe(1);
    Auth.removeStarrableRepository('2');
    expect(Auth.getStarrableRepositories().length).toBe(0);
});