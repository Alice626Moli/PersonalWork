




























export const generatePassword = ({length, useUppercase, useLowercase, useNumbers, useSymbols})=>{


const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*()_+';

let chars ='';

if(useUppercase) chars += upper;
if(useLowercase) chars += lower;
if(useNumbers) chars += numbers;
if(useSymbols) chars += symbols;

// 根据用户选择，把不同类型的字符拼接到 chars 中，形成候选字符集


if(chars.length === 0) return '';

let password = '';
for (let i =0; i<length; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length));

}

return password

}




