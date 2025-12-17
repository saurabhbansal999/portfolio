document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navMenu');
    const links = nav?.querySelectorAll('a');

    if (!menuToggle || !nav || !links) return;

    const setActive = () => {
        const hash = location.hash || '#home';
        links.forEach(a =>
            a.classList.toggle('active', a.getAttribute('href') === hash)
        );
    };

    menuToggle.addEventListener('click', () => nav.classList.toggle('active'));

    links.forEach(a =>
        a.addEventListener('click', () => {
            nav.classList.remove('active');
            setActive();
        })
    );

    window.addEventListener('hashchange', setActive);
    setActive();
});


// Scroll Active Link
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('#navMenu a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            links.forEach(a =>
                a.classList.toggle(
                    'active',
                    a.getAttribute('href') === `#${entry.target.id}`
                )
            );
        });
    }, {
        rootMargin: '-100px 0px -60% 0px'
    });

    sections.forEach(section => observer.observe(section));
});

const projects = [
    {
        image: 'assets/images/dummy1.png',
        stack: 'HTML SCSS Python Flask',
        title: 'Some quick example',
        desc: 'The bulk of the card’s content.',
        link: '#'
    },
    {
        image: 'assets/images/dummy1.png',
        stack: 'Laravel Vue Inertia',
        title: 'Admin Dashboard',
        desc: 'Feature rich admin panel with APIs.',
        link: '#'
    },
    {
        image: 'assets/images/dummy1.png',
        stack: 'PHP MySQL',
        title: 'Backend System',
        desc: 'Secure and optimized backend services.',
        link: '#'
    },
    {
        image: 'assets/images/dummy1.png',
        stack: 'Vue UI',
        title: 'Frontend UI',
        desc: 'Modern responsive frontend.',
        link: '#'
    },
    {
        image: 'assets/images/dummy1.png',
        stack: 'REST API',
        title: 'API Platform',
        desc: 'Scalable RESTful APIs.',
        link: '#'
    },
    {
        image: 'assets/images/dummy1.png',
        stack: 'Full Stack',
        title: 'Complete Product',
        desc: 'End-to-end web application.',
        link: '#'
    },
    {
        image: 'assets/images/dummy1.png',
        stack: 'REST API',
        title: 'API Platform',
        desc: 'Scalable RESTful APIs.',
        link: '#'
    },
    {
        image: 'assets/images/dummy1.png',
        stack: 'Full Stack',
        title: 'Complete Product',
        desc: 'End-to-end web application.',
        link: '#'
    }
];

const row = document.getElementById('projectsRow');
const template = document.getElementById('projectTemplate');
const btn = document.getElementById('viewAllProjects');

let visible = 3;

function renderProjects() {
    row.innerHTML = '';

    projects.slice(0, visible).forEach(p => {
        const card = template.content.cloneNode(true);
        card.querySelector('.project-image').src = p.image;
        card.querySelector('.project-stack').textContent = p.stack;
        card.querySelector('.project-title').textContent = p.title;
        card.querySelector('.project-desc').textContent = p.desc;
        card.querySelector('.project-link').href = p.link;
        const wrapper = card.querySelector('.col-4');
        wrapper.classList.add('project-animate');

        row.appendChild(card);
    });

    if (visible >= projects.length) btn.style.display = 'none';
}

renderProjects();

btn.addEventListener('click', e => {
    e.preventDefault();
    visible += 3;
    renderProjects();
});


