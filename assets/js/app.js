document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');
    const aboutCrazy = document.querySelector('.about-crazy');
    const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
    const navIndicator = nav ? document.createElement('span') : null;
    if (nav && navIndicator) {
        navIndicator.className = 'nav-indicator';
        nav.appendChild(navIndicator);
    }
    const navSectionIds = navLinks
        .map(link => link.getAttribute('href')?.replace('#', ''))
        .filter(Boolean);
    const sections = navSectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const projects = [
        {
            image: 'assets/images/dummy1.png',
            stack: ['PHP', 'Core PHP', 'MySQL'],
            title: 'PHP Website - Passionate People',
            desc: 'User-focused website with backend integration and robust data handling.',
            problem: 'Needed a functional platform with dynamic backend workflows.',
            role: 'Implemented backend logic and SQL database connectivity.',
            impact: 'Delivered a practical web solution with stable performance.',
            live: 'https://www.php.net/',
            code: 'https://github.com/saurabhbansal999'
        },
        {
            image: 'assets/images/dummy2.jpg',
            stack: ['Core PHP', 'SQL', 'PHPMyAdmin'],
            title: 'PHP Website - Akshar Star Electronics',
            desc: 'Core PHP implementation focused on robust backend and optimized database operations.',
            problem: 'Required structured backend logic and scalable data handling.',
            role: 'Built backend modules and optimized SQL queries.',
            impact: 'Improved reliability and maintainability of application workflows.',
            live: 'https://www.php.net/manual/en/intro-whatis.php',
            code: 'https://github.com/saurabhbansal999'
        },
        {
            image: 'assets/images/dummy3.jpg',
            stack: ['Laravel', 'Vue.js', 'Inertia.js'],
            title: 'Delhi House (Restaurant & Cafe) - Switzerland',
            desc: 'User-side and admin panel integration with dynamic menu, reservations, and contact forms.',
            problem: 'Needed immersive customer experience with centralized restaurant operations.',
            role: 'Developed Laravel user/admin modules with robust backend and SQL optimization in PHPMyAdmin.',
            impact: 'Enabled efficient restaurant management with seamless user-admin data flow.',
            live: 'https://laravel.com/',
            code: 'https://github.com/saurabhbansal999'
        },
        {
            image: 'assets/images/dummy1.png',
            stack: ['PHP', 'MVC', 'Laravel'],
            title: 'JKN Tours & Travels',
            desc: 'Travel website with booking processing, CMS management, and cross-device frontend support.',
            problem: 'Needed backend control for travel packages, bookings, and content updates.',
            role: 'Implemented backend in PHP with authentication, database handling, and responsive frontend.',
            impact: 'Delivered scalable website operations with better content and booking management.',
            live: 'https://laravel.com/docs/10.x',
            code: 'https://github.com/saurabhbansal999'
        },
        {
            image: 'assets/images/dummy2.jpg',
            stack: ['Git', 'GitHub', 'Collaboration'],
            title: 'Version-Controlled Web Delivery',
            desc: 'Used Git and GitHub for clean code collaboration and project tracking.',
            problem: 'Needed reliable workflow for team-based code changes.',
            role: 'Managed commits, branches, and collaborative updates.',
            impact: 'Improved code organization and deployment confidence.',
            live: 'https://github.com/',
            code: 'https://github.com/saurabhbansal999'
        },
        {
            image: 'assets/images/dummy3.jpg',
            stack: ['Responsive UI', 'Web Design', 'Frontend'],
            title: 'Responsive Web Interface Suite',
            desc: 'Modern responsive interfaces optimized for multiple device sizes.',
            problem: 'Inconsistent visual behavior across viewports.',
            role: 'Designed and implemented adaptive layouts and component styling.',
            impact: 'Consistent user experience across mobile and desktop.',
            live: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
            code: 'https://github.com/saurabhbansal999'
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    const loadMoreBtn = document.getElementById('viewAllProjects');
    let revealObserver = null;

    const batchSize = () => {
        if (window.innerWidth <= 560) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };

    let visibleCount = batchSize();

    const applyTheme = theme => {
        const dark = theme === 'dark';
        document.body.classList.toggle('dark-theme', dark);
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            const label = themeToggle.querySelector('span');
            if (icon) icon.className = dark ? 'bi bi-sun' : 'bi bi-moon-stars';
            if (label) label.textContent = dark ? 'Light' : 'Dark';
        }
    };

    const setMenuExpanded = expanded => {
        if (!menuToggle) return;
        menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };

    const closeMenu = () => {
        if (!nav) return;
        nav.classList.remove('active');
        setMenuExpanded(false);
    };

    const markActiveLink = id => {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
        });
        updateNavIndicator();
    };

    const updateNavIndicator = () => {
        if (!nav || !navIndicator) return;
        if (window.innerWidth <= 768) {
            navIndicator.style.opacity = '0';
            return;
        }

        const activeLink = navLinks.find(link => link.classList.contains('active'));
        if (!activeLink) {
            navIndicator.style.opacity = '0';
            return;
        }

        navIndicator.style.width = `${activeLink.offsetWidth}px`;
        navIndicator.style.transform = `translateX(${activeLink.offsetLeft}px)`;
        navIndicator.style.opacity = '1';
    };

    const renderProjects = () => {
        if (!projectsGrid || !loadMoreBtn) return;

        projectsGrid.innerHTML = '';

        projects.slice(0, visibleCount).forEach(project => {
            const article = document.createElement('article');
            article.className = 'project-card';

            const badges = project.stack
                .map(tag => `<span class="project-badge">${tag}</span>`)
                .join('');

            article.innerHTML = `
                <img src="${project.image}" alt="${project.title}" />
                <div class="project-body">
                    <div class="project-stack">${badges}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="case-meta">
                        <p><strong>Problem:</strong> ${project.problem}</p>
                        <p><strong>Role:</strong> ${project.role}</p>
                        <p><strong>Impact:</strong> ${project.impact}</p>
                    </div>
                    <div class="project-actions">
                        <a href="${project.live}" class="primary" target="_blank" rel="noopener noreferrer">View Live <i class="bi bi-box-arrow-up-right"></i></a>
                        <a href="${project.code}" target="_blank" rel="noopener noreferrer">View Code <i class="bi bi-github"></i></a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(article);
        });

        loadMoreBtn.style.display = visibleCount >= projects.length ? 'none' : 'inline-flex';
        registerRevealTargets();
    };

    const registerRevealTargets = () => {
        if (prefersReducedMotion) return;
        const revealTargets = document.querySelectorAll([
            '.section-head',
            '.project-card',
            '.metric-card',
            '.skill-cluster',
            '.info-card',
            '.process-step',
            '.timeline-item',
            '.testimonial-card',
            '.edu-card',
            '.about-panel',
            '.contact-card',
            '.hero-stats .stat-card',
            '.hero-actions .btn',
            '.hero-pills span'
        ].join(','));

        revealTargets.forEach((element, index) => {
            if (!element.classList.contains('reveal-up')) {
                element.classList.add('reveal-up');
                element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
            }
            revealObserver?.observe(element);
        });
    };

    const initRevealObserver = () => {
        if (prefersReducedMotion) return;
        revealObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    revealObserver?.unobserve(entry.target);
                });
            },
            {
                threshold: 0.16,
                rootMargin: '0px 0px -12% 0px'
            }
        );
        registerRevealTargets();
    };

    const initCustomCursor = () => {
        if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

        const dot = document.createElement('span');
        const ring = document.createElement('span');
        dot.className = 'cursor-dot';
        ring.className = 'cursor-ring';
        document.body.append(dot, ring);
        document.body.classList.add('custom-cursor');

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let rafId = null;

        const setCursorPos = () => {
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            ringX += (mouseX - ringX) * 0.26;
            ringY += (mouseY - ringY) * 0.26;
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

            const dx = Math.abs(mouseX - ringX);
            const dy = Math.abs(mouseY - ringY);
            if (dx > 0.08 || dy > 0.08) {
                rafId = window.requestAnimationFrame(setCursorPos);
            } else {
                rafId = null;
            }
        };

        document.addEventListener('pointermove', event => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            if (!rafId) rafId = window.requestAnimationFrame(setCursorPos);
        });

        document.addEventListener('mouseover', event => {
            const interactive = event.target.closest('a, button, .btn, [role="button"]');
            document.body.classList.toggle('cursor-hover', Boolean(interactive));
        });

        document.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
        document.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));
        if (!rafId) rafId = window.requestAnimationFrame(setCursorPos);
    };

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('active');
            setMenuExpanded(isOpen);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
                const targetId = link.getAttribute('href')?.replace('#', '');
                if (targetId) markActiveLink(targetId);
            });
        });

        document.addEventListener('click', event => {
            if (!nav.classList.contains('active')) return;
            if (nav.contains(event.target) || menuToggle.contains(event.target)) return;
            closeMenu();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeMenu();
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += batchSize();
            renderProjects();
        });
    }

    const updateActiveByScroll = () => {
        if (!sections.length) return;

        const headerOffset = 130;
        const targetY = window.scrollY + headerOffset;
        let activeId = sections[0].id;

        sections.forEach(section => {
            if (section.offsetTop <= targetY) {
                activeId = section.id;
            }
        });

        markActiveLink(activeId);
    };

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                markActiveLink(entry.target.id);
            });
        },
        {
            threshold: 0.45,
            rootMargin: '-18% 0px -45% 0px'
        }
    );

    sections.forEach(section => sectionObserver.observe(section));

    const initialHash = window.location.hash.replace('#', '') || 'home';
    markActiveLink(initialHash);

    const storedTheme = localStorage.getItem('theme');
    applyTheme(storedTheme || 'light');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', nextTheme);
            applyTheme(nextTheme);
        });
    }

    window.addEventListener('resize', () => {
        const minimumVisible = batchSize();
        visibleCount = Math.max(visibleCount, minimumVisible);
        if (window.innerWidth > 768) closeMenu();
        renderProjects();
        updateActiveByScroll();
        updateNavIndicator();
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '') || 'home';
        markActiveLink(hash);
    });

    window.addEventListener('scroll', updateActiveByScroll, { passive: true });

    if (aboutCrazy && !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
        const resetTilt = () => {
            aboutCrazy.style.setProperty('--tilt-x', '0deg');
            aboutCrazy.style.setProperty('--tilt-y', '0deg');
            aboutCrazy.style.setProperty('--mx', '50%');
            aboutCrazy.style.setProperty('--my', '50%');
        };

        aboutCrazy.addEventListener('mousemove', event => {
            const rect = aboutCrazy.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            const tiltX = (0.5 - y) * 7;
            const tiltY = (x - 0.5) * 7;

            aboutCrazy.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
            aboutCrazy.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
            aboutCrazy.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
            aboutCrazy.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
        });

        aboutCrazy.addEventListener('mouseleave', resetTilt);
        resetTilt();
    }

    initRevealObserver();
    initCustomCursor();
    renderProjects();
    updateActiveByScroll();
    updateNavIndicator();
});
