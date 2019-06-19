const sendOrder = (token, arrayDetail) => (
  // console.log(token, arrayDetail),
  fetch('http://192.168.64.2/MyShop/api/cart.php',
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({token,arrayDetail})
  })
    .then(res => {
      // console.log(res);
      return res.text();
    })
);

module.exports = sendOrder;
