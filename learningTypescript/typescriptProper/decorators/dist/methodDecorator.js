// interface HasGetPrice {
//   getPrice(): number;
// }
export function time(method, ctxt) {
    const methodName = String(ctxt.name);
    return function (...args) {
        console.log(`method passed to the decorator function during invocation: `, method.apply(this));
        const start = performance.now();
        const result = method.apply(this, args);
        const duration = performance.now() - start;
        console.log(`duration of ${methodName} invocation: ${duration.toFixed(2)} ms.`);
        return result;
    };
}
//using a factory function, with an optional parameter.
//NOTES: The" extends" keyword is used to create a constrait on a type.
export function label(config) {
    return function (method, ctxt) {
        const name = config?.label ?? String(ctxt.name);
        return function (...args) {
            let result;
            const start = performance.now();
            console.log(`starting invocation starting...`);
            if (config?.replacement) {
                result = config?.replacement.call(this, ...args);
            }
            else {
                result = method.call(this, ...args);
            }
            console.log(`the method: "${name}" has been invoked.`);
            const duration = (performance.now() - start).toFixed(2) + "ms";
            console.log(`The function took: ${duration} to complete.`);
            return result;
        };
    };
}
const timings = new Map();
timings.set("one", { count: 2848932, elapsed: 486 });
timings.set("two", { count: 243, elapsed: 384698 });
for (let item of timings.entries()) {
    console.log(item);
}
