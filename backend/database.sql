-- 1. TABLA DE USUARIOS (Administradores, Editores y Lectores)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(50) DEFAULT 'lector' CHECK (rol IN ('lector', 'editor', 'admin')),
    reset_token VARCHAR(255) DEFAULT NULL,
    reset_token_expira TIMESTAMP DEFAULT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar usuario admin inicial (password: admin123)
-- NOTA: El hash es para 'admin123' con bcrypt (salt rounds: 10)
INSERT INTO usuarios (nombre, email, password_hash, rol) VALUES 
('Administrador', 'admin@yominovels.com', '$2b$10$/9oyMdEnWIRvrv4eigY4KOHHSkoQnFqqldc5riQu.uoimsNoflXQO', 'admin');

-- 2. TABLA DE CATEGORÍAS Y GÉNEROS
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT
);

-- 3. TABLA PRINCIPAL DE NOVELAS
CREATE TABLE novelas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    sinopsis TEXT,
    portada_url TEXT,
    autor VARCHAR(150),
    tipo VARCHAR(50) DEFAULT 'Web Novel',
    estado VARCHAR(50) DEFAULT 'En emisión',
    vistas BIGINT DEFAULT 0,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. TABLA INTERMEDIA NOVELAS <-> CATEGORÍAS (Muchos a Muchos)
CREATE TABLE novela_categorias (
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    categoria_id INT REFERENCES categorias(id) ON DELETE CASCADE,
    PRIMARY KEY (novela_id, categoria_id)
);

-- 5. TABLA DE VOLÚMENES
CREATE TABLE volumenes (
    id SERIAL PRIMARY KEY,
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    numero_volumen INT NOT NULL,
    titulo_volumen VARCHAR(255),
    portada_url VARCHAR(500),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(novela_id, numero_volumen)
);

-- 6. TABLA DE CAPÍTULOS (Contenido formateado con Tiptap)
CREATE TABLE capitulos (
    id SERIAL PRIMARY KEY,
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    volumen_id INT REFERENCES volumenes(id) ON DELETE SET NULL,
    numero_capitulo NUMERIC(10,2) NOT NULL, -- Permite decimales como 1.5, 10.5
    titulo_capitulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL, -- Formato HTML exportado por Tiptap
    vistas INT DEFAULT 0,
    publicado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. TABLA DE BIBLIOTECA PERSONAL (Colección del usuario)
CREATE TABLE biblioteca_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    estado VARCHAR(50) DEFAULT 'Leyendo', -- 'Leyendo', 'Planeo leer', 'Completado', 'Abandonado'
    agregado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, novela_id)
);

-- 8. TABLA DE HISTORIAL DE LECTURA (Último capítulo leído)
CREATE TABLE historial_lectura (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    ultimo_capitulo_id INT REFERENCES capitulos(id) ON DELETE SET NULL,
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, novela_id)
);

-- 9. TABLA DE VALORACIONES Y RESEÑAS
CREATE TABLE valoraciones (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    puntuacion INT CHECK (puntuacion >= 1 AND puntuacion <= 5),
    comentario TEXT,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, novela_id)
);

-- 10. TABLA DE COMENTARIOS POR CAPÍTULO
CREATE TABLE comentarios (
    id SERIAL PRIMARY KEY,
    capitulo_id INT REFERENCES capitulos(id) ON DELETE CASCADE,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    contenido TEXT NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
