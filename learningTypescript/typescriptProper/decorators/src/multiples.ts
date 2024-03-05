export function message(message: string) {
  console.log(`Factory function: ${message}`);
  return function (method: any, ctxt: ClassMemberDecoratorContext) {
    let start: number;
    ctxt.addInitializer(() => (start = performance.now()));
    console.log(`ctxt object: `, ctxt);
    console.log(`Get replacement: ${message}`);
    return function (this: any, ...args: any[]) {
      const start: number = performance.now();
      console.log(`start: ${start}`);
      const result = method.call(this, ...args);
      const duration = performance.now() - start;
      console.log(`duration: ${duration}`);
      console.log(`Get message: ${message}`);
      return result;
    };
  };
}
