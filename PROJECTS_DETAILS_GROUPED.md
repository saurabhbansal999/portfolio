# Projects Details (Grouped)

## Live/Professional

### 1. FCN Seating

- Card Image: `assets/images/placeholders/fcn-seating.svg`
- Stack: `Laravel`, `Vue 3`, `Responsive UI`, `Seat Workflow`
- Short Description: Interactive seat planning platform that replaces manual tracking with a clear, fast allocation workflow.

#### Overview
FCN Seating was designed as a practical operations-first interface where seating layouts, assignment decisions, and occupancy visibility are handled in one responsive system instead of fragmented manual trackers.

#### Problem
Seat planning was being handled through manual or spreadsheet-heavy coordination, which made seat changes slow, increased assignment mistakes, and reduced visibility for operations teams during daily movement, onboarding, and internal reshuffles.

#### Solution
I implemented a structured UI workflow that visualizes seat maps clearly, supports assignment and reassignment, validates user actions, and keeps seat state communication immediately understandable for admins on both desktop and mobile.

#### Highlights
- Interactive section and floor-level seat visualization with clear visual hierarchy
- Seat state handling for available, occupied, reserved, and blocked scenarios
- Fast search and filter flows to locate seats, segments, and target groups quickly
- Validation-oriented interactions to reduce invalid seat moves and duplicate assignments
- Responsive behavior tuned for desktop operations as well as tablet and mobile usage
- Clean accessibility-aware UI patterns to keep high information density readable

#### Modules
- Seat map renderer and state legend
- Assignment and reassignment workflow controls
- Availability and occupancy status indicators
- Filter/search navigation for faster operational lookup
- UI validation and constraint handling layer

#### Architecture
- Component-oriented front-end structure for maintainable growth
- Reusable UI patterns to reduce duplication and keep interaction behavior consistent
- Separation between display states and assignment actions to simplify debugging
- Responsive-first layout strategy for reliable cross-device performance

#### Security
- Validation-heavy user interactions to prevent operationally unsafe state changes
- Defensive UI logic to reduce mis-click and invalid allocation flows
- Consistent state rendering to avoid ambiguity in occupancy interpretation

#### Role / Contribution
- End-to-end front-end implementation of the seating interface
- UI/UX execution focused on speed, readability, and operational clarity
- Seat state and assignment flow logic implementation
- Responsive tuning and cross-device compatibility adjustments
- Code structure cleanup for easier long-term maintenance

#### Outcomes
- Reduced spreadsheet dependency and manual seat tracking overhead
- Improved real-time visibility of occupancy and remaining capacity
- Faster seat allocation decisions with less back-and-forth coordination
- Created a scalable baseline for reporting, permissions, and integration extensions

### 2. FAI Medical

- Card Image: `assets/images/placeholders/fai-medical.svg`
- Stack: `Laravel 11`, `Vue 3`, `Inertia.js`, `Sanctum`, `Chart.js`
- Short Description: Full-stack air-ambulance transport platform covering mission creation, clinical workflows, and secure reporting.

#### Overview
FAI Medical is a domain-heavy full-stack healthcare operations platform that digitizes complete patient transport workflows from mission creation to handover and report delivery, with both admin-panel and API-facing execution paths.

#### Problem
Medical transport workflows are often fragmented across manual coordination, partial clinical records, and disconnected systems, causing delays, inconsistent documentation, lower traceability, and higher risk in mission-critical transfers.

#### Solution
I built a unified workflow system with structured clinical modules, secure API access, protected file handling, validation-rich form flows, lock controls for finalized transports, and asynchronous reporting pipelines to ensure reliability and compliance-oriented execution.

#### Highlights
- End-to-end transport lifecycle management from request to final handover
- Structured patient data capture: demographics, diagnoses, allergies, history, vitals, labs, medications, fluids, and visual markers
- Operational masters: users, trip types, aircraft call signs, airports, devices, positions, and configurable medical types
- Queued PDF report generation with charted vital signs and mail delivery
- Localization support for English and German with user-level preference
- Data integrity controls through strong validation and transport lock mechanisms

#### Modules
- Mission creation and scheduling workflows
- Crew assignment and role mapping
- Clinical modules: anamnesis, pre-flight, in-flight timeline, nursing care, post-flight, takeover/handover, evaluation
- Secure document and media management
- Medical report generation and delivery pipeline
- Sync/version endpoints for client freshness and consistency

#### Architecture
- Laravel 11 + PHP 8.2 backend with modular domain controllers and resources
- Vue 3 + Inertia.js frontend for workflow-oriented interfaces
- Queue-driven asynchronous processing for report generation and notifications
- Relational data modeling for transport, clinical, and timeline entities
- API + web parity approach for aligned operational behavior across channels

#### Security
- Sanctum API authentication and protected web auth flows
- Optional 2FA and OTP-based recovery support
- Device verification controls for API access boundaries
- Encrypted document/media storage and temporary signed URLs
- Private file streaming controls and secure document retrieval

#### Role / Contribution
- Full-stack ownership across architecture, backend modeling, and frontend workflow UX
- Implemented secure access layer, file handling, and validation-heavy data flows
- Built asynchronous report generation, chart rendering, and email automation
- Delivered localization-aware user experience and maintainable project structure

#### Outcomes
- Centralized clinical and operational mission workflows in one product
- Improved consistency, auditability, and reliability of transport documentation
- Reduced manual coordination delay across operations and medical teams
- Created a compliance-sensitive foundation for future analytics and integrations

### 3. NoLimits

- Card Image: `assets/images/placeholders/nolimits.svg`
- Stack: `Laravel 11`, `Vue 3`, `Inertia.js`, `Tailwind`, `Commission Engine`
- Short Description: Real estate operations and commission platform managing inventory, contracts, and multi-level payouts.

#### Overview
NoLimits is an enterprise-style real estate platform that centralizes the full sales lifecycle from inventory setup and lead handling to contract execution and hierarchical commission distribution.

#### Problem
Real estate organizations often run operations across spreadsheets, chats, and disconnected CRMs, causing data mismatch between properties, prospects, contracts, and payouts and creating payout disputes across partner hierarchies.

#### Solution
I delivered a role-driven system with auditable contract states, secure file handling, and a recursive commission engine that calculates and distributes partner earnings through parent-child structures with clear traceability.

#### Highlights
- Role-based workflows for admin, partner, prospect, and closer personas
- Property and unit inventory with media, amenities, and location references
- Contract lifecycle states: Draft, Signed, Rejected, Paid, Distributed
- Recursive commission distribution across multi-tier partner relationships
- Searchable, paginated operational modules and dashboard insights
- Localization support for English and German user experiences

#### Modules
- Role and permission management with route authorization
- Property, unit, and media inventory module
- Prospect onboarding and qualification flows
- Contract generation, status control, and document handling
- Commission tracking/filtering and distribution engine
- Operational KPI dashboard and reporting views

#### Architecture
- Laravel 11 + Vue 3 + Inertia.js full-stack architecture
- Modular controllers and reusable traits for maintainability
- Relational schema with ULID entities and polymorphic media relations
- Status-driven business logic enforcing workflow integrity
- Production-ready module boundaries for future feature scaling

#### Security
- Route-level permission enforcement with role-aware access constraints
- Encrypted contract file storage and signed temporary URLs
- Data cleanup routines for media/document lifecycle hygiene
- Role-aware status transitions to prevent unauthorized contract movement

#### Role / Contribution
- Full-stack implementation of inventory, CRM, contract, and commission domains
- Designed and built hierarchical payout logic with auditable records
- Implemented secure document workflows and access controls
- Built dashboard metrics and operational listing experiences

#### Outcomes
- Reduced manual payout errors and disputes with transparent commission records
- Improved deal traceability across sales and post-sales operations
- Faster workflow execution through one centralized operating platform
- Scalable foundation for partner network expansion and advanced analytics

### 4. Let'z Talk

- Card Image: `assets/images/placeholders/letz-talk.svg`
- Stack: `Laravel 11`, `Vue 3`, `OpenAI`, `FFmpeg`, `DOMPDF`
- Short Description: AI-assisted scenario training platform for institutes with text and audio assessment workflows.

#### Overview
Let'z Talk is a full-stack, role-based training platform where institutes run scenario-based communication practice using AI-assisted text/audio conversations and structured trainer review workflows.

#### Problem
Institutes were handling scenario training manually, which led to inconsistent feedback standards, high trainer workload, weak progress visibility, and poor scalability as users increased.

#### Solution
I built an end-to-end platform with dedicated admin/trainer/student journeys, scenario lifecycle controls, AI-supported messaging, queue-driven async processing, exportable records, and multilingual support to make training scalable and measurable.

#### Highlights
- Scenario create/edit/assign/archive lifecycle with role-aware controls
- Student-trainer chat threads with text and audio message support
- Audio processing workflows including capture, merge, and review/download
- Public/QR scenario access flow with controlled entry behavior
- PDF exports for scenario/chat records and training documentation
- Localization support and secure role-permission enforcement

#### Modules
- Institute, trainer, student, role, and permission administration
- Scenario authoring and assignment management
- AI-assisted conversation orchestration
- Audio media handling and file workflows
- Queue jobs for chat/rating/background processing
- Dashboard and operational monitoring views

#### Architecture
- Laravel 11 backend with modular controllers, middleware, traits, and queues
- Vue 3 + Inertia.js frontend for SPA-like user experience
- Service-oriented reusable logic for chat/media/storage operations
- Relational data model with migrations/seeders for maintainable growth
- Structured logs and error handling prepared for production observability

#### Security
- Sanctum-backed auth and protected route groups
- Role-permission framework to isolate responsibilities
- Session and access validation for controlled workflows
- Secure handling of training artifacts and generated exports

#### Role / Contribution
- Full-stack ownership across architecture, API/domain design, and frontend modules
- Implemented chat and audio workflow engines
- Built queue processing strategy for scale and response-time stability
- Delivered secure RBAC model and multilingual user flow implementation

#### Outcomes
- Reduced manual administration overhead in scenario training operations
- Improved consistency in learner assessment and review handling
- Enabled scalable throughput without equivalent trainer headcount growth
- Created a strong base for future scoring analytics and intelligence layers

### 5. Tender Management System

- Card Image: `assets/images/placeholders/tender-management.svg`
- Stack: `Laravel 10`, `Vue 3`, `Inertia.js`, `Tailwind`, `Queued Mail`
- Short Description: Role-based procurement platform for project creation, vendor bidding, bid comparison, and approvals.

#### Overview
This Tender Management System digitizes procurement operations end-to-end by bringing leads, project requirements, vendor participation, bid decisions, and communication into a single controlled workflow.

#### Problem
Traditional tender operations were fragmented across email threads, spreadsheets, and manual follow-ups, causing slow decisions, weak traceability, and high administrative overhead.

#### Solution
I implemented a role-separated admin/vendor system with item-level project and bid flows, bid comparison and approval controls, contextual bid chat, automated notifications, and status-driven governance.

#### Highlights
- Lead intake and vendor onboarding integrated into project workflows
- Project creation with itemized scope, timeline, delivery location, and attachments
- Vendor invitation and bid submission per project item with support files
- Admin comparison, approval/rejection controls, and synchronized status updates
- Bid-level communication channel for operational clarity
- Queued email notifications across all critical workflow transitions

#### Modules
- Lead management with search, sort, pagination, and documents
- Tender/vendor profile management with onboarding email flow
- Project and project-item module with media handling
- Bid and bid-item execution flow with chat integration
- Bid decision and project progression controls
- Dashboard analytics for project and bid state visibility

#### Architecture
- Laravel 10 + PHP 8.1 backend with domain-oriented controllers
- Vue 3 + Inertia.js + Tailwind frontend with reusable module components
- Middleware-based role authorization and protected route segmentation
- ULID-based entity references and relational data modeling
- SSR-ready frontend entry with scalable build pipeline via Vite

#### Security
- Role-specific middleware guards for admin and vendor boundaries
- Validation-heavy request rules for dates, numbers, and business constraints
- Controlled file resource serving with cleanup on delete flows
- Queued transactional notifications reducing manual state miscommunication

#### Role / Contribution
- Delivered complete full-stack implementation across procurement lifecycle
- Designed status-driven workflow and approval logic
- Built chat and notification integration for stakeholder communication
- Implemented analytics-oriented dashboard views and operational listings

#### Outcomes
- Replaced scattered tender coordination with a traceable central system
- Improved decision quality through item-level bid visibility
- Reduced communication lag via automated notifications and bid chat
- Lowered operational overhead for teams handling multiple tenders concurrently

### 6. Salmone Digital Platform

- Card Image: `assets/images/placeholders/salmone-digital.svg`
- Stack: `Laravel`, `Vue.js`, `Inertia.js`, `Blade`, `Vite`
- Short Description: Brand website and partner management dashboard built as a unified full-stack business platform.

#### Overview
Salmone Digital Platform combines a public-facing brand website and a secure admin management system, enabling professional brand presentation while keeping partner operations centralized and maintainable.

#### Problem
Brand and partner updates were typically manual and developer-dependent, resulting in inconsistent data updates, slower content cycles, and weaker control over partner information quality.

#### Solution
I implemented a split but connected architecture: a modern landing experience for brand communication and a protected backend panel for partner CRUD, validation, image workflows, and operational content control.

#### Highlights
- Public pages for Home, About, Imprint, and Data Protection
- Reusable front-end components: navigation, carousel, sponsor area, contact, and footer
- Partner management dashboard with create/read/update/delete workflows
- Search, sorting, pagination, and URL validation for clean partner records
- Image/logo upload processing for structured brand asset handling
- Authentication-protected admin routes and profile management

#### Modules
- Public brand communication pages
- Admin partner lifecycle management
- Media and logo handling flows
- Validation and content consistency controls
- Protected authentication and profile module

#### Architecture
- Laravel backend with MVC controller-driven domain structure
- Blade-based landing implementation for public experience
- Vue + Inertia admin layer for dashboard workflows
- Migration-first schema design for maintainability and growth
- Reusable UI composition for faster future expansion

#### Security
- Authenticated admin-only route groups for management workflows
- Server-side validation for partner data integrity
- Controlled media processing and cleanup flows

#### Role / Contribution
- Designed and developed complete full-stack architecture
- Built both public-facing brand UI and internal admin workflows
- Implemented validation, authentication, and secure routing behavior
- Structured partner data models and migration setup

#### Outcomes
- Improved brand credibility with a professional digital presence
- Enabled faster non-technical partner/content updates
- Reduced inconsistency in partner information across the platform
- Established maintainable technical foundation for future business scaling

### 7. Fishing Club Management Platform

- Card Image: `assets/images/placeholders/fishing-club.svg`
- Stack: `Laravel 11`, `Vue 3`, `Inertia.js`, `Passport`, `FCM`
- Short Description: Centralized club operations platform with multi-role access, member APIs, and workflow automation.

#### Overview
Fishing Club Management Platform is a full-featured web + API solution for fishing clubs to run operations, member engagement, reporting, and billing from a centralized role-driven system.

#### Problem
Club operations often rely on manual coordination across members, events, waters, tasks, and billing; this causes poor visibility, communication delays, and process inconsistency across teams and seasons.

#### Solution
I built a centralized multi-role platform with secure member APIs, workflow automation, module-level access controls, and integrated operational tools such as QR tasks, reporting, notifications, and billing exports.

#### Highlights
- Multi-role workflows: Super Admin, Club Manager, Editor, Staff, Member
- Member lifecycle management with import/export, restore, block/unblock, and profile handling
- Waters and fishing-rule modules with location and weather-aware updates
- Task/event workflows including approvals, reminders, and QR execution
- Catch/haul diary with daily, monthly, yearly, and water-wise insights
- Billing, invoice tracking, and SEPA export support

#### Modules
- Club and member administration
- Waters management, fishing rules, and district-based imports
- Events, tasks, attendance, and reminders
- News and member engagement features
- Document center with private/general access boundaries
- Reporting and billing workflows with exports

#### Architecture
- Laravel 11 backend with queue-friendly job processing
- Vue 3 + Inertia.js front-end module composition
- Passport/Sanctum-based auth layers for role and API security
- ApexCharts-enabled reporting experiences for operational insight
- Integration-ready architecture for weather, push, and cloud storage services

#### Security
- Role-based protected modules for each user type
- OTP-based password reset and controlled member access
- API logging and failed-job observability support
- Structured notification and access flows for sensitive operations

#### Role / Contribution
- Implemented full-stack modules across operations, engagement, and reporting domains
- Built secure API pathways and role-permission behavior
- Integrated asynchronous jobs for reminders, weather refresh, and session closure
- Delivered invoicing and export flows for financial operations

#### Outcomes
- Reduced manual coordination effort in day-to-day club operations
- Improved engagement consistency through automated communication workflows
- Enhanced reporting visibility for decision making across club teams
- Created scalable operational foundation for growing member communities

### 8. Delhi House (Restaurant and Cafe) - Switzerland

- Card Image: `assets/images/placeholders/delhi-house.svg`
- Stack: `Laravel`, `Vue.js`, `Inertia.js`, `PHPMyAdmin`
- Short Description: Full-stack restaurant platform with integrated customer-side journeys and centralized admin operations.

#### Overview
Delhi House is a project-focused delivery where customer interactions and restaurant operations were unified in one Laravel-based platform with user and admin modules.

#### Problem
The business needed a connected experience where menu discovery, reservations, and contact flows work smoothly for users while admins retain control over menus, reservations, users, and content updates.

#### Solution
I implemented user and admin workflows in Laravel, connected critical restaurant modules, and optimized SQL schema/indexing to improve responsiveness and operational reliability.

#### Highlights
- Integrated user-side and admin-side modules in one coordinated system
- Implemented menu browsing and reservation workflows
- Built interactive contact flows for better lead conversion
- Developed centralized admin controls for menu and reservation management
- Improved backend data operations through SQL optimization in PHPMyAdmin

#### Modules
- Customer-facing menu and reservation interfaces
- Admin panel for users, menus, reservations, and content
- Contact and inquiry handling flows
- Database optimization and schema tuning

#### Architecture
- Laravel module separation for user/admin responsibilities
- Relational SQL structure aligned with restaurant operations
- Backend-first flow design to keep data consistent across interfaces

#### Security
- Role-oriented admin access behavior
- Server-side validation for reservation and contact submissions
- Database-level consistency improvements for stable operations

#### Role / Contribution
- Implemented full-stack Laravel workflows for both user and admin sides
- Built reservation, menu, and contact functionality
- Optimized database structure and query behavior in PHPMyAdmin

#### Outcomes
- Enabled seamless user-admin data flow across restaurant operations
- Improved reservation handling and content control efficiency
- Delivered a stable project architecture suitable for operational scaling

### 9. JKN Tours and Travels

- Card Image: `assets/images/placeholders/jkn-tours.svg`
- Stack: `PHP`, `Laravel`, `CMS Workflow`, `Responsive UI`
- Short Description: Travel platform with booking, package management, authentication, and content workflows.

#### Overview
JKN Tours and Travels is a travel web delivery focused on backend control for bookings and package workflows combined with responsive customer-facing pages.

#### Problem
The business needed a reliable digital workflow to manage travel packages, booking requests, authentication, and regular content updates without friction.

#### Solution
I implemented backend logic in PHP/Laravel style workflows, integrated authentication and database handling, and delivered responsive front-end pages for cross-device use.

#### Highlights
- Booking and package management workflows
- CMS-oriented content update structure
- Authentication and backend data flow implementation
- Responsive frontend support for desktop and mobile

#### Modules
- Package listing and management module
- Booking flow and backend processing
- Authentication and user control handling
- Responsive public pages for travel content

#### Architecture
- Backend-first modular implementation for travel operations
- Database-connected booking and content modules
- Responsive UI layer aligned with conversion journeys

#### Security
- Authentication-driven access patterns
- Validation-focused booking and content processing

#### Role / Contribution
- Implemented backend modules and data flow logic
- Built responsive front-end interfaces for travel pages
- Integrated authentication and CMS-aligned workflows

#### Outcomes
- Improved travel content and booking management reliability
- Delivered scalable operations with structured backend modules
- Enabled better cross-device user experience for travel customers

## Academic

### 1. Passionate People

- Card Image: `assets/images/placeholders/passionate-people.svg`
- Stack: `Core PHP`, `MySQL`, `HTML`, `CSS`, `JavaScript`
- Short Description: Media-focused web platform built around branding communication and user engagement.

#### Overview
Passionate People was developed as a practical media website project focused on clear communication, structured content delivery, and responsive front-end behavior.

#### Problem
The project required an organized website experience that supports branding communication while maintaining backend data handling and stable performance.

#### Solution
I implemented backend logic in Core PHP, structured MySQL storage, and responsive UI layers to ensure predictable rendering and maintainable content flow.

#### Highlights
- Media and branding-oriented website structure
- Backend workflows in Core PHP for data handling
- Responsive front-end implementation across device sizes
- MySQL schema design aligned with content flow

#### Modules
- Content display and page layout modules
- Core PHP backend handlers
- MySQL data persistence layer
- Responsive UI structure

#### Architecture
- Classic PHP + MySQL architecture with clear module boundaries
- Separation of presentation and backend processing logic
- Simple and maintainable structure suitable for iterative enhancement

#### Security
- Validation-focused backend handling for content workflows
- Structured data access patterns for predictable processing

#### Role / Contribution
- Built backend workflows and integrated database logic
- Implemented responsive front-end interfaces
- Planned layout structure for communication and engagement

#### Outcomes
- Delivered a stable media-focused web solution
- Improved clarity of branding communication through structured UI
- Established maintainable project foundation for future improvements

### 2. Akshar Star Electronics

- Card Image: `assets/images/placeholders/akshar-star.svg`
- Stack: `Core PHP`, `MySQL`, `Bootstrap`, `JavaScript`
- Short Description: Core PHP web project focused on structured backend logic and scalable data handling.

#### Overview
Akshar Star Electronics was built as a full project exercise combining backend programming patterns, responsive UI delivery, and scalable database design.

#### Problem
The project needed a dependable Core PHP structure with clear business logic, good usability, and data handling that remains stable as content grows.

#### Solution
I implemented organized backend modules, responsive front-end pages, and MySQL schema planning supported by system design models like DFD and ERD.

#### Highlights
- Implemented project logic with structured programming patterns
- Designed layouts for clearer navigation and presentation
- Developed backend infrastructure in Core PHP
- Built responsive interfaces with HTML5, CSS, JavaScript, and Bootstrap
- Created scalable MySQL storage model with flow documentation

#### Modules
- Core PHP backend processing modules
- Frontend layout and responsive interaction layer
- Database model and query workflows
- System flow and architecture documentation

#### Architecture
- PHP + MySQL architecture with practical modularization
- Database-first planning approach for data integrity
- Frontend/backend coordination for predictable user flow

#### Security
- Validation-oriented backend handling
- Structured data processing for reliable form and content operations

#### Role / Contribution
- Implemented backend and frontend modules end to end
- Designed database structure and architecture documents
- Built responsive experience and navigation flow

#### Outcomes
- Delivered a reliable educational-to-production style project baseline
- Improved usability with clearer layout and responsive behavior
- Created scalable data foundation for future extension

