// interface HasGetPrice {
//   getPrice(): number;
// }

export function time<This, Args extends any[], Result extends string | number>(
  method: (obj: This, args: Args) => Result,
  ctxt: ClassMethodDecoratorContext<This, (...args: Args) => Result>
) {
  const methodName = String(ctxt.name);
  return function (...args: Args): Result {
    console.log(
      `method passed to the decorator function during invocation: `,
      method.apply(this)
    );

    const start = performance.now();
    const result = method.apply(this, args);
    const duration = performance.now() - start;
    console.log(
      `duration of ${methodName} invocation: ${duration.toFixed(2)} ms.`
    );
    return result;
  };
}

type Config = {
  label: string;
  replacement: Function;
  time: boolean;
};

type Opts = Partial<Config>;

//using a factory function, with an optional parameter.
//NOTES: The" extends" keyword is used to create a constrait on a type.
export function label<S extends string>(config?: Opts) {
  return function <This, Args extends any[], Result extends number | string>(
    method: (this: This, ...args: Args) => Result,
    ctxt: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Result
    >
  ) {
    const name = config?.label ?? String(ctxt.name);
    return function (this: This, ...args: Args): Result {
      let result: Result;
      const start = performance.now();
      console.log(`starting invocation starting...`);
      if (config?.replacement) {
        result = config?.replacement.call(this, ...args);
      } else {
        result = method.call(this, ...args);
      }
      console.log(`the method: "${name}" has been invoked.`);
      const duration = (performance.now() - start).toFixed(2) + "ms";
      console.log(`The function took: ${duration} to complete.`);
      return result;
    };
  };
}

const timings = new Map<string, { count: number; elapsed: number }>();

timings.set("one", { count: 2848932, elapsed: 486 });
timings.set("two", { count: 243, elapsed: 384698 });

for (let item of timings.entries()) {
  console.log(item);
}
