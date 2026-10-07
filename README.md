# Práctica inicial: mocks con JavaScript y tests en Next.js

**By: DiegoMat** · [EliasMatDev](https://github.com/EliasMatDev)

Proyecto de inicio para aprender a registrar llamadas con un mock, probar una función de JavaScript y practicar matchers más allá de toBe. El componente cliente de Next.js es una ampliación opcional.

Los ejercicios están pendientes a propósito. La configuración, la página y los estilos están preparados para concentrarse en las pruebas.

## Requisitos

- Visual Studio Code o un editor equivalente.
- Node.js 24 con npm. También se admite Node 22 desde la versión 22.12, o Node 26 y superiores.
- Internet para descargar el proyecto e instalar las dependencias.

No necesitan instalar Next.js ni Vitest de forma global, ni agregar extensiones al editor.

## Preparar antes de clase

1. En este repositorio, seleccionen **Code → Download ZIP**.
2. Descompriman el ZIP.
3. Abran en VS Code la carpeta que contiene `package.json`.
4. Abran **Terminal → Nueva terminal** y ejecuten:

```bash
node --version
npm --version
npm ci
npm test
```

Deben pasar **2 tests de ejemplo**. `npm ci` instala las versiones fijadas en `package-lock.json`, incluidas Next.js, React, Vitest y las herramientas de testing.

Si ya usan Git, pueden descargarlo con:

```bash
git clone https://github.com/EliasMatDev/practica-mocks-javascript-nextjs.git
cd practica-mocks-javascript-nextjs
npm ci
npm test
```

## Ver la página

```bash
npm run dev -- --hostname 127.0.0.1 --port 3128
```

Abran [http://127.0.0.1:3128](http://127.0.0.1:3128). Al inicio, el botón todavía no cambia el mensaje: se conectará durante la clase. Para detener el servidor, usen **Ctrl + C**.

Los tests se ejecutan sin mantener encendido el servidor de Next.js. Si quieren usar ambos a la vez, abran una segunda terminal.

## Recorrido de la clase

### Conexión con los tests básicos

- Conservamos las fases **preparar → actuar → afirmar**.
- `test` e `it` son dos nombres para declarar un caso en Vitest. Si ya usaron `it`, reconocerán la misma estructura en estos ejemplos.
- `describe` permite agrupar casos; no es obligatorio en nuestros ejemplos cortos.
- `expect` y `toBe` siguen disponibles. Ahora añadiremos un mock para comprobar cuántas llamadas recibió y con qué mensaje.
- `npm test` ejecuta la suite una vez. Para que quede observando los cambios, usen `npm run test:watch`.

### Pasos principales: JavaScript

1. Leer tests/mock-demo.test.js: registrar llamadas y controlar una respuesta con mockReturnValue.
2. Completar src/lib/recordarPausa.js.
3. Crear src/lib/recordarPausa.test.js con los tres casos guiados de 59, 60 y 61 minutos.
4. Realizar [la práctica JavaScript de dos solicitudes](PRACTICA.md): agregar un cuarto caso y comparar cantidad e historial con toEqual.
5. Ejecutar npm test: al cerrar esta parte deben pasar **6 tests** (4 propios + 2 ejemplos).

### Ampliación opcional: Next.js

Solo después del cierre JavaScript y si queda tiempo, completar BotonPausa y sus tests de texto y clic: la suite llega a **8**. El [botón deshabilitado](PRACTICA-NEXT.md) queda como práctica posterior y lleva el total a **9**.

No ejecuten test:js ni test:componente antes de crear sus archivos de pruebas. No hace falta implementar Next.js para cumplir el objetivo principal de hoy.

## Regla del ejercicio

La función `recordarPausa` recibe minutos numéricos válidos y un callback:

- Antes de 60 minutos, no pide el aviso.
- Desde 60 minutos, incluido el 60, llama una vez al callback con **Hora de una pausa**.

El componente muestra **Recordar pausa**. Al hacer clic, debe llamar una vez a `onRecordar` con ese mensaje. Cuando está deshabilitado, no debe llamarlo.

## Comandos

| Comando                   | Uso                                       |
| ------------------------- | ----------------------------------------- |
| `npm test`                | Todos los tests una vez                   |
| `npm run test:watch`      | Tests al guardar cambios                  |
| `npm run test:mock`       | Demostración del mock                     |
| `npm run test:entorno`    | Comprobar JavaScript y JSX                |
| `npm run test:js`         | Tests de la función, después de crearlos  |
| `npm run test:componente` | Tests del componente, después de crearlos |
| `npm run lint`            | Revisar el código                         |
| `npm run build`           | Generar la versión de producción          |

## Archivos que trabajarán

```text
src/
├── lib/
│   ├── recordarPausa.js       ← completar
│   └── recordarPausa.test.js  ← crear
└── components/
    ├── BotonPausa.jsx         ← completar
    └── BotonPausa.test.jsx    ← crear
```

`node_modules` y `.next` se generan localmente y no forman parte del repositorio.

**By: DiegoMat**
