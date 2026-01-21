# 🚀 Gestor de Tareas FullStack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.12+-blue?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

Un sistema **Full Stack** robusto para la gestión de tareas. Combina la potencia de una API REST en **Django** con la velocidad e interactividad de **React + Vite** en el frontend. Diseñado para ser escalable, rápido y fácil de mantener.

## 🚀 Características Principales

### 🔙 Backend (Django REST Framework)
* **API RESTful:** Endpoints estructurados para operaciones CRUD completas.
* **Django ORM:** Gestión eficiente de la base de datos (SQLite por defecto).
* **CORS Configurado:** Comunicación segura y permitida entre el servidor API (8000) y el cliente (5173).
* **Serializers:** Transformación automática de modelos de Python a JSON.

### 🎨 Frontend (React + Vite)
* **React Hooks:** Uso moderno de `useState` y `useEffect` para gestión de estado.
* **Conexión Axios:** Consumo de datos asíncrono desde la API de Django.
* **Interfaz Dinámica:** Renderizado de listas y formularios en tiempo real sin recargas.
* **Estilos CSS:** Diseño oscuro (Dark Mode), responsivo y minimalista.

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto completo en tu entorno local.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/SAMUELMARTINEZ8/gestor-tareas-fullstack.git
    cd gestor-tareas-fullstack
    ```

2.  **Configurar Entorno Virtual:**
    ```bash
    python -m venv venv
    # En Windows:
    .\venv\Scripts\activate
    # En Mac/Linux:
    source venv/bin/activate
    ```

3.  **Instalar Dependencias del Backend:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Preparar Base de Datos:**
    ```bash
    python manage.py migrate
    ```

5.  **Ejecutar Servidor Backend:**
    ```bash
    python manage.py runserver
    ```
    *El servidor correrá en `http://127.0.0.1:8000/`*

6.  **Ejecutar Frontend (React):**
    * Abre una **nueva terminal** dentro de la carpeta del proyecto:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    *La aplicación web correrá en `http://localhost:5173/`*

## 📂 Estructura del Proyecto

Este repositorio está organizado en dos partes principales (Backend y Frontend):

* **`backend/`** 🐍
    * Contiene la configuración principal de Django (`settings.py`, `urls.py`).
    * Es el "cerebro" que conecta todo.
* **`tasks/`** 📋
    * Es la aplicación de Django donde definimos el modelo de datos (Base de Datos) y la API.
    * Aquí vive la lógica para crear, leer y borrar tareas.
* **`frontend/`** ⚛️
    * Contiene todo el código de **React + Vite**.
    * `src/App.jsx`: El componente principal donde vive la interfaz visual.
* **`manage.py`** ⚙️
    * El script maestro de Django para ejecutar el servidor y migraciones.
* **`requirements.txt`** 📦
    * Lista de todas las librerías de Python necesarias para que el proyecto funcione.
---
*Desarrollado por Samuel Martinez* 🐵 