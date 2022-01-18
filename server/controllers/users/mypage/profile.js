require("dotenv").config();

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { user } = require("../../../models");

module.exports = async (req, res, next) => {
  const { userid } = req.params;

  const s3 = new aws.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: "ap-northeast-2",
  });

  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "cafeemage",
      key(req, file, cd) {
        cd(null, `profile/${Date.now()}_${file.originalname}`);
      },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
  }).single("file");

  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }
    //req.file.location === 업데이트된 이미지 주소

    const userInfo = await user.findOne({
      where: { id: userid },
    });

    await user.update(
      {
        profile_img: req.file.location,
      },
      {
        where: { id: userInfo.id },
      }
    );

    const result = await user.findOne({
      where: { id: userid },
    });

    return res.status(201).send({ data: result });
  });
};
