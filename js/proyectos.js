const proyectos = [
  {
    titulo: "Portafolio Personal",
    descripcion:
      "Un sitio web moderno construido con HTML5 y Tailwind CSS para mostrar mi marca personal.",
    imagen: "/images/project.png",
  },
  {
    titulo: "Social Link Profile",
    descripcion:
      "Página de aterrizaje para centralizar redes sociales con un diseño limpio y minimalista.",
    imagen: "/images/social_link.png",
  },
  {
    titulo: "Blog Preview Card",
    descripcion:
      "Componente responsivo diseñado siguiendo estándares de UI/UX modernos.",
    imagen: "/images/blog_preview.png",
  },
];

function cargarProyectos() {
  const contenedor = document.getElementById("contenedor-proyectos");
  if (!contenedor) return;

  proyectos.forEach((proy) => {
    const article = document.createElement("article");
    // Agregamos clases de Tailwind para el diseño y el efecto Hover
    article.className =
      "bg-slate-900 border border-white/10 rounded-3xl overflow-hidden group hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-2";

    article.innerHTML = `
            <div class="h-64 overflow-hidden">
                <img src="${proy.imagen}" alt="${proy.titulo}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <div class="p-8">
                <h3 class="text-amber-200 text-2xl font-bold mb-4 uppercase">${proy.titulo}</h3>
                <p class="text-gray-400 mb-6">${proy.descripcion}</p>
                <a href="#" class="inline-block bg-[#D4FF59] text-black font-bold py-2 px-6 rounded-full text-xs uppercase hover:bg-white transition">Ver Proyecto</a>
            </div>
        `;
    contenedor.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", cargarProyectos);
