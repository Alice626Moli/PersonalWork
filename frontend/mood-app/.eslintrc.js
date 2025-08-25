module.exports = {
  env:{
    browser:true,
    es2021:true,
    node:true,
    jest:true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules:{
    "no-unused-vars":"error",//声明了变量但未使用
    "no-undef":"error",//使用未声明的变量
    "eqeqeq":"error",//强制使用全等===
    "no-console":"warn",
    "max-len":["warn",{"code":80}],
    "semi":["error","always"],
    "react/react-in-jsx-scope":"off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}