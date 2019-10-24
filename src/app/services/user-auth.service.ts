import { Observable } from 'rxjs';

export class UserAuthService {
    public setUser(login: string) {
        const currentUser = {
            authData: {
                userName: `${login}`,
            },
        };

        localStorage.setItem('user', JSON.stringify(currentUser));
    }

    public checkUser(): boolean {
        const currentUser: string = localStorage.getItem('user');
        return !!currentUser;
    }
}
