# Práctica: el botón deshabilitado

**By: DiegoMat**

## Objetivo

Comprobar que `BotonPausa` no llama a `onRecordar` cuando está deshabilitado y se intenta hacer clic.

Realicen esta práctica después de los ejemplos guiados de la clase.

## Tiempo y punto de partida

8 minutos para intentar, 4 de revisión y 3 para ejecutar y corregir.

Al llegar a esta parte, ustedes ya habrán completado el componente con las props `onRecordar` y `disabled`, y los tests del nombre del botón y del clic disponible. Las herramientas de testing ya vienen configuradas.

## Trabajo

En `src/components/BotonPausa.test.jsx`, agreguen un tercer test:

1. Escriban un nombre que describa la conducta.
2. Preparen una instancia nueva de userEvent y un mock nuevo.
3. Rendericen BotonPausa con el callback sustituto y disabled activado.
4. Busquen el botón por su rol y nombre.
5. Comprueben que su propiedad disabled es true.
6. Intenten hacer clic y esperen que termine la interacción.
7. Comprueben que el mock no fue llamado.

Ejecuten `npm run test:componente`: deben pasar **3 tests**. Luego `npm test`: deben pasar **8**, contando los dos tests de ejemplo iniciales.

## Expliquen su resultado

- ¿Qué función sustituyeron con el mock?
- ¿Qué código se ejecutó realmente?
- ¿Qué interacción intentaron?
- ¿Por qué cero llamadas es el resultado correcto?
- ¿Por qué un botón gris no demuestra por sí solo que está deshabilitado?

## Criterio de terminado

El nuevo test pasa, los anteriores siguen pasando y ustedes pueden explicar sus comprobaciones. No borren los casos anteriores ni cambien su resultado esperado para ocultar un fallo.

## Pista

El caso del botón disponible ya tiene la estructura. Cambia una prop y cambia la afirmación sobre las llamadas.

[Volver a las instrucciones del proyecto](README.md)
