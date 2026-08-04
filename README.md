<p align="center">
  <img src="../portada.png" alt="MyLibrary Banner" width="100%">
</p>

<h1 align="center">📚 MyLibrary</h1>

<p align="center">
  Una aplicación web desarrollada con React para organizar, administrar y leer tu biblioteca personal de libros digitales.
</p>

---

## 🚀 Demo Netlify

🌐 **Sitio Web:** https://registrolibros.netlify.app/home

---

# 📖 Descripción

**MyLibrary** es una aplicación web que permite administrar una biblioteca personal de forma sencilla e intuitiva.

El usuario puede registrar sus libros favoritos, subir la portada y el archivo PDF, clasificarlos por categorías, calificarlos mediante estrellas, marcarlos como favoritos y leerlos directamente desde la aplicación.

Toda la información se almacena localmente utilizando **LocalStorage**, por lo que no es necesario contar con una base de datos para utilizar la aplicación.

---

# ✨ Características

- 📚 Registrar nuevos libros.
- 🖼️ Subir portada personalizada.
- 📄 Subir archivos PDF.
- 📖 Leer el libro directamente desde la aplicación.
- ⭐ Calificar libros de 1 a 5 estrellas.
- 🔍 Buscar libros por título.
- 🗂️ Filtrar libros por categoría.
- 📅 Filtrar libros por fecha de agregado.
- 📌 Filtrar por estado de lectura.
- 🏆 Mostrar el libro mejor calificado.
- 🕒 Mostrar los últimos libros agregados.
- 💾 Persistencia mediante LocalStorage.
- 📱 Diseño responsive.

---

# 🛠️ Tecnologías utilizadas

- React 19
- Vite
- React Router
- Context API
- useReducer
- useContext
- useState
- useEffect
- Hooks personalizados
- Tailwind CSS
- React Icons
- FileReader API
- LocalStorage

---

# 📂 Estructura del proyecto

```
src
│
├── assets
├── components
├── context
├── hooks
├── pages
├── reducers
├── router
├── data
└── styles
```

---

# 🚀 Instalación

Clonar el repositorio

```bash
git clone https://github.com/NAbelPareja/Registro-de-Libros.git
```

Entrar al proyecto

```bash
cd Registro-de-Libros
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

# 💡 Funcionalidades

## 📚 Gestión de libros

Permite registrar:

- Título
- Autor
- Categoría
- Estado
- Calificación
- Descripción
- Fecha de publicación
- Fecha de agregado
- Portada
- Archivo PDF

---


## 🔍 Búsqueda y filtros

La aplicación permite encontrar libros mediante:

- Título
- Categoría
- Estado
- Fecha de agregado

---

## ⭐ Sistema de calificación

Cada libro puede recibir una calificación entre **1 y 5 estrellas**, permitiendo destacar automáticamente los libros mejor valorados.

---

## 📄 Lector PDF

Los archivos PDF cargados pueden abrirse directamente desde la aplicación en una nueva pestaña del navegador para facilitar la lectura.

---

# 📱 Responsive Design

La aplicación fue diseñada siguiendo un enfoque **Mobile First**, adaptándose a diferentes tamaños de pantalla.

- 📱 Smartphones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Monitores de escritorio

---

# 📚 Lo que aprendí

Durante el desarrollo de este proyecto reforcé conocimientos sobre:

- Componentización en React.
- Context API.
- useReducer.
- Hooks personalizados.
- Persistencia con LocalStorage.
- Manejo de archivos mediante FileReader.
- Renderizado condicional.
- React Router.
- Tailwind CSS.
- Diseño Responsive.
- Organización de proyectos React.

---

# 🚧 Próximas mejoras

- 🔐 Inicio de sesión.
- ☁️ Sincronización con base de datos.
- 📚 Integración con Google Books API.
- ☁️ Carga de archivos desde Google Drive y Dropbox.
- 🌙 Modo oscuro.
- 📈 Estadísticas de lectura.
- 🎯 Metas de lectura.
- 📖 Historial de libros leídos.
- 🔍 Recomendaciones de libros.

---


# 👨‍💻 Autor

**Abel Pareja Ramos**

Ingeniero de Sistemas

🇵🇪 Ayacucho - Perú

GitHub:
https://github.com/NAbelPareja

LinkedIn:
https://www.linkedin.com/in/abelpareja/