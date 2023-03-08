export const template = document.createElement("template")
template.innerHTML = `<style>
:host {
    display: inline;
    --bg-color: aqua;
    --word-color: yellow;
    background-color: var(--bg-color);
}
span[active] { background-color: var(--word-color); }
</style>`

export function init(s:ShadowRoot) {
    s.appendChild(template.content.cloneNode(true))
}