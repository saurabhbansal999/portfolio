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

    // Optional per-project image format:
    // images: [{ src: 'assets/images/your-image.jpg', caption: 'Optional caption' }, ...]
    const projects = [
        {
            image: 'assets/images/FCN/Screenshot_1.png',
            images: [
                { src: 'assets/images/FCN/Screenshot_1.png', caption: 'FCN Seating - Seat map overview' },
                { src: 'assets/images/FCN/Screenshot_2.png', caption: 'FCN Seating - Section and seat visualization' },
                { src: 'assets/images/FCN/Screenshot_3.png', caption: 'FCN Seating - Assignment workflow screen' },
                { src: 'assets/images/FCN/Screenshot_4.png', caption: 'FCN Seating - Seat status legend and controls' },
                { src: 'assets/images/FCN/Screenshot_5.png', caption: 'FCN Seating - Search and filtering interactions' },
                { src: 'assets/images/FCN/Screenshot_6.png', caption: 'FCN Seating - Seat state details view' },
                { src: 'assets/images/FCN/Screenshot_7.png', caption: 'FCN Seating - Responsive layout view' },
                { src: 'assets/images/FCN/Screenshot_8.png', caption: 'FCN Seating - Reassignment and validation flow' },
                { src: 'assets/images/FCN/Screenshot_9.png', caption: 'FCN Seating - Occupancy and availability overview' }
            ],
            stack: ['Laravel', 'Vue 3', 'Responsive UI', 'Seat Workflow'],
            title: 'FCN Seating',
            desc: 'Interactive seat planning platform that replaces manual tracking with a clear, fast allocation workflow.',
            overview: 'FCN Seating was designed as a practical operations-first interface where seating layouts, assignment decisions, and occupancy visibility are handled in one responsive system instead of fragmented manual trackers.',
            problem: 'Seat planning was being handled through manual or spreadsheet-heavy coordination, which made seat changes slow, increased assignment mistakes, and reduced visibility for operations teams during daily movement, onboarding, and internal reshuffles.',
            solution: 'I implemented a structured UI workflow that visualizes seat maps clearly, supports assignment and reassignment, validates user actions, and keeps seat state communication immediately understandable for admins on both desktop and mobile.',
            highlights: [
                'Interactive section and floor-level seat visualization with clear visual hierarchy',
                'Seat state handling for available, occupied, reserved, and blocked scenarios',
                'Fast search and filter flows to locate seats, segments, and target groups quickly',
                'Validation-oriented interactions to reduce invalid seat moves and duplicate assignments',
                'Responsive behavior tuned for desktop operations as well as tablet and mobile usage',
                'Clean accessibility-aware UI patterns to keep high information density readable'
            ],
            modules: [
                'Seat map renderer and state legend',
                'Assignment and reassignment workflow controls',
                'Availability and occupancy status indicators',
                'Filter/search navigation for faster operational lookup',
                'UI validation and constraint handling layer'
            ],
            architecture: [
                'Component-oriented front-end structure for maintainable growth',
                'Reusable UI patterns to reduce duplication and keep interaction behavior consistent',
                'Separation between display states and assignment actions to simplify debugging',
                'Responsive-first layout strategy for reliable cross-device performance'
            ],
            security: [
                'Validation-heavy user interactions to prevent operationally unsafe state changes',
                'Defensive UI logic to reduce mis-click and invalid allocation flows',
                'Consistent state rendering to avoid ambiguity in occupancy interpretation'
            ],
            role: [
                'End-to-end front-end implementation of the seating interface',
                'UI/UX execution focused on speed, readability, and operational clarity',
                'Seat state and assignment flow logic implementation',
                'Responsive tuning and cross-device compatibility adjustments',
                'Code structure cleanup for easier long-term maintenance'
            ],
            outcomes: [
                'Reduced spreadsheet dependency and manual seat tracking overhead',
                'Improved real-time visibility of occupancy and remaining capacity',
                'Faster seat allocation decisions with less back-and-forth coordination',
                'Created a scalable baseline for reporting, permissions, and integration extensions'
            ]
        },
        {
            image: 'assets/images/FAI MEDICAL/Screenshot_1.png',
            images: [
                { src: 'assets/images/FAI MEDICAL/Screenshot_1.png', caption: 'FAI Medical - Dashboard and mission overview' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_2.png', caption: 'FAI Medical - Transport creation workflow' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_3.png', caption: 'FAI Medical - Patient clinical information module' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_4.png', caption: 'FAI Medical - Crew assignment and operations details' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_5.png', caption: 'FAI Medical - Pre-flight and assessment screen' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_6.png', caption: 'FAI Medical - In-flight timeline and care module' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_7.png', caption: 'FAI Medical - Nursing care and patient tracking' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_8.png', caption: 'FAI Medical - Handover and post-flight documentation' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_9.png', caption: 'FAI Medical - Reports and clinical visual summaries' },
                { src: 'assets/images/FAI MEDICAL/Screenshot_10.png', caption: 'FAI Medical - Admin module and data management view' }
            ],
            stack: ['Laravel 11', 'Vue 3', 'Inertia.js', 'Sanctum', 'Chart.js'],
            title: 'FAI Medical',
            desc: 'Full-stack air-ambulance transport platform covering mission creation, clinical workflows, and secure reporting.',
            overview: 'FAI Medical is a domain-heavy full-stack healthcare operations platform that digitizes complete patient transport workflows from mission creation to handover and report delivery, with both admin-panel and API-facing execution paths.',
            problem: 'Medical transport workflows are often fragmented across manual coordination, partial clinical records, and disconnected systems, causing delays, inconsistent documentation, lower traceability, and higher risk in mission-critical transfers.',
            solution: 'I built a unified workflow system with structured clinical modules, secure API access, protected file handling, validation-rich form flows, lock controls for finalized transports, and asynchronous reporting pipelines to ensure reliability and compliance-oriented execution.',
            highlights: [
                'End-to-end transport lifecycle management from request to final handover',
                'Structured patient data capture: demographics, diagnoses, allergies, history, vitals, labs, medications, fluids, and visual markers',
                'Operational masters: users, trip types, aircraft call signs, airports, devices, positions, and configurable medical types',
                'Queued PDF report generation with charted vital signs and mail delivery',
                'Localization support for English and German with user-level preference',
                'Data integrity controls through strong validation and transport lock mechanisms'
            ],
            modules: [
                'Mission creation and scheduling workflows',
                'Crew assignment and role mapping',
                'Clinical modules: anamnesis, pre-flight, in-flight timeline, nursing care, post-flight, takeover/handover, evaluation',
                'Secure document and media management',
                'Medical report generation and delivery pipeline',
                'Sync/version endpoints for client freshness and consistency'
            ],
            architecture: [
                'Laravel 11 + PHP 8.2 backend with modular domain controllers and resources',
                'Vue 3 + Inertia.js frontend for workflow-oriented interfaces',
                'Queue-driven asynchronous processing for report generation and notifications',
                'Relational data modeling for transport, clinical, and timeline entities',
                'API + web parity approach for aligned operational behavior across channels'
            ],
            security: [
                'Sanctum API authentication and protected web auth flows',
                'Optional 2FA and OTP-based recovery support',
                'Device verification controls for API access boundaries',
                'Encrypted document/media storage and temporary signed URLs',
                'Private file streaming controls and secure document retrieval'
            ],
            role: [
                'Full-stack ownership across architecture, backend modeling, and frontend workflow UX',
                'Implemented secure access layer, file handling, and validation-heavy data flows',
                'Built asynchronous report generation, chart rendering, and email automation',
                'Delivered localization-aware user experience and maintainable project structure'
            ],
            outcomes: [
                'Centralized clinical and operational mission workflows in one product',
                'Improved consistency, auditability, and reliability of transport documentation',
                'Reduced manual coordination delay across operations and medical teams',
                'Created a compliance-sensitive foundation for future analytics and integrations'
            ]
        },
        {
            image: 'assets/images/NoLimits/Screenshot_1.png',
            images: [
                { src: 'assets/images/NoLimits/Screenshot_1.png', caption: 'NoLimits - Dashboard and operations overview' },
                { src: 'assets/images/NoLimits/Screenshot_2.png', caption: 'NoLimits - Property and unit management view' },
                { src: 'assets/images/NoLimits/Screenshot_3.png', caption: 'NoLimits - Prospect and contract workflow screen' },
                { src: 'assets/images/NoLimits/Screenshot_4.png', caption: 'NoLimits - Contract lifecycle and status controls' },
                { src: 'assets/images/NoLimits/Screenshot_5.png', caption: 'NoLimits - Commission tracking and distribution view' },
                { src: 'assets/images/NoLimits/Screenshot_6.png', caption: 'NoLimits - Admin controls and business analytics' }
            ],
            stack: ['Laravel 11', 'Vue 3', 'Inertia.js', 'Tailwind', 'Commission Engine'],
            title: 'NoLimits',
            desc: 'Real estate operations and commission platform managing inventory, contracts, and multi-level payouts.',
            overview: 'NoLimits is an enterprise-style real estate platform that centralizes the full sales lifecycle from inventory setup and lead handling to contract execution and hierarchical commission distribution.',
            problem: 'Real estate organizations often run operations across spreadsheets, chats, and disconnected CRMs, causing data mismatch between properties, prospects, contracts, and payouts and creating payout disputes across partner hierarchies.',
            solution: 'I delivered a role-driven system with auditable contract states, secure file handling, and a recursive commission engine that calculates and distributes partner earnings through parent-child structures with clear traceability.',
            highlights: [
                'Role-based workflows for admin, partner, prospect, and closer personas',
                'Property and unit inventory with media, amenities, and location references',
                'Contract lifecycle states: Draft, Signed, Rejected, Paid, Distributed',
                'Recursive commission distribution across multi-tier partner relationships',
                'Searchable, paginated operational modules and dashboard insights',
                'Localization support for English and German user experiences'
            ],
            modules: [
                'Role and permission management with route authorization',
                'Property, unit, and media inventory module',
                'Prospect onboarding and qualification flows',
                'Contract generation, status control, and document handling',
                'Commission tracking/filtering and distribution engine',
                'Operational KPI dashboard and reporting views'
            ],
            architecture: [
                'Laravel 11 + Vue 3 + Inertia.js full-stack architecture',
                'Modular controllers and reusable traits for maintainability',
                'Relational schema with ULID entities and polymorphic media relations',
                'Status-driven business logic enforcing workflow integrity',
                'Production-ready module boundaries for future feature scaling'
            ],
            security: [
                'Route-level permission enforcement with role-aware access constraints',
                'Encrypted contract file storage and signed temporary URLs',
                'Data cleanup routines for media/document lifecycle hygiene',
                'Role-aware status transitions to prevent unauthorized contract movement'
            ],
            role: [
                'Full-stack implementation of inventory, CRM, contract, and commission domains',
                'Designed and built hierarchical payout logic with auditable records',
                'Implemented secure document workflows and access controls',
                'Built dashboard metrics and operational listing experiences'
            ],
            outcomes: [
                'Reduced manual payout errors and disputes with transparent commission records',
                'Improved deal traceability across sales and post-sales operations',
                'Faster workflow execution through one centralized operating platform',
                'Scalable foundation for partner network expansion and advanced analytics'
            ]
        },
        {
            image: 'assets/images/LETSTALK/Screenshot_1.png',
            images: [
                { src: 'assets/images/LETSTALK/Screenshot_1.png', caption: "Let'z Talk - Dashboard and scenario overview" },
                { src: 'assets/images/LETSTALK/Screenshot_2.png', caption: "Let'z Talk - Scenario creation and assignment flow" },
                { src: 'assets/images/LETSTALK/Screenshot_3.png', caption: "Let'z Talk - Student and trainer interaction screen" },
                { src: 'assets/images/LETSTALK/Screenshot_4.png', caption: "Let'z Talk - Chat and conversation workflow" },
                { src: 'assets/images/LETSTALK/Screenshot_5.png', caption: "Let'z Talk - Audio and review module view" },
                { src: 'assets/images/LETSTALK/Screenshot_6.png', caption: "Let'z Talk - Reporting and admin control interface" }
            ],
            stack: ['Laravel 11', 'Vue 3', 'OpenAI', 'FFmpeg', 'DOMPDF'],
            title: "Let'z Talk",
            desc: 'AI-assisted scenario training platform for institutes with text and audio assessment workflows.',
            overview: "Let'z Talk is a full-stack, role-based training platform where institutes run scenario-based communication practice using AI-assisted text/audio conversations and structured trainer review workflows.",
            problem: 'Institutes were handling scenario training manually, which led to inconsistent feedback standards, high trainer workload, weak progress visibility, and poor scalability as users increased.',
            solution: 'I built an end-to-end platform with dedicated admin/trainer/student journeys, scenario lifecycle controls, AI-supported messaging, queue-driven async processing, exportable records, and multilingual support to make training scalable and measurable.',
            highlights: [
                'Scenario create/edit/assign/archive lifecycle with role-aware controls',
                'Student-trainer chat threads with text and audio message support',
                'Audio processing workflows including capture, merge, and review/download',
                'Public/QR scenario access flow with controlled entry behavior',
                'PDF exports for scenario/chat records and training documentation',
                'Localization support and secure role-permission enforcement'
            ],
            modules: [
                'Institute, trainer, student, role, and permission administration',
                'Scenario authoring and assignment management',
                'AI-assisted conversation orchestration',
                'Audio media handling and file workflows',
                'Queue jobs for chat/rating/background processing',
                'Dashboard and operational monitoring views'
            ],
            architecture: [
                'Laravel 11 backend with modular controllers, middleware, traits, and queues',
                'Vue 3 + Inertia.js frontend for SPA-like user experience',
                'Service-oriented reusable logic for chat/media/storage operations',
                'Relational data model with migrations/seeders for maintainable growth',
                'Structured logs and error handling prepared for production observability'
            ],
            security: [
                'Sanctum-backed auth and protected route groups',
                'Role-permission framework to isolate responsibilities',
                'Session and access validation for controlled workflows',
                'Secure handling of training artifacts and generated exports'
            ],
            role: [
                'Full-stack ownership across architecture, API/domain design, and frontend modules',
                'Implemented chat and audio workflow engines',
                'Built queue processing strategy for scale and response-time stability',
                'Delivered secure RBAC model and multilingual user flow implementation'
            ],
            outcomes: [
                'Reduced manual administration overhead in scenario training operations',
                'Improved consistency in learner assessment and review handling',
                'Enabled scalable throughput without equivalent trainer headcount growth',
                'Created a strong base for future scoring analytics and intelligence layers'
            ]
        },
        {
            image: 'assets/images/TENDER SYSTEM/Screenshot_1.png',
            images: [
                { src: 'assets/images/TENDER SYSTEM/Screenshot_1.png', caption: 'Tender System - Dashboard and project listing' },
                { src: 'assets/images/TENDER SYSTEM/Screenshot_2.png', caption: 'Tender System - Lead and vendor management view' },
                { src: 'assets/images/TENDER SYSTEM/Screenshot_3.png', caption: 'Tender System - Project creation workflow' },
                { src: 'assets/images/TENDER SYSTEM/Screenshot_4.png', caption: 'Tender System - Itemized requirement and media setup' },
                { src: 'assets/images/TENDER SYSTEM/Screenshot_5.png', caption: 'Tender System - Bid submission and response screen' },
                { src: 'assets/images/TENDER SYSTEM/Screenshot_6.png', caption: 'Tender System - Bid comparison and decision module' },
                { src: 'assets/images/TENDER SYSTEM/Screenshot_7.png', caption: 'Tender System - Communication and bid-level chat flow' },
                { src: 'assets/images/TENDER SYSTEM/Screenshot_8.png', caption: 'Tender System - Analytics and operational tracking view' }
            ],
            stack: ['Laravel 10', 'Vue 3', 'Inertia.js', 'Tailwind', 'Queued Mail'],
            title: 'Tender Management System',
            desc: 'Role-based procurement platform for project creation, vendor bidding, bid comparison, and approvals.',
            overview: 'This Tender Management System digitizes procurement operations end-to-end by bringing leads, project requirements, vendor participation, bid decisions, and communication into a single controlled workflow.',
            problem: 'Traditional tender operations were fragmented across email threads, spreadsheets, and manual follow-ups, causing slow decisions, weak traceability, and high administrative overhead.',
            solution: 'I implemented a role-separated admin/vendor system with item-level project and bid flows, bid comparison and approval controls, contextual bid chat, automated notifications, and status-driven governance.',
            highlights: [
                'Lead intake and vendor onboarding integrated into project workflows',
                'Project creation with itemized scope, timeline, delivery location, and attachments',
                'Vendor invitation and bid submission per project item with support files',
                'Admin comparison, approval/rejection controls, and synchronized status updates',
                'Bid-level communication channel for operational clarity',
                'Queued email notifications across all critical workflow transitions'
            ],
            modules: [
                'Lead management with search, sort, pagination, and documents',
                'Tender/vendor profile management with onboarding email flow',
                'Project and project-item module with media handling',
                'Bid and bid-item execution flow with chat integration',
                'Bid decision and project progression controls',
                'Dashboard analytics for project and bid state visibility'
            ],
            architecture: [
                'Laravel 10 + PHP 8.1 backend with domain-oriented controllers',
                'Vue 3 + Inertia.js + Tailwind frontend with reusable module components',
                'Middleware-based role authorization and protected route segmentation',
                'ULID-based entity references and relational data modeling',
                'SSR-ready frontend entry with scalable build pipeline via Vite'
            ],
            security: [
                'Role-specific middleware guards for admin and vendor boundaries',
                'Validation-heavy request rules for dates, numbers, and business constraints',
                'Controlled file resource serving with cleanup on delete flows',
                'Queued transactional notifications reducing manual state miscommunication'
            ],
            role: [
                'Delivered complete full-stack implementation across procurement lifecycle',
                'Designed status-driven workflow and approval logic',
                'Built chat and notification integration for stakeholder communication',
                'Implemented analytics-oriented dashboard views and operational listings'
            ],
            outcomes: [
                'Replaced scattered tender coordination with a traceable central system',
                'Improved decision quality through item-level bid visibility',
                'Reduced communication lag via automated notifications and bid chat',
                'Lowered operational overhead for teams handling multiple tenders concurrently'
            ]
        },
        {
            image: 'assets/images/SALMONE/Screenshot_1.png',
            images: [
                { src: 'assets/images/SALMONE/Screenshot_1.png', caption: 'Salmone - Landing and brand presentation view' },
                { src: 'assets/images/SALMONE/Screenshot_2.png', caption: 'Salmone - Partner management dashboard workflow' },
                { src: 'assets/images/SALMONE/Screenshot_3.png', caption: 'Salmone - Admin controls and content operations' }
            ],
            stack: ['Laravel', 'Vue.js', 'Inertia.js', 'Blade', 'Vite'],
            title: 'Salmone Digital Platform',
            desc: 'Brand website and partner management dashboard built as a unified full-stack business platform.',
            overview: 'Salmone Digital Platform combines a public-facing brand website and a secure admin management system, enabling professional brand presentation while keeping partner operations centralized and maintainable.',
            problem: 'Brand and partner updates were typically manual and developer-dependent, resulting in inconsistent data updates, slower content cycles, and weaker control over partner information quality.',
            solution: 'I implemented a split but connected architecture: a modern landing experience for brand communication and a protected backend panel for partner CRUD, validation, image workflows, and operational content control.',
            highlights: [
                'Public pages for Home, About, Imprint, and Data Protection',
                'Reusable front-end components: navigation, carousel, sponsor area, contact, and footer',
                'Partner management dashboard with create/read/update/delete workflows',
                'Search, sorting, pagination, and URL validation for clean partner records',
                'Image/logo upload processing for structured brand asset handling',
                'Authentication-protected admin routes and profile management'
            ],
            modules: [
                'Public brand communication pages',
                'Admin partner lifecycle management',
                'Media and logo handling flows',
                'Validation and content consistency controls',
                'Protected authentication and profile module'
            ],
            architecture: [
                'Laravel backend with MVC controller-driven domain structure',
                'Blade-based landing implementation for public experience',
                'Vue + Inertia admin layer for dashboard workflows',
                'Migration-first schema design for maintainability and growth',
                'Reusable UI composition for faster future expansion'
            ],
            security: [
                'Authenticated admin-only route groups for management workflows',
                'Server-side validation for partner data integrity',
                'Controlled media processing and cleanup flows'
            ],
            role: [
                'Designed and developed complete full-stack architecture',
                'Built both public-facing brand UI and internal admin workflows',
                'Implemented validation, authentication, and secure routing behavior',
                'Structured partner data models and migration setup'
            ],
            outcomes: [
                'Improved brand credibility with a professional digital presence',
                'Enabled faster non-technical partner/content updates',
                'Reduced inconsistency in partner information across the platform',
                'Established maintainable technical foundation for future business scaling'
            ]
        },
        {
            image: 'assets/images/placeholders/fishing-club.svg',
            hideImagesTab: true,
            stack: ['Laravel 11', 'Vue 3', 'Inertia.js', 'Passport', 'FCM'],
            title: 'Fishing Club Management Platform',
            desc: 'Centralized club operations platform with multi-role access, member APIs, and workflow automation.',
            overview: 'Fishing Club Management Platform is a full-featured web + API solution for fishing clubs to run operations, member engagement, reporting, and billing from a centralized role-driven system.',
            problem: 'Club operations often rely on manual coordination across members, events, waters, tasks, and billing; this causes poor visibility, communication delays, and process inconsistency across teams and seasons.',
            solution: 'I built a centralized multi-role platform with secure member APIs, workflow automation, module-level access controls, and integrated operational tools such as QR tasks, reporting, notifications, and billing exports.',
            highlights: [
                'Multi-role workflows: Super Admin, Club Manager, Editor, Staff, Member',
                'Member lifecycle management with import/export, restore, block/unblock, and profile handling',
                'Waters and fishing-rule modules with location and weather-aware updates',
                'Task/event workflows including approvals, reminders, and QR execution',
                'Catch/haul diary with daily, monthly, yearly, and water-wise insights',
                'Billing, invoice tracking, and SEPA export support'
            ],
            modules: [
                'Club and member administration',
                'Waters management, fishing rules, and district-based imports',
                'Events, tasks, attendance, and reminders',
                'News and member engagement features',
                'Document center with private/general access boundaries',
                'Reporting and billing workflows with exports'
            ],
            architecture: [
                'Laravel 11 backend with queue-friendly job processing',
                'Vue 3 + Inertia.js front-end module composition',
                'Passport/Sanctum-based auth layers for role and API security',
                'ApexCharts-enabled reporting experiences for operational insight',
                'Integration-ready architecture for weather, push, and cloud storage services'
            ],
            security: [
                'Role-based protected modules for each user type',
                'OTP-based password reset and controlled member access',
                'API logging and failed-job observability support',
                'Structured notification and access flows for sensitive operations'
            ],
            role: [
                'Implemented full-stack modules across operations, engagement, and reporting domains',
                'Built secure API pathways and role-permission behavior',
                'Integrated asynchronous jobs for reminders, weather refresh, and session closure',
                'Delivered invoicing and export flows for financial operations'
            ],
            outcomes: [
                'Reduced manual coordination effort in day-to-day club operations',
                'Improved engagement consistency through automated communication workflows',
                'Enhanced reporting visibility for decision making across club teams',
                'Created scalable operational foundation for growing member communities'
            ]
        },
        {
            image: 'assets/images/placeholders/delhi-house.svg',
            hideImagesTab: true,
            stack: ['Laravel', 'Vue.js', 'Inertia.js', 'PHPMyAdmin'],
            title: 'Delhi House (Restaurant and Cafe) - Switzerland',
            desc: 'Full-stack restaurant platform with integrated customer-side journeys and centralized admin operations.',
            overview: 'Delhi House is a project-focused delivery where customer interactions and restaurant operations were unified in one Laravel-based platform with user and admin modules.',
            problem: 'The business needed a connected experience where menu discovery, reservations, and contact flows work smoothly for users while admins retain control over menus, reservations, users, and content updates.',
            solution: 'I implemented user and admin workflows in Laravel, connected critical restaurant modules, and optimized SQL schema/indexing to improve responsiveness and operational reliability.',
            highlights: [
                'Integrated user-side and admin-side modules in one coordinated system',
                'Implemented menu browsing and reservation workflows',
                'Built interactive contact flows for better lead conversion',
                'Developed centralized admin controls for menu and reservation management',
                'Improved backend data operations through SQL optimization in PHPMyAdmin'
            ],
            modules: [
                'Customer-facing menu and reservation interfaces',
                'Admin panel for users, menus, reservations, and content',
                'Contact and inquiry handling flows',
                'Database optimization and schema tuning'
            ],
            architecture: [
                'Laravel module separation for user/admin responsibilities',
                'Relational SQL structure aligned with restaurant operations',
                'Backend-first flow design to keep data consistent across interfaces'
            ],
            security: [
                'Role-oriented admin access behavior',
                'Server-side validation for reservation and contact submissions',
                'Database-level consistency improvements for stable operations'
            ],
            role: [
                'Implemented full-stack Laravel workflows for both user and admin sides',
                'Built reservation, menu, and contact functionality',
                'Optimized database structure and query behavior in PHPMyAdmin'
            ],
            outcomes: [
                'Enabled seamless user-admin data flow across restaurant operations',
                'Improved reservation handling and content control efficiency',
                'Delivered a stable project architecture suitable for operational scaling'
            ]
        },
        {
            image: 'assets/images/placeholders/passionate-people.svg',
            hideImagesTab: true,
            stack: ['Core PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            title: 'Passionate People',
            desc: 'Media-focused web platform built around branding communication and user engagement.',
            overview: 'Passionate People was developed as a practical media website project focused on clear communication, structured content delivery, and responsive front-end behavior.',
            problem: 'The project required an organized website experience that supports branding communication while maintaining backend data handling and stable performance.',
            solution: 'I implemented backend logic in Core PHP, structured MySQL storage, and responsive UI layers to ensure predictable rendering and maintainable content flow.',
            highlights: [
                'Media and branding-oriented website structure',
                'Backend workflows in Core PHP for data handling',
                'Responsive front-end implementation across device sizes',
                'MySQL schema design aligned with content flow'
            ],
            modules: [
                'Content display and page layout modules',
                'Core PHP backend handlers',
                'MySQL data persistence layer',
                'Responsive UI structure'
            ],
            architecture: [
                'Classic PHP + MySQL architecture with clear module boundaries',
                'Separation of presentation and backend processing logic',
                'Simple and maintainable structure suitable for iterative enhancement'
            ],
            security: [
                'Validation-focused backend handling for content workflows',
                'Structured data access patterns for predictable processing'
            ],
            role: [
                'Built backend workflows and integrated database logic',
                'Implemented responsive front-end interfaces',
                'Planned layout structure for communication and engagement'
            ],
            outcomes: [
                'Delivered a stable media-focused web solution',
                'Improved clarity of branding communication through structured UI',
                'Established maintainable project foundation for future improvements'
            ]
        },
        {
            image: 'assets/images/placeholders/akshar-star.svg',
            hideImagesTab: true,
            stack: ['Core PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
            title: 'Akshar Star Electronics',
            desc: 'Core PHP web project focused on structured backend logic and scalable data handling.',
            overview: 'Akshar Star Electronics was built as a full project exercise combining backend programming patterns, responsive UI delivery, and scalable database design.',
            problem: 'The project needed a dependable Core PHP structure with clear business logic, good usability, and data handling that remains stable as content grows.',
            solution: 'I implemented organized backend modules, responsive front-end pages, and MySQL schema planning supported by system design models like DFD and ERD.',
            highlights: [
                'Implemented project logic with structured programming patterns',
                'Designed layouts for clearer navigation and presentation',
                'Developed backend infrastructure in Core PHP',
                'Built responsive interfaces with HTML5, CSS, JavaScript, and Bootstrap',
                'Created scalable MySQL storage model with flow documentation'
            ],
            modules: [
                'Core PHP backend processing modules',
                'Frontend layout and responsive interaction layer',
                'Database model and query workflows',
                'System flow and architecture documentation'
            ],
            architecture: [
                'PHP + MySQL architecture with practical modularization',
                'Database-first planning approach for data integrity',
                'Frontend/backend coordination for predictable user flow'
            ],
            security: [
                'Validation-oriented backend handling',
                'Structured data processing for reliable form and content operations'
            ],
            role: [
                'Implemented backend and frontend modules end to end',
                'Designed database structure and architecture documents',
                'Built responsive experience and navigation flow'
            ],
            outcomes: [
                'Delivered a reliable educational-to-production style project baseline',
                'Improved usability with clearer layout and responsive behavior',
                'Created scalable data foundation for future extension'
            ]
        },
        {
            image: 'assets/images/placeholders/jkn-tours.svg',
            hideImagesTab: true,
            stack: ['PHP', 'Laravel', 'CMS Workflow', 'Responsive UI'],
            title: 'JKN Tours and Travels',
            desc: 'Travel platform with booking, package management, authentication, and content workflows.',
            overview: 'JKN Tours and Travels is a travel web delivery focused on backend control for bookings and package workflows combined with responsive customer-facing pages.',
            problem: 'The business needed a reliable digital workflow to manage travel packages, booking requests, authentication, and regular content updates without friction.',
            solution: 'I implemented backend logic in PHP/Laravel style workflows, integrated authentication and database handling, and delivered responsive front-end pages for cross-device use.',
            highlights: [
                'Booking and package management workflows',
                'CMS-oriented content update structure',
                'Authentication and backend data flow implementation',
                'Responsive frontend support for desktop and mobile'
            ],
            modules: [
                'Package listing and management module',
                'Booking flow and backend processing',
                'Authentication and user control handling',
                'Responsive public pages for travel content'
            ],
            architecture: [
                'Backend-first modular implementation for travel operations',
                'Database-connected booking and content modules',
                'Responsive UI layer aligned with conversion journeys'
            ],
            security: [
                'Authentication-driven access patterns',
                'Validation-focused booking and content processing'
            ],
            role: [
                'Implemented backend modules and data flow logic',
                'Built responsive front-end interfaces for travel pages',
                'Integrated authentication and CMS-aligned workflows'
            ],
            outcomes: [
                'Improved travel content and booking management reliability',
                'Delivered scalable operations with structured backend modules',
                'Enabled better cross-device user experience for travel customers'
            ]
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    const loadMoreBtn = document.getElementById('viewAllProjects');
    const projectModal = createProjectModal();
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
        if (document.body.classList.contains('custom-cursor')) {
            document.body.classList.toggle('cursor-on-dark', dark);
            document.body.classList.toggle('cursor-on-light', !dark);
        }
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) icon.className = dark ? 'bi bi-sun' : 'bi bi-moon-stars';
            themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
        }
    };

    const setMenuExpanded = expanded => {
        if (!menuToggle) return;
        menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        menuToggle.classList.toggle('active', expanded);
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

    function createProjectModal() {
        const overlay = document.createElement('div');
        overlay.className = 'project-modal-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = `
            <article class="project-modal" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">
                <button type="button" class="project-modal-close" id="projectModalClose" aria-label="Close project details">
                    <i class="bi bi-x-lg"></i>
                </button>
                <div class="project-modal-head">
                    <p class="project-modal-kicker" id="projectModalKicker">Project Case Study</p>
                    <h3 id="projectModalTitle"></h3>
                    <p class="project-modal-desc" id="projectModalDesc"></p>
                    <div class="project-modal-tags" id="projectModalTags"></div>
                </div>
                <div class="project-modal-tabs" role="tablist" aria-label="Project detail tabs">
                    <button type="button" class="project-modal-tab is-active" role="tab" aria-selected="true" data-tab-target="overview">Overview</button>
                    <button type="button" class="project-modal-tab" role="tab" aria-selected="false" data-tab-target="technical">Technical</button>
                    <button type="button" class="project-modal-tab" role="tab" aria-selected="false" data-tab-target="business">Business</button>
                    <button type="button" class="project-modal-tab" role="tab" aria-selected="false" data-tab-target="images">Images</button>
                </div>
                <div class="project-modal-panels">
                    <section class="project-modal-tab-panel is-active" role="tabpanel" data-tab-panel="overview">
                        <div class="project-modal-grid">
                            <section class="project-modal-section">
                                <h4>Overview</h4>
                                <p id="projectModalOverview"></p>
                            </section>
                            <section class="project-modal-section">
                                <h4>Problem Context</h4>
                                <p id="projectModalProblem"></p>
                            </section>
                            <section class="project-modal-section">
                                <h4>Solution Approach</h4>
                                <p id="projectModalSolution"></p>
                            </section>
                            <section class="project-modal-section">
                                <h4>Key Highlights</h4>
                                <ul id="projectModalHighlights"></ul>
                            </section>
                        </div>
                    </section>
                    <section class="project-modal-tab-panel" role="tabpanel" data-tab-panel="technical" hidden>
                        <div class="project-modal-grid">
                            <section class="project-modal-section">
                                <h4>Core Modules</h4>
                                <ul id="projectModalModules"></ul>
                            </section>
                            <section class="project-modal-section">
                                <h4>Architecture and Technical Design</h4>
                                <ul id="projectModalArchitecture"></ul>
                            </section>
                            <section class="project-modal-section">
                                <h4>Security and Reliability</h4>
                                <ul id="projectModalSecurity"></ul>
                            </section>
                            <section class="project-modal-section">
                                <h4>My Contribution</h4>
                                <ul id="projectModalRole"></ul>
                            </section>
                        </div>
                    </section>
                    <section class="project-modal-tab-panel" role="tabpanel" data-tab-panel="business" hidden>
                        <div class="project-modal-grid">
                            <section class="project-modal-section">
                                <h4>Business Summary</h4>
                                <p id="projectModalBusinessSummary"></p>
                            </section>
                            <section class="project-modal-section">
                                <h4>Business and Product Outcomes</h4>
                                <ul id="projectModalOutcomes"></ul>
                            </section>
                        </div>
                    </section>
                    <section class="project-modal-tab-panel" role="tabpanel" data-tab-panel="images" hidden>
                        <figure class="project-modal-carousel">
                            <button type="button" class="project-carousel-nav prev" id="projectCarouselPrev" aria-label="Previous image">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <img id="projectModalImage" src="" alt="" />
                            <button type="button" class="project-carousel-nav next" id="projectCarouselNext" aria-label="Next image">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                            <figcaption id="projectModalImageCaption"></figcaption>
                            <div class="project-carousel-meta">
                                <span id="projectModalImageCounter">1 / 1</span>
                                <div class="project-carousel-dots" id="projectCarouselDots"></div>
                            </div>
                        </figure>
                    </section>
                </div>
            </article>
        `;

        document.body.appendChild(overlay);

        const closeBtn = overlay.querySelector('#projectModalClose');
        const title = overlay.querySelector('#projectModalTitle');
        const desc = overlay.querySelector('#projectModalDesc');
        const tags = overlay.querySelector('#projectModalTags');
        const image = overlay.querySelector('#projectModalImage');
        const imageCaption = overlay.querySelector('#projectModalImageCaption');
        const imageCounter = overlay.querySelector('#projectModalImageCounter');
        const imageDots = overlay.querySelector('#projectCarouselDots');
        const imagePrev = overlay.querySelector('#projectCarouselPrev');
        const imageNext = overlay.querySelector('#projectCarouselNext');
        const tabs = Array.from(overlay.querySelectorAll('.project-modal-tab'));
        const tabPanels = Array.from(overlay.querySelectorAll('.project-modal-tab-panel'));
        const imagesTab = tabs.find(tab => tab.getAttribute('data-tab-target') === 'images');
        const imagesPanel = tabPanels.find(panel => panel.getAttribute('data-tab-panel') === 'images');
        const overview = overlay.querySelector('#projectModalOverview');
        const problem = overlay.querySelector('#projectModalProblem');
        const solution = overlay.querySelector('#projectModalSolution');
        const businessSummary = overlay.querySelector('#projectModalBusinessSummary');
        const highlights = overlay.querySelector('#projectModalHighlights');
        const modules = overlay.querySelector('#projectModalModules');
        const architecture = overlay.querySelector('#projectModalArchitecture');
        const security = overlay.querySelector('#projectModalSecurity');
        const role = overlay.querySelector('#projectModalRole');
        const outcomes = overlay.querySelector('#projectModalOutcomes');
        let carouselSlides = [];
        let activeSlide = 0;

        const renderList = (element, items) => {
            element.innerHTML = '';
            if (!items || !items.length) {
                const li = document.createElement('li');
                li.textContent = 'Details will be expanded further as project assets and documentation are finalized.';
                element.appendChild(li);
                return;
            }
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                element.appendChild(li);
            });
        };

        const renderParagraph = (element, content) => {
            element.textContent = content || 'Detailed description will be expanded further as additional project artifacts are shared.';
        };

        const setActiveTab = tabName => {
            tabs.forEach(tab => {
                const isActive = tab.getAttribute('data-tab-target') === tabName;
                tab.classList.toggle('is-active', isActive);
                tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            tabPanels.forEach(panel => {
                const isActive = panel.getAttribute('data-tab-panel') === tabName;
                panel.classList.toggle('is-active', isActive);
                panel.hidden = !isActive;
            });
        };

        const normalizeSlides = project => {
            const source = Array.isArray(project.images) && project.images.length
                ? project.images
                : [{ src: project.image, caption: `${project.title} - Project visual` }];
            return source
                .map((item, index) => {
                    if (typeof item === 'string') {
                        return {
                            src: item,
                            caption: `${project.title} - Screen ${index + 1}`
                        };
                    }

                    if (item && item.src) {
                        return {
                            src: item.src,
                            caption: item.caption || `${project.title} - Screen ${index + 1}`
                        };
                    }

                    return null;
                })
                .filter(Boolean);
        };

        const renderCarousel = () => {
            if (!carouselSlides.length) return;

            const slide = carouselSlides[activeSlide];
            image.classList.remove('is-transitioning');
            image.src = slide.src;
            image.alt = `${title.textContent} preview ${activeSlide + 1}`;
            imageCaption.textContent = slide.caption;
            imageCounter.textContent = `${activeSlide + 1} / ${carouselSlides.length}`;
            void image.offsetWidth;
            image.classList.add('is-transitioning');

            imageDots.innerHTML = '';
            carouselSlides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'project-carousel-dot';
                dot.setAttribute('aria-label', `Go to image ${index + 1}`);
                dot.classList.toggle('is-active', index === activeSlide);
                dot.addEventListener('click', () => {
                    activeSlide = index;
                    renderCarousel();
                });
                imageDots.appendChild(dot);
            });
        };

        const open = project => {
            title.textContent = project.title;
            desc.textContent = project.desc;
            renderParagraph(overview, project.overview);
            renderParagraph(problem, project.problem);
            renderParagraph(solution, project.solution);
            renderParagraph(businessSummary, project.businessSummary || project.desc);

            const showImagesTab = !project.hideImagesTab;
            if (imagesTab) {
                imagesTab.hidden = !showImagesTab;
                imagesTab.setAttribute('aria-hidden', showImagesTab ? 'false' : 'true');
            }
            if (imagesPanel && !showImagesTab) {
                imagesPanel.hidden = true;
                imagesPanel.classList.remove('is-active');
            }

            tags.innerHTML = project.stack
                .map(tag => `<span class="project-badge">${tag}</span>`)
                .join('');

            if (showImagesTab) {
                carouselSlides = normalizeSlides(project);
                activeSlide = 0;
                renderCarousel();
            } else {
                carouselSlides = [];
                activeSlide = 0;
            }

            renderList(highlights, project.highlights);
            renderList(modules, project.modules);
            renderList(architecture, project.architecture);
            renderList(security, project.security);
            renderList(role, project.role);
            renderList(outcomes, project.outcomes);
            setActiveTab('overview');

            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
        };

        const close = () => {
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        };

        closeBtn?.addEventListener('click', close);
        imagePrev?.addEventListener('click', () => {
            if (!carouselSlides.length) return;
            activeSlide = (activeSlide - 1 + carouselSlides.length) % carouselSlides.length;
            renderCarousel();
        });
        imageNext?.addEventListener('click', () => {
            if (!carouselSlides.length) return;
            activeSlide = (activeSlide + 1) % carouselSlides.length;
            renderCarousel();
        });
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab-target');
                if (!targetTab) return;
                setActiveTab(targetTab);
            });
        });
        overlay.addEventListener('click', event => {
            if (event.target === overlay) close();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && overlay.classList.contains('is-open')) close();
            if (!overlay.classList.contains('is-open')) return;
            if (event.key === 'ArrowLeft') {
                activeSlide = (activeSlide - 1 + carouselSlides.length) % carouselSlides.length;
                renderCarousel();
            }
            if (event.key === 'ArrowRight') {
                activeSlide = (activeSlide + 1) % carouselSlides.length;
                renderCarousel();
            }
        });

        return { overlay, open, close };
    }

    const renderProjects = () => {
        if (!projectsGrid || !loadMoreBtn) return;

        projectsGrid.innerHTML = '';

        projects.slice(0, visibleCount).forEach((project, index) => {
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
                    <div class="project-actions">
                        <button type="button" class="project-details-btn" data-project-index="${index}">View Details <i class="bi bi-arrow-up-right"></i></button>
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

        const parseRgb = color => {
            if (!color) return null;
            const rgbMatch = color.match(/rgba?\(([^)]+)\)/i);
            if (!rgbMatch) return null;
            const channels = rgbMatch[1].split(',').map(part => Number.parseFloat(part.trim()));
            if (channels.length < 3 || channels.some(Number.isNaN)) return null;
            return { r: channels[0], g: channels[1], b: channels[2], a: channels[3] ?? 1 };
        };

        const readEffectiveBackground = element => {
            let current = element;
            while (current && current !== document.documentElement) {
                const style = window.getComputedStyle(current);
                const parsed = parseRgb(style.backgroundColor);
                if (parsed && parsed.a > 0.08) return parsed;
                current = current.parentElement;
            }
            return document.body.classList.contains('dark-theme')
                ? { r: 24, g: 28, b: 35, a: 1 }
                : { r: 242, g: 245, b: 249, a: 1 };
        };

        const applyCursorContrast = target => {
            const bg = readEffectiveBackground(target);
            const luminance = (0.299 * bg.r) + (0.587 * bg.g) + (0.114 * bg.b);
            const onDark = luminance < 132;
            document.body.classList.toggle('cursor-on-dark', onDark);
            document.body.classList.toggle('cursor-on-light', !onDark);
        };

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
            const target = document.elementFromPoint(event.clientX, event.clientY);
            if (target instanceof Element) applyCursorContrast(target);
            if (!rafId) rafId = window.requestAnimationFrame(setCursorPos);
        });

        document.addEventListener('mouseover', event => {
            const interactive = event.target.closest('a, button, .btn, [role="button"]');
            document.body.classList.toggle('cursor-hover', Boolean(interactive));
        });

        document.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
        document.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));
        document.body.classList.add(document.body.classList.contains('dark-theme') ? 'cursor-on-dark' : 'cursor-on-light');
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

    if (projectsGrid) {
        projectsGrid.addEventListener('click', event => {
            const target = event.target.closest('.project-details-btn');
            if (!target) return;
            const index = Number(target.getAttribute('data-project-index'));
            const project = projects[index];
            if (!project) return;
            projectModal.open(project);
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
