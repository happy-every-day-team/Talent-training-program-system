const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use("/public/", express.static(path.join(__dirname, "./public/")))
app.use("/node_modules/", express.static(path.join(__dirname, "./node_modules/")))

//配置body-parser 中间件（插件，专门用来解析表单post请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())






app.listen(3000, () => {
    console.log("server is running");
})