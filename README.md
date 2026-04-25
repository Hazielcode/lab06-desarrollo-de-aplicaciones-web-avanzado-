# 🐾 El Rancho de Haziel - Slime Network 🐾

¡Bienvenido al **Rancho de Haziel Alfonso**! Esta es una aplicación web robusta y visualmente dinámica diseñada para gestionar publicaciones ("Aventuras") y usuarios ("Rancheros") en el mundo de *Slime Rancher*.

---

## 🚀 Características Principales

*   **🛠️ CRUD Completo:** Gestión total de publicaciones (Crear, Ver, Editar y Eliminar).
*   **👤 Registro de Rancheros:** Sistema de inscripción de usuarios con validaciones de seguridad.
*   **📸 Galería Multimedia:** Soporte para imágenes externas y GIFs en las publicaciones.
*   **🏷️ Sistema de Hashtags:** Procesamiento inteligente de etiquetas para organizar tus hallazgos.
*   **🎨 Estética Slime Rancher:** Interfaz premium con tipografía *Fredoka*, colores vibrantes y formas orgánicas redondeadas.
*   **✅ Validaciones de Esquema:** Restricciones de edad (mín. 18), longitud de contraseñas y campos obligatorios mediante Mongoose.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **Node.js** | Entorno de ejecución de JavaScript |
| **Express.js** | Framework web para rutas y middleware |
| **MongoDB** | Base de Datos NoSQL para persistencia |
| **Mongoose** | Modelado de objetos para MongoDB |
| **EJS** | Motor de plantillas para vistas dinámicas |
| **Materialize CSS** | Framework de diseño para una UI moderna |

---

## 🏗️ Arquitectura del Proyecto (Patrones de Diseño)

El proyecto utiliza una arquitectura de **N-Capas** para asegurar la escalabilidad y el orden:

1.  **Routes 🛣️**: Define los puntos de entrada (Endpoints) y métodos HTTP (GET/POST).
2.  **Controllers 🎮**: Gestiona la lógica de las peticiones y decide qué vista mostrar.
3.  **Services ⚙️**: Capa de negocio que procesa datos (como el manejo de arrays de hashtags).
4.  **Repositories 🗄️**: Capa de acceso a datos que interactúa exclusivamente con la DB.
5.  **Models 📊**: Define la estructura y validaciones de los documentos en MongoDB.

---

## 📂 Estructura de Archivos

```bash
mongo-node/
├── src/
│   ├── controllers/   # Lógica de peticiones
│   ├── db/            # Configuración de conexión a MongoDB
│   ├── models/        # Esquemas de Mongoose (User, Post)
│   ├── repositories/  # Consultas directas a la DB
│   ├── routes/        # Definición de URLs
│   ├── services/      # Lógica de procesamiento de datos
│   └── views/         # Plantillas EJS (HTML dinámico)
├── app.js             # Punto de entrada del servidor
├── .env               # Variables de entorno (Configuración)
└── package.json       # Dependencias y scripts
```

---

## ⚙️ Configuración e Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL-DEL-REPO]
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz con lo siguiente:
    ```env
    PORT=3001
    MONGO_URI=mongodb://localhost:27017/socialmedia
    ```

4.  **Iniciar el servidor:**
    ```bash
    npm run dev
    ```

---

## 🌟 Conclusiones del Proyecto

*   **Persistencia:** Se logró una integración fluida con MongoDB para el manejo de datos.
*   **Seguridad:** Se aplicaron validaciones a nivel de base de datos para garantizar la integridad de la información.
*   **Modularidad:** El código es limpio y reutilizable gracias al uso de clases y patrones de diseño.
*   **UX/UI:** Se creó una interfaz temática que mejora significativamente la experiencia del usuario final.

---
Creado con ❤️ por **Haziel Alfonso** 🐾✨
