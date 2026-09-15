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
- Frontend: http://localhost:81
- Backend API: http://localhost:3001
- PostgreSQL: localhost:5434

## 📁 Estructura del proyecto

```
YomiNovels/
├── backend/
│   ├── index.js           # Servidor Express
│   ├── database.sql       # Esquema de base de datos
│   ├── Dockerfile         # Configuración Docker backend
│   ├── package.json       # Dependencias backend
│   └── uploads/           # Archivos subidos
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Componente principal
│   │   └── main.jsx       # Punto de entrada
│   ├── Dockerfile         # Configuración Docker frontend
│   ├── nginx.conf         # Configuración Nginx
│   └── package.json       # Dependencias frontend
└── docker-compose.yml     # Orquestación de servicios
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
