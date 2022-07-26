export function kickNextSiblings(el:Element) {
    while(el.nextElementSibling)
        el.nextElementSibling.remove();
}