const cases = [' ', '-','—', undefined]
export function expand(s:string, boundaryCallback?:(w:string)=>void) {
    const iter = s[Symbol.iterator]();
    let v:string|undefined;
    let word: string|undefined = "";
    let innerHTML = ""
    do {
        v = iter.next().value;
        word += v ?? "";

        if (word.length 
        && cases.includes(v)) {
            innerHTML += `<span>${word}</span>`
            if (boundaryCallback)
                boundaryCallback(word);
            word = "";
        }
    } while(v);

    return innerHTML;
}