const db = require('./db/index.js')

const addOrder = (req, res) => {
    const query = 'INSERT INTO orders (firstname, lastname, email, password, address1, address2, city, state, zip, phone, cardnum, expire, cvv, billzip) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
    const order = req.body;
    const params = [order.firstName,order.lastName,order.email,order.password,order.address1,order.address2,order.city, order.state,order.zip,order.phone,order.cardnum,order.expire,order.cvv,order.billZip];
    console.log('this is the order', req.body);
    console.log('this is the params', params)
    db.query(query, params, (err, results) => {
        if(err) {
            res.status(501).send(err);
        } else {
            res.status(201).send();
        }
    })
}

module.exports = {
    addOrder,
};