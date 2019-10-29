export class UserAuthService {
    public setUser(login: string) {
        const currentUser = {
            authData: {
                userName: `${login}`,
            },
        };

        localStorage.setItem('user', JSON.stringify(currentUser));
    }

    public getUser() {
        const currentUser = localStorage.getItem('user');

        return JSON.parse(currentUser).authData.userName;
    }

    public clearUserData() {
        localStorage.clear();
    }

    public isUserAuthenticated() {
        const currentUser = localStorage.getItem('user');

        return !!currentUser;
    }
}
