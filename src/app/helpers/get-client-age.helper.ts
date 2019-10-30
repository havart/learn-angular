export function getClientAge(date: string): string {
    const ageDate = new Date(Date.now() - Date.parse(date));
    const ageYear = Math.abs(ageDate.getUTCFullYear() - 1970);
    const ageValue = ageYear.toString().slice(-1);

    return ageValue === '1'
        ? `${ageYear} год`
        : ageValue === '0' || ageValue >= '5'
        ? `${ageYear} лет`
        : ageValue < '5'
        ? `${ageYear} года`
        : '';
}
