const applicationConf = require('../config/application');
const stripe = require('stripe')(applicationConf._STRIPE_SECRET_KEY);

stripe.customers.create({
    email: 'foo-customer@example.com'
  }).then(function(customer){
    return stripe.customers.createSource(customer.id, {
      source: 'tok_visa'
    });
  }).then(function(source) {
    return stripe.charges.create({
      amount: 1600,
      currency: 'usd',
      customer: source.customer
    });
  }).then(function(charge) {
    console.log("New Charge Object Created : " + JSON.stringify(charge, undefined, 2));
  }).catch(function(err) {
    console.log("Some Error Occured : " + JSON.stringify(err, undefined, 2));
  });