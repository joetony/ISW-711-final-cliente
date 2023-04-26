import jwt_decode from "jwt-decode";


export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }

    return false;
}

export const isAdmin = () => {
 
    const token = localStorage.getItem('token');
    const user = jwt_decode(token);
    return user.role.name === 'admin';
}

export const decodeToken = () => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
}