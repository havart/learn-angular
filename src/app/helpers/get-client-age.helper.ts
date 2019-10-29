export function getClientAge(date: any): number {
    var diff_ms = Date.now() - date.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}