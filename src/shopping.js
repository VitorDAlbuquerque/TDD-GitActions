class Shopping {

    constructor() {
        this.itens = [];
    }

    addItem(item) {
        this.itens.push(item);
    }

    calcTotal() {
        return this.itens.reduce((sum, item) => sum + item.price, 0);
    }

    removeItem(name) {
        const index = this.itens.findIndex(item => item.name === name);
        if (index !== -1) {
            this.itens.splice(index, 1);
        }
    }

    listItens() {
        return this.itens;
    }

    clearCart() {
        this.itens = [];
    }

    updateQuantity(name, quantity) {
        const item = this.itens.find(item => item.name === name);
        if (item) {
            item.quantity = quantity;
        }
    }
}

module.exports = Shopping;
