class CartItem {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    get totalPrice() {
        return this.product.price * this.quantity;
    }
}
export class Cart {
    customerName;
    _items = new Map();
    constructor(customerName) {
        this.customerName = customerName;
    }
    addProdcut(product, quantity) {
        if (this._items.has(product.id)) {
            const prod = this._items.get(product.id);
            prod.quantity += quantity;
            return prod.quantity;
        }
        else {
            this._items.set(product.id, new CartItem(product, quantity));
            return quantity;
        }
    }
    get totalPrice() {
        return [...this._items.values()].reduce((acc, curr) => acc + curr.totalPrice, 0);
    }
    get itemCount() {
        return [...this._items.values()].reduce((acc, curr) => acc + curr.quantity, 0);
    }
}
