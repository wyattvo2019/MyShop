import Constant from "../components/DatabaseConfig";

const API_link = "http://" + Constant.SERVER_IP + "/MyShop/api/login.php";

const signIn = (email, password) => (
  fetch(API_link,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({email, password})
    }
  )
  .then(res => res.json())
);

module.exports = signIn;