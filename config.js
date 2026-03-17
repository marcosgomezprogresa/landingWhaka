// ========================================
// CONFIGURACIÓN DE LA LANDING PAGE - WAKA AÇAÍ
// ========================================
// Configuración personalizada para Waka - Premium Açaí Brand

const landingConfig = {
    // ============ INFORMACIÓN GENERAL ============
    logoIcon: 'images/logosinfondo.png', // Logo icono Whaka
    logoText: 'images/whakanombresinfondo.png', // Logo texto Whaka
    
    // ============ COLORES DE MARCA WAKA ============
    colors: {
        primary: '#7B2CBF',    // Morado açaí
        secondary: '#240046'   // Púrpura oscuro
    },
    
    // ============ SECCIÓN HERO ============
    hero: {
        title: 'Distribuye Açaí Premium',
        highlight: 'en tu Mercado', // Parte resaltada del título
        subtitle: 'Fabricamos sorbetes de açaí y superfrutas listos para retail y horeca. Trabajamos con distribuidores, retailers y cadenas que buscan introducir productos con alta demanda y margen en su mercado.',
        
        // Estadísticas destacadas
        stats: [
            {
                number: '100%',
                label: 'Açaí orgánico certificado'
            },
            {
                number: '+15 años',
                label: 'Experiencia en el mercado'
            },
            {
                number: '+20 países',
                label: 'Distribuyendo açaí premium'
            }
        ],
        
        // Beneficios con checkmark
        checks: [
            'Producto listo para retail y horeca',
            'Fabricación y suministro internacional',
            'Opciones de Private Label',
            'Diferentes sabores y superfrutas'
        ]
    },
    
    // ============ FORMULARIO ============
    form: {
        title: 'Recibe el Catálogo y Condiciones de Distribución',
        subtitle: 'Información comercial en menos de 24h',
        buttonText: 'Solicitar Catálogo →'
    },
    
    // ============ SECCIONES ============
    sections: {
        categories: {
            title: 'Formatos para cada canal de distribución',
            subtitle: 'Productos listos para retail, gourmet y horeca con márgenes competitivos'
        },
        benefits: {
            title: '¿Por qué elegir Waka Açaí?'
        },
        testimonials: {
            title: 'Lo que dicen nuestros partners'
        },
        ctaFinal: {
            title: '¿Listo para traer el açaí premium a tu mercado?',
            text: 'Únete a las mejores cadenas y distribuidores que ya confían en Waka'
        }
    },
    
    // ============ CATEGORÍAS / PRODUCTOS ============
    categories: [
        {
            title: 'Açaí listo para retail',
            description: 'Productos diseñados para supermercados y tiendas especializadas. Formatos optimizados para maximizar la rotación en punto de venta combinando rentabilidad, precio competitivo y posicionamiento saludable.',
            image: 'images/açaí bowl.png',
            items: [
                'Formatos individuales listos para venta',
                'Ya funcionan en mercados internacionales',
                'Preparados para distribución en retail',
                'Alta rotación y márgenes competitivos'
            ]
        },
        {
            title: 'Gama premium de superfrutas',
            description: 'Formatos desarrollados para un posicionamiento más gourmet y saludable. Incluyen opciones con mayor valor nutricional y combinaciones con otras superfrutas.',
            image: 'images/açaí bowl strawberries.png',
            items: [
                'Mayor valor nutricional',
                'Combinaciones con otras superfrutas',
                'Posicionamiento gourmet',
                'Ideal para retailers que buscan diferenciarse'
            ]
        },
        {
            title: 'Smoothie Packs Premium',
            description: 'Combinaciones premium de açaí con superfoods diseñadas para maximizar el valor añadido en tu canal de distribución.',
            image: 'images/açaiDragonFruta9.jpeg',
            items: [
                'Açaí + Dragon Fruit + Mango',
                'Açaí + Berries + Banana',
                'Pre-porcionado para smoothies',
                'Alto valor percibido - posicionamiento premium'
            ]
        },
        {
            title: 'Formatos profesionales para horeca',
            description: 'Envases de mayor tamaño diseñados para restauración, cafeterías, hoteles y food service. Pensados para optimizar costes y operativa en horeca.',
            image: 'images/picolé de açaí.png',
            items: [
                'Perfectos para bowls de açaí',
                'Ideales para smoothies y batidos',
                'Postres saludables y menús healthy',
                'Optimizan costes en food service'
            ]
        }
    ],
    
    // ============ BENEFICIOS ============
    benefits: [
        {
            title: 'Superfood con demanda creciente',
            description: 'El açaí es el superfood número 1 en tendencia. Consumidores health-conscious buscan activamente productos con açaí. Alta rotación garantizada, especialmente en público millennial y Gen Z. Producto Instagram-ready que se vende solo.',
            emoji: '📈',
            icon: ''
        },
        {
            title: 'Márgenes de hasta 80%',
            description: 'El açaí permite posicionamiento premium con márgenes superiores a productos convencionales. Un açaí bowl cuesta producirlo 2-3€ y se vende entre 8-12€. Altísima rentabilidad en retail, HORECA y juice bars.',
            emoji: '💰',
            icon: ''
        },
        {
            title: 'Certificación orgánica & trazabilidad',
            description: 'Açaí 100% orgánico certificado, cosechado sosteniblemente en la Amazonía brasileña. Trazabilidad completa del origen. Certificaciones USDA Organic, EU Organic. Cumple con todas las normativas sanitarias internacionales.',
            emoji: '✅',
            icon: ''
        },
        {
            title: 'Soporte comercial completo',
            description: 'Te ayudamos con recetas, formación de staff, materiales de marketing, estrategia de precios y positioning. Photoshoots profesionales de producto. Asesoría en montaje de açaí bar o corner. Acompañamiento end-to-end.',
            emoji: '🤝',
            icon: ''
        }
    ],
    
    // ============ TESTIMONIOS ============
    testimonials: [
        {
            name: 'Laura G.',
            role: 'Owner',
            company: 'Juice Bar - Madrid',
            text: 'Empecé con Waka hace 2 años cuando los bowls de açaí todavía eran nicho. Hoy representan el 40% de mi facturación. La calidad es increíble, el sabor incomparable y mis clientes están obsesionados. Waka me ayudó con todo: recetas, formación, hasta diseño del menú.',
            rating: 5
        },
        {
            name: 'Roberto M.',
            role: 'Gerente de Compras',
            company: 'Cadena de supermercados premium - México',
            text: 'Lanzamos la línea de açaí de Waka en 8 tiendas piloto. En 3 meses escalamos a toda la cadena (50 locales). El producto vuela de las estanterías. Los márgenes son excelentes y el equipo de Waka es超profesional. Mejor decisión comercial del año.',
            rating: 5
        },
        {
            name: 'Sofia R.',
            role: 'Chef & Propietaria',
            company: 'Cafetería Healthy - Barcelona',
            text: 'Probé varios proveedores de açaí antes de encontrar Waka. La diferencia es abismal: el color es más vibrante, el sabor más intenso, la textura perfecta. Mis clientes notan la calidad premium. Además el soporte de Waka es increíble, siempre disponibles.',
            rating: 5
        }
    ],
    
    // ============ FOOTER ============
    footer: {
        companyName: 'WAKA AÇAÍ',
        description: 'Premium açaí orgánico de la Amazonía. El superfood que transforma tu negocio.',
        email: 'comercial@wakaacai.com',
        phone: '+34 678 513 800',
        website: 'www.wakaacai.com'
    },
    
    // ============ REDES SOCIALES ============
    social: {
        facebook: 'https://www.facebook.com/wakaacai',
        instagram: 'https://www.instagram.com/wakaacai',
        linkedin: 'https://www.linkedin.com/company/wakaacai',
        youtube: 'https://www.youtube.com/@wakaacai',
        twitter: ''
    },
    
    // ============ WHATSAPP ============
    whatsapp: '+34678513800'
};

// ========================================
// EJEMPLOS DE CONFIGURACIÓN PARA CLIENTES ESPECÍFICOS
// ========================================

// EJEMPLO 1: WAKA (Bodega de vino)
const landingConfigWaka = {
    logo: 'waka-logo.png',
    colors: {
        primary: '#8B1538',    // Vino tinto
        secondary: '#2C1810'   // Marrón oscuro
    },
    hero: {
        title: 'Vino español premium',
        highlight: 'directo de bodega',
        subtitle: 'Para distribuidores que buscan calidad excepcional y denominaciones de origen garantizadas',
        stats: [
            {
                number: '+50.000L',
                label: 'Exportados anualmente'
            },
            {
                number: '6 D.O.',
                label: 'Denominaciones de Origen'
            },
            {
                number: '+15 países',
                label: 'Distribuyendo'
            }
        ],
        checks: [
            'Denominaciones de Origen certificadas',
            'Envío directo desde bodega',
            'Precios de mayorista competitivos'
        ]
    },
    form: {
        title: 'Solicita tu catálogo de vinos',
        subtitle: 'Y precios de mayorista',
        buttonText: 'Quiero el catálogo →',
        options: [
            'Vino Tinto',
            'Vino Blanco',
            'Vino Rosado',
            'Cavas y Espumosos',
            'Vinos Orgánicos'
        ]
    },
    categories: [
        {
            title: 'Tintos Reserva y Gran Reserva',
            description: 'Vinos de crianza premium de las mejores D.O. de España',
            image: 'images/vino-tinto.jpg',
            items: [
                'Rioja, Ribera del Duero, Priorat',
                'Crianzas de 12-36 meses',
                'Puntuación Parker: 90-95 puntos'
            ]
        },
        {
            title: 'Blancos y Albariños',
            description: 'Vinos blancos frescos y aromáticos',
            image: 'images/vino-blanco.jpg',
            items: [
                'Rías Baixas, Rueda, Verdejo',
                'Perfectos para maridaje',
                'Alta rotación en HORECA'
            ]
        }
    ],
    footer: {
        companyName: 'WAKA WINES',
        description: 'Vino español premium directo de bodega a tu mercado.',
        email: 'export@wakawines.com',
        phone: '+34 987 654 321',
        website: 'www.wakawines.com'
    }
};

// Para usar una configuración específica, simplemente cambia el nombre de la variable
// o descomenta la línea siguiente:
// const landingConfig = landingConfigWaka;