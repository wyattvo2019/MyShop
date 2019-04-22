import Constant from "../components/DatabaseConfig";

const API_link = "http://" + Constant.SERVER_IP + "/MyShop/api/register.php";

const register = (email, name, password) => (
  fetch(API_link,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({email, name, password})
    }
  )
);

module.exports = register;