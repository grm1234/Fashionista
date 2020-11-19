
module.exports = function (app) {

    var products = require('../controller/product.controller.js')

    app.get('/shop/products', products.findAll);

    app.get('/shop/products/:id', products.findById);
    
    app.get('/shop/productsT/:type',products.findByType)
    //app.post('/api/products', products.addProduct);

    //app.put('/api/products/:id', products.updateById);

    //app.delete('/api/products/:id', products.removeById);

}