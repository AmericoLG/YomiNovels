# YomiNovels

Sistema de lectura de novelas web con gestión de usuarios, biblioteca personal, valoraciones y comentarios.

## 🏗️ Arquitectura

- **Frontend**: React 19 + Vite + TailwindCSS + TipTap (editor de texto enriquecido)
- **Backend**: Node.js + Express + PostgreSQL
- **Despliegue**: Docker Compose

## 📋 Características

- Gestión de usuarios (admin y lectores)
- Catálogo de novelas con categorías
- Sistema de volúmenes y capítulos
- Editor de contenido con TipTap
- Biblioteca personal del usuario
- Historial de lectura
- Sistema de valoraciones y reseñas
- Comentarios por capítulo
- Contador de vistas

## 🚀 Instalación con Docker

### Requisitos previos
- Docker
- Docker Compose

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/AmericoLG/YomiNovels.git
cd YomiNovels
```

2. Iniciar los servicios:
```bash
docker-compose up --build
```

3. Acceder a la aplicación:
- Frontend: http://localhost:5175
- Backend API: http://localhost:3001
- PostgreSQL: localhost:5434

## 📁 Estructura del proyecto

```
Yomi/
│
├── backend/                              # Servidor API Node.js + Express
│   ├── node_modules/                     # Paquetes y dependencias del backend
│   ├── uploads/                          # Almacenamiento local de portadas e ilustraciones
│   └── src/                              # Código fuente del backend
│       ├── config/                       # Conexiones a BD (PostgreSQL) y variables de entorno
│       ├── controllers/                  # Lógica de negocio (consultas SQL y respuestas HTTP)
│       ├── middlewares/                  # Protecciones (JWT, roles admin/lector, Multer)
│       ├── routes/                       # Endpoints públicos y privados (/api/auth, /api/novelas)
│       └── utils/                        # Funciones auxiliares reutilizables (slugify, formateadores)
│
└── frontend/                             # Aplicación web React + Vite + Tailwind
    ├── node_modules/                     # Paquetes y dependencias del frontend
    ├── public/                           # Recursos estáticos globales (favicons, imágenes públicas)
    └── src/                              # Código fuente del frontend
        ├── assets/                       # Estilos CSS globales, fuentes e imágenes internas
        ├── components/                   # Componentes de interfaz reutilizables
        │   ├── common/                   # UI general (Navbar, Footer, Modales, Tarjetas)
        │   ├── reader/                   # Interfaz de lectura (Controles de fuente, Comentarios)
        │   └── editor/                   # Editor TipTap para redacción e inserción de imágenes
        ├── context/                      # Estados globales (Autenticación JWT y sesión)
        ├── pages/                        # Vistas de la aplicación (Home, Login, Detalle de novela)
        │   └── admin/                    # Vistas del panel de administración (Dashboard, Crear novela)
        └── services/                     # Clientes HTTP (Instancia de Axios y peticiones a la API)
```

## 🗄️ Base de Datos

El esquema incluye 10 tablas:
- `usuarios` - Usuarios del sistema
- `categorias` - Categorías y géneros
- `novelas` - Catálogo de novelas
- `novela_categorias` - Relación muchos a muchos
- `volumenes` - Volúmenes de novelas
- `capitulos` - Capítulos con contenido HTML
- `biblioteca_usuario` - Biblioteca personal
- `historial_lectura` - Progreso de lectura
- `valoraciones` - Puntuaciones y reseñas
- `comentarios` - Comentarios por capítulo

## 🔧 Variables de Entorno

Backend (`.env`):
```env
PORT=3001
DB_HOST=postgres
DB_PORT=5432
DB_NAME=yomi
DB_USER=yomi_user
DB_PASSWORD=yomi_password
```

## 🛠️ Comandos útiles

### Iniciar servicios
```bash
docker-compose up --build
```

### Detener servicios
```bash
docker-compose down
```

### Ver logs
```bash
docker-compose logs -f
```

### Reiniciar servicios
```bash
docker-compose restart
```

## 📝 API Endpoints

- `GET /` - Mensaje de bienvenida
- `GET /health` - Health check del servidor y base de datos

## 👥 Roles de Usuario

- **admin**: Gestión completa del sistema
- **lector**: Lectura de novelas, biblioteca personal, valoraciones

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👤 Autor

AmericoLG
