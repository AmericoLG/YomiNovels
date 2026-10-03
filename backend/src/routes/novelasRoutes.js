const express = require('express');
const router = express.Router();
const { getAllNovelas, getNovelaById, createNovela, updateNovela, deleteNovela, uploadPortada } = require('../controllers/novelasController');
const { authMiddleware, editorMiddleware, adminMiddleware } = require('../middlewares/auth');
const upload = require('../config/multer');

// Rutas públicas
router.get('/', getAllNovelas);
router.get('/:id', getNovelaById);

// Rutas protegidas (requieren ser editor o admin)
router.post('/', authMiddleware, editorMiddleware, createNovela);
router.put('/:id', authMiddleware, editorMiddleware, updateNovela);
router.delete('/:id', authMiddleware, adminMiddleware, deleteNovela);

// Ruta para subir portada
router.post('/upload-portada', authMiddleware, editorMiddleware, upload.single('portada'), uploadPortada);

module.exports = router;
