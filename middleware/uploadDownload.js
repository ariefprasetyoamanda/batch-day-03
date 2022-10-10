import multer from "multer";

//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + '-' + Date.now() +'.'+ext)
  },
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "application/pdf") {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error("Only .png, .jpg, .jpeg and .pdf format allowed"))
    }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,  
  limits: { fileSize: 1 * 1024 * 1024 }
}).fields([{name : 'file'},{name : 'foto'}])

export default {
    upload
}