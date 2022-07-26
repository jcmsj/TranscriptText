import {limit} from "./limit.js"
import { kickNextSiblings } from "./kickNextSiblings.js";
import { expand } from "./expand.js";
import { init } from "./template.js";

const indexStr = "index"
const minIndex = 0

export class TranscriptText extends HTMLElement{
    index:number;
    indices: number[];
    private at:HTMLElement|undefined;

    static get observedAttributes() {
        return [indexStr];
    }
    constructor(n?:Node, i:number=minIndex) {
        super()
        this.index = i;
        this.attachShadow({mode:"open"})
        init(this.shadowRoot)
        if (n) this.setTranscriptFrom(n);
    }

    connectedCallback() {
        this.setWord(this.index)
        this.setTranscript(this.textContent)
    }
    
    attributeChangedCallback(name:string, oldValue:string, newValue:string) {
        if (name == indexStr) {
            this.updateWord(newValue)
        }
    }

    setTranscript(s:string) {
        kickNextSiblings(this.shadowRoot.firstElementChild);
        this.indices = []
        const count = (w:string) => {
            this.indices.push(w.length)
        }
        this.shadowRoot.innerHTML += expand(s, count);
    }

    setTranscriptFrom(n:Node) {
        this.setTranscript(n.textContent)
    }

    setWord(i:number) {
        this.setAttribute(indexStr, "" + i)
    }

    updateWord(s:string) {
        let i = Number.parseInt(s) || -1;
        let t = this.shadowRoot.children.item(i) as HTMLElement;
        if (t) {
            this.at?.removeAttribute("active");
            t.setAttribute("active", "")
            this.at = t;
            this.index = i;
        }
    }

    parseInt(s:string) {
        return limit(Number.parseInt(s) || 1, 1, this.shadowRoot.children.length - 1);
    }
    next() {
        this.setWord(this.index + 1)
    }

    previous() {
        this.setWord(this.index - 1)
    }
}