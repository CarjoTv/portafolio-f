
// Array de habilidades con sus respectivos íconos
const habilidades = [
    { nombre: "HTML5", icono: "./icons/html-icon.svg" },
    { nombre: "Tailwind CSS", icono: "./icons/tailwind-css-icon.svg" },
    { nombre: "JavaScript", icono: "./icons/javascript-programming-language-icon.svg" },
    { nombre: "Java", icono: "./icons/java-programming-language-icon.svg" },
    { nombre: "Python", icono: "./icons/python-programming-language-icon.svg" },
    { nombre: "PHP", icono: "./icons/php-programming-language-icon.svg" },
    { nombre: "C++", icono: "./icons/c-plus-plus-programming-language-icon.svg" },
    { nombre: "Data Base" , icono: "./icons/database-icon.svg" },
];
// Función para cargar las habilidades dinámicamente
function cargarHabilidades() {
    const contenedor = document.getElementById('grid-habilidades');
    habilidades.forEach((hab, index) => {
        const div = document.createElement('div');
    
        div.className = "bg-slate-900/60 border border-white/10 rounded-2xl p-8 flex items-center justify-center hover:bg-slate-800 transition shadow-xl aspect-square opacity-0 translate-y-4";
        div.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        div.innerHTML = `<img src="${hab.icono}" alt="${hab.nombre}" class="w-16 h-16 object-contain">`;
        contenedor.appendChild(div);

      
        setTimeout(() => {
            div.classList.remove('opacity-0', 'translate-y-4');
        }, 100);
    });
}

document.addEventListener('DOMContentLoaded', cargarHabilidades);

// Funcionalidad para el menú responsive
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-list');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');   
});