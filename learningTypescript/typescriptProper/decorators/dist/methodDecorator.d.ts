export declare function time<This, Args extends any[], Result extends string | number>(method: (obj: This, args: Args) => Result, ctxt: ClassMethodDecoratorContext<This, (...args: Args) => Result>): (...args: Args) => Result;
type Config = {
    label: string;
    replacement: Function;
    time: boolean;
};
type Opts = Partial<Config>;
export declare function label<S extends string>(config?: Opts): <This, Args extends any[], Result extends string | number>(method: (this: This, ...args: Args) => Result, ctxt: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Result>) => (this: This, ...args: Args) => Result;
export {};
