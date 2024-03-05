// export function log<This, ValueType extends number>(
//   setter: (arg: ValueType) => void,
//   ctxt: ClassSetterDecoratorContext<This, ValueType>
// ): (args: ValueType) => void;
// export function log<This, ValueType extends number>(
//   getter: () => ValueType,
//   ctxt: ClassGetterDecoratorContext<This, ValueType>
// ): () => ValueType;

export function log(
  accessor: any,
  ctxt: ClassGetterDecoratorContext | ClassSetterDecoratorContext
) {
  console.log(`context object: `, ctxt);
  const name = String(ctxt.name);
  return function (this: any, ...arg: any[]) {
    if (ctxt.kind === "getter") {
      const result = accessor.call(this, ...arg);
      console.log(`${name} get function received`);
      return result;
    } else {
      console.log(`${name} set to ${arg}`);

      accessor.call(this, ...arg);
    }
  };
}
