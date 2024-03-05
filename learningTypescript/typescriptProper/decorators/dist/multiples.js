export function message(message) {
    console.log(`Factory function: ${message}`);
    return function (method, ctxt) {
        let start;
        ctxt.addInitializer(() => (start = performance.now()));
        console.log(`ctxt object: `, ctxt);
        console.log(`Get replacement: ${message}`);
        return function (...args) {
            const start = performance.now();
            console.log(`start: ${start}`);
            const result = method.call(this, ...args);
            const duration = performance.now() - start;
            console.log(`duration: ${duration}`);
            console.log(`Get message: ${message}`);
            return result;
        };
    };
}
