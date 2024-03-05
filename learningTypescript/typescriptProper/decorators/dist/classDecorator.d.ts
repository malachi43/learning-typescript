export interface Serializable {
    serialize(): void;
}
export declare function isSerializable(target: any): target is Serializable;
export declare function serialize<T extends new (...args: any[]) => any>(originalClass: T, ctxt: ClassDecoratorContext): {
    new (...args: any[]): {
        [x: string]: any;
        serialize(): void;
    };
} & T;
export declare function isStringArray(test: any): test is string[];
