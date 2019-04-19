import Constant from "../components/DatabaseConfig";
var API_link = "http://" + Constant.SERVER_IP + "/MyShop/api";

const initData = () => (
  fetch(API_link)
  .then(res => res.json())
);

export default initData;