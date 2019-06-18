import saveToken from './saveToken';
import getToken from './getToken';

const getNewToken = (token) => (
    fetch('http://192.168.64.2/MyShop/api/refresh_token.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token })
        })
        .then(res => res.text())
);

const refreshToken = async() => {
    try {
        const token =await getToken();
        if (token === "" || token === 'TOKEN_KHONG_HOP_LE') console.log("TOKEN_KHONG_HOP_LE");
        const newToken = await getNewToken(token);
        await saveToken(newToken);
        
    }
    catch (e) {
        console.log(e);
    }
};

export default refreshToken;
