import Constant from "../components/DatabaseConfig";

const API_link = "http://" + Constant.SERVER_IP + "/MyShop/api/check_login.php";

const checkLogin = (token) => (
  fetch(API_link,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ token })
    })
  .then(res => res.json())
);

module.exports = checkLogin;