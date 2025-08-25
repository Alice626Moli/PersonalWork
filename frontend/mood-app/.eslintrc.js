module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
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

  rules: {
    "no-unused-vars": "error",//检测声明变量而未使用
    "no-undef": "error", //使用未声明变量
    "eqeqeq": "error",//强制使用全等===
    "no-console": "warn",//内部写console会有警告但是不报错
    "max-len": ["warn", { "code": 80 }],  //当行数超过80字符，报warning
    "semi": ["error", "always"],  //
    "react/react-in-jsx-scope": "off",


  },

  settings: {
    react: {
      version: "detect",
    },
  },



}
