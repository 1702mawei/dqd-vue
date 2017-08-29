const carts = require("./carts.js");
const ShangCheng = require("./ShangCheng.js");
const ShiJiaQiu = require("./ShiJiaQiu.js");
module.exports=function(){
	return {
		"ShiJiaQiu":ShiJiaQiu,
		"ShangCheng":ShangCheng,
		"carts":carts
	}
}