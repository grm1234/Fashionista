module.exports = function (app) {

    var customers = require('../controller/customer.controller.js')

    app.get('/shop/customers', customers.findAll);

    app.get('/shop/customers/:id', customers.findById);
    
    app.post('/api/customers', customers.addCustomer);

    //app.put('/api/products/:id', products.updateById);

    //app.delete('/api/products/:id', products.removeById);

}
/*const express = require('express')
const customer = require('../controller/customer.controller');
const router = express.Router()

const { authMiddleware } = require('../controller/customer.controller');

router.post('/register', customer.register)

router.post('/login', customer.login)

router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

module.exports = router*/