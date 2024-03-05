"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
function sum(...val) {
    return val.reduce((total, acc) => {
        return total + acc;
    });
}
exports.sum = sum;
//# sourceMappingURL=calc.js.map