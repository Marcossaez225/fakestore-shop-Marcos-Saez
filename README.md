🛒 FakeStore Shop – Proyecto de Práctica

Aplicación web desarrollada con React + Vite que consume la FakeStore API para simular una tienda virtual.
Permite explorar categorías, visualizar productos, ver detalles y simular compras mediante un carrito persistente.

📌 Descripción del Proyecto

Este proyecto tiene como objetivo practicar el consumo de APIs REST, el manejo de estado en React y la construcción de una interfaz moderna y responsive.

La aplicación permite:

Listar categorías de productos

Visualizar productos por categoría

Ver el detalle de un producto

Simular la compra agregando productos a un carrito

Visualizar y gestionar el carrito de compras

🚀 Tecnologías Utilizadas

React

Vite

JavaScript (ES6+)

React Router DOM

CSS

FakeStore API

localStorage

🌐 API Utilizada

FakeStore API
🔗 https://fakestoreapi.com

Endpoints principales:

/products/categories

/products/category/:category

/products/:id

✨ Funcionalidades
✅ Listado de Categorías

Obtiene dinámicamente las categorías desde la API

Cada categoría es clickeable

✅ Productos por Categoría

Muestra productos con:

Imagen

Nombre

Precio

✅ Detalle del Producto

Información completa del producto

Botón para agregar al carrito

✅ Carrito de Compras

Agregar productos

Eliminar productos

Cálculo automático del total

Persistencia con localStorage

✅ Mejoras de Interfaz

Contador de productos en el navbar

Mensaje visual al agregar productos

Modo Dark / Light persistente

Diseño responsive

🧭 Navegación
Ruta	Descripción
/	Listado de categorías
/category/:name	Productos por categoría
/product/:id	Detalle del producto
/cart	Carrito de compras
🧱 Estructura del Proyecto
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── ProductCard.jsx
 │    ├── Toast.jsx
 │    └── ThemeToggle.jsx
 │
 ├── context/
 │    └── CartContext.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Category.jsx
 │    ├── Detail.jsx
 │    └── CartPage.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css

▶️ Instalación y Ejecución
Requisitos

Node.js 20.19+ o 22+

npm

Pasos
# Clonar el repositorio
git clone https://github.com/USUARIO/fakestore-shop.git

# Entrar al proyecto
cd fakestore-shop

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev


La aplicación estará disponible en:

http://localhost:5173


📚 Objetivos Académicos Cumplidos

Consumo de una API REST

Manejo de estado global con Context API

Navegación con React Router

Persistencia de datos en localStorage

Componentización

Interfaz moderna y responsive

👤 Autor

Marcos Saez
Proyecto realizado como práctica académica.

📄 Licencia

Este proyecto es de uso educativo.