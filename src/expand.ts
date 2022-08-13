import {WordIterator} from "word-breaker"

const wbc = [' ', '-', '—']

export function expand(s:string, boundaryCallback?:(w:string)=>void) {
    const iter = WordIterator(s, wbc);
    let innerHTML = ""

    for(const w of iter) {
        innerHTML += `<span>${w}</span>`
        if (boundaryCallback)
            boundaryCallback(w);
    }

    return innerHTML;
}