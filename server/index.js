require("dotenv").config();

const fs = require("fs");
const https = require("https");
const cors = require("cors");
//const session = require("express-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT;

const Router = require("./router");

sequelize.sync({ force: false }).then(() => console.log("DB연결 성공"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(cookieParser());
app.use("/", Router);

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const key = fs.readFileSync(__dirname + "/key.pem", "utf-8");
  const cert = fs.readFileSync(__dirname + "/cert.pem", "utf-8");
  const credentials = { key, cert };

  https
    .createServer(credentials, app)
    .listen(PORT, () => console.log(`서버 구동(https): PORT번호: ${PORT}`));
} else
  app.listen(PORT, () => console.log(`서버 구동(http): PORT번호: ${PORT}`));
