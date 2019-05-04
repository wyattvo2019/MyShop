import Constant from "../components/DatabaseConfig";
import saveToken from "./saveToken";

const API_link = "http://" + Constant.SERVER_IP + "/MyShop/api/refresh_token.php";


const refreshToken = (token) => {
  fetch(API_link,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
      body: JSON.stringify({ token })
    })
    .then(res => res.text())
    .then(tokenToSave => saveToken(tokenToSave));
};

export default refreshToken;