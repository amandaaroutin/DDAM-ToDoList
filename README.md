# PRÁCTICA 1

# Aplicación Web “Lista de Tareas”

Asignatura: Diseño y Despliegue de Aplicaciones Multiplataforma 

Fecha: 28 sept 2025

Amanda María Aroutin Allocca

---

# Índice

- Introducción.
- Requisitos del enunciado.
- Desarrollo.
- Dificultades encontradas.
- Conclusión.
- Enlace al repositorio de GitHub.

---

# Introducción

El objetivo de esta primera práctica es desarrollar una aplicación web sencilla llamada **“Lista de Tareas”**, que permita al usuario gestionar de manera dinámica sus actividades pendientes. La aplicación debía cumplir con los requisitos básicos de añadir, visualizar, completar y eliminar tareas, además de ofrecer la posibilidad opcional de guardar la información en el **LocalStorage** del navegador para mantenerla al recargar la página.

Para la implementación se utilizó una estructura sencilla en **HTML** y **CSS** que define la interfaz: Un campo de texto, un botón de añadir y una lista donde se muestran las tareas. La lógica principal se resolvió con **JavaScript**, manipulando el **DOM** mediante eventos como submit y click. Además, se incluyó la validación de entradas para evitar añadir tareas vacías, se implementaron botones de acción para cada tarea (completar y eliminar), y se utilizó **LocalStorage** para garantizar persistencia de datos.

---

# **Requisitos del enunciado**

Para el desarrollo de la aplicación **“Lista de Tareas”**, se establecieron los siguientes requisitos en el enunciado:

1. **Interfaz básica (HTML y CSS)**
    - Incluir un campo de texto para escribir una nueva tarea.
    - Un botón que permita añadir la tarea a la lista.
    - Una lista donde se muestren todas las tareas pendientes.
    - Un botón **“Completada”** para cada tarea existente.
    - Un botón **“Eliminar”** para cada tarea existente.
2. **Funcionalidad (JavaScript)**
    - Al hacer clic en el botón **Añadir**, la tarea debe agregarse a la lista.
    - Al hacer clic en el botón **Eliminar**, la tarea debe eliminarse de la lista.
    - Al hacer clic en el botón **Completada**, el estilo de la tarea debe cambiar (tachado o fondo distinto).
    - No se deben permitir tareas vacías.
3. **Opcional**
    - Guardar las tareas en **LocalStorage** para que se mantengan al recargar la página.

---

# **Desarrollo**

La aplicación se construyó en tres partes principales: **HTML**, **CSS** y **JavaScript**.

## **1. Estructura con HTML**

Se diseñó una estructura sencilla que contiene:

- Un **formulario** con un campo de entrada (input) para escribir una nueva tarea y un botón para añadirla.
- Una **lista (ul) dinámica**, donde se irán mostrando todas las tareas creadas.

Este planteamiento permite al usuario tener una interfaz clara y fácil de usar para gestionar sus tareas.

## **2. Estilos con CSS**

Aunque la práctica no se centraba en el diseño visual, empleé **CSS** para dar un estilo básico a la aplicación, mejorando la presentación de la lista de tareas y la diferenciación entre tareas completadas y pendientes.

## **3. Funcionalidad con JavaScript**

La lógica principal se implementó en el archivo app.js, utilizando **manipulación del DOM** y **gestión de eventos**. Los puntos clave fueron:

- **Inicialización de tareas**:
    
    Al cargar la página, se leen las tareas almacenadas en **LocalStorage** (si existen) para mostrarlas automáticamente.
    
- **Añadir tarea**:
    
    Se detecta el evento submit del formulario. Si el texto ingresado no está vacío, se agrega una nueva tarea a la lista y se guarda en **LocalStorage**.
    
- **Eliminar tarea**:
    
    Se asocia un evento click a los botones **Eliminar**. Al pulsarlos, se identifica la tarea correspondiente mediante su índice y se elimina tanto de la lista visual como del almacenamiento local.
    
- **Completar tarea**:
    
    Cada tarea incluye un botón **Completada**, que alterna el estado de la tarea (pendiente o completada). Visualmente, se refleja mediante un estilo tachado o con un cambio de clase CSS.
    
- **Persistencia de datos**:
    
    Todas las operaciones de añadir, eliminar o completar se sincronizan automáticamente con **LocalStorage**, garantizando que las tareas se mantengan incluso al recargar la página.
    

---

# **Dificultades encontradas**

Durante el desarrollo de la práctica, presenté algunas dificultades que tuve que resolver para conseguir el correcto funcionamiento de la aplicación:

- **Validación de tareas vacías**:
    
    Al principio era posible añadir tareas sin contenido, lo que generaba elementos en blanco dentro de la lista. Para solucionarlo, añadí una validación que comprueba si el texto ingresado está vacío y, en ese caso, no se permite añadir la tarea.
    
- **Gestión de índices en la lista**:
    
    Al implementar la funcionalidad de **eliminar** y **completar** tareas, fue necesario identificar correctamente cada tarea mediante su posición en el arreglo. Esto se resolvió asignando un atributo data-index a cada elemento de la lista (li), lo que facilitó la manipulación de tareas específicas.
    
- **Persistencia con LocalStorage**:
    
    Fue necesario convertir los datos a formato JSON para poder almacenarlos y recuperarlos desde LocalStorage. En un inicio, olvidar este paso generaba errores al intentar guardar o leer las tareas.
    
- **Actualización dinámica de la interfaz**:
    
    Cada vez que se añadía, eliminaba o completaba una tarea, era necesario volver a renderizar toda la lista para reflejar los cambios. La dificultad se resolvió creando una función dedicada (renderTasks) que actualiza el DOM de manera centralizada.
    

---

# **Conclusión**

La práctica me permitió aplicar de forma práctica los conocimientos de **HTML, CSS y JavaScript** para construir una aplicación web sencilla pero funcional. A través del desarrollo de la **Lista de Tareas**, conseguí implementar todas las funcionalidades básicas planteadas: añadir, completar y eliminar tareas, junto con la validación de entradas para evitar errores comunes.

Además, incorporé el uso de **LocalStorage**, lo que mejoró la experiencia del usuario al mantener las tareas guardadas incluso después de recargar la página. Este aspecto opcional resultó útil para comprender cómo funciona la persistencia de datos en el navegador.

Durante el proceso pude reforzar competencias clave como la **manipulación del DOM**, el uso de **eventos** (submit, click), la **gestión dinámica de listas** y la importancia de separar la lógica en funciones reutilizables.

En definitiva, la práctica fue una buena oportunidad para afianzar conceptos esenciales en el desarrollo web y sentar las bases para construir aplicaciones más complejas en el futuro.
