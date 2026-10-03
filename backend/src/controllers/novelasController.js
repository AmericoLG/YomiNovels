const pool = require('../config/database');

const getAllNovelas = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT n.*, 
        ARRAY_AGG(DISTINCT c.nombre) as categorias
      FROM novelas n
      LEFT JOIN novela_categorias nc ON n.id = nc.novela_id
      LEFT JOIN categorias c ON nc.categoria_id = c.id
      GROUP BY n.id
      ORDER BY n.creado_en DESC
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener novelas:', error);
    res.status(500).json({ error: 'Error al obtener novelas' });
  }
};

const getNovelaById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`
      SELECT n.*, 
        ARRAY_AGG(DISTINCT c.nombre) as categorias
      FROM novelas n
      LEFT JOIN novela_categorias nc ON n.id = nc.novela_id
      LEFT JOIN categorias c ON nc.categoria_id = c.id
      WHERE n.id = $1
      GROUP BY n.id
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Novela no encontrada' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener novela:', error);
    res.status(500).json({ error: 'Error al obtener novela' });
  }
};

const createNovela = async (req, res) => {
  try {
    const { titulo, sinopsis, autor, tipo, estado, portada_url, categorias } = req.body;

    if (!titulo || !autor) {
      return res.status(400).json({ error: 'Título y autor son requeridos' });
    }

    // Generar slug desde el título
    const slug = titulo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const result = await pool.query(
      'INSERT INTO novelas (titulo, slug, sinopsis, autor, tipo, estado, portada_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [titulo, slug, sinopsis, autor, tipo || 'Web Novel', estado || 'En emisión', portada_url]
    );

    const novela = result.rows[0];

    // Si hay categorías, agregarlas
    if (categorias && categorias.length > 0) {
      for (const categoriaId of categorias) {
        await pool.query(
          'INSERT INTO novela_categorias (novela_id, categoria_id) VALUES ($1, $2)',
          [novela.id, categoriaId]
        );
      }
    }

    res.status(201).json(novela);
  } catch (error) {
    console.error('Error al crear novela:', error);
    res.status(500).json({ error: 'Error al crear novela' });
  }
};

const updateNovela = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, sinopsis, autor, tipo, estado, portada_url } = req.body;

    const result = await pool.query(
      'UPDATE novelas SET titulo = COALESCE($1, titulo), sinopsis = COALESCE($2, sinopsis), autor = COALESCE($3, autor), tipo = COALESCE($4, tipo), estado = COALESCE($5, estado), portada_url = COALESCE($6, portada_url), actualizado_en = CURRENT_TIMESTAMP WHERE id = $7 RETURNING *',
      [titulo, sinopsis, autor, tipo, estado, portada_url, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Novela no encontrada' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al actualizar novela:', error);
    res.status(500).json({ error: 'Error al actualizar novela' });
  }
};

const deleteNovela = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM novelas WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Novela no encontrada' });
    }

    res.json({ message: 'Novela eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar novela:', error);
    res.status(500).json({ error: 'Error al eliminar novela' });
  }
};

const uploadPortada = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }

    // Generar URL de la imagen
    const novelaNombre = req.body.nombre || 'temp';
    const novelaSlug = novelaNombre.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const portadaUrl = `/uploads/images/novels/${novelaSlug}/portadas/${req.file.filename}`;

    res.json({
      message: 'Portada subida exitosamente',
      portada_url: portadaUrl,
      filename: req.file.filename
    });
  } catch (error) {
    console.error('Error al subir portada:', error);
    res.status(500).json({ error: 'Error al subir portada' });
  }
};

module.exports = {
  getAllNovelas,
  getNovelaById,
  createNovela,
  updateNovela,
  deleteNovela,
  uploadPortada,
};
