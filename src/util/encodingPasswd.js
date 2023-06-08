import * as CryptoJS from 'crypto-js';

export const encodingPassword = (password) => {
    const pw = CryptoJS.SHA512(password).toString();
    return pw;
};