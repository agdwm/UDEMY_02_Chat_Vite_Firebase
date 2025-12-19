# 🔥 FireChat 2025

Una aplicación web moderna de Chat en tiempo real construida con **React** y **Firebase**, que permite a los usuarios comunicarse, gestionar tareas y administrar su perfil en una plataforma intuitiva y responsive.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración de Firebase](#configuración-de-firebase)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Scripts Disponibles](#scripts-disponibles)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Componentes Principales](#componentes-principales)
- [Hooks Personalizados](#hooks-personalizados)
- [Despliegue](#despliegue)
- [Solución de Problemas](#solución-de-problemas)

---

## ✨ Características

- 🔐 **Autenticación segura** con _Firebase Authentication_
- 💬 **Chat en tiempo real** con soporte para múltiples salas
- 👥 **Gestión de amigos** con búsqueda por email
- 📝 **Sistema de tareas** para organizar tu trabajo
- 👤 **Perfil de usuario** personalizable
- 🎨 **Interfaz moderna y responsive** con Tailwind CSS
- ⚡ **Validación de formularios** con _React Hook Form_ y _Zod_
- 🔔 **Notificaciones** con _Sonner_
- 📱 **Responsive** para móvil, tablet y desktop

---

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v16 o superior ([Descargar](https://nodejs.org/))
- **npm** v7 o superior (incluido con Node.js)
- Una cuenta en **Firebase** ([Crear cuenta](https://firebase.google.com/))
- Un editor de código como **VS Code** ([Descargar](https://code.visualstudio.com/))

---

## 📦 Instalación

### 1. Clonar o descargar el repositorio

```bash
# Si es desde un repositorio git
git clone <url-del-repositorio>
cd UDEMY_02_Chat_Next_Firebase

# Si descargaste el ZIP, descomprime y entra en la carpeta
cd UDEMY_02_Chat_Next_Firebase
```

### 2. Instalar las dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias listadas en `package.json`.

---

## 🔥 Configuración de Firebase

### Paso 1: Crear un proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Agregar proyecto"
3. Completa los pasos para crear tu proyecto

### Paso 2: Configurar autenticación

1. En el panel de Firebase, ve a **Autenticación > Proveedores de acceso**
2. Habilita **Email/Contraseña**
3. Habilita otros métodos si lo deseas (Google, GitHub, etc.)

### Paso 3: Configurar Firestore Database

1. Ve a **Firestore Database**
2. Haz clic en "Crear base de datos"
3. Selecciona **Modo de inicio**
4. Elige una ubicación y crea la base de datos

### Paso 4: Obtener credenciales de Firebase

1. En el proyecto de Firebase, ve a **Configuración > Configuración del proyecto**
2. En la sección "Tus apps", selecciona tu app web
3. Copia las credenciales de configuración

### Paso 5: Crear archivo `.env.local`

En la raíz del proyecto, crea un archivo llamado `.env.local` y pega lo siguiente con tus credenciales:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

> ⚠️ **Nota**: El archivo `.env.local` está ignorado en git (ver `.gitignore`). Nunca compartas tus credenciales públicamente.

---

## 🚀 Estructura del Proyecto

```
UDEMY_02_Chat_Next_Firebase/
├── src/
│   ├── assets/              # Imágenes y recursos estáticos
│   ├── components/          # Componentes reutilizables
│   │   ├── chat/           # Componentes relacionados con chat
│   │   ├── profile/        # Componentes de perfil
│   │   ├── tasks/          # Componentes de tareas
│   │   └── ui/             # Componentes UI básicos
│   ├── config/             # Configuración de Firebase
│   ├── hooks/              # Hooks personalizados
│   ├── layouts/            # Layouts de página
│   ├── lib/                # Utilidades y helpers
│   ├── pages/              # Páginas de la aplicación
│   │   ├── admin/          # Páginas autenticadas
│   │   ├── auth/           # Páginas de autenticación
│   │   └── public/         # Páginas públicas
│   ├── schemas/            # Esquemas de validación Zod
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── package.json            # Dependencias del proyecto
├── vite.config.ts          # Configuración de Vite
├── tsconfig.json           # Configuración de TypeScript
├── firebase.json           # Configuración de Firebase Hosting
└── README.md               # Este archivo
```

---

## 💻 Uso

### Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` (o la URL que muestre en la terminal).

### Crear una cuenta

1. Haz clic en "Registrarse" en la página de login
2. Ingresa un email y contraseña
3. Completa tu perfil con tu nombre

### Usar la aplicación

- **Chat**: Crea salas de chat, invita amigos por email y comunícate en tiempo real
- **Tareas**: Crea y gestiona una lista de tareas personal
- **Perfil**: Actualiza tu información de usuario
- **Dashboard**: Visualiza un resumen de tu actividad

---

## 📜 Scripts Disponibles

| Script            | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con Vite            |
| `npm run build`   | Compila el proyecto para producción                  |
| `npm run lint`    | Ejecuta ESLint para verificar la calidad del código  |
| `npm run preview` | Previsualiza la compilación de producción localmente |
| `npm run deploy`  | Compila y despliega a Firebase Hosting               |

---

## 🛠️ Tecnologías Utilizadas

### Frontend Framework

- **React 19** - Librería de UI reactiva
- **React Router 7** - Enrutamiento de aplicación

### Styling

- **Tailwind CSS 4** - Framework de CSS utilitario
- **next-themes** - Gestión de temas (claro/oscuro)
- **Radix UI** - Componentes accesibles

### Formularios y Validación

- **React Hook Form** - Gestión eficiente de formularios
- **Zod** - Validación de esquemas con TypeScript

### Backend y Base de Datos

- **Firebase** - Autenticación y base de datos en tiempo real
  - Firebase Authentication
  - Firestore Database
  - Firebase Hosting
- **ReactFire** - Bindings de React para Firebase

### Herramientas de Desarrollo

- **Vite** - Constructor web ultrarrápido
- **TypeScript** - Tipado estático para JavaScript
- **ESLint** - Linter de código
- **@vitejs/plugin-react** - Plugin de React para Vite

### Utilidades

- **Sonner** - Sistema de notificaciones elegante
- **Lucide React** - Iconos como componentes React
- **class-variance-authority** - Utilidad para variantes de clases
- **clsx** - Utilidad para nombres de clases condicionales
- **tailwind-merge** - Merge inteligente de clases Tailwind

---

## 🧩 Componentes Principales

### Chat

- **ChatMessages** - Muestra el historial de mensajes
- **ChatMessage** - Componente individual de mensaje
- **ChatFormMessage** - Formulario para escribir mensajes
- **ChatRoom** - Sala de chat principal
- **ChatListRoom** - Lista de salas de chat

### Tareas

- **TaskList** - Lista de tareas del usuario
- **TaskItem** - Elemento individual de tarea
- **TaskForm** - Formulario para crear tareas

### Perfil

- **ProfileForm** - Formulario de edición de perfil

### UI

- Componentes reutilizables: Button, Card, Input, Label, etc.
- Navbar con navegación principal
- CardFooterAuth para opciones de autenticación

---

## 🎣 Hooks Personalizados

| Hook                | Descripción                                      |
| ------------------- | ------------------------------------------------ |
| `useAuthActions`    | Gestiona autenticación (login, registro, logout) |
| `useUserActions`    | Operaciones de usuario (crear, actualizar)       |
| `useMessageActions` | Gestión de mensajes en salas                     |
| `useRoomActions`    | Operaciones con salas de chat                    |
| `useFriendInfo`     | Información y gestión de amigos                  |
| `useProfileActions` | Operaciones de perfil                            |
| `useTaskActions`    | Gestión de tareas                                |

---

## 📤 Despliegue

### Desplegar a Firebase Hosting

Primero, instala Firebase CLI:

```bash
npm install -g firebase-tools
```

Luego, inicia sesión:

```bash
firebase login
```

Finalmente, despliega el proyecto:

```bash
npm run deploy
```

O manualmente:

```bash
npm run build
firebase deploy --only hosting
```

### Desplegar a otro servicio

El proyecto está configurado con Vite, por lo que puedes desplegar la carpeta `dist/` generada después de `npm run build` en cualquier servicio de hosting (Vercel, Netlify, GitHub Pages, etc.).

---

## 🐛 Solución de Problemas

### El servidor no inicia

```bash
# Limpia node_modules e reinstala
rm -rf node_modules
npm install
npm run dev
```

### Error de credenciales de Firebase

- Verifica que tu archivo `.env.local` existe y contiene todas las variables
- Recarga el servidor con `npm run dev`
- Limpia el caché del navegador (Ctrl+Shift+Delete)

### ESLint muestra errores

```bash
npm run lint
```

Muchos errores se pueden corregir automáticamente:

```bash
npm run lint -- --fix
```

### Base de datos no se carga

- Verifica que Firestore Database está habilitada en Firebase Console
- Comprueba las reglas de seguridad en Firebase
- Abre la consola del navegador (F12) para ver mensajes de error

---

## �‍💻 Autor

Proyecto desarrollado como parte del curso Udemy de Next.js: **React JS con TypeScript y Next.js - Curso Desarrollo FullStack**

---

## 📝 Licencia

Este proyecto está disponible bajo la licencia MIT. Puedes usarlo libremente en tus proyectos.

---

## 💡 Sugerencias y Mejoras

Si tienes ideas para mejorar la aplicación, no dudes en sugerir cambios o abrir un PR.

---

## 📞 Soporte

Si encuentras problemas:

1. Revisa la [documentación de Vite](https://vite.dev/)
2. Consulta la [documentación de Firebase](https://firebase.google.com/docs)
3. Revisa la [documentación de React](https://react.dev/)
4. Abre un issue en el repositorio

---

¡Disfruta usando **FireChat 2025**! 🚀
