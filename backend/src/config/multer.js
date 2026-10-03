const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Asegurar que las carpetas existan
const uploadsDir = path.join(__dirname, '../../uploads');
const imagesDir = path.join(uploadsDir, 'images');
const novelsDir = path.join(imagesDir, 'novels');

if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(novelsDir)) fs.mkdirSync(novelsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const novelaNombre = req.body.nombre || 'temp';
    const novelaSlug = novelaNombre.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const portadasDir = path.join(novelsDir, novelaSlug, 'portadas');
    
    if (!fs.existsSync(portadasDir)) {
      fs.mkdirSync(portadasDir, { recursive: true });
    }
    
    cb(null, portadasDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'portada-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Solo se permiten imágenes (jpeg, jpg, png, webp)'));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: fileFilter
});

module.exports = upload;
