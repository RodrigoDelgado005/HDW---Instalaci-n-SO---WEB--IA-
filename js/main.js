// Función para controlar el menú móvil
function setupMobileMenu() {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);

// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', setupMobileMenu);

// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', setupMobileMenu);
// Función para cambiar el color de fondo del body cada 5 segundos
function changeBackgroundColor() {
    const colors = ['#f0f2f5', '#e6f3ff', '#fff5e6', '#f0fff0'];
    let currentIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 5000);
}

// Función para crear un efecto de escritura en el título principal
function typewriterEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Función para animar la aparición de secciones al hacer scroll
function animateSections() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Iniciar el cambio de color de fondo
    changeBackgroundColor();

    // Aplicar efecto de escritura al título principal
    const mainTitle = document.querySelector('.hero-body .title');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        typewriterEffect(mainTitle, originalText);
    }

    // Agregar interactividad a las cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Agregar un botón "Volver arriba"
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = 'Volver arriba';
    scrollTopButton.classList.add('button', 'is-primary', 'is-rounded', 'scroll-top-button');

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Animar secciones al hacer scroll
    animateSections();

    // Contador de visitas (simulado)
    const visitCounter = document.getElementById('visit-counter');
    if (visitCounter) {
        let visits = localStorage.getItem('visits') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('visits', visits);
        visitCounter.textContent = visits;
    }

    // Datos curiosos
    const funFacts = [
        "Windows 1.0 fue lanzado en 1985.",
        "El logotipo de Windows ha cambiado 11 veces desde su creación.",
        "Windows XP sigue siendo utilizado por aproximadamente el 1% de los usuarios de Windows en todo el mundo.",
        "El sonido de inicio de Windows 95 fue compuesto por Brian Eno en un Mac.",
        "La primera versión de Windows que incluyó Internet Explorer fue Windows 95 OSR1 en 1995."
    ];

    const funFactElement = document.getElementById('fun-fact');
    if (funFactElement) {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFactElement.textContent = randomFact;
    }
});

// Inicializar tooltips
tippy('[data-tippy-content]');

