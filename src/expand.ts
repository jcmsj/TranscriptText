import {WordIterator} from "word-breaker"

const wbc = [' ', '-', '—']

export function expand(s:string, boundaryCallback?:(w:string)=>void) {
    const iter = WordIterator(s, wbc);
    let innerHTML = ""
    const span = (w:string) => innerHTML+= `<span>${w}</span>`;
    if (boundaryCallback) {
        for(const w of iter) {
            span(w)
            boundaryCallback(w);
        }
    } else {
        for(const w of iter) {
            span(w)
        }
    }

    return innerHTML;
}