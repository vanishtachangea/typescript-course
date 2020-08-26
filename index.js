"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var coin_1 = require("./logic/coin");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
var coins = coin_1["default"](500);
console.log("inside get all");
console.log("add" + coins);
