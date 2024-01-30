/* eslint-disable @typescript-eslint/no-explicit-any */
import jwtDecode from 'jwt-decode';

const isValidToken = (accessToken: any) => {
    if (!accessToken) {
        return false;
    }
    try {
        const decoded: any = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;

        return decoded.exp > currentTime;
    } catch (error) {
        return false;
    }
};

const setSession = async (accessToken: string, refreshToken?: string) => {
    if (accessToken) {
        window.localStorage.setItem('@access_token', accessToken);
        if (refreshToken) {
            window.localStorage.setItem('@refresh_token', refreshToken);
        }
    } else {
        window.localStorage.removeItem('@access_token');
        window.localStorage.removeItem('@refresh_token');
    }
};

const hasToken = () => {
    const token: any = window.localStorage.getItem('@access_token');
    if (!token) return false;
    return token;
};
const hasUserLocalStorage = () => {
    const dataUser = window.localStorage.getItem('@user');
    const userStorage = JSON.parse(dataUser);
    return userStorage;
};

const setUserStorage = (user?: any) => {
    if (user) {
        window.localStorage.setItem('@user', JSON.stringify(user));
    } else {
        window.localStorage.removeItem('@user');
    }
};

const setRolesStorage = (roles?: string[]) => {
    if (roles) {
        window.localStorage.setItem('@roles', JSON.stringify(roles));
    } else {
        window.localStorage.removeItem('@roles');
    }
};

export { isValidToken, setSession, hasToken, hasUserLocalStorage, setRolesStorage, setUserStorage };
