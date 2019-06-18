const getOrderHistory = (token) => (
  fetch('http://192.168.64.2/MyShop/api/order_history.php',
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({ token })
  })
    .then(res => {return  res.json() })
);
module.exports = getOrderHistory;
