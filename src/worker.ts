import { expand } from "./expand.js"

self.onmessage = function(e:MessageEvent<string>) {
    self.postMessage(expand(e.data))
}