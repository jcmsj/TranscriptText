export function limit(n:number, min:number, max:number) {
    return Math.min(Math.max(n, min), max)
}