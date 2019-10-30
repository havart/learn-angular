export class UserAuthService {
    public setUser(login: string): void {
        const currentUser = {
            authData: {
                userName: `${login}`,
            },
        };

        localStorage.setItem('user', JSON.stringify(currentUser));
    }

    public isUserAuthenticated(): boolean {
        const currentUser = localStorage.getItem('user');

        return !!currentUser;
    }
}
