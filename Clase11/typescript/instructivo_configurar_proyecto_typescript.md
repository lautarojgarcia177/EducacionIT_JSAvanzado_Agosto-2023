Pasos para crear un proyecto TypeScript que automáticamente recompile y ejecute el código cuando haces cambios:

1. **Configura un Proyecto TypeScript**:

   Inicia un nuevo proyecto TypeScript ejecutando el siguiente comando en tu terminal:

   ```bash
   mkdir mi-proyecto-typescript
   cd mi-proyecto-typescript
   npm init -y
   npm install typescript --save-dev
   npx tsc --init
   ```

   Esto creará una estructura de proyecto básica y un archivo `tsconfig.json` para configurar TypeScript.

2. **Instala Dependencias**:

   A continuación, instala algunas dependencias clave:

   ```bash
   npm install ts-node nodemon --save-dev
   ```

   - `ts-node`: Permite ejecutar archivos TypeScript directamente.
   - `nodemon`: Monitorea los cambios en el código y reinicia la aplicación automáticamente.

3. **Configura Nodemon**:

   Crea un archivo de configuración para `nodemon` llamado `nodemon.json` en la raíz de tu proyecto. Agrega el siguiente contenido:

   ```json
   {
     "watch": ["src"],
     "ext": "ts",
     "exec": "ts-node ./src/index.ts"
   }
   ```

   Esto le dice a `nodemon` que observe los archivos TypeScript en la carpeta `src` y ejecute el archivo `index.ts` con `ts-node` cuando haya cambios.

4. **Crea un Archivo de Entrada**:

   Crea un archivo TypeScript de entrada en la carpeta `src`. Por ejemplo, `index.ts`.

5. **Scripts en el archivo package.json**:

   Agrega los siguientes scripts en el archivo `package.json`:

   ```json
   "scripts": {
     "start": "nodemon"
   }
   ```

6. **Compila y Ejecuta**:

   Ahora puedes ejecutar tu proyecto TypeScript con:

   ```bash
   npm start
   ```

   Nodemon observará los cambios en los archivos `.ts` en la carpeta `src`, y cuando se detecte un cambio, recompilará y ejecutará automáticamente tu código.

Ten en cuenta que esta configuración es básica y puede personalizarse según las necesidades de tu proyecto. Puedes agregar más scripts, como pruebas unitarias, linting, etc., según sea necesario. Este es un punto de partida para proyectos TypeScript en tiempo real.