//This function is a type guard.
export function isSerializable(target) {
    return typeof target.serialize === "function";
}
export function serialize(originalClass, ctxt) {
    console.log(`original class: `, originalClass);
    const className = String(ctxt.name);
    return class extends originalClass {
        serialize() {
            return console.log(`${className}: ${JSON.stringify(this, null, 2)}`);
        }
    };
}
export function isStringArray(test) {
    return Array.isArray(test);
}
