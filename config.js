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
            'Opciones de Private Label'
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
        },
        privateLabel: {
            title: 'Desarrollo de Marca Propia (Private Label)',
            subtitle: 'Somos especialistas en el desarrollo de marcas propias para distribuidores, retailers, cadenas internacionales y empresas que buscan lanzar su propia línea de açaí y superfrutas.',
            description: 'Contamos con infraestructura, certificaciones y experiencia real en producción para terceros. Acompañamos a nuestros partners en todo el proceso, desde la formulación hasta la entrega final.'
        },
        benefits: {
            title: 'Certificados',
            subtitle: 'Nuestros productos cuentan con certificaciones internacionales que garantizan su calidad, su origen y el cumplimiento de los estándares más exigentes de seguridad alimentaria.'
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
            title: 'Formatos listos para retail',
            description: 'Productos diseñados para supermercados y tiendas especializadas. Formatos optimizados para maximizar la rotación en punto de venta combinando rentabilidad, precio competitivo y posicionamiento saludable.',
            image: 'images/productossabores.png',
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
    benefits: [],
    
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
        email: 'markentry@whaka.com.br',
        phone: '+34 603 734 572',
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

landingConfig.meta = {
    title: 'Whaka Açaí - Distribuidor de Açaí Brasileño',
    description: 'Import açaí premium - Açaí supplier y distributor internacional. Wholesale açaí para retail y horeca. Açaí private label. Fabricación y suministro de superfrutas para distribuidores.',
    keywords: 'import açaí, açaí supplier, wholesale açaí, açaí distributor, açaí private label, açaí retail, açaí horeca, superfrutas distribuidor'
};

landingConfig.ui = {
    languageLabel: 'Idioma',
    form: {
        nameLabel: 'Nombre completo *',
        emailLabel: 'Email *',
        privacyLabel: 'Acepto la política de privacidad *',
        notePrefix: 'Al enviar este formulario aceptas nuestra',
        noteLink: 'política de privacidad',
        phoneText: 'O llámanos directamente:',
        successTitle: '¡Gracias por tu interés!',
        successText: 'Nos pondremos en contacto contigo en menos de 24 horas.',
        submitError: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.'
    },
    privateLabel: {
        title: 'Desarrollo de Marca Propia (Private Label)',
        description: 'Desarrollamos productos para marcas propias, ofreciendo a redes varejistas y distribuidores la misma calidad, tecnología y capacidad industrial aplicada a las líneas Whaka.',
        features: [
            'Açaí y superfrutas en diversos formatos',
            'Especificaciones adaptadas a cada cliente',
            'Confiabilidad y alto rendimiento en gran escala'
        ],
        buttonText: 'Solicita más información →',
        imageAlt: 'Private Label - Productos Marca Propia',
        badgeText: '+50 marcas confían en nosotros'
    },
    footer: {
        navTitle: 'Navegación',
        navHome: 'Inicio',
        navCategories: 'Categorías',
        navBenefits: 'Beneficios',
        navTestimonials: 'Testimonios',
        contactTitle: 'Contacto',
        emailLabel: 'Email:',
        phoneLabel: 'Tel:',
        rights: 'Todos los derechos reservados.',
        legalNotice: 'Aviso Legal',
        privacyPolicy: 'Política de Privacidad',
        cookiePolicy: 'Política de Cookies'
    },
    cookies: {
        title: 'Cookies',
        text: 'Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.',
        accept: 'Aceptar',
        reject: 'Rechazar',
        link: 'Política de Cookies'
    },
    validation: {
        required: 'Este campo es obligatorio',
        email: 'Email no válido',
        phone: 'Teléfono no válido',
        privacy: 'Debes aceptar la política de privacidad'
    }
};

const landingTranslations = {
    es: landingConfig,
    de: {
        ...landingConfig,
        meta: {
            title: 'Whaka Açaí - Premium-Açaí für Vertrieb und HoReCa',
            description: 'Premium-Açaí für Retail und HoReCa. Internationaler Hersteller und Lieferant von Açaí und Superfrüchten für Distributoren, Einzelhandel und Eigenmarken.',
            keywords: 'Premium-Açaí, Açaí Lieferant, Açaí Großhandel, Retail, HoReCa, Private Label, Superfrüchte'
        },
        hero: {
            ...landingConfig.hero,
            title: 'Premium-Açaí vertreiben',
            highlight: 'in Ihrem Markt',
            subtitle: 'Wir produzieren verzehrfertige Sorbets aus Açaí und Superfrüchten für Retail und HoReCa. Wir arbeiten mit Distributoren, Einzelhändlern und Ketten zusammen, die Produkte mit hoher Nachfrage und attraktiven Margen in ihrem Markt einführen möchten.',
            stats: [
                {
                    number: '100%',
                    label: 'Zertifiziertes Bio-Açaí'
                },
                {
                    number: '+20 Jahre',
                    label: 'Erfahrung im Markt'
                },
                {
                    number: '+20 Länder',
                    label: 'Premium-Açaí im Vertrieb'
                }
            ],
            checks: [
                'Produkt bereit für Retail und HoReCa',
                'Internationale Herstellung und Lieferung',
                'Private-Label-Optionen'
            ]
        },
        form: {
            title: 'Katalog und Vertriebsbedingungen anfordern',
            subtitle: 'Kommerzielle Informationen in weniger als 24 Stunden',
            buttonText: 'Katalog anfordern →'
        },
        sections: {
            ...landingConfig.sections,
            categories: {
                title: 'Formate für jeden Vertriebskanal',
                subtitle: 'Produkte für Retail, Gourmet und HoReCa mit attraktiven Margen'
            },
            benefits: {
                title: 'Zertifizierungen',
                subtitle: 'Unsere Produkte verfügen über internationale Zertifizierungen, die Qualität, Herkunft und die Einhaltung strengster Lebensmittelsicherheitsstandards garantieren.'
            },
            testimonials: {
                title: 'Was unsere Partner sagen'
            },
            ctaFinal: {
                title: 'Interessiert daran, Açaí in Ihrem Markt zu vertreiben?',
                text: 'Fordern Sie den vollständigen Katalog und die Vertriebsinformationen an.',
                subtitle: 'Wir arbeiten mit Distributoren, Importeuren, Einzelhändlern und HoReCa-Ketten.',
                buttonText: 'Katalog und Preise anfordern →'
            }
        },
        categories: [
            {
                title: 'Retail-fertige Formate',
                description: 'Produkte für Supermärkte und Fachgeschäfte. Optimierte Formate zur Maximierung der Rotation am Point of Sale durch die Kombination aus Rentabilität, wettbewerbsfähigen Preisen und einer gesunden Positionierung.',
                image: 'images/productossabores.png',
                items: [
                    'Einzelformate, direkt verkaufsfertig',
                    'Bereits erfolgreich in internationalen Märkten',
                    'Für den Retail-Vertrieb vorbereitet',
                    'Schnelle Rotation und attraktive Margen'
                ]
            },
            {
                title: 'Gourmet-Sortiment',
                description: 'Formate für eine hochwertigere und gesundheitsorientierte Positionierung. Dazu gehören Optionen mit höherem Nährwert und Kombinationen mit anderen Superfrüchten.',
                image: 'images/premiunimagen.png',
                items: [
                    'Höherer Nährwert',
                    'Kombinationen mit anderen Superfrüchten',
                    'Gourmet-Positionierung',
                    'Ideal für Händler, die sich differenzieren möchten'
                ]
            },
            {
                title: 'Professionelle HoReCa-Formate',
                description: 'Größere Verpackungseinheiten für Gastronomie, Cafés, Hotels und Foodservice. Entwickelt, um Kosten und Abläufe im HoReCa-Kanal zu optimieren.',
                image: 'images/horecaimagen.png',
                items: [
                    'Perfekt für Açaí-Bowls',
                    'Ideal für Smoothies und Shakes',
                    'Gesunde Desserts und gesunde Menüs',
                    'Optimieren die Kosten im Foodservice'
                ]
            }
        ],
        testimonials: [
            {
                name: 'Laura G.',
                role: 'Inhaberin',
                company: 'Juice Bar - Madrid',
                text: 'Ich habe vor zwei Jahren angefangen, mit Waka zu arbeiten, als Açaí-Bowls noch ein Nischenprodukt waren. Heute machen sie 40 % meines Umsatzes aus. Die Qualität ist unglaublich, der Geschmack unvergleichlich und meine Kunden sind begeistert. Waka unterstützte mich bei allem: Rezepten, Schulungen und sogar beim Design der Speisekarte.',
                rating: 5
            },
            {
                name: 'Roberto M.',
                role: 'Einkaufsleiter',
                company: 'Premium-Supermarktkette - Mexiko',
                text: 'Wir führten die Açaí-Linie von Waka in acht Pilotfilialen ein. Nach drei Monaten skalierten wir auf die gesamte Kette mit 50 Standorten. Das Produkt verkauft sich hervorragend. Die Margen sind ausgezeichnet und das Waka-Team ist äußerst professionell. Die beste geschäftliche Entscheidung des Jahres.',
                rating: 5
            },
            {
                name: 'Sofia R.',
                role: 'Chefköchin & Inhaberin',
                company: 'Healthy Café - Barcelona',
                text: 'Ich habe mehrere Açaí-Lieferanten getestet, bevor ich Waka gefunden habe. Der Unterschied ist enorm: intensivere Farbe, kräftigerer Geschmack und perfekte Textur. Meine Kunden merken die Premiumqualität. Außerdem ist der Support von Waka hervorragend und immer erreichbar.',
                rating: 5
            }
        ],
        footer: {
            ...landingConfig.footer,
            description: 'Premium-Bio-Açaí aus dem Amazonas. Das Superfood, das Ihr Geschäft voranbringt.'
        },
        ui: {
            languageLabel: 'Sprache',
            form: {
                nameLabel: 'Vollständiger Name *',
                emailLabel: 'E-Mail *',
                privacyLabel: 'Ich akzeptiere die Datenschutzrichtlinie *',
                notePrefix: 'Mit dem Absenden dieses Formulars akzeptieren Sie unsere',
                noteLink: 'Datenschutzrichtlinie',
                phoneText: 'Oder rufen Sie uns direkt an:',
                successTitle: 'Vielen Dank für Ihr Interesse!',
                successText: 'Wir werden uns in weniger als 24 Stunden bei Ihnen melden.',
                submitError: 'Beim Senden des Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
            },
            privateLabel: {
                title: 'Entwicklung von Eigenmarken (Private Label)',
                description: 'Wir entwickeln Produkte für Eigenmarken und bieten Einzelhändlern und Distributoren dieselbe Qualität, Technologie und industrielle Kapazität wie bei den Whaka-Linien.',
                features: [
                    'Açaí und Superfrüchte in verschiedenen Formaten',
                    'An jeden Kunden angepasste Spezifikationen',
                    'Zuverlässigkeit und hohe Leistung im großen Maßstab'
                ],
                buttonText: 'Weitere Informationen anfordern →',
                imageAlt: 'Private Label - Eigenmarkenprodukte',
                badgeText: '+50 Marken vertrauen uns'
            },
            footer: {
                navTitle: 'Navigation',
                navHome: 'Startseite',
                navCategories: 'Kategorien',
                navBenefits: 'Vorteile',
                navTestimonials: 'Testimonials',
                contactTitle: 'Kontakt',
                emailLabel: 'E-Mail:',
                phoneLabel: 'Tel.:',
                rights: 'Alle Rechte vorbehalten.',
                legalNotice: 'Rechtlicher Hinweis',
                privacyPolicy: 'Datenschutzrichtlinie',
                cookiePolicy: 'Cookie-Richtlinie'
            },
            cookies: {
                title: 'Cookies',
                text: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch das Weitersurfen akzeptieren Sie unsere Cookie-Nutzung.',
                accept: 'Akzeptieren',
                reject: 'Ablehnen',
                link: 'Cookie-Richtlinie'
            },
            validation: {
                required: 'Dieses Feld ist erforderlich',
                email: 'Ungültige E-Mail-Adresse',
                phone: 'Ungültige Telefonnummer',
                privacy: 'Sie müssen die Datenschutzrichtlinie akzeptieren'
            }
        }
    },
    nl: {
        ...landingConfig,
        meta: {
            title: 'Whaka Açaí - Premium Açaí voor retail en horeca',
            description: 'Premium açaí voor retail en horeca. Internationale productie en levering van açaí en superfruits voor distributeurs, retailers en private label.',
            keywords: 'premium açaí, açaí leverancier, groothandel açaí, retail, horeca, private label, superfruits'
        },
        hero: {
            ...landingConfig.hero,
            title: 'Distribueer Premium Açaí',
            highlight: 'in jouw markt',
            subtitle: 'Wij produceren açaí- en superfruit-sorbets, klaar voor retail en horeca. We werken met distributeurs, retailers en ketens die producten met hoge vraag en aantrekkelijke marges in hun markt willen introduceren.',
            stats: [
                {
                    number: '100%',
                    label: 'Gecertificeerde biologische açaí'
                },
                {
                    number: '+20 jaar',
                    label: 'Ervaring in de markt'
                },
                {
                    number: '+20 landen',
                    label: 'Premium açaí in distributie'
                }
            ],
            checks: [
                'Product klaar voor retail en horeca',
                'Internationale productie en levering',
                'Private-Label-opties'
            ]
        },
        form: {
            title: 'Ontvang de catalogus en distributievoorwaarden',
            subtitle: 'Commerciële informatie binnen 24 uur',
            buttonText: 'Catalogus aanvragen →'
        },
        sections: {
            ...landingConfig.sections,
            categories: {
                title: 'Formaten voor elk distributiekanaal',
                subtitle: 'Producten voor retail, gourmet en horeca met concurrerende marges'
            },
            benefits: {
                title: 'Certificeringen',
                subtitle: 'Onze producten beschikken over internationale certificeringen die kwaliteit, herkomst en naleving van de strengste voedselveiligheidsnormen garanderen.'
            },
            testimonials: {
                title: 'Wat onze partners zeggen'
            },
            ctaFinal: {
                title: 'Geïnteresseerd in het distribueren van Açaí in jouw markt?',
                text: 'Vraag de volledige catalogus en distributie-informatie aan.',
                subtitle: 'We werken met distributeurs, importeurs, retailers en horecaketens.',
                buttonText: 'Catalogus en prijzen aanvragen →'
            }
        },
        categories: [
            {
                title: 'Retailklare formaten',
                description: 'Producten ontworpen voor supermarkten en speciaalzaken. Geoptimaliseerde formaten om de rotatie op het verkooppunt te maximaliseren, met een combinatie van winstgevendheid, concurrerende prijzen en een gezonde positionering.',
                image: 'images/productossabores.png',
                items: [
                    'Individuele formaten klaar voor verkoop',
                    'Reeds succesvol in internationale markten',
                    'Voorbereid voor retaildistributie',
                    'Hoge rotatie en concurrerende marges'
                ]
            },
            {
                title: 'Gourmet-assortiment',
                description: 'Formaten ontwikkeld voor een meer premium en gezonde positionering. Inclusief opties met hogere voedingswaarde en combinaties met andere superfruits.',
                image: 'images/premiunimagen.png',
                items: [
                    'Hogere voedingswaarde',
                    'Combinaties met andere superfruits',
                    'Gourmetpositionering',
                    'Ideaal voor retailers die zich willen onderscheiden'
                ]
            },
            {
                title: 'Professionele horeca-formaten',
                description: 'Grotere verpakkingen voor restaurants, cafés, hotels en foodservice. Ontwikkeld om kosten en operationele processen in horeca te optimaliseren.',
                image: 'images/horecaimagen.png',
                items: [
                    'Perfect voor açaí-bowls',
                    'Ideaal voor smoothies en shakes',
                    'Gezonde desserts en healthy menu’s',
                    'Optimaliseren kosten in foodservice'
                ]
            }
        ],
        testimonials: [
            {
                name: 'Laura G.',
                role: 'Eigenaresse',
                company: 'Juice Bar - Madrid',
                text: 'Ik begon twee jaar geleden met Waka toen açaí-bowls nog een niche waren. Nu vertegenwoordigen ze 40% van mijn omzet. De kwaliteit is ongelooflijk, de smaak ongeëvenaard en mijn klanten zijn enthousiast. Waka hielp me met alles: recepten, training en zelfs het ontwerp van het menu.',
                rating: 5
            },
            {
                name: 'Roberto M.',
                role: 'Inkoopmanager',
                company: 'Premium supermarktketen - Mexico',
                text: 'We lanceerden de açaí-lijn van Waka in acht pilotwinkels. Binnen drie maanden schaalden we op naar de volledige keten met 50 locaties. Het product vliegt van de schappen. De marges zijn uitstekend en het Waka-team is zeer professioneel. De beste commerciële beslissing van het jaar.',
                rating: 5
            },
            {
                name: 'Sofia R.',
                role: 'Chef & Eigenaresse',
                company: 'Healthy Café - Barcelona',
                text: 'Ik probeerde verschillende açaí-leveranciers voordat ik Waka vond. Het verschil is enorm: intensere kleur, sterkere smaak en perfecte textuur. Mijn klanten merken de premiumkwaliteit. Bovendien is de ondersteuning van Waka geweldig en altijd beschikbaar.',
                rating: 5
            }
        ],
        footer: {
            ...landingConfig.footer,
            description: 'Premium biologische açaí uit het Amazonegebied. De superfood die jouw bedrijf vooruithelpt.'
        },
        ui: {
            languageLabel: 'Taal',
            form: {
                nameLabel: 'Volledige naam *',
                emailLabel: 'E-mail *',
                privacyLabel: 'Ik accepteer het privacybeleid *',
                notePrefix: 'Door dit formulier te verzenden accepteer je ons',
                noteLink: 'privacybeleid',
                phoneText: 'Of bel ons direct:',
                successTitle: 'Bedankt voor je interesse!',
                successText: 'We nemen binnen 24 uur contact met je op.',
                submitError: 'Er is een fout opgetreden bij het verzenden van het formulier. Probeer het opnieuw.'
            },
            privateLabel: {
                title: 'Ontwikkeling van huismerken (Private Label)',
                description: 'Wij ontwikkelen producten voor huismerken en bieden retailers en distributeurs dezelfde kwaliteit, technologie en industriële capaciteit als de Whaka-lijnen.',
                features: [
                    'Açaí en superfruits in diverse formaten',
                    'Specificaties aangepast aan elke klant',
                    'Betrouwbaarheid en hoge prestaties op grote schaal'
                ],
                buttonText: 'Meer informatie aanvragen →',
                imageAlt: 'Private Label - Huismerkproducten',
                badgeText: '+50 merken vertrouwen op ons'
            },
            footer: {
                navTitle: 'Navigatie',
                navHome: 'Home',
                navCategories: 'Categorieën',
                navBenefits: 'Voordelen',
                navTestimonials: 'Testimonials',
                contactTitle: 'Contact',
                emailLabel: 'E-mail:',
                phoneLabel: 'Tel:',
                rights: 'Alle rechten voorbehouden.',
                legalNotice: 'Juridische kennisgeving',
                privacyPolicy: 'Privacybeleid',
                cookiePolicy: 'Cookiebeleid'
            },
            cookies: {
                title: 'Cookies',
                text: 'We gebruiken cookies om je ervaring te verbeteren. Door verder te surfen accepteer je ons gebruik van cookies.',
                accept: 'Accepteren',
                reject: 'Weigeren',
                link: 'Cookiebeleid'
            },
            validation: {
                required: 'Dit veld is verplicht',
                email: 'Ongeldig e-mailadres',
                phone: 'Ongeldig telefoonnummer',
                privacy: 'Je moet het privacybeleid accepteren'
            }
        }
    }
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