//Wrap the regex in () so the separators are included.
const punctuations = /(\?|!|\.+|"|'|<|>|“|” |’ |…|,)/;
const wordBreaks = /( |-|—)/;
const span = (w: string) => `<span>${w}</span>`;
export function expand(s: string, boundaryCallback?: (w: string) => void) {
    //Split by words then split by punctuations.
    const parts = s.split(wordBreaks)
        .flatMap(w => w.split(punctuations))
    if (boundaryCallback) {
        return parts.map(p => {
            //If `p` is a word, wrap in span
            if (/\w/.test(p)) {
                boundaryCallback(p);
                return span(p)
            }
            return p
        }).join("");
    }

    return parts.map(p =>
        /\w/.test(p) ? span(p) : p
    ).join("");
}