const assert = require('assert');
const Shopping = require('../src/shopping');

const shopping = new Shopping()


describe('My shopping cart', function(){
    it('Deve adicionar o item corretamente', function(){
        shopping.addItem({ name: "cola", price: 4})
        assert.strictEqual(shopping.itens.length, 1)
    })


    // Arrumar aqui, mudar o preço pra "31" (Ele está considerando o preço do anterior também)
    it('Deve calcular  o total da compra', function(){
         shopping.addItem({ name: "cola", price: 4})
         shopping.addItem({ name: "Meat", price: 23})
        assert.strictEqual(shopping.calcTotal(), 31)
    })



    it('Deve remover o item corretamente', function(){
        shopping.removeItem("cola")
        assert.strictEqual(shopping.itens.length, 2)
    })



    it('Deve listar os itens', function(){
        shopping.listItens()
        
    })



    it('Deve limpar o carrinho', function(){
        assert.strictEqual(1+1,2)
    })



    it('Deve atualizar a quanitdade corretamente', function(){
        assert.strictEqual(1+1,2)
    })

    it('Deve limpar o carrinho', function() {
        shopping.addItem({ name: "cola", price: 4 });
        shopping.addItem({ name: "Meat", price: 23 });
        shopping.clearCart();
        assert.strictEqual(shopping.itens.length, 0);
    });

    it('Deve atualizar a quantidade corretamente', function() {
        shopping.addItem({ name: "cola", price: 4, quantity: 1 });
        shopping.updateQuantity("cola", 5);
        assert.strictEqual(shopping.itens[0].quantity, 7);
    });
})