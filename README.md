# ⚡ Pokédex App - Taller Práctico React

Aplicación web interactiva desarrollada con **React** y **Vite** que consume en tiempo real la [PokéAPI](https://pokeapi.co/), implementando gestión de estados asíncronos (carga y error), renderizado modular y filtrado local dinámico.

---

## 🚀 Características

- **Consumo de API REST:** Petición asíncrona del catálogo inicial (20 Pokémon) y consulta individual de detalles (sprites, número de Pokédex, tipos y estadísticas base).
- **Filtrado en tiempo real:** Búsqueda instantánea por nombre sin recargas de página.
- **Gestión de estados:** Indicadores visuales durante la carga (`loading`) y captura de excepciones (`error`).
- **Arquitectura modular:** Separación limpia entre capas de presentación (`src/components/`) y servicios de red (`src/services/`).
- **Variables de entorno:** Configuración segura de endpoints mediante prefijo `VITE_`.

---

## 🛠️ Tecnologías utilizadas

- **React 19**
- **Vite**
- **Axios**
- **JavaScript (ES6+)**
- **CSS en línea**

---

## ⚙️ Instalación y ejecución local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/PortillaVanya/Pok-dex.git
   cd Pok-dex
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   Crear un archivo `.env` en la raíz con el siguiente contenido:
   ```env
   VITE_POKEAPI_URL=https://pokeapi.co/api/v2
   ```

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Compilar para producción:
   ```bash
   npm run build
   ```
