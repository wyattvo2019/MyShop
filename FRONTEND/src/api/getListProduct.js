

const getListProduct = (idType, page) => (
  fetch('http://192.168.64.2/MyShop/api/product_by_type.php?id_type='+idType+'&page='+page,
  {   
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      }
  })
  .then(res => {return  res.json() })
);
module.exports = getListProduct;