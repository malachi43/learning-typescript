//Treat interface as types also.
export interface Serializable {
  serialize(): void;
}

//This function is a type guard.
export function isSerializable(target: any): target is Serializable {
  return typeof target.serialize === "function";
}

export function serialize<T extends new (...args: any[]) => any>(
  originalClass: T,
  ctxt: ClassDecoratorContext
) {
  console.log(`original class: `, originalClass);
  const className = String(ctxt.name);
  return class extends originalClass implements Serializable {
    serialize(): void {
      return console.log(`${className}: ${JSON.stringify(this, null, 2)}`);
    }
  };
}

export function isStringArray(test: any): test is string[] {
  return Array.isArray(test);
}
