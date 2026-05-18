import type { LessonContent } from "@/types"

export const lessonContent: Record<string, LessonContent[]> = {
  l1: [
    { type: "heading", level: 2, text: "¿Cómo funciona realmente internet?" },
    {
      type: "text",
      body: "Antes de escribir nuestra primera línea de código, es fundamental entender el medio en el que vamos a publicar nuestro trabajo: internet. Aunque lo usamos todos los días, pocos desarrolladores principiantes entienden realmente lo que sucede detrás de escena cuando escriben una URL en el navegador.",
    },
    {
      type: "heading",
      level: 3,
      text: "El modelo Cliente-Servidor",
    },
    {
      type: "text",
      body: "Internet funciona bajo un modelo llamado Cliente-Servidor. El cliente (tu navegador) realiza una solicitud a un servidor (una computadora remota que almacena el sitio web), y el servidor responde con los archivos necesarios (HTML, CSS, JS, imágenes) para que el navegador pueda renderizar la página.",
    },
    { type: "code", language: "text", code: "https://farchodev-academy.vercel.app/cursos\n        ↕                  ↕\n    DOMINIO            RUTA\n        ↕\n  (DNS resuelve a una IP)" },
    {
      type: "heading",
      level: 3,
      text: "¿Qué es el DNS?",
    },
    {
      type: "text",
      body: "El DNS (Domain Name System) es como la guía telefónica de internet. Cuando escribes un dominio como 'google.com', tu computadora consulta al DNS para obtener la dirección IP real del servidor donde está alojado ese sitio. Sin DNS, tendríamos que memorizar números como '142.250.64.46' en lugar de nombres fáciles de recordar.",
    },
    {
      type: "tip",
      body: "Puedes ver el proceso completo abriendo las herramientas de desarrollador de tu navegador (F12 → Red/Network) y recargando cualquier página. Verás cada solicitud y respuesta en tiempo real.",
    },
    {
      type: "heading",
      level: 3,
      text: "HTTP y HTTPS",
    },
    {
      type: "text",
      body: "HTTP (HyperText Transfer Protocol) es el protocolo que usa el navegador para comunicarse con el servidor. Cuando visitas una página, tu navegador envía una petición GET al servidor, y este responde con el contenido. HTTPS es la versión segura, donde la comunicación está cifrada mediante TLS/SSL.",
    },
    {
      type: "heading",
      level: 3,
      text: "¿Qué sucede paso a paso?",
    },
    {
      type: "list",
      items: [
        "Escribes farchodev-academy.vercel.app en el navegador",
        "El navegador consulta al DNS para obtener la IP del servidor",
        "Se establece una conexión TCP/IP con el servidor (handshake)",
        "El navegador envía una petición HTTP GET solicitando el HTML",
        "El servidor responde con el archivo HTML + recursos adicionales",
        "El navegador parsea el HTML y descarga CSS, JS e imágenes",
        "Se renderiza la página completa en pantalla",
      ],
      ordered: true,
    },
    {
      type: "text",
      body: "Entender este flujo es clave para convertirte en un buen desarrollador web. Cuando algo sale mal (una página no carga, los estilos se rompen, una API no responde), saber cómo funciona cada capa te permite diagnosticar y solucionar el problema rápidamente.",
    },
    {
      type: "tip",
      body: "Concepto clave: La web es 'stateless' (sin estado). Cada petición HTTP es independiente. Para mantener el estado (como un usuario logueado), usamos cookies, sesiones o tokens JWT. Lo veremos en lecciones avanzadas.",
    },
  ],

  l2: [
    { type: "heading", level: 2, text: "HTML Semántico: La base de la web" },
    {
      type: "text",
      body: "HTML (HyperText Markup Language) es el lenguaje de marcado que define la estructura de una página web. No es un lenguaje de programación, sino un lenguaje de marcado que usa etiquetas para organizar el contenido. La clave del HTML moderno es la semántica: usar las etiquetas adecuadas para cada tipo de contenido.",
    },
    {
      type: "heading",
      level: 3,
      text: "Estructura básica de un documento HTML",
    },
    {
      type: "code",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi primera página</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/cursos">Cursos</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Bienvenido a Farchódev Academy</h1>
    <p>Aprende programación desde cero.</p>
  </main>
  <footer>
    <p>&copy; 2026 Farchódev Academy</p>
  </footer>
</body>
</html>`,
    },
    {
      type: "heading",
      level: 3,
      text: "Etiquetas semánticas principales",
    },
    {
      type: "list",
      items: [
        "<header> — Encabezado de la página o sección",
        "<nav> — Navegación principal",
        "<main> — Contenido principal (solo uno por página)",
        "<article> — Contenido independiente (blog post, noticia)",
        "<section> — Agrupación temática de contenido",
        "<aside> — Contenido complementario (sidebar)",
        "<footer> — Pie de página",
      ],
    },
    {
      type: "text",
      body: "Usar HTML semántico no solo hace tu código más legible, sino que mejora el SEO (los motores de búsqueda entienden mejor tu contenido) y la accesibilidad (los lectores de pantalla pueden navegar correctamente).",
    },
    {
      type: "tip",
      body: "Regla de oro: no uses <div> para todo. Cada <div> debería reemplazarse por una etiqueta semántica cuando sea posible. Piensa en el significado del contenido, no en su apariencia.",
    },
  ],

  l3: [
    { type: "heading", level: 2, text: "CSS Moderno: Flexbox y Grid" },
    {
      type: "text",
      body: "CSS (Cascading Style Sheets) es el lenguaje que usamos para dar estilo a nuestras páginas HTML. En el CSS moderno, dos herramientas destacan por encima del resto para crear layouts: Flexbox y Grid. Con ellas puedes crear diseños complejos con muy poco código.",
    },
    {
      type: "heading",
      level: 3,
      text: "Flexbox: Diseño unidimensional",
    },
    {
      type: "text",
      body: "Flexbox está diseñado para layouts en una sola dirección (fila o columna). Es ideal para componentes como barras de navegación, centrar elementos, o distribuir espacio entre items.",
    },
    {
      type: "code",
      language: "css",
      code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "CSS Grid: Diseño bidimensional",
    },
    {
      type: "text",
      body: "Grid está diseñado para layouts en dos dimensiones (filas y columnas simultáneamente). Es perfecto para páginas completas, galerías de cursos, o cualquier estructura de rejilla.",
    },
    {
      type: "code",
      language: "css",
      code: `.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "Variables CSS (Custom Properties)",
    },
    {
      type: "text",
      body: "Las variables CSS te permiten definir valores reutilizables en tu hoja de estilos. Esto es la base de un design system y facilita mantener consistencia visual en todo el proyecto.",
    },
    {
      type: "code",
      language: "css",
      code: `:root {
  --color-primary: #22D3EE;
  --color-background: #05070E;
  --color-text: #F8FAFC;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --radius: 0.75rem;
}

.card {
  background: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-lg);
  border-radius: var(--radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`,
    },
    {
      type: "tip",
      body: "Combinar Flexbox + Grid + Variables CSS te permite crear layouts modernos, responsivos y mantenibles. Es el enfoque que usamos en Farchódev Academy para todos nuestros componentes.",
    },
  ],

  l4: [
    { type: "heading", level: 2, text: "Responsive Design" },
    {
      type: "text",
      body: "El Responsive Design es la práctica de hacer que tu sitio web se vea bien en todos los dispositivos: desde teléfonos móviles hasta monitores ultra-wide. La clave está en usar layouts flexibles, media queries y unidades relativas.",
    },
    {
      type: "heading",
      level: 3,
      text: "Mobile First vs Desktop First",
    },
    {
      type: "text",
      body: "Mobile First es la estrategia recomendada: comienzas diseñando para pantallas pequeñas y luego agregas estilos para pantallas más grandes usando min-width. Esto fuerza a priorizar el contenido esencial y produce sitios más rápidos y accesibles.",
    },
    {
      type: "code",
      language: "css",
      code: `/* Mobile First: estilos base para móvil */
.courses-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

/* Ultra-wide */
@media (min-width: 1440px) {
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "Unidades relativas",
    },
    {
      type: "list",
      items: [
        "rem — Relativa al font-size del elemento raíz (html). Ideal para tamaños de texto y spacing.",
        "em — Relativa al font-size del elemento padre. Útil para componentes escalables.",
        "% — Relativa al tamaño del contenedor padre. Para anchos y altos.",
        "vw/vh — Relativa al viewport (1vw = 1% del ancho de la ventana).",
        "clamp() — Función que establece un valor mínimo, preferido y máximo: font-size: clamp(1rem, 2.5vw, 1.5rem);",
      ],
    },
    {
      type: "tip",
      body: "Usa la herramienta de inspección responsive en tu navegador (F12 → Toggle Device Toolbar) para probar cómo se ve tu sitio en diferentes dispositivos. En Farchódev Academy probamos en 320px, 768px, 1024px y 1440px.",
    },
  ],

  l5: [
    { type: "heading", level: 2, text: "Variables y Tipos de Datos en JavaScript" },
    {
      type: "text",
      body: "JavaScript es el lenguaje de programación que da vida a la web. Todo en JS gira alrededor de datos, y cada dato tiene un tipo. Entender los tipos de datos y cómo declarar variables es el primer paso para dominar el lenguaje.",
    },
    {
      type: "heading",
      level: 3,
      text: "Declaración de variables: let, const y var",
    },
    {
      type: "text",
      body: "En JavaScript moderno (ES6+) usamos let y const. let se usa para variables que pueden reasignarse, y const para valores constantes que no deben cambiar. var es la forma antigua y tiene problemas de scope que es mejor evitar.",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Const: no puede reasignarse
const PI = 3.1416;
const API_URL = "https://api.farchodev.com";

// Let: puede cambiar
let counter = 0;
counter = counter + 1; // 1

// Scope de bloque
if (true) {
  let blockVar = "solo existe aquí";
  const alsoBlock = "también aquí";
}
// console.log(blockVar); // Error!`,
    },
    {
      type: "heading",
      level: 3,
      text: "Tipos de datos primitivos",
    },
    {
      type: "code",
      language: "javascript",
      code: `// String — texto
const name = "Farchódev";
const greeting = 'Hola mundo';
const template = \`Bienvenido a \${name}\`;

// Number — números
const integer = 42;
const float = 3.1416;
const negative = -10;

// Boolean — verdadero/falso
const isActive = true;
const isComplete = false;

// Null — valor intencionalmente vacío
const user = null;

// Undefined — valor no asignado
let notDefined;
console.log(notDefined); // undefined`,
    },
    {
      type: "heading",
      level: 3,
      text: "typeof: identificando tipos",
    },
    {
      type: "code",
      language: "javascript",
      code: `console.log(typeof "Hola");         // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof null);          // "object" (¡esto es un bug histórico de JS!)
console.log(typeof undefined);     // "undefined"
console.log(typeof {});            // "object"
console.log(typeof []);            // "object" (los arrays son objetos)`,
    },
    {
      type: "tip",
      body: "Usa siempre const por defecto. Solo usa let cuando sepas que la variable va a cambiar. Nunca uses var en código moderno. Esto hace tu código más predecible y fácil de debuggear.",
    },
  ],

  l6: [
    { type: "heading", level: 2, text: "Funciones y Scope en JavaScript" },
    {
      type: "text",
      body: "Las funciones son los bloques de construcción fundamentales en JavaScript. Son piezas de código reutilizable que realizan una tarea específica. Entender cómo funcionan las funciones y el scope (ámbito) de las variables es esencial para escribir código limpio y sin bugs.",
    },
    {
      type: "heading",
      level: 3,
      text: "Function Declaration vs Arrow Functions",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Function Declaration (tiene hoisting)
function greet(name) {
  return \`Hola, \${name}!\`;
}

// Arrow Function (no tiene hoisting, más concisa)
const greetArrow = (name) => {
  return \`Hola, \${name}!\`;
};

// Arrow con return implícito (una sola línea)
const greetShort = (name) => \`Hola, \${name}!\`;

// Arrow sin parámetros
const getVersion = () => "1.0.0";

// Arrow con un solo parámetro (puede omitir paréntesis)
const square = x => x * x;`,
    },
    {
      type: "heading",
      level: 3,
      text: "Scope: ámbito de las variables",
    },
    {
      type: "text",
      body: "El scope determina dónde es accesible una variable. En JavaScript existen tres tipos: global, function y block scope. Las variables declaradas con let y const tienen block scope, lo que significa que solo existen dentro del bloque {} donde fueron declaradas.",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Global scope
const globalVar = "accesible desde cualquier parte";

function myFunction() {
  // Function scope
  const functionVar = "solo dentro de esta función";
  
  if (true) {
    // Block scope
    let blockVar = "solo dentro de este bloque";
    const alsoBlock = "también solo aquí";
    var oldVar = "esto 'escapa' del bloque"; // ¡NO USAR!
  }
  
  console.log(functionVar); // ✅ OK
  console.log(oldVar);      // ✅ OK (var ignora block scope)
  // console.log(blockVar); // ❌ Error
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "Closures: el secreto mejor guardado de JS",
    },
    {
      type: "text",
      body: "Un closure ocurre cuando una función interna recuerda variables de su función externa, incluso después de que la función externa haya terminado de ejecutarse. Es uno de los conceptos más poderosos (y confusos) de JavaScript.",
    },
    {
      type: "code",
      language: "javascript",
      code: `function createCounter() {
  let count = 0; // variable "privada"
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue());  // 2
// count no es accesible directamente`,
    },
    {
      type: "tip",
      body: "Las arrow functions no tienen su propio 'this', heredan el del contexto donde fueron creadas. Esto las hace ideales para callbacks y métodos de array. Las function declarations tienen su propio 'this', lo que puede causar bugs si no se maneja con cuidado.",
    },
  ],

  l7: [
    { type: "heading", level: 2, text: "Manipulación del DOM" },
    {
      type: "text",
      body: "El DOM (Document Object Model) es la representación en memoria de tu página HTML. JavaScript puede interactuar con el DOM para leer, modificar, agregar o eliminar elementos, así como responder a eventos del usuario como clicks, tecleo o movimiento del mouse.",
    },
    {
      type: "heading",
      level: 3,
      text: "Seleccionando elementos",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Métodos modernos de selección
const header = document.querySelector("header");
const hero = document.querySelector("#hero");
const buttons = document.querySelectorAll(".btn");
const allCards = document.querySelectorAll(".course-card");

// Métodos clásicos (aún útiles)
const byId = document.getElementById("hero");
const byClass = document.getElementsByClassName("card");
const byTag = document.getElementsByTagName("div");`,
    },
    {
      type: "heading",
      level: 3,
      text: "Modificando contenido y estilos",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Cambiar texto y HTML
const title = document.querySelector("h1");
title.textContent = "Nuevo título";
title.innerHTML = "Título con <em>énfasis</em>";

// Modificar estilos inline
title.style.color = "#22D3EE";
title.style.fontSize = "2.5rem";

// Agregar/quitar clases
title.classList.add("highlight");
title.classList.remove("old-style");
title.classList.toggle("active");

// Manipular atributos
const link = document.querySelector("a");
link.setAttribute("href", "https://farchodev.com");
link.getAttribute("target"); // "_blank"`,
    },
    {
      type: "heading",
      level: 3,
      text: "Eventos: haciendo páginas interactivas",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Click event
const button = document.querySelector("#submitBtn");
button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Botón clickeado!");
  
  // event.target es el elemento que disparó el evento
  const btn = event.target;
  btn.textContent = "Enviado ✓";
  btn.disabled = true;
});

// Eventos comunes
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("keydown", handler);
element.addEventListener("submit", handler);
element.addEventListener("input", handler);

// Delegación de eventos
document.querySelector("#courseList").addEventListener("click", (e) => {
  if (e.target.matches(".course-item")) {
    console.log("Curso clickeado:", e.target.dataset.id);
  }
});`,
    },
    {
      type: "tip",
      body: "Usa delegación de eventos siempre que tengas listas dinámicas. En lugar de agregar un event listener a cada item, agrega uno solo al contenedor padre y usa event.target para identificar qué hijo fue clickeado. Es más eficiente y funciona con elementos agregados dinámicamente.",
    },
  ],

  l8: [
    { type: "heading", level: 2, text: "Async/Await y Fetch API" },
    {
      type: "text",
      body: "JavaScript es single-threaded: solo puede hacer una cosa a la vez. Pero gracias al event loop y las operaciones asíncronas, puede manejar tareas que toman tiempo (como peticiones a una API) sin bloquear la interfaz de usuario.",
    },
    {
      type: "heading",
      level: 3,
      text: "Promesas: el fundamento",
    },
    {
      type: "text",
      body: "Una Promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro, o nunca. Tiene tres estados: pending (pendiente), fulfilled (resuelta), rejected (rechazada).",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Crear una promesa
const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = { id: 1, name: "Farley" };
    resolve(user);
    // reject(new Error("Usuario no encontrado"));
  }, 2000);
});

// Consumir una promesa con .then/.catch
fetchUser
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
  .finally(() => console.log("Operación completada"));`,
    },
    {
      type: "heading",
      level: 3,
      text: "Async/Await: código asíncrono con sintaxis síncrona",
    },
    {
      type: "text",
      body: "Async/Await es azúcar sintáctica sobre las promesas. Una función marcada con async siempre devuelve una promesa. La palabra clave await pausa la ejecución hasta que la promesa se resuelva, sin bloquear el hilo principal.",
    },
    {
      type: "code",
      language: "javascript",
      code: `// Fetch API: peticiones HTTP nativas del navegador
async function getCourses() {
  try {
    const response = await fetch(
      "https://api.farchodev.com/courses"
    );
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }
    
    const courses = await response.json();
    return courses;
    
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    return [];
  }
}

// Uso
async function displayCourses() {
  const courses = await getCourses();
  const container = document.querySelector("#courses");
  
  container.innerHTML = courses
    .map(c => \`<div class="card">\${c.title}</div>\`)
    .join("");
}

// Promise.all: múltiples peticiones en paralelo
async function getDashboardData() {
  const [courses, user, stats] = await Promise.all([
    getCourses(),
    fetchUser(),
    getStats(),
  ]);
  
  return { courses, user, stats };
}`,
    },
    {
      type: "tip",
      body: "Siempre usa try/catch con async/await. Un error no manejado en una función async resulta en una promesa rechazada que puede causar comportamientos inesperados. Para peticiones independientes, usa Promise.all para ejecutarlas en paralelo y reducir el tiempo de carga.",
    },
  ],

  l9: [
    { type: "heading", level: 2, text: "Componentes y Props en React" },
    {
      type: "text",
      body: "React es una biblioteca para construir interfaces de usuario mediante componentes. Un componente es una pieza de UI reutilizable e independiente. Los componentes reciben datos de entrada llamados props (propiedades) y retornan elementos React que describen lo que debe aparecer en pantalla.",
    },
    {
      type: "heading",
      level: 3,
      text: "Tu primer componente React",
    },
    {
      type: "code",
      language: "typescript",
      code: `// Componente funcional con TypeScript
interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  progress?: number;
}

function CourseCard({
  title,
  description,
  duration,
  level,
  progress = 0,
}: CourseCardProps) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{duration}</span>
      <span>Nivel: {level}</span>
      {progress > 0 && (
        <progress value={progress} max={100} />
      )}
    </div>
  );
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "Composición: componentes dentro de componentes",
    },
    {
      type: "text",
      body: "La composición es uno de los patrones más poderosos de React. En lugar de crear un componente gigante que hace todo, dividimos la UI en componentes pequeños y los combinamos.",
    },
    {
      type: "code",
      language: "typescript",
      code: `// Componentes pequeños y enfocados
function Avatar({ src, alt }: { src: string; alt: string }) {
  return <img className="avatar" src={src} alt={alt} />;
}

function InstructorInfo({ name, role }: { name: string; role: string }) {
  return (
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-muted">{role}</p>
    </div>
  );
}

// Composición: los combino
function InstructorCard({ name, role, avatar }: InstructorProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar src={avatar} alt={name} />
      <InstructorInfo name={name} role={role} />
    </div>
  );
}`,
    },
    {
      type: "tip",
      body: "Principio de responsabilidad única: cada componente debe hacer una sola cosa y hacerla bien. Si un componente crece demasiado, divídelo. En Farchódev Academy, nuestros componentes más grandes no superan las 80 líneas.",
    },
  ],

  l10: [
    { type: "heading", level: 2, text: "Estado y Efectos en React" },
    {
      type: "text",
      body: "El estado (state) es el corazón de las aplicaciones React. Mientras que las props son datos que fluyen hacia abajo (de padre a hijo), el estado es datos que el componente gestiona internamente y que pueden cambiar con el tiempo. Cuando el estado cambia, React re-renderiza el componente automáticamente.",
    },
    {
      type: "heading",
      level: 3,
      text: "useState: estado local",
    },
    {
      type: "code",
      language: "typescript",
      code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setIsEven(newCount % 2 === 0);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Es par: {isEven ? "Sí" : "No"}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

// Estado con objetos
function CourseForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    level: "beginner",
  });

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <input
      value={form.title}
      onChange={(e) => updateField("title", e.target.value)}
    />
  );
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "useEffect: efectos secundarios",
    },
    {
      type: "text",
      body: "useEffect te permite realizar efectos secundarios en componentes funcionales: peticiones a APIs, suscripciones, manipulación manual del DOM, temporizadores. Se ejecuta después de que el componente se renderiza.",
    },
    {
      type: "code",
      language: "typescript",
      code: `import { useState, useEffect } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCourses() {
      try {
        setLoading(true);
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, []); // Array vacío = solo al montar

  if (loading) return <Skeleton />;
  if (error) return <Error message={error} />;

  return courses.map(c => <CourseCard key={c.id} {...c} />);
}

// Cleanup: evitar memory leaks
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => clearInterval(interval); // cleanup
}, []);`,
    },
    {
      type: "tip",
      body: "Reglas de los hooks: 1) Solo llama hooks en el nivel superior de tu componente (no dentro de condicionales o loops). 2) Solo llama hooks desde componentes React o custom hooks. El plugin eslint-plugin-react-hooks te ayuda a seguir estas reglas automáticamente.",
    },
  ],

  l11: [
    { type: "heading", level: 2, text: "React Router y Navegación" },
    {
      type: "text",
      body: "En aplicaciones de una sola página (SPA), el enrutamiento permite navegar entre diferentes vistas sin recargar la página completa. React Router es la biblioteca más popular para manejar rutas en React, mientras que Next.js tiene su propio sistema de archivos (App Router) que veremos en la siguiente lección.",
    },
    {
      type: "heading",
      level: 3,
      text: "Conceptos básicos de React Router",
    },
    {
      type: "code",
      language: "typescript",
      code: `import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useParams,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Links (navegación declarativa)
function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/courses">Cursos</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

// useParams: acceder a parámetros de la URL
function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Curso: {slug}</h1>
      <button onClick={() => navigate("/courses")}>
        ← Volver a cursos
      </button>
    </div>
  );
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "Layouts y rutas anidadas",
    },
    {
      type: "text",
      body: "Los layouts permiten compartir UI entre múltiples rutas. En React Router se logra con rutas anidadas, mientras que Next.js usa archivos layout.tsx en cada carpeta.",
    },
    {
      type: "code",
      language: "typescript",
      code: `// React Router: Layout component
function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Outlet /> {/* Renderiza la ruta hija */}
      </main>
    </div>
  );
}

// Las rutas serían:
<Route element={<DashboardLayout />}>
  <Route path="/dashboard" element={<Overview />} />
  <Route path="/dashboard/courses" element={<MyCourses />} />
  <Route path="/dashboard/profile" element={<Profile />} />
</Route>`,
    },
    {
      type: "tip",
      body: "React Router y Next.js App Router comparten conceptos (layouts anidados, parámetros dinámicos, navegación), pero Next.js usa el sistema de archivos. En Farchódev Academy usamos Next.js App Router: cada carpeta es una ruta, layout.tsx para shared UI, page.tsx para el contenido.",
    },
  ],

  l12: [
    { type: "heading", level: 2, text: "Next.js App Router" },
    {
      type: "text",
      body: "Next.js es un framework de React para producción que ofrece renderizado híbrido (SSR, SSG, ISR), enrutamiento basado en archivos, y optimizaciones automáticas. El App Router (Next.js 13+) es la forma moderna de construir aplicaciones con Next.js.",
    },
    {
      type: "heading",
      level: 3,
      text: "Sistema de archivos como rutas",
    },
    {
      type: "text",
      body: "En Next.js, cada carpeta dentro de app/ representa un segmento de ruta. Los archivos especiales (page.tsx, layout.tsx, loading.tsx, error.tsx) definen qué se renderiza en esa ruta. No necesitas configurar rutas manualmente.",
    },
    {
      type: "code",
      language: "typescript",
      code: `// src/app/page.tsx → /
export default function Home() {
  return <h1>Inicio</h1>;
}

// src/app/courses/page.tsx → /courses
export default function Courses() {
  return <h1>Cursos</h1>;
}

// src/app/courses/[slug]/page.tsx → /courses/desarrollo-web
export default function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>Curso: {params.slug}</h1>;
}

// src/app/layout.tsx → Layout raíz (envuelve todas las rutas)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}`,
    },
    {
      type: "heading",
      level: 3,
      text: "Layouts anidados con Route Groups",
    },
    {
      type: "text",
      body: "Los Route Groups (carpetas entre paréntesis) permiten organizar rutas sin afectar la URL. Esto es útil para tener diferentes layouts para diferentes secciones de la app.",
    },
    {
      type: "code",
      language: "typescript",
      code: `// Estructura de Farchódev Academy:
app/
├── layout.tsx              // Root: providers, fonts, metadata
├── (marketing)/
│   ├── layout.tsx          // Navbar + Footer
│   └── page.tsx            // Landing page → /
├── (dashboard)/
│   ├── layout.tsx          // Sidebar + navbar
│   ├── dashboard/page.tsx  // → /dashboard
│   ├── courses/page.tsx    // → /courses
│   └── learn/
│       └── [courseId]/
│           └── [lessonId]/
│               └── page.tsx // → /learn/1/l1
└── auth/
    ├── layout.tsx          // Layout centrado
    ├── login/page.tsx      // → /auth/login
    └── register/page.tsx   // → /auth/register`,
    },
    {
      type: "heading",
      level: 3,
      text: "Server Components vs Client Components",
    },
    {
      type: "text",
      body: "Por defecto, todos los componentes en Next.js App Router son Server Components: se renderizan en el servidor y envían HTML al cliente. Para agregar interactividad (useState, useEffect, event handlers), agregamos 'use client' al inicio del archivo.",
    },
    {
      type: "code",
      language: "typescript",
      code: `// Server Component (por defecto)
// Puede ser async, acceder a DB, APIs
async function CourseList() {
  const courses = await db.course.findMany();
  return courses.map(c => <CourseCard key={c.id} {...c} />);
}

// Client Component
"use client";
import { useState } from "react";

function LikeButton({ courseId }: { courseId: string }) {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️" : "🤍"}
    </button>
  );
}

// Server Component que contiene un Client Component
function CoursePage() {
  return (
    <div>
      <CourseList />       {/* Server */}
      <LikeButton />       {/* Client */}
    </div>
  );
}`,
    },
    {
      type: "tip",
      body: "FELICIDADES — Has completado el curso de Desarrollo Web Moderno. Ahora tienes una base sólida en HTML, CSS, JavaScript, React y Next.js. El siguiente paso es construir proyectos reales. Te recomendamos seguir con el roadmap de Frontend Developer para profundizar en cada tema.",
    },
  ],
}
