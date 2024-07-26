const express = require('express');
const app = express();

const port = 7865;

app.get('/cart/:id(\\d+)', (req, res) => {
	const id = req.params.id;
	res.send(`Payment methods for cart ${req.params.id}`);
})

app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
})

app.listen(port, () => {
	console.log('API available on localhost port 7865');
})

module.exports = app;
