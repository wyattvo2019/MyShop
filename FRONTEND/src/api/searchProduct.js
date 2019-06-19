
const searchProduct = (key) => (
  fetch('http://192.168.64.2/MyShop/api/search.php?key='+key,
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      }
  })
  .then(res => {return  res.json() })
);
module.exports = searchProduct;
