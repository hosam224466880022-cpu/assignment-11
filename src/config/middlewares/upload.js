import multer from "multer";

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {

    const uniqueName = Date.now() + "-" + file.originalname;

    cb(null, uniqueName);

  }

});

const fileFilter = (req, file, cb) => {

  const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];

  if (allowedTypes.includes(file.mimetype)) {

    cb(null, true);

  } else {

    cb(new Error("Only images allowed"), false);

  }

};

export const upload = multer({

  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }

});