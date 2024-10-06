import { jwtDecode } from "jwt-decode"

export const validateToken = (token) => {
    const now = Math.round(new Date().getTime() / 1000);
    const decoded = jwtDecode(token);
    const isValid = decoded && now < decoded.exp;
    return isValid;
}
