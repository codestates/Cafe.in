require("dotenv").config();

const fs = require("fs");
const https = require("https");
const cors = require("cors");
//const session = require("express-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize, post } = require("./models");
const yeoksam = require("./cafeJsonData/yeoksam.json");
const daechi = require("./cafeJsonData/daechi.json");
const geapho = require("./cafeJsonData/geapho.json");
const gentelman = require("./cafeJsonData/gentelman.json");
const dummydata = require("./cafeJsonData/dummydata.json");

const app = express();
const PORT = process.env.PORT || 8080;

const Router = require("./router");

// sequelize
//   .query("SET FOREIGN_KEY_CHECKS = 0")
//   .then(() => sequelize.sync({ force: true }))
//   .then(() => sequelize.query("SET FOREIGN_KEY_CHECKS = 1"))
//   .then(() => console.log("DB연결 성공"));

sequelize.sync({ force: false }).then(() => console.log("DB연결 성공"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(cookieParser());
app.use("/", Router);

// const dummyImages = [...dummydata.results];
// const data = [
//   ...yeoksam.documents,
//   ...daechi.documents,
//   ...gentelman.documents,
//   ...geapho.documents,
// ];
// const result = data.map((fill) => {
//   return {
//     title: fill.place_name,
//     tel: fill.phone,
//     adress: fill.address_name,
//     location: fill.address_name.split(" ")[2],
//     lat: fill.y,
//     long: fill.x,
//   };
// });
// const putIn = result.map(async (fill) => {
//   await post.create({
//     large_img: dummyImages[Math.floor(Math.random() * 24)].urls.full,
//     small_img: dummyImages[Math.floor(Math.random() * 24)].urls.small,
//     tel: fill.tel,
//     adress: fill.adress,
//     distance: null,
//     title: fill.title,
//     location: fill.location,
//     lat: fill.lat,
//     long: fill.long,
//   });
// });

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const key = fs.readFileSync(__dirname + "/key.pem", "utf-8");
  const cert = fs.readFileSync(__dirname + "/cert.pem", "utf-8");
  const credentials = { key, cert };

  https
    .createServer(credentials, app)
    .listen(PORT, () => console.log(`서버 구동(https): PORT번호: ${PORT}`));
} else
  app.listen(PORT, () => console.log(`서버 구동(http): PORT번호: ${PORT}`));
