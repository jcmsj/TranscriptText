export let worker:Worker|false = new Worker("./worker.js", {type:"module", name:"Expander"});
worker.onerror = (e:ErrorEvent) => {
    if (!e.filename) {
        worker = false;
    }
}