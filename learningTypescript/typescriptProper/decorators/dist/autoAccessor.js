export function autoLog(accessor, ctxt) {
    console.log(`The object passed to the fisrt parameter:  `, accessor);
    console.log(`the argument array: `, arguments);
    const name = String(ctxt.name);
    return {
        get() {
            const result = accessor.get.call(this);
            console.log(`Auto-accessor: ${name} get returned: ${result}`);
            return result;
        },
        set(value) {
            accessor.set.call(this, value);
            console.log(`Auto-accessor: ${name} set: `, this, `to ${value}`);
        },
        init(value) {
            console.log(`Auto-accessor initialized to ${value}`);
            return value;
        },
    };
}
