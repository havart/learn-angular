export function getAge(dateOfBirth: string): number {
    return parseInt('' + (new Date().getDate() - new Date(dateOfBirth).getDate() / 1000 / 60 / 60 / 24 / 30 / 12), 10);
}
