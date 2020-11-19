module.exports = function (app) {

    var customers = require('../controllers/customers.controller.js')

    app.get('/api/customers', customers.findAll);

    app.get('/api/customers/:id', customers.findById);

    //app.post('/api/companies', companies.addCompany);

    //app.put('/api/companies/:id', companies.updateById);

    app.delete('/api/customers/:id', customers.removeById);

}