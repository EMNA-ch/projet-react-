const cloudinary = require("cloudinary");
const config = require("config");

//Config Cloudinary
cloudinary.config({
  cloud_name: config.get("cloudinary_cloud_name"),
  api_key: config.get("cloudinary_api_key"),
  api_secret: config.get("cloudinary_api_secret"),
});
//Config Cloudinary

exports.uploadImage = async (req, res) => {
  try {
    let result = await cloudinary.uploader.upload(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    });
    res.status(200).json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeImage = async (req, res) => {
  try {
    let image_id = req.body.public_id;
    const result = await cloudinary.uploader.destroy(image_id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
  // let image_id = req.body.public_id;
  // cloudinary.uploader
  //   .destroy(image_id)
  //   .then((res) => {
  //   })
  //   .catch((err) => {
  //     if (error) {
  //       return res.status(500).json({ error: error.message });
  //     }
  //   });
};
