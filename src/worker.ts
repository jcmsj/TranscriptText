import expand from "./expand"

self.onmessage = function(e:MessageEvent<string>) {
    self.postMessage(expand(e.data))
}