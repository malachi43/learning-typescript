export function double(notUsed, ctxt) {
    console.log(notUsed, ctxt);
    return function (initialvalue) {
        return initialvalue * 2;
    };
}
