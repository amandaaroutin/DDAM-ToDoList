// lógica principal para la gestión de la lista de tareas

document.addEventListener('DOMContentLoaded', () => {

    // obtener referencias a los elementos del DOM

    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');


    // cargo tareas almacenadas en LocalStorage (si existen), o inicializar como array vacío
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(); // mostrar las tareas al cargar la página


    // evento para añadir una nueva tarea al enviar el formulario
    form.addEventListener('submit', (e) => {

        e.preventDefault(); // evita recargar la página
        const text = input.value.trim();

        if (text === '') return; // para no permitir tareas vacías
        tasks.push({ text, completed: false }); // agrega la tarea al array
        input.value = '';
        saveAndRender(); // guarda y actualiza la lista
    });


    // evento delegado para los botones de eliminar y completar tarea
    list.addEventListener('click', (e) => {

        // Si se hace clic en el botón de Eliminar
        if (e.target.classList.contains('delete-btn')) {
            const idx = e.target.closest('li').dataset.index;
            tasks.splice(idx, 1); // se elimina la tarea del array
            saveAndRender();

        // Si se hace clic en el botón de Completada
        } else if (e.target.classList.contains('complete-btn')) {
            const idx = e.target.closest('li').dataset.index;
            tasks[idx].completed = !tasks[idx].completed; // se cambia el estado de completada
            saveAndRender();
        }
    });


    // función para mostrar todas las tareas en la lista del DOM
    function renderTasks() {
        
        list.innerHTML = '';

        tasks.forEach((task, i) => {

            const li = document.createElement('li');
            li.className = 'task-item' + (task.completed ? ' completed' : '');
            li.dataset.index = i;
            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <span class="task-actions">
                    <button class="complete-btn">Completada</button>
                    <button class="delete-btn">Eliminar</button>
                </span>
            `;
            list.appendChild(li);
        });
    }

    // guarda el array de tareas en LocalStorage y vuelve a renderizar la lista
    function saveAndRender() {
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
});
