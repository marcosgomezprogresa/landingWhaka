// ========================================
// CONFIGURACIÓN Y VARIABLES GLOBALES
// ========================================

const SUPPORTED_LANGUAGES = ['es', 'nl', 'de'];
const DEFAULT_LANGUAGE = 'es';
const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

let currentLanguage = DEFAULT_LANGUAGE;

// Esperar a que se cargue toda la configuración
document.addEventListener('DOMContentLoaded', () => {
    // Esperar un momento para que config.js se cargue
    setTimeout(() => {
        if (typeof landingConfig !== 'undefined') {
            initializeLanding();
        }
    }, 100);
});

// ========================================
// INICIALIZACIÓN DE LA LANDING
// ========================================
function initializeLanding() {
    setupLanguage();
    setupLanguageSwitcher();
    loadConfiguration();
    setupFormValidation();
    setupSmoothScroll();
    setupScrollAnimations();
    setupHeaderScroll();
    setupGA4Tracking();
    setCurrentYear();
}

// ========================================
// CARGAR CONFIGURACIÓN
// ========================================
function loadConfiguration() {
    if (typeof landingTranslations === 'undefined') {
        console.warn('landingConfig no está definido. Usando valores por defecto.');
        return;
    }

    const config = getCurrentConfig();

    document.documentElement.lang = currentLanguage;

    applyMetaTranslation(config.meta);
    applyStaticTranslations(config.ui);

    // Actualizar textos del Hero
    updateText('heroTitleText', config.hero.title);
    updateText('heroHighlight', config.hero.highlight);
    updateElement('heroSubtitle', config.hero.subtitle);
    
    // Actualizar stats
    updateElement('stat1Number', config.hero.stats[0]?.number);
    updateElement('stat1Label', config.hero.stats[0]?.label);
    updateElement('stat2Number', config.hero.stats[1]?.number);
    updateElement('stat2Label', config.hero.stats[1]?.label);
    updateElement('stat3Number', config.hero.stats[2]?.number);
    updateElement('stat3Label', config.hero.stats[2]?.label);
    
    // Actualizar checks
    updateElement('check1', config.hero.checks[0]);
    updateElement('check2', config.hero.checks[1]);
    updateElement('check3', config.hero.checks[2]);
    updateElement('check4', config.hero.checks[3]);
    
    // Actualizar formulario
    updateElement('formTitle', config.form.title);
    updateElement('formSubtitle', config.form.subtitle);
    updateElement('submitBtn', config.form.buttonText);
    
    // Cargar categorías
    if (config.categories && config.categories.length > 0) {
        loadCategories(config.categories);
        updateElement('categoriesTitle', config.sections.categories.title);
        updateElement('categoriesSubtitle', config.sections.categories.subtitle);
    }
    
    // Cargar Private Label - DESHABILITADO (ahora es un párrafo estático en categorías)
    /*
    if (config.privateLabel && config.privateLabel.services) {
        loadPrivateLabel(config.privateLabel.services);
        updateElement('privateLabelTitle', config.sections.privateLabel.title);
        updateElement('privateLabelSubtitle', config.sections.privateLabel.subtitle);
        updateElement('privateLabelDescription', config.sections.privateLabel.description);
    }
    */
    
    // Cargar beneficios
    updateElement('benefitsTitle', config.sections.benefits.title);
    updateElement('benefitsSubtitle', config.sections.benefits.subtitle);
    if (config.benefits && config.benefits.length > 0) {
        loadBenefits(config.benefits);
    }
    
    // Cargar testimonios
    if (config.testimonials && config.testimonials.length > 0) {
        loadTestimonials(config.testimonials);
        updateElement('testimonialsTitle', config.sections.testimonials.title);
    }
    
    // Actualizar CTA final
    updateElement('ctaFinalTitle', config.sections.ctaFinal.title);
    updateElement('ctaFinalText', config.sections.ctaFinal.text);
    updateElement('ctaFinalSubtitle', config.sections.ctaFinal.subtitle);
    updateElement('ctaFinalButton', config.sections.ctaFinal.buttonText);
    
    // Actualizar footer
    updateElement('footerCompanyName', config.footer.companyName);
    updateElement('footerDescription', config.footer.description);
    updateContactLink('footerEmail', config.footer.email, 'mailto:');
    updateContactLink('footerPhone', config.footer.phone, 'tel:');
    updateElement('footerWebsite', config.footer.website);
    updateElement('footerCopyright', config.footer.companyName);
    
    // Actualizar logo
    if (config.logo) {
        const logoImg = document.getElementById('logoImg');
        if (logoImg) {
            logoImg.src = config.logo;
            logoImg.alt = config.footer.companyName;
        }
    }
    
    // Actualizar WhatsApp
    if (config.whatsapp) {
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (whatsappBtn) {
            whatsappBtn.href = `https://wa.me/${config.whatsapp.replace(/\D/g, '')}`;
        }
    }
    
    // Cargar redes sociales
    if (config.social) {
        loadSocialLinks(config.social);
    }
    
    // Actualizar colores si están definidos
    if (config.colors) {
        applyColors(config.colors);
    }
}

// ========================================
// HELPERS PARA ACTUALIZAR CONTENIDO
// ========================================
function updateElement(id, content) {
    const element = document.getElementById(id);
    if (element && typeof content !== 'undefined') {
        element.innerHTML = content;
    }
}

function updateText(id, content) {
    const element = document.getElementById(id);
    if (element && typeof content !== 'undefined') {
        element.textContent = content;
    }
}

function updatePlaceholder(id, content) {
    const element = document.getElementById(id);
    if (element && typeof content !== 'undefined') {
        element.placeholder = content;
    }
}

function updateAttribute(id, attribute, value) {
    const element = document.getElementById(id);
    if (element && typeof value !== 'undefined') {
        element.setAttribute(attribute, value);
    }
}

function updateContactLink(id, content, protocol) {
    const element = document.getElementById(id);
    if (!element || typeof content === 'undefined') {
        return;
    }

    element.textContent = content;
    if (protocol === 'tel:') {
        element.href = `tel:${content.replace(/\s+/g, '')}`;
    } else {
        element.href = `${protocol}${content}`;
    }
}

function getCurrentConfig() {
    return landingTranslations[currentLanguage] || landingTranslations[DEFAULT_LANGUAGE];
}

function getCurrentUI() {
    return getCurrentConfig().ui || {};
}

function normalizeLanguage(language) {
    if (!language) {
        return DEFAULT_LANGUAGE;
    }

    const normalized = language.toLowerCase();
    const match = SUPPORTED_LANGUAGES.find((item) => normalized.startsWith(item));
    return match || DEFAULT_LANGUAGE;
}

function detectBrowserLanguage() {
    const browserLanguages = navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE];

    return browserLanguages
        .map(normalizeLanguage)
        .find((language) => SUPPORTED_LANGUAGES.includes(language)) || DEFAULT_LANGUAGE;
}

function setupLanguage() {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    currentLanguage = storedLanguage ? normalizeLanguage(storedLanguage) : detectBrowserLanguage();
}

function setupLanguageSwitcher() {
    document.querySelectorAll('.language-button').forEach((button) => {
        button.addEventListener('click', () => {
            applyLanguage(button.dataset.lang);
        });
    });

    updateLanguageButtons();
}

function applyLanguage(language, persist = true) {
    const nextLanguage = normalizeLanguage(language);
    currentLanguage = nextLanguage;

    if (persist) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    }

    document.documentElement.lang = nextLanguage;
    updateLanguageButtons();
    loadConfiguration();
    setupScrollAnimations();
}

function updateLanguageButtons() {
    document.querySelectorAll('.language-button').forEach((button) => {
        const isActive = button.dataset.lang === currentLanguage;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

function applyMetaTranslation(meta = {}) {
    if (meta.title) {
        document.title = meta.title;
    }

    const description = document.getElementById('metaDescription');
    if (description && meta.description) {
        description.setAttribute('content', meta.description);
    }

    const keywords = document.getElementById('metaKeywords');
    if (keywords && meta.keywords) {
        keywords.setAttribute('content', meta.keywords);
    }
}

function applyStaticTranslations(ui = {}) {
    updateText('languageSwitcherLabel', ui.languageLabel);

    updateText('labelName', ui.form?.nameLabel);
    updateText('labelEmail', ui.form?.emailLabel);
    updateText('privacyLabel', ui.form?.privacyLabel);
    updateText('formNotePrefix', ui.form?.notePrefix);
    updateText('formNoteLink', ui.form?.noteLink);
    updateText('formPhoneText', ui.form?.phoneText);
    updateText('formSuccessTitle', ui.form?.successTitle);
    updateText('formSuccessText', ui.form?.successText);
    updatePlaceholder('name', 'Juan Pérez');
    updatePlaceholder('email', 'markentry@whaka.com.br');

    updateText('privateLabelMainTitle', ui.privateLabel?.title);
    updateText('privateLabelDescriptionText', ui.privateLabel?.description);
    updateText('privateLabelFeature1', ui.privateLabel?.features?.[0]);
    updateText('privateLabelFeature2', ui.privateLabel?.features?.[1]);
    updateText('privateLabelFeature3', ui.privateLabel?.features?.[2]);
    updateText('privateLabelButton', ui.privateLabel?.buttonText);
    updateText('privateLabelBadge', ui.privateLabel?.badgeText);
    updateAttribute('privateLabelImage', 'alt', ui.privateLabel?.imageAlt);

    updateText('footerNavTitle', ui.footer?.navTitle);
    updateText('footerNavHome', ui.footer?.navHome);
    updateText('footerNavCategories', ui.footer?.navCategories);
    updateText('footerNavBenefits', ui.footer?.navBenefits);
    updateText('footerNavTestimonials', ui.footer?.navTestimonials);
    updateText('footerContactTitle', ui.footer?.contactTitle);
    updateText('footerEmailLabel', ui.footer?.emailLabel);
    updateText('footerPhoneLabel', ui.footer?.phoneLabel);
    updateText('footerRights', ui.footer?.rights);
    updateText('legalNoticeLink', ui.footer?.legalNotice);
    updateText('privacyPolicyLink', ui.footer?.privacyPolicy);
    updateText('cookiePolicyFooterLink', ui.footer?.cookiePolicy);

    updateText('cookieTitle', ui.cookies?.title);
    updateText('cookieText', ui.cookies?.text);
    updateText('cookieAccept', ui.cookies?.accept);
    updateText('cookieReject', ui.cookies?.reject);
    updateText('cookiePolicyBannerLink', ui.cookies?.link);
}

function loadCategories(categories) {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card fade-in';
        
        let itemsList = '';
        if (category.items && category.items.length > 0) {
            itemsList = `
                <ul class="category-list">
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        }
        
        card.innerHTML = `
            ${category.image ? `<img src="${category.image}" alt="${category.title}" class="category-image">` : ''}
            <div class="category-content">
                <h3 class="category-title">${category.title}</h3>
                <p class="category-description">${category.description}</p>
                ${itemsList}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Función loadVarieties comentada - sección eliminada
/*
function loadVarieties(varieties) {
    const grid = document.getElementById('varietiesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    varieties.forEach(variety => {
        const card = document.createElement('div');
        card.className = 'variety-card fade-in';
        
        const keywordsList = variety.keywords && variety.keywords.length > 0 
            ? variety.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')
            : '';
        
        card.innerHTML = `
            <div class="variety-icon">${variety.icon || '🍇'}</div>
            <h3 class="variety-name">${variety.name}</h3>
            <div class="variety-keywords">${keywordsList}</div>
        `;
        
        grid.appendChild(card);
    });
}
*/

function loadPrivateLabel(services) {
    const grid = document.getElementById('privateLabelGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'private-label-card fade-in';
        
        const itemsList = service.items && service.items.length > 0 
            ? `<ul class="private-label-items">
                ${service.items.map(item => `<li>${item}</li>`).join('')}
               </ul>`
            : '';
        
        card.innerHTML = `
            <div class="private-label-icon">${service.icon || '🏭'}</div>
            <h3 class="private-label-service-title">${service.title}</h3>
            <p class="private-label-service-description">${service.description}</p>
            ${itemsList}
        `;
        
        grid.appendChild(card);
    });
}

function loadBenefits(benefits) {
    const grid = document.getElementById('benefitsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    benefits.forEach(benefit => {
        const card = document.createElement('div');
        card.className = 'benefit-card fade-in';
        
        const itemsList = benefit.items && benefit.items.length > 0 
            ? `<ul class="benefit-items">
                ${benefit.items.map(item => `<li>${item}</li>`).join('')}
               </ul>`
            : '';
        
        card.innerHTML = `
            <div class="benefit-icon">
                ${benefit.icon ? `<img src="${benefit.icon}" alt="${benefit.title}">` : benefit.emoji || '📦'}
            </div>
            <h3 class="benefit-title">${benefit.title}</h3>
            <p class="benefit-description">${benefit.description}</p>
            ${itemsList}
        `;
        
        grid.appendChild(card);
    });
}

function loadTestimonials(testimonials) {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card fade-in';
        
        const stars = '★'.repeat(testimonial.rating || 5);
        const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
        
        card.innerHTML = `
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${initials}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                    <p class="testimonial-company">${testimonial.company}</p>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function loadSocialLinks(social) {
    const container = document.getElementById('socialLinks');
    if (!container) return;
    
    container.innerHTML = '';
    
    const socialIcons = {
        facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
        instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
        linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
        twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
    };
    
    Object.keys(social).forEach(platform => {
        if (social[platform]) {
            const link = document.createElement('a');
            link.href = social[platform];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.innerHTML = socialIcons[platform] || '';
            container.appendChild(link);
        }
    });
}

function applyColors(colors) {
    if (colors.primary) {
        document.documentElement.style.setProperty('--primary-color', colors.primary);
    }
    if (colors.secondary) {
        document.documentElement.style.setProperty('--secondary-color', colors.secondary);
    }
}

// ========================================
// VALIDACIÓN DE FORMULARIO
// ========================================
function setupFormValidation() {
    const form = document.getElementById('leadForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (validateForm(form)) {
            await handleFormSubmit(form);
        }
    });
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const messages = getCurrentUI().validation || {};
    let isValid = true;
    let errorMessage = '';
    
    // Limpiar errores previos
    removeError(field);
    
    // Validar campo requerido
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = messages.required || 'Este campo es obligatorio';
    }
    
    // Validar email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = messages.email || 'Email no válido';
        }
    }
    
    // Validar teléfono
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = messages.phone || 'Teléfono no válido';
        }
    }
    
    // Validar checkbox de privacidad
    if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
        isValid = false;
        errorMessage = messages.privacy || 'Debes aceptar la política de privacidad';
    }
    
    // Mostrar error o éxito
    if (!isValid) {
        showError(field, errorMessage);
    } else if (value) {
        field.classList.add('success');
    }
    
    return isValid;
}

function showError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');
    
    // Buscar si ya existe un mensaje de error
    let errorElement = field.parentElement.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function removeError(field) {
    field.classList.remove('error', 'success');
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

// ========================================
// ENVÍO DEL FORMULARIO
// ========================================
async function handleFormSubmit(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const formCard = document.querySelector('.lead-form');
    const successCard = document.getElementById('formSuccess');
    
    // Mostrar loading
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Recopilar datos del formulario
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email')
    };
    
    try {
        // URL del Google Apps Script - Web App desplegada
        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbwQ1louL3ycpSG9RnlHNo0USfW32To48YW9bWYcnB-KvCr7hJ_FMVGBiUj_OPMfRrcq/exec';
        
        // Enviar datos a Google Sheets
        const response = await fetch(googleScriptURL, {
            method: 'POST',
            mode: 'no-cors', // Necesario para Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        console.log('✅ Datos enviados a Google Sheets:', data);
        
        // Mostrar mensaje de éxito
        formCard.style.display = 'none';
        successCard.style.display = 'block';
        
        // Enviar evento de conversión a Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', 'generate_lead', {
                'event_category': 'Formulario',
                'event_label': 'Solicitud de catálogo',
                'value': 1
            });
            
            // Evento personalizado adicional
            gtag('event', 'form_submit_success', {
                'form_name': 'Solicitud Catálogo',
                'user_name': data.name,
                'user_email': data.email
            });
        }
        
        // Scroll al mensaje de éxito
        successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
    } catch (error) {
        console.error('❌ Error al enviar el formulario:', error);
        alert(getCurrentUI().form?.submitError || 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// ========================================
// SMOOTH SCROLL
// ========================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// GOOGLE ANALYTICS 4 - TRACKING DE EVENTOS
// ========================================
function setupGA4Tracking() {
    // Solo ejecutar si gtag está disponible
    if (typeof gtag === 'undefined') return;
    
    // Track clicks en botones de teléfono
    document.querySelectorAll('a[href^="tel:"]').forEach(phoneLink => {
        phoneLink.addEventListener('click', () => {
            gtag('event', 'phone_click', {
                'event_category': 'Contacto',
                'event_label': phoneLink.textContent.trim(),
                'phone_number': phoneLink.href.replace('tel:', '')
            });
        });
    });
    
    // Track clicks en botón de solicitar catálogo (antes de enviar)
    const catalogButtons = document.querySelectorAll('.btn-primary, button[type="submit"]');
    catalogButtons.forEach(button => {
        button.addEventListener('click', () => {
            gtag('event', 'click_catalog_button', {
                'event_category': 'CTA',
                'event_label': button.textContent.trim()
            });
        });
    });
    
    // Track scroll profundo (75% de la página)
    let scrollTracked = false;
    window.addEventListener('scroll', () => {
        if (scrollTracked) return;
        
        const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        
        if (scrollPercentage >= 75) {
            scrollTracked = true;
            gtag('event', 'scroll_depth', {
                'event_category': 'Engagement',
                'event_label': '75% de la página',
                'value': 75
            });
        }
    });
    
    // Track tiempo en página (30 segundos)
    setTimeout(() => {
        gtag('event', 'time_on_page', {
            'event_category': 'Engagement',
            'event_label': '30 segundos',
            'value': 30
        });
    }, 30000);
    
    // Track clicks en productos/categorías
    document.querySelectorAll('.category-card, .product-card').forEach(card => {
        card.addEventListener('click', () => {
            const cardTitle = card.querySelector('h3')?.textContent || 'Sin título';
            gtag('event', 'click_product_category', {
                'event_category': 'Productos',
                'event_label': cardTitle
            });
        });
    });
}

// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos que deberían animarse
    const animatedElements = document.querySelectorAll(
        '.category-card, .benefit-card, .testimonial-card, .cta-content'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// ========================================
// HEADER AL HACER SCROLL
// ========================================
// HEADER SCROLL EFFECT
// ========================================
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Agregar clase scrolled cuando se hace scroll
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ========================================
// UTILIDADES
// ========================================
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Función para prevenir el envío del formulario si se presiona Enter accidentalmente
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.type !== 'submit') {
        e.preventDefault();
    }
});

// ========================================
// BANNER DE COOKIES
// ========================================
function showCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        // Mostrar el banner después de un pequeño delay para la animación
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000);
    }
}

function acceptCookies() {
    // Guardar la preferencia del usuario
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
    
    // Inicializar Google Analytics 4
    loadGoogleAnalytics();
    console.log('Cookies aceptadas - Google Analytics activado');
}

function rejectCookies() {
    // Guardar la preferencia del usuario
    localStorage.setItem('cookieConsent', 'rejected');
    hideCookieBanner();
    
    console.log('Cookies rechazadas');
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
    }
}

function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    
    // Si no hay respuesta guardada, mostrar el banner
    if (!consent) {
        showCookieBanner();
    } else if (consent === 'accepted') {
        // Si ya aceptó anteriormente, cargar Google Analytics
        loadGoogleAnalytics();
    }
}

// Función para cargar Google Analytics dinámicamente
function loadGoogleAnalytics() {
    // Evitar cargar GA4 múltiples veces
    if (window.gaLoaded) return;
    window.gaLoaded = true;
    
    // Cargar el script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-77YWR05VTX';
    document.head.appendChild(script);
    
    // Configurar GA4 cuando se cargue el script
    script.onload = function() {
        gtag('js', new Date());
        gtag('config', 'G-77YWR05VTX', {
            'send_page_view': true,
            'cookie_flags': 'SameSite=None;Secure'
        });
        
        // Configurar tracking de eventos
        setupGA4Tracking();
        console.log('Google Analytics 4 cargado y configurado');
    };
}

// Verificar el consentimiento de cookies al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    checkCookieConsent();
});
