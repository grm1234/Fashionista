
const Products = require('../model/product.model.js');


exports.findAll = (req, res) => {
    Products.find()
        .then(products => {
            res.json(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findById = (req, res) => {
    Products.findById(req.params.id, (err, products) => {
        if (err) throw err;
        res.json(products);
    })
};
exports.findByType = (req, res) => {
    var typeInfo = req.params.type;
    Products.find({type:typeInfo}, (err, products) => {
        if (err) throw err;
        res.json(products);
    })
};

exports.addProduct = (req, res) => {
    Products.create(req.body, (err, data) => {
        if (err) { throw err; }
        res.json(data);
    })
};

exports.removeById = (req, res) => {
    Products.findByIdAndRemove(req.params.id, (err, products) => {
        if (err) throw err;
        res.send(products);
    })
}

exports.updateById = (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, (err, products) => {
        if (err) throw err;
        res.send(products);
    })
}