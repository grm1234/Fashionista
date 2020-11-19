
const Customers = require('../model/customer.model.js');


exports.findAll = (req, res) => {
    Customers.find()
        .then(customers => {
            res.json(customers);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findById = (req, res) => {
    Customers.findById(req.params.id, (err, customers) => {
        if (err) throw err;
        res.json(customers);
    })
};

exports.addCustomer = (req, res) => {
    Customers.create(req.body, (err, data) => {
        if (err) { throw err; }
        res.json(data);
    })
};

exports.removeById = (req, res) => {
    Customers.findByIdAndRemove(req.params.id, (err, products) => {
        if (err) throw err;
        res.send(products);
    })
}

exports.updateById = (req, res) => {
    Customers.findByIdAndUpdate(req.params.id, req.body, (err, products) => {
        if (err) throw err;
        res.send(products);
    })
}
/*const Customer = require('../model/customer.model')
const env = require('../DB')
const jwt = require('jsonwebtoken')

exports.register = function (req, res) {
  const { username, email, password, passwordConfirmation } = req.body
  if (!email || !password) {
    return res.status(422).json({ 'error': 'Please provide email or password' })
  }

  if (password != passwordConfirmation) {
    return res.status(422).json({ 'error': 'Password does not match' })
  }
  Customer.findOne({ email }, function (err, existingCustomer) {
    if (err) {
      return res.status(422).json({ 'error': 'Oops! Something went Wrong' })
    }
    if (existingCustomer) {
      return res.status(422).json({ 'error': 'Customer already exists' })
    }
    else {
      const cust = new Customer({
        username, email, password
      })

      cust.save(function (err) {
        if (err) {
          return res.status(422).json({
            'error': 'Oops! Something went wrong'
          })
        }
        return res.status(200).json({ 'registered': true })
      })
    }
  })
 }
exports.login = function (req, res) { 
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).json({ 'error': 'Please provide email or password' })
  }
  Customer.findOne({ email }, function (err, user) {
    if (err) {
      return res.status(422).json({
        'error': 'Oops! Something went wrong'
      })
    }

    if (!cust) {
      return res.status(422).json({ 'error': 'Invalid user' })
    }

    if (cust.hasSamePassword(password)) {
      json_token = jwt.sign(
        {
          custId: cust.id,
          username: cust.username
        },
        env.secret,
        { expiresIn: '1h' })

      return res.json(json_token)
    }
    else {
      return res.status(422).json({ 'error': 'Wrong email or password' })
    }
  })
}

exports.authMiddleware = function (req, res, next) {
  const json_token = req.headers.authorization
  try {
    if (json_token) {
      const cust = parseToken(json_token)
      Customer.findById(cust.custId, function (err, cust) {
        if (err) {
          return res.status(422).json({
            'error': 'Oops! Something went wrong'
          })
        }
        if (cust) {
          res.locals.cust = cust
          next()
        }
        else {
          return res.status(422).json({ 'error': 'Not authorized customer' })
        }
      })
    }
    else {
      return res.status(422).json({ 'error': 'Not authorized customer' })
    }
  } catch (err) {
    res.status(403).json({
      success: false,
      message: err
    })
  }
}

function parseToken(token) {
  return jwt.verify(token.split(' ')[1], env.secret)
}*/