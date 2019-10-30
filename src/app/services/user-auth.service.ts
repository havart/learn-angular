export class UserAuthService {
    public setUser(login: string) {
        const currentUser = {
            authData: {
                userName: `${login}`,
            },
        };

        localStorage.setItem('user', JSON.stringify(currentUser));
    }

    public isUserAuthenticated() {
        const currentUser = localStorage.getItem('user');

        return !!currentUser;
    }
}
