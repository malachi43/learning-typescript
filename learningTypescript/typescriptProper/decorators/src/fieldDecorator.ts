export function double<T extends any, FieldType extends number>(
  notUsed: T,
  ctxt: ClassFieldDecoratorContext<T, FieldType>
) {
  console.log(notUsed, ctxt);
  return function (this, initialvalue:number) {
    return initialvalue * 2;
  };
}
