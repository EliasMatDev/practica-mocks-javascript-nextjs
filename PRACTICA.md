# Práctica JavaScript: dos solicitudes de pausa

**By: DiegoMat**

## Objetivo

Comprobar que dos ejecuciones de `recordarPausa`, con 60 y 61 minutos, solicitan dos avisos con el mensaje correcto.

Realicen esta práctica después de escribir los tres casos guiados de 59, 60 y 61 minutos.

## Tiempo

8 minutos para intentar, 4 para revisar y 3 para ejecutar y corregir.

## Trabajo

Agreguen un cuarto caso en `src/lib/recordarPausa.test.js`:

1. Escriban un nombre que describa las dos solicitudes.
2. Preparen **un solo mock nuevo para este test**.
3. Ejecuten recordarPausa con 60 y luego con 61, pasando el mismo mock.
4. Comprueben exactamente dos llamadas.
5. Comparen con `toEqual` el historial completo: dos llamadas, cada una con **Hora de una pausa** como único argumento.
6. Ejecuten `npm run test:js`: deben pasar **4 tests**.

En el proyecto inicial, después de completar solo JavaScript, `npm test` debe mostrar **6 tests**: cuatro de la regla y dos ejemplos iniciales. No necesitan implementar Next.js para cumplir el objetivo de hoy.

## Expliquen su resultado

- ¿Qué función quedó real y cuál sustituyeron?
- ¿Por qué aquí conservan el mismo mock para las dos ejecuciones?
- ¿Por qué usan toEqual para una lista?
- ¿Qué comprueban además de la cantidad?
- ¿Qué parte de una notificación real no demuestra este test?

## Criterio de terminado

Los cuatro casos pasan y pueden explicar sus comprobaciones. No borren los casos anteriores ni cambien lo esperado para ocultar un fallo.

## Ampliación opcional

Si queda tiempo, se prueban el nombre y el clic del componente Next.js. Entonces la suite del estudiante llega a **8 tests**. La [práctica del botón deshabilitado](PRACTICA-NEXT.md) queda como ejercicio posterior y lleva la suite completa a **9**.

[Volver al proyecto](README.md)
