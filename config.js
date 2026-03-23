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
                number: '+20 años',
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
        varieties: {
            title: 'Diferentes sabores y superfrutas',
            subtitle: 'Amplio portafolio de superfrutas, mezclas funcionales y sabores exclusivos para maximizar oportunidades de venta en cada canal'
        },
        privateLabel: {
            title: 'Desarrollo de Marca Propia (Private Label)',
            subtitle: 'Somos especialistas en el desarrollo de marcas propias para distribuidores, retailers, cadenas internacionales y empresas que buscan lanzar su propia línea de açaí y superfrutas.',
            description: 'Contamos con infraestructura, certificaciones y experiencia real en producción para terceros. Acompañamos a nuestros partners en todo el proceso, desde la formulación hasta la entrega final.'
        },
        benefits: {
            title: '¿Por qué trabajar con nosotros?',
            subtitle: 'Whaka es una industria con más de dos décadas de experiencia en açaí y superfrutas, con infraestructura, certificaciones y capacidad real para abastecer a distribuidores, cadenas de retail, horeca y marcas propias en diferentes mercados.'
        },
        testimonials: {
            title: 'Lo que dicen nuestros partners'
        },
        ctaFinal: {
            title: '¿Interesado en Distribuir Açaí en tu Mercado?',
            text: 'Solicita el catálogo completo y la información de distribución',
            subtitle: 'Trabajamos con distribuidores, importadores, retailers y cadenas horeca',
            buttonText: 'Solicitar Catálogo y Precios'
        }
    },
    
    // ============ CATEGORÍAS / PRODUCTOS ============
    categories: [
        {
            title: 'Açaí listo para retail',
            description: 'Productos diseñados para supermercados y tiendas especializadas. Formatos optimizados para maximizar la rotación en punto de venta combinando rentabilidad, precio competitivo y posicionamiento saludable.',
            image: 'images/productos retail.png',
            items: [
                'Formatos individuales listos para venta',
                'Ya funcionan en mercados internacionales',
                'Preparados para distribución en retail',
                'Alta rotación y márgenes competitivos'
            ]
        },
        {
            title: 'Gama gourmet',
            description: 'Formatos desarrollados para un posicionamiento más gourmet y saludable. Incluyen opciones con mayor valor nutricional y combinaciones con otras superfrutas.',
            image: 'images/premiunimagen.png',
            items: [
                'Mayor valor nutricional',
                'Combinaciones con otras superfrutas',
                'Posicionamiento gourmet',
                'Ideal para retailers que buscan diferenciarse'
            ]
        },
        {
            title: 'Formatos profesionales para horeca',
            description: 'Envases de mayor tamaño diseñados para restauración, cafeterías, hoteles y food service. Pensados para optimizar costes y operativa en horeca.',
            image: 'images/horecaimagen.png',
            items: [
                'Perfectos para bowls de açaí',
                'Ideales para smoothies y batidos',
                'Postres saludables y menús healthy',
                'Optimizan costes en food service'
            ]
        }
    ],
    
    // ============ VARIEDADES DE SUPERFRUTAS ============
    varieties: [
        {
            name: 'Superfrutas premium',
            description: 'Línea completa de superfrutas para ampliar el portafolio de producto',
            items: [
                'Guaraná - energizante natural presente en casi todas las líneas',
                'Maracuyá - tropical y refrescante',
                'Coco - cremoso y versatil',
                'Fresa - clásico de alta demanda',
                'Sandía - refrescante ideal para verano',
                'Piña - tropical con excelente aceptación',
                'Mix tropical - combinación lista para servir'
            ]
        },
        {
            name: 'Mezclas funcionales',
            description: 'Combinaciones Antiox y Detox con ingredientes premium',
            items: [
                'Uva - antioxidante natural',
                'Beterraba - detox y energizante',
                'Jengibre - propiedades funcionales',
                'Kale - superfood verde',
                'Pepino - refrescante y detox',
                'Manzana - base versátil',
                'Biomasa - fibra funcional',
                'Fresa - antioxidante y sabor'
            ]
        },
        {
            name: 'Sabores regionales de Brasil',
            description: 'Innovación auténtica para diferenciarse en el mercado',
            items: [
                'Tapioca con coco y leche condensado - postre brasileño auténtico',
                'Cupuaçu trufado con chocolate - superfruit amazónico premium',
                'Sabores exclusivos que aportan diferenciación',
                'Experiencia brasileña real para el consumidor final'
            ]
        },
        {
            name: 'Soluciones para horeca y food service',
            description: 'Formatos y mezclas diseñadas para operaciones profesionales',
            items: [
                'Formatos grandes: 3,6L, 5L, 10L ideales para alto volumen',
                'Productos listos para servir que simplifican operativa',
                'Mezclas para smoothies y bowls pre-formuladas',
                'Bases optimizadas que reducen tiempo de preparación',
                'Rentabilidad maximizada por porción servida'
            ]
        }
    ],

    // ============ PRIVATE LABEL ============
    privateLabel: {
        services: [
            {
                icon: '🧪',
                title: 'Desarrollo de producto',
                description: 'Experiencia desde 1997 en producción de açaí y superfrutas',
                items: [
                    'Productores de açaí y productos a base de superfrutas desde 1997',
                    'Amplia variedad de formulaciones: clásico, premium, gourmet, orgánico, con guaraná, sin azúcar, funcionales, mezclas con frutas',
                    'Portafolio adaptable a cualquier mercado: food service, retail, horeca, exportación',
                    'Línea completa de formatos: 100g, 200ml, 500ml, 1,02L, 1,5L, 3,6L, 5L, 10L'
                ]
            },
            {
                icon: '🎨',
                title: 'Diseño y adaptación de packaging',
                description: 'Experiencia en marcas propias y co-branding',
                items: [
                    'Múltiples ejemplos de marcas desarrolladas para terceros con éxito',
                    'Capacidad para adaptar envases, etiquetas, idiomas, claims y requisitos regulatorios',
                    'Packaging disponible en múltiples presentaciones: potes, cajas industriales, stand-up pouches, pulpas, picolés, sorbets',
                    'Diseño especializado para retail y food service internacional'
                ]
            },
            {
                icon: '🏭',
                title: 'Producción industrial y capacidad',
                description: 'Infraestructura escalable para grandes volúmenes',
                items: [
                    'Capacidad productiva de 4.200 litros/hora de producto acabado',
                    'Dos plantas industriales: Araçariguama/SP y Benevides/PA',
                    'Capacidad de almacenamiento para 1.050 toneladas en planta Pará',
                    'Producción para grandes volúmenes: food service, industria, cadenas de supermercados y exportación'
                ]
            },
            {
                icon: '🏆',
                title: 'Certificaciones internacionales',
                description: 'Estándares globales para mercados exigentes',
                items: [
                    'USDA Organic - Certificación orgánica para mercado estadounidense',
                    'Orgânico Brasil - Certificación orgánica nacional',
                    'IFS Global Markets Food - Estándar internacional de calidad alimentaria',
                    'Certificaciones que permiten fabricar marcas propias para cadenas internacionales'
                ]
            },
            {
                icon: '🌍',
                title: 'Escalabilidad y distribución global',
                description: 'Experiencia real en grandes cadenas y exportación',
                items: [
                    'Operación de distribución propia en Estados Unidos (Florida) desde 2018',
                    'Exportación activa con línea específica para mercados internacionales',
                    'Experiencia suministrando a grandes cadenas: Walmart, Carrefour, Pão de Açúcar, Mercadinhos São Luiz, St Marche, Fort Atacado',
                    'Logística internacional y cumplimiento normativo en múltiples países'
                ]
            },
            {
                icon: '🧩',
                title: 'Flexibilidad para diferentes categorías',
                description: 'Producción para terceros en múltiples segmentos',
                items: [
                    'Açaí premium, orgánico y clásico con guaraná',
                    'Sorbets funcionales y picolés',
                    'Pulpa de açaí y mezclas con frutas',
                    'Formatos industriales (5L, 10L) para food service y fabricación',
                    'Capacidad de crear marcas propias en cualquier segmento del mercado'
                ]
            }
        ]
    },

    // ============ BENEFICIOS ============
    benefits: [
        {
            title: 'Experiencia y solidez industrial',
            description: 'Más de 21 años de know-how en açaí y superfrutas',
            emoji: '🏭',
            icon: '',
            items: [
                'Productores de açaí y productos a base de superfrutas desde 1997',
                'Operación industrial desde 2014 con crecimiento continuo',
                'Dos plantas estratégicas en Brasil: Araçariguama/SP y Benevides/PA',
                'Planta en Pará con capacidad de almacenamiento de 1.050 toneladas',
                'Capacidad productiva de 4.200 litros/hora de producto terminado'
            ]
        },
        {
            title: 'Certificaciones internacionales',
            description: 'Calidad, seguridad alimentaria y estándares globales',
            emoji: '🌍',
            icon: '',
            items: [
                'USDA Organic - Certificación orgánica para mercado estadounidense',
                'Orgânico Brasil - Certificación orgánica nacional',
                'IFS Global Markets Food - Estándar internacional de calidad alimentaria',
                'Certificaciones que garantizan cumplimiento de estándares globales',
                'Aptas para exportación a mercados exigentes'
            ]
        },
        {
            title: 'Alcance internacional',
            description: 'Presencia global con distribución propia',
            emoji: '🚚',
            icon: '',
            items: [
                'Distribución propia en Estados Unidos (Florida) desde 2018',
                'Operación para food service y retail estadounidense',
                'Exportación activa con línea específica para mercados internacionales',
                'Experiencia facilitando el flujo de productos a otros países',
                'Logística internacional y cumplimiento normativo'
            ]
        },
        {
            title: 'Confianza de grandes cadenas',
            description: 'Capacidad real de suministro y cumplimiento',
            emoji: '🛒',
            icon: '',
            items: [
                'Ya abastecemos a Walmart, Carrefour, Pão de Açúcar',
                'Presentes en Mercadinhos São Luiz, St Marche, Fort Atacado',
                'También en Angeloni, Bistek y otras cadenas de prestigio',
                'Demostramos capacidad para grandes volúmenes',
                'Cumplimiento garantizado con estándares de retail internacional'
            ]
        },
        {
            title: 'Portafolio amplio y adaptable',
            description: 'Flexibilidad para diferentes mercados y canales',
            emoji: '📦',
            icon: '',
            items: [
                'Formatos desde 100g hasta 10L para todo tipo de canal',
                'Líneas premium, orgánicas, clásicas, funcionales',
                'Sorbets, pulpas, picolés y más categorías',
                'Ideal para Private Label, food service y retail',
                'Capacidad para atender industrias que utilizan pulpa en barras o tambores'
            ]
        },
        {
            title: 'Experiencia real en Private Label',
            description: 'Fabricamos para grandes marcas en diferentes mercados',
            emoji: '🤝',
            icon: '',
            items: [
                'Portafolio completo de marcas propias desarrolladas para terceros',
                'Experiencia en co-branding con marcas como Santa Helena® y Pacogel®',
                'Desde la formulación hasta el packaging final',
                'Capacidad de escalabilidad para grandes volúmenes',
                'Ejemplos reales de éxito en retail internacional'
            ]
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