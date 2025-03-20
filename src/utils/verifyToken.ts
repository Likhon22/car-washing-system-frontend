import { jwtDecode } from "jwt-decode";

const verifyToken = (token: string) => {
  const tokenWithoutBearer = token.replace(/^Bearer\s/, "");

  const decoded = jwtDecode(tokenWithoutBearer);
  return decoded;
};

export default verifyToken;
