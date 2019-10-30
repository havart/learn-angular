export class UserAuthService {
    public setUser(login: string): void {
        const currentUser = {
            authData: {
                userName: `${login}`,
            },
        };

        localStorage.setItem('user', JSON.stringify(currentUser));
    }

    public getUser(): string {
        const currentUser = localStorage.getItem('user');

        return JSON.parse(currentUser).authData.userName;
    }

    public clearUserData(): void {
        localStorage.clear();
    }

    public isUserAuthenticated(): boolean {
        const currentUser = localStorage.getItem('user');

        return !!currentUser;
    }
}
