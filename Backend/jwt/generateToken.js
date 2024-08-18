import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {          // sign is a function of jwt
    expiresIn: "5d",                                                   // it is the expiry date means in after how many days token will expire the data that saved in the site 
  });
  res.cookie("jwt", token, {
    httpOnly: true, //xss     it help us to safe from xss attack
    secure: true,                         // for securing the website 
    sameSite: "strict", //csrf    // it help us from csrf attack
  });
};

export default createTokenAndSaveCookie;






// $ openssl rand -base64 32         <- This command is used for creating a random token key . (run this command on bash terminal) than store that random token with the name of jwt in .env file