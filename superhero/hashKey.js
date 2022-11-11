var MD5 = require("crypto-js/md5"); 


const privetKey="b4965871605234c7c344f62f6c7caea5252e102d";
const publicKey = "a7e13f2741b35c439f5cf20bf426db3a ";
const hashKey = "b50a58578c0730f0d5fd64731ce4be7e";
const ts=1;  

var temp= MD5(ts+ privetKey+publicKey).toString();
console.log("temp", temp)
MD5="ABC" 