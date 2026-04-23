const LEGAL_DEFAULT_LANGUAGE = 'es';
const LEGAL_SUPPORTED_LANGUAGES = ['es', 'nl', 'de'];
const LEGAL_LANGUAGE_STORAGE_KEY = 'preferredLanguage';

const legalTranslations = {
    es: {
        common: {
            backToHome: '← Volver a la página principal',
            rights: 'Todos los derechos reservados.',
            legalNotice: 'Aviso Legal',
            privacyPolicy: 'Política de Privacidad',
            cookiePolicy: 'Política de Cookies'
        },
        legal: {
            title: 'Aviso Legal - Whaka Açaí',
            pageTitle: 'Aviso Legal',
            lastUpdated: 'Última actualización: 20 de abril de 2026',
            sections: [
                {
                    title: '1. Datos de Contacto',
                    paragraphs: [
                        'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se facilitan los siguientes datos de contacto:'
                    ],
                    list: [
                        '<strong>Email:</strong> markentry@whaka.com.br',
                        '<strong>Teléfono:</strong> +34 603 734 572'
                    ]
                },
                {
                    title: '2. Objeto',
                    paragraphs: [
                        'El presente Aviso Legal regula el acceso y uso del sitio web (en adelante, "el Sitio Web").',
                        'El acceso al Sitio Web es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios.'
                    ]
                },
                {
                    title: '3. Condiciones de Uso',
                    paragraphs: [
                        'El acceso y uso del Sitio Web implica la aceptación expresa y sin reservas de las presentes condiciones de uso. Los usuarios se comprometen a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través del Sitio Web.',
                        'Queda prohibido:'
                    ],
                    list: [
                        'Utilizar los contenidos del Sitio Web con fines ilícitos o lesivos de los derechos e intereses de terceros.',
                        'Realizar cualquier acción que pueda dañar, inutilizar o sobrecargar el Sitio Web.',
                        'Introducir o difundir virus informáticos o cualesquiera otros sistemas que puedan causar daños.'
                    ]
                },
                {
                    title: '4. Propiedad Intelectual e Industrial',
                    paragraphs: [
                        'Todos los contenidos del Sitio Web, incluyendo sin carácter limitativo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, están protegidos por derechos de propiedad intelectual, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.'
                    ]
                },
                {
                    title: '5. Responsabilidad',
                    paragraphs: [
                        'El titular del Sitio Web no se hace responsable de los daños y perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico, motivadas por causas ajenas.'
                    ]
                },
                {
                    title: '6. Enlaces',
                    paragraphs: [
                        'El Sitio Web puede contener enlaces a sitios web de terceros. No se asume ninguna responsabilidad por el contenido, información o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo.'
                    ]
                },
                {
                    title: '7. Modificaciones',
                    paragraphs: [
                        'Se reserva el derecho de efectuar sin previo aviso las modificaciones que se consideren oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través del mismo como la forma en la que éstos aparezcan presentados o localizados.'
                    ]
                },
                {
                    title: '8. Legislación Aplicable y Jurisdicción',
                    paragraphs: [
                        'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia relativa a la interpretación o aplicación de las presentes condiciones, las partes se someten expresamente a los Juzgados y Tribunales correspondientes según la normativa vigente.'
                    ]
                }
            ]
        },
        privacy: {
            title: 'Política de Privacidad - Whaka Açaí',
            pageTitle: 'Política de Privacidad',
            lastUpdated: 'Última actualización: 20 de abril de 2026',
            sections: [
                {
                    title: '1. Información al Usuario',
                    paragraphs: ['Datos de contacto del responsable del tratamiento de tus datos:'],
                    list: [
                        '<strong>Email:</strong> markentry@whaka.com.br',
                        '<strong>Teléfono:</strong> +34 603 734 572'
                    ]
                },
                {
                    title: '2. ¿Qué Datos Personales Recogemos?',
                    paragraphs: ['Los datos personales que recabamos a través del formulario de contacto son:'],
                    list: [
                        'Nombre completo',
                        'Dirección de correo electrónico',
                        'Datos de navegación (a través de cookies, si se aceptan)'
                    ]
                },
                {
                    title: '3. ¿Con Qué Finalidad Tratamos Tus Datos Personales?',
                    paragraphs: ['Tratamos la información que nos facilitan las personas interesadas con los siguientes fines:'],
                    list: [
                        '<strong>Gestión de solicitudes:</strong> Responder a las consultas y enviar el catálogo de productos solicitado.',
                        '<strong>Marketing:</strong> Enviar comunicaciones comerciales sobre nuestros productos y servicios (solo si se otorga consentimiento expreso).',
                        '<strong>Analítica web:</strong> Mejorar la experiencia de usuario mediante análisis del comportamiento en el sitio web (solo si se aceptan cookies).'
                    ]
                },
                {
                    title: '4. ¿Por Cuánto Tiempo Conservaremos Tus Datos?',
                    paragraphs: ['Los datos personales proporcionados se conservarán:'],
                    list: [
                        'Mientras se mantenga la relación comercial.',
                        'Mientras no se solicite su supresión por el interesado.',
                        'Durante los años necesarios para cumplir con las obligaciones legales.'
                    ]
                },
                {
                    title: '5. ¿Cuál Es la Legitimación Para el Tratamiento de Tus Datos?',
                    paragraphs: ['La base legal para el tratamiento de tus datos es:'],
                    list: [
                        '<strong>Consentimiento del interesado:</strong> Al marcar la casilla de aceptación de la política de privacidad en el formulario.',
                        '<strong>Interés legítimo:</strong> Para el envío de comunicaciones comerciales de productos y servicios relacionados con los solicitados.'
                    ]
                },
                {
                    title: '6. ¿A Qué Destinatarios Se Comunicarán Tus Datos?',
                    paragraphs: ['Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. No obstante, se informa de que los datos podrán ser comunicados a:'],
                    list: [
                        'Google Analytics (para análisis de tráfico web, solo si se aceptan cookies)',
                        'Proveedores de servicios de email marketing (si se contrata este servicio)',
                        'Google Sheets (para almacenamiento de formularios)'
                    ]
                },
                {
                    title: '7. Transferencias de Datos a Terceros Países',
                    paragraphs: ['Algunos de los servicios utilizados (como Google Analytics) pueden realizar transferencias internacionales de datos a Estados Unidos y otros países. Estas transferencias se realizan bajo las garantías adecuadas establecidas en el RGPD.']
                },
                {
                    title: '8. ¿Cuáles Son Tus Derechos Cuando Nos Facilitas Tus Datos?',
                    paragraphs: [
                        'Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernen, o no.',
                        'Las personas interesadas tienen derecho a:'
                    ],
                    list: [
                        '<strong>Acceso:</strong> Solicitar acceso a tus datos personales.',
                        '<strong>Rectificación:</strong> Solicitar la rectificación de los datos inexactos.',
                        '<strong>Supresión:</strong> Solicitar la supresión de tus datos cuando ya no sean necesarios.',
                        '<strong>Oposición:</strong> Oponerte al tratamiento de tus datos.',
                        '<strong>Limitación:</strong> Solicitar la limitación del tratamiento de tus datos.',
                        '<strong>Portabilidad:</strong> Solicitar la portabilidad de tus datos.'
                    ],
                    trailingParagraphs: [
                        'Podrás ejercer estos derechos enviando un correo electrónico a markentry@whaka.com.br, adjuntando copia de tu documento de identidad.',
                        'También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente.'
                    ]
                },
                {
                    title: '9. Medidas de Seguridad',
                    paragraphs: ['Se han adoptado los niveles de seguridad de protección de datos personales legalmente requeridos, y se han instalado todos los medios y medidas técnicas necesarias para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos facilitados.']
                },
                {
                    title: '10. Modificaciones de la Política de Privacidad',
                    paragraphs: ['Se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.']
                }
            ]
        },
        cookies: {
            title: 'Política de Cookies - Whaka Açaí',
            pageTitle: 'Política de Cookies',
            lastUpdated: 'Última actualización: 20 de abril de 2026',
            sections: [
                {
                    title: '1. ¿Qué Son las Cookies?',
                    paragraphs: ['Una cookie es un fichero que se descarga en tu ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.']
                },
                {
                    title: '2. ¿Qué Tipos de Cookies Utiliza Este Sitio Web?',
                    subSections: [
                        {
                            title: 'Cookies Técnicas (Necesarias)',
                            paragraphs: ['Estas cookies son estrictamente necesarias para el funcionamiento del sitio web y no pueden ser desactivadas en nuestros sistemas.'],
                            table: {
                                headers: ['Cookie', 'Finalidad', 'Duración'],
                                rows: [
                                    ['cookieConsent', 'Almacena la preferencia del usuario sobre el uso de cookies', 'Persistente (localStorage)']
                                ]
                            }
                        },
                        {
                            title: 'Cookies Analíticas (Google Analytics)',
                            paragraphs: ['Estas cookies nos permiten contar las visitas y conocer las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Solo se activan si el usuario acepta las cookies.'],
                            table: {
                                headers: ['Cookie', 'Proveedor', 'Finalidad', 'Duración'],
                                rows: [
                                    ['_ga', 'Google Analytics', 'Identificador único de usuario para análisis estadístico', '2 años'],
                                    ['_ga_*', 'Google Analytics', 'Mantiene el estado de la sesión', '2 años'],
                                    ['_gid', 'Google Analytics', 'Identificador único de usuario para análisis estadístico', '24 horas']
                                ]
                            }
                        }
                    ]
                },
                {
                    title: '3. Consentimiento y Control de Cookies',
                    paragraphs: ['Al acceder a este sitio web por primera vez, se te muestra un banner informativo sobre el uso de cookies. Puedes:'],
                    list: [
                        '<strong>Aceptar cookies:</strong> Al hacer clic en "Aceptar", permites el uso de todas las cookies descritas, incluyendo Google Analytics.',
                        '<strong>Rechazar cookies:</strong> Al hacer clic en "Rechazar", solo se utilizarán las cookies técnicas necesarias para el funcionamiento básico del sitio web. Google Analytics no se activará.'
                    ]
                },
                {
                    title: '4. ¿Cómo Gestionar las Cookies en Tu Navegador?',
                    paragraphs: ['Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador:'],
                    list: [
                        '<strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios',
                        '<strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio',
                        '<strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web',
                        '<strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies y datos del sitio'
                    ],
                    trailingParagraphs: ['<strong>Importante:</strong> Si deshabilitas todas las cookies, algunas funcionalidades del sitio web pueden no funcionar correctamente.']
                },
                {
                    title: '5. Cookies de Terceros',
                    paragraphs: ['Este sitio web utiliza servicios de terceros que recopilan información con fines estadísticos:'],
                    list: [
                        '<strong>Google Analytics:</strong> Herramienta de análisis que ayuda a los propietarios de sitios web a comprender cómo interactúan los visitantes. Para más información, consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style="color: #7B2CBF;">Política de Privacidad de Google</a>.'
                    ]
                },
                {
                    title: '6. Actualización de la Política de Cookies',
                    paragraphs: ['Es posible que actualicemos la Política de Cookies de nuestro sitio web, por ello te recomendamos revisar esta política cada vez que accedas a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.']
                },
                {
                    title: '7. Más Información',
                    paragraphs: ['Si tienes dudas acerca de esta política de cookies, puedes contactar con nosotros en:'],
                    list: [
                        '<strong>Email:</strong> markentry@whaka.com.br',
                        '<strong>Teléfono:</strong> +34 603 734 572'
                    ]
                }
            ]
        }
    },
    de: {
        common: {
            backToHome: '← Zur Startseite zurück',
            rights: 'Alle Rechte vorbehalten.',
            legalNotice: 'Rechtlicher Hinweis',
            privacyPolicy: 'Datenschutzrichtlinie',
            cookiePolicy: 'Cookie-Richtlinie'
        },
        legal: {
            title: 'Rechtlicher Hinweis - Whaka Açaí',
            pageTitle: 'Rechtlicher Hinweis',
            lastUpdated: 'Letzte Aktualisierung: 20. April 2026',
            sections: [
                {
                    title: '1. Kontaktdaten',
                    paragraphs: ['Gemäß Artikel 10 des spanischen Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr stellen wir folgende Kontaktdaten zur Verfügung:'],
                    list: [
                        '<strong>E-Mail:</strong> markentry@whaka.com.br',
                        '<strong>Telefon:</strong> +34 603 734 572'
                    ]
                },
                {
                    title: '2. Gegenstand',
                    paragraphs: [
                        'Dieser rechtliche Hinweis regelt den Zugang zu und die Nutzung der Website (nachfolgend „die Website“).',
                        'Der Zugang zur Website ist kostenlos, mit Ausnahme der Kosten für die Verbindung über das Telekommunikationsnetz, die vom jeweiligen Zugangsanbieter der Nutzer bereitgestellt wird.'
                    ]
                },
                {
                    title: '3. Nutzungsbedingungen',
                    paragraphs: [
                        'Der Zugang zu und die Nutzung der Website setzen die ausdrückliche und vorbehaltlose Annahme dieser Nutzungsbedingungen voraus. Die Nutzer verpflichten sich, die über die Website angebotenen Inhalte und Dienste angemessen zu verwenden.',
                        'Untersagt ist insbesondere:'
                    ],
                    list: [
                        'die Inhalte der Website für rechtswidrige Zwecke oder zum Nachteil der Rechte und Interessen Dritter zu verwenden,',
                        'Handlungen vorzunehmen, die die Website beschädigen, unbrauchbar machen oder überlasten können,',
                        'Computerviren oder sonstige Systeme einzuführen oder zu verbreiten, die Schäden verursachen können.'
                    ]
                },
                {
                    title: '4. Geistiges Eigentum und gewerbliche Schutzrechte',
                    paragraphs: ['Sämtliche Inhalte der Website, einschließlich unter anderem Texte, Fotografien, Grafiken, Bilder, Symbole, Technologie, Software sowie das grafische Design und der Quellcode, sind durch geistige Eigentumsrechte geschützt. Daraus kann nicht abgeleitet werden, dass dem Nutzer irgendwelche Nutzungsrechte an diesen Inhalten übertragen werden.']
                },
                {
                    title: '5. Haftung',
                    paragraphs: ['Der Inhaber der Website haftet nicht für Schäden, die durch Störungen, Auslassungen, Unterbrechungen, Computerviren, Telefonausfälle oder Unterbrechungen im Betrieb des elektronischen Systems entstehen könnten, sofern diese auf Ursachen außerhalb seines Einflussbereichs zurückzuführen sind.']
                },
                {
                    title: '6. Links',
                    paragraphs: ['Die Website kann Links zu Websites Dritter enthalten. Für deren Inhalte, Informationen oder Dienstleistungen wird keine Verantwortung übernommen. Diese dienen ausschließlich Informationszwecken.']
                },
                {
                    title: '7. Änderungen',
                    paragraphs: ['Es bleibt vorbehalten, ohne vorherige Ankündigung Änderungen an der Website vorzunehmen und Inhalte oder Dienstleistungen zu ändern, zu entfernen oder hinzuzufügen sowie deren Darstellung oder Platzierung anzupassen.']
                },
                {
                    title: '8. Anwendbares Recht und Gerichtsstand',
                    paragraphs: ['Diese Bedingungen unterliegen spanischem Recht. Für alle Streitigkeiten im Zusammenhang mit der Auslegung oder Anwendung dieser Bedingungen unterwerfen sich die Parteien ausdrücklich den nach geltendem Recht zuständigen Gerichten.']
                }
            ]
        },
        privacy: {
            title: 'Datenschutzrichtlinie - Whaka Açaí',
            pageTitle: 'Datenschutzrichtlinie',
            lastUpdated: 'Letzte Aktualisierung: 20. April 2026',
            sections: [
                {
                    title: '1. Informationen für Nutzer',
                    paragraphs: ['Kontaktdaten des Verantwortlichen für die Verarbeitung Ihrer Daten:'],
                    list: [
                        '<strong>E-Mail:</strong> markentry@whaka.com.br',
                        '<strong>Telefon:</strong> +34 603 734 572'
                    ]
                },
                {
                    title: '2. Welche personenbezogenen Daten erfassen wir?',
                    paragraphs: ['Die personenbezogenen Daten, die wir über das Kontaktformular erfassen, sind:'],
                    list: [
                        'Vollständiger Name',
                        'E-Mail-Adresse',
                        'Nutzungsdaten (über Cookies, sofern diese akzeptiert werden)'
                    ]
                },
                {
                    title: '3. Zu welchen Zwecken verarbeiten wir Ihre personenbezogenen Daten?',
                    paragraphs: ['Wir verarbeiten die uns von interessierten Personen bereitgestellten Informationen zu folgenden Zwecken:'],
                    list: [
                        '<strong>Bearbeitung von Anfragen:</strong> Beantwortung von Anfragen und Versand des angeforderten Produktkatalogs.',
                        '<strong>Marketing:</strong> Versand kommerzieller Mitteilungen über unsere Produkte und Dienstleistungen (nur bei ausdrücklicher Einwilligung).',
                        '<strong>Webanalyse:</strong> Verbesserung der Nutzererfahrung durch Analyse des Verhaltens auf der Website (nur bei akzeptierten Cookies).'
                    ]
                },
                {
                    title: '4. Wie lange speichern wir Ihre Daten?',
                    paragraphs: ['Die bereitgestellten personenbezogenen Daten werden gespeichert:'],
                    list: [
                        'solange die Geschäftsbeziehung besteht,',
                        'solange ihre Löschung nicht von der betroffenen Person verlangt wird,',
                        'für die Jahre, die zur Erfüllung gesetzlicher Verpflichtungen erforderlich sind.'
                    ]
                },
                {
                    title: '5. Auf welcher Rechtsgrundlage verarbeiten wir Ihre Daten?',
                    paragraphs: ['Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist:'],
                    list: [
                        '<strong>Einwilligung der betroffenen Person:</strong> durch Ankreuzen des Feldes zur Annahme der Datenschutzrichtlinie im Formular.',
                        '<strong>Berechtigtes Interesse:</strong> für den Versand kommerzieller Mitteilungen über Produkte und Dienstleistungen, die mit den angefragten Leistungen zusammenhängen.'
                    ]
                },
                {
                    title: '6. An welche Empfänger werden Ihre Daten weitergegeben?',
                    paragraphs: ['Die Daten werden nicht an Dritte weitergegeben, außer wenn eine gesetzliche Verpflichtung besteht. Es wird jedoch darauf hingewiesen, dass die Daten an folgende Empfänger übermittelt werden können:'],
                    list: [
                        'Google Analytics (zur Analyse des Website-Traffics, nur bei akzeptierten Cookies)',
                        'Dienstleister für E-Mail-Marketing (falls dieser Service beauftragt wird)',
                        'Google Sheets (zur Speicherung von Formularen)'
                    ]
                },
                {
                    title: '7. Datenübermittlungen in Drittländer',
                    paragraphs: ['Einige der verwendeten Dienste (wie Google Analytics) können internationale Datenübermittlungen in die Vereinigten Staaten und andere Länder vornehmen. Diese Übermittlungen erfolgen unter den nach der DSGVO vorgesehenen geeigneten Garantien.']
                },
                {
                    title: '8. Welche Rechte haben Sie, wenn Sie uns Ihre Daten zur Verfügung stellen?',
                    paragraphs: [
                        'Jede Person hat das Recht, eine Bestätigung darüber zu erhalten, ob wir personenbezogene Daten verarbeiten, die sie betreffen.',
                        'Betroffene Personen haben das Recht auf:'
                    ],
                    list: [
                        '<strong>Auskunft:</strong> Zugang zu Ihren personenbezogenen Daten zu verlangen.',
                        '<strong>Berichtigung:</strong> die Berichtigung unrichtiger Daten zu verlangen.',
                        '<strong>Löschung:</strong> die Löschung Ihrer Daten zu verlangen, wenn diese nicht mehr erforderlich sind.',
                        '<strong>Widerspruch:</strong> der Verarbeitung Ihrer Daten zu widersprechen.',
                        '<strong>Einschränkung:</strong> die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.',
                        '<strong>Datenübertragbarkeit:</strong> die Übertragbarkeit Ihrer Daten zu verlangen.'
                    ],
                    trailingParagraphs: [
                        'Sie können diese Rechte ausüben, indem Sie eine E-Mail an markentry@whaka.com.br senden und eine Kopie Ihres Ausweisdokuments beifügen.',
                        'Sie haben außerdem das Recht, eine Beschwerde bei der spanischen Datenschutzbehörde (www.aepd.es) einzureichen, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht den geltenden Vorschriften entspricht.'
                    ]
                },
                {
                    title: '9. Sicherheitsmaßnahmen',
                    paragraphs: ['Es wurden die gesetzlich vorgeschriebenen Sicherheitsniveaus für den Schutz personenbezogener Daten umgesetzt und alle erforderlichen technischen und organisatorischen Maßnahmen getroffen, um Verlust, Missbrauch, Veränderung, unbefugten Zugriff und Diebstahl der bereitgestellten Daten zu verhindern.']
                },
                {
                    title: '10. Änderungen der Datenschutzrichtlinie',
                    paragraphs: ['Es bleibt vorbehalten, diese Richtlinie anzupassen, um sie an gesetzliche oder rechtsprechungsbezogene Neuerungen anzupassen. In solchen Fällen werden die eingeführten Änderungen mit angemessener Vorlaufzeit auf dieser Seite bekannt gegeben.']
                }
            ]
        },
        cookies: {
            title: 'Cookie-Richtlinie - Whaka Açaí',
            pageTitle: 'Cookie-Richtlinie',
            lastUpdated: 'Letzte Aktualisierung: 20. April 2026',
            sections: [
                {
                    title: '1. Was sind Cookies?',
                    paragraphs: ['Ein Cookie ist eine Datei, die beim Zugriff auf bestimmte Webseiten auf Ihren Computer heruntergeladen wird. Cookies ermöglichen es einer Website unter anderem, Informationen über das Surfverhalten eines Nutzers oder seines Geräts zu speichern und abzurufen. Je nach den enthaltenen Informationen und der Art und Weise, wie das Gerät verwendet wird, können Cookies genutzt werden, um den Nutzer wiederzuerkennen.']
                },
                {
                    title: '2. Welche Arten von Cookies verwendet diese Website?',
                    subSections: [
                        {
                            title: 'Technische Cookies (erforderlich)',
                            paragraphs: ['Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können in unseren Systemen nicht deaktiviert werden.'],
                            table: {
                                headers: ['Cookie', 'Zweck', 'Dauer'],
                                rows: [
                                    ['cookieConsent', 'Speichert die Präferenz des Nutzers in Bezug auf die Verwendung von Cookies', 'Persistent (localStorage)']
                                ]
                            }
                        },
                        {
                            title: 'Analytische Cookies (Google Analytics)',
                            paragraphs: ['Diese Cookies ermöglichen es uns, Besuche zu zählen und die Quellen des Datenverkehrs zu erkennen, um die Leistung unserer Website zu messen und zu verbessern. Sie werden nur aktiviert, wenn der Nutzer Cookies akzeptiert.'],
                            table: {
                                headers: ['Cookie', 'Anbieter', 'Zweck', 'Dauer'],
                                rows: [
                                    ['_ga', 'Google Analytics', 'Eindeutige Nutzerkennung für statistische Analysen', '2 Jahre'],
                                    ['_ga_*', 'Google Analytics', 'Speichert den Sitzungsstatus', '2 Jahre'],
                                    ['_gid', 'Google Analytics', 'Eindeutige Nutzerkennung für statistische Analysen', '24 Stunden']
                                ]
                            }
                        }
                    ]
                },
                {
                    title: '3. Einwilligung und Kontrolle von Cookies',
                    paragraphs: ['Wenn Sie diese Website zum ersten Mal aufrufen, wird ein Hinweisbanner über die Verwendung von Cookies angezeigt. Sie können:'],
                    list: [
                        '<strong>Cookies akzeptieren:</strong> Wenn Sie auf „Akzeptieren“ klicken, erlauben Sie die Verwendung aller beschriebenen Cookies, einschließlich Google Analytics.',
                        '<strong>Cookies ablehnen:</strong> Wenn Sie auf „Ablehnen“ klicken, werden nur die für den grundlegenden Betrieb der Website erforderlichen technischen Cookies verwendet. Google Analytics wird nicht aktiviert.'
                    ]
                },
                {
                    title: '4. Wie können Sie Cookies in Ihrem Browser verwalten?',
                    paragraphs: ['Sie können die auf Ihrem Gerät installierten Cookies über die Einstellungen Ihres Browsers zulassen, blockieren oder löschen:'],
                    list: [
                        '<strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten',
                        '<strong>Firefox:</strong> Optionen → Datenschutz & Sicherheit → Cookies und Website-Daten',
                        '<strong>Safari:</strong> Einstellungen → Datenschutz → Cookies und Websitedaten',
                        '<strong>Edge:</strong> Einstellungen → Datenschutz, Suche und Dienste → Cookies und Websiteberechtigungen'
                    ],
                    trailingParagraphs: ['<strong>Wichtig:</strong> Wenn Sie alle Cookies deaktivieren, funktionieren einige Funktionen der Website möglicherweise nicht korrekt.']
                },
                {
                    title: '5. Cookies von Drittanbietern',
                    paragraphs: ['Diese Website nutzt Dienste Dritter, die Informationen zu statistischen Zwecken erfassen:'],
                    list: [
                        '<strong>Google Analytics:</strong> Analysetool, das Websitebetreibern hilft zu verstehen, wie Besucher mit der Website interagieren. Weitere Informationen finden Sie in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style="color: #7B2CBF;">Datenschutzerklärung von Google</a>.'
                    ]
                },
                {
                    title: '6. Aktualisierung der Cookie-Richtlinie',
                    paragraphs: ['Es ist möglich, dass wir die Cookie-Richtlinie unserer Website aktualisieren. Daher empfehlen wir Ihnen, diese Richtlinie bei jedem Besuch unserer Website zu überprüfen, damit Sie angemessen darüber informiert sind, wie und wofür wir Cookies verwenden.']
                },
                {
                    title: '7. Weitere Informationen',
                    paragraphs: ['Wenn Sie Fragen zu dieser Cookie-Richtlinie haben, können Sie uns kontaktieren unter:'],
                    list: [
                        '<strong>E-Mail:</strong> markentry@whaka.com.br',
                        '<strong>Telefon:</strong> +34 603 734 572'
                    ]
                }
            ]
        }
    },
    nl: {
        common: {
            backToHome: '← Terug naar de hoofdpagina',
            rights: 'Alle rechten voorbehouden.',
            legalNotice: 'Juridische kennisgeving',
            privacyPolicy: 'Privacybeleid',
            cookiePolicy: 'Cookiebeleid'
        },
        legal: {
            title: 'Juridische kennisgeving - Whaka Açaí',
            pageTitle: 'Juridische kennisgeving',
            lastUpdated: 'Laatst bijgewerkt: 20 april 2026',
            sections: [
                {
                    title: '1. Contactgegevens',
                    paragraphs: ['Overeenkomstig artikel 10 van de Spaanse Wet 34/2002 van 11 juli betreffende diensten van de informatiemaatschappij en elektronische handel, verstrekken wij de volgende contactgegevens:'],
                    list: [
                        '<strong>E-mail:</strong> markentry@whaka.com.br',
                        '<strong>Telefoon:</strong> +34 603 734 572'
                    ]
                },
                {
                    title: '2. Doel',
                    paragraphs: [
                        'Deze juridische kennisgeving regelt de toegang tot en het gebruik van de website (hierna: “de Website”).',
                        'Toegang tot de Website is gratis, met uitzondering van de kosten van de verbinding via het telecommunicatienetwerk dat wordt geleverd door de toegangsprovider die de gebruiker heeft gecontracteerd.'
                    ]
                },
                {
                    title: '3. Gebruiksvoorwaarden',
                    paragraphs: [
                        'Toegang tot en gebruik van de Website houdt de uitdrukkelijke en onvoorwaardelijke aanvaarding van deze gebruiksvoorwaarden in. Gebruikers verbinden zich ertoe de via de Website aangeboden inhoud en diensten op passende wijze te gebruiken.',
                        'Het is verboden om:'
                    ],
                    list: [
                        'de inhoud van de Website te gebruiken voor onrechtmatige doeleinden of op een wijze die de rechten en belangen van derden schaadt,',
                        'handelingen uit te voeren die de Website kunnen beschadigen, onbruikbaar maken of overbelasten,',
                        'computervirussen of andere systemen in te voeren of te verspreiden die schade kunnen veroorzaken.'
                    ]
                },
                {
                    title: '4. Intellectuele en industriële eigendom',
                    paragraphs: ['Alle inhoud van de Website, waaronder maar niet beperkt tot teksten, foto’s, grafieken, afbeeldingen, pictogrammen, technologie, software, evenals het grafisch ontwerp en de broncode, is beschermd door intellectuele eigendomsrechten. Er kan niet uit worden afgeleid dat aan de gebruiker exploitatie- of gebruiksrechten op deze inhoud worden overgedragen.']
                },
                {
                    title: '5. Aansprakelijkheid',
                    paragraphs: ['De eigenaar van de Website is niet aansprakelijk voor schade die kan voortvloeien uit storingen, omissies, onderbrekingen, computervirussen, telefoonstoringen of uitval van het elektronische systeem, wanneer deze veroorzaakt worden door omstandigheden buiten zijn controle.']
                },
                {
                    title: '6. Links',
                    paragraphs: ['De Website kan links bevatten naar websites van derden. Er wordt geen verantwoordelijkheid aanvaard voor de inhoud, informatie of diensten die op dergelijke websites kunnen verschijnen. Deze hebben uitsluitend een informatief karakter.']
                },
                {
                    title: '7. Wijzigingen',
                    paragraphs: ['Wij behouden ons het recht voor om zonder voorafgaande kennisgeving wijzigingen aan te brengen op de Website en om zowel de inhoud en diensten die via de Website worden aangeboden als de wijze waarop deze worden gepresenteerd of geplaatst te wijzigen, te verwijderen of toe te voegen.']
                },
                {
                    title: '8. Toepasselijk recht en bevoegde rechter',
                    paragraphs: ['Deze voorwaarden worden beheerst door het Spaanse recht. Voor de beslechting van geschillen met betrekking tot de interpretatie of toepassing van deze voorwaarden onderwerpen de partijen zich uitdrukkelijk aan de volgens de geldende regelgeving bevoegde rechtbanken.']
                }
            ]
        },
        privacy: {
            title: 'Privacybeleid - Whaka Açaí',
            pageTitle: 'Privacybeleid',
            lastUpdated: 'Laatst bijgewerkt: 20 april 2026',
            sections: [
                {
                    title: '1. Informatie voor gebruikers',
                    paragraphs: ['Contactgegevens van de verwerkingsverantwoordelijke van uw gegevens:'],
                    list: [
                        '<strong>E-mail:</strong> markentry@whaka.com.br',
                        '<strong>Telefoon:</strong> +34 603 734 572'
                    ]
                },
                {
                    title: '2. Welke persoonsgegevens verzamelen wij?',
                    paragraphs: ['De persoonsgegevens die wij via het contactformulier verzamelen, zijn:'],
                    list: [
                        'Volledige naam',
                        'E-mailadres',
                        'Surfgegevens (via cookies, indien deze worden geaccepteerd)'
                    ]
                },
                {
                    title: '3. Voor welke doeleinden verwerken wij uw persoonsgegevens?',
                    paragraphs: ['Wij verwerken de informatie die belangstellenden ons verstrekken voor de volgende doeleinden:'],
                    list: [
                        '<strong>Beheer van aanvragen:</strong> het beantwoorden van vragen en het verzenden van de aangevraagde productcatalogus.',
                        '<strong>Marketing:</strong> het verzenden van commerciële communicatie over onze producten en diensten (alleen als daarvoor uitdrukkelijk toestemming is gegeven).',
                        '<strong>Webanalyse:</strong> het verbeteren van de gebruikerservaring door analyse van het gedrag op de website (alleen als cookies worden geaccepteerd).'
                    ]
                },
                {
                    title: '4. Hoe lang bewaren wij uw gegevens?',
                    paragraphs: ['De verstrekte persoonsgegevens worden bewaard:'],
                    list: [
                        'zolang de commerciële relatie bestaat,',
                        'zolang de betrokkene niet om verwijdering verzoekt,',
                        'gedurende de jaren die nodig zijn om aan wettelijke verplichtingen te voldoen.'
                    ]
                },
                {
                    title: '5. Wat is de rechtsgrondslag voor de verwerking van uw gegevens?',
                    paragraphs: ['De rechtsgrondslag voor de verwerking van uw gegevens is:'],
                    list: [
                        '<strong>Toestemming van de betrokkene:</strong> door het aanvinken van het vakje voor acceptatie van het privacybeleid in het formulier.',
                        '<strong>Gerechtvaardigd belang:</strong> voor het verzenden van commerciële communicatie over producten en diensten die verband houden met de aangevraagde producten of diensten.'
                    ]
                },
                {
                    title: '6. Aan welke ontvangers worden uw gegevens meegedeeld?',
                    paragraphs: ['Gegevens worden niet aan derden verstrekt, behalve wanneer daartoe een wettelijke verplichting bestaat. Er wordt echter op gewezen dat gegevens kunnen worden gedeeld met:'],
                    list: [
                        'Google Analytics (voor analyse van websiteverkeer, alleen indien cookies worden geaccepteerd)',
                        'E-mailmarketingdienstverleners (indien deze dienst wordt ingeschakeld)',
                        'Google Sheets (voor opslag van formulieren)'
                    ]
                },
                {
                    title: '7. Doorgifte van gegevens naar derde landen',
                    paragraphs: ['Sommige gebruikte diensten (zoals Google Analytics) kunnen internationale doorgiften van gegevens naar de Verenigde Staten en andere landen uitvoeren. Deze doorgiften vinden plaats onder passende waarborgen zoals vastgesteld in de AVG.']
                },
                {
                    title: '8. Welke rechten heeft u wanneer u ons uw gegevens verstrekt?',
                    paragraphs: [
                        'Iedere persoon heeft het recht om bevestiging te verkrijgen of wij al dan niet persoonsgegevens verwerken die op hem of haar betrekking hebben.',
                        'Betrokkenen hebben recht op:'
                    ],
                    list: [
                        '<strong>Inzage:</strong> toegang vragen tot uw persoonsgegevens.',
                        '<strong>Rectificatie:</strong> rectificatie vragen van onjuiste gegevens.',
                        '<strong>Wissing:</strong> verwijdering vragen van uw gegevens wanneer deze niet langer nodig zijn.',
                        '<strong>Bezwaar:</strong> bezwaar maken tegen de verwerking van uw gegevens.',
                        '<strong>Beperking:</strong> beperking van de verwerking van uw gegevens vragen.',
                        '<strong>Overdraagbaarheid:</strong> overdraagbaarheid van uw gegevens vragen.'
                    ],
                    trailingParagraphs: [
                        'U kunt deze rechten uitoefenen door een e-mail te sturen naar markentry@whaka.com.br en een kopie van uw identiteitsdocument bij te voegen.',
                        'U heeft ook het recht een klacht in te dienen bij de Spaanse gegevensbeschermingsautoriteit (www.aepd.es) indien u van mening bent dat de verwerking van uw persoonsgegevens niet in overeenstemming is met de geldende regelgeving.'
                    ]
                },
                {
                    title: '9. Beveiligingsmaatregelen',
                    paragraphs: ['De wettelijk vereiste beveiligingsniveaus voor de bescherming van persoonsgegevens zijn toegepast en alle nodige technische en organisatorische maatregelen zijn getroffen om verlies, misbruik, wijziging, ongeoorloofde toegang en diefstal van de verstrekte gegevens te voorkomen.']
                },
                {
                    title: '10. Wijzigingen in het privacybeleid',
                    paragraphs: ['Wij behouden ons het recht voor dit beleid te wijzigen om het aan te passen aan wetgevende of jurisprudentiële ontwikkelingen. In dergelijke gevallen zullen de aangebrachte wijzigingen met redelijke voorafgaande kennisgeving op deze pagina worden aangekondigd.']
                }
            ]
        },
        cookies: {
            title: 'Cookiebeleid - Whaka Açaí',
            pageTitle: 'Cookiebeleid',
            lastUpdated: 'Laatst bijgewerkt: 20 april 2026',
            sections: [
                {
                    title: '1. Wat zijn cookies?',
                    paragraphs: ['Een cookie is een bestand dat op uw computer wordt gedownload wanneer u bepaalde webpagina’s bezoekt. Cookies stellen een website onder meer in staat informatie op te slaan en op te halen over het surfgedrag van een gebruiker of diens apparaat. Afhankelijk van de informatie die zij bevatten en de manier waarop het apparaat wordt gebruikt, kunnen zij worden gebruikt om de gebruiker te herkennen.']
                },
                {
                    title: '2. Welke soorten cookies gebruikt deze website?',
                    subSections: [
                        {
                            title: 'Technische cookies (noodzakelijk)',
                            paragraphs: ['Deze cookies zijn strikt noodzakelijk voor de werking van de website en kunnen niet in onze systemen worden uitgeschakeld.'],
                            table: {
                                headers: ['Cookie', 'Doel', 'Duur'],
                                rows: [
                                    ['cookieConsent', 'Slaat de voorkeur van de gebruiker over het gebruik van cookies op', 'Persistent (localStorage)']
                                ]
                            }
                        },
                        {
                            title: 'Analytische cookies (Google Analytics)',
                            paragraphs: ['Deze cookies stellen ons in staat bezoeken te tellen en verkeersbronnen te herkennen om de prestaties van onze site te meten en te verbeteren. Ze worden alleen geactiveerd als de gebruiker cookies accepteert.'],
                            table: {
                                headers: ['Cookie', 'Aanbieder', 'Doel', 'Duur'],
                                rows: [
                                    ['_ga', 'Google Analytics', 'Unieke gebruikersidentifier voor statistische analyse', '2 jaar'],
                                    ['_ga_*', 'Google Analytics', 'Bewaart de sessiestatus', '2 jaar'],
                                    ['_gid', 'Google Analytics', 'Unieke gebruikersidentifier voor statistische analyse', '24 uur']
                                ]
                            }
                        }
                    ]
                },
                {
                    title: '3. Toestemming en controle van cookies',
                    paragraphs: ['Wanneer u deze website voor het eerst bezoekt, krijgt u een informatiebanner te zien over het gebruik van cookies. U kunt:'],
                    list: [
                        '<strong>Cookies accepteren:</strong> door op “Accepteren” te klikken staat u het gebruik toe van alle beschreven cookies, inclusief Google Analytics.',
                        '<strong>Cookies weigeren:</strong> door op “Weigeren” te klikken worden alleen de technische cookies gebruikt die nodig zijn voor de basiswerking van de website. Google Analytics wordt niet geactiveerd.'
                    ]
                },
                {
                    title: '4. Hoe kunt u cookies beheren in uw browser?',
                    paragraphs: ['U kunt de op uw apparaat geïnstalleerde cookies toestaan, blokkeren of verwijderen via de instellingen van uw browser:'],
                    list: [
                        '<strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens',
                        '<strong>Firefox:</strong> Opties → Privacy en beveiliging → Cookies en sitegegevens',
                        '<strong>Safari:</strong> Voorkeuren → Privacy → Cookies en websitegegevens',
                        '<strong>Edge:</strong> Instellingen → Privacy, zoeken en services → Cookies en sitegegevens'
                    ],
                    trailingParagraphs: ['<strong>Belangrijk:</strong> Als u alle cookies uitschakelt, is het mogelijk dat sommige functies van de website niet correct werken.']
                },
                {
                    title: '5. Cookies van derden',
                    paragraphs: ['Deze website maakt gebruik van diensten van derden die informatie verzamelen voor statistische doeleinden:'],
                    list: [
                        '<strong>Google Analytics:</strong> analysetool die website-eigenaren helpt te begrijpen hoe bezoekers met de site omgaan. Meer informatie vindt u in het <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style="color: #7B2CBF;">privacybeleid van Google</a>.'
                    ]
                },
                {
                    title: '6. Actualisering van het cookiebeleid',
                    paragraphs: ['Het is mogelijk dat wij het cookiebeleid van onze website actualiseren. Daarom raden wij u aan dit beleid telkens te raadplegen wanneer u onze website bezoekt, zodat u goed geïnformeerd blijft over hoe en waarom wij cookies gebruiken.']
                },
                {
                    title: '7. Meer informatie',
                    paragraphs: ['Als u vragen heeft over dit cookiebeleid, kunt u contact met ons opnemen via:'],
                    list: [
                        '<strong>E-mail:</strong> markentry@whaka.com.br',
                        '<strong>Telefoon:</strong> +34 603 734 572'
                    ]
                }
            ]
        }
    }
};

function normalizeLegalLanguage(language) {
    if (!language) {
        return LEGAL_DEFAULT_LANGUAGE;
    }

    const normalized = language.toLowerCase();
    const match = LEGAL_SUPPORTED_LANGUAGES.find((item) => normalized.startsWith(item));
    return match || LEGAL_DEFAULT_LANGUAGE;
}

function getQueryLanguage() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang');
}

function getLegalLanguage() {
    const queryLanguage = normalizeLegalLanguage(getQueryLanguage());
    const storedLanguage = normalizeLegalLanguage(localStorage.getItem(LEGAL_LANGUAGE_STORAGE_KEY));
    const browserLanguage = normalizeLegalLanguage(navigator.language || LEGAL_DEFAULT_LANGUAGE);

    return getQueryLanguage() ? queryLanguage : (storedLanguage || browserLanguage || LEGAL_DEFAULT_LANGUAGE);
}

function withLanguage(path, language) {
    return `${path}?lang=${language}`;
}

function renderList(items = []) {
    if (!items.length) {
        return '';
    }

    return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderTable(table) {
    if (!table) {
        return '';
    }

    const headers = table.headers.map((header) => `<th>${header}</th>`).join('');
    const rows = table.rows
        .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
        .join('');

    return `
        <table>
            <thead><tr>${headers}</tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

function renderSection(section) {
    const paragraphs = (section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join('');
    const list = renderList(section.list);
    const trailingParagraphs = (section.trailingParagraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join('');
    const subSections = (section.subSections || []).map((subSection) => {
        const subParagraphs = (subSection.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join('');
        return `
            <h3>${subSection.title}</h3>
            ${subParagraphs}
            ${renderTable(subSection.table)}
        `;
    }).join('');

    return `
        <section>
            <h2>${section.title}</h2>
            ${paragraphs}
            ${list}
            ${subSections}
            ${trailingParagraphs}
        </section>
    `;
}

function renderLegalPage(language) {
    const pageType = document.body.dataset.legalPage;
    const translations = legalTranslations[language] || legalTranslations[LEGAL_DEFAULT_LANGUAGE];
    const pageContent = translations[pageType];

    if (!pageContent) {
        return;
    }

    document.documentElement.lang = language;
    document.title = pageContent.title;
    localStorage.setItem(LEGAL_LANGUAGE_STORAGE_KEY, language);

    const homeLink = document.getElementById('legalHomeLink');
    if (homeLink) {
        homeLink.href = withLanguage('index.html', language);
    }

    const backLink = document.getElementById('backToHomeLink');
    if (backLink) {
        backLink.href = withLanguage('index.html', language);
        backLink.textContent = translations.common.backToHome;
    }

    const content = document.getElementById('legalContent');
    if (content) {
        content.innerHTML = `
            <h1>${pageContent.pageTitle}</h1>
            <p class="last-updated">${pageContent.lastUpdated}</p>
            ${pageContent.sections.map(renderSection).join('')}
        `;
    }

    const rights = document.getElementById('legalFooterRights');
    if (rights) {
        rights.textContent = translations.common.rights;
    }

    const legalNoticeLink = document.getElementById('legalFooterLegal');
    if (legalNoticeLink) {
        legalNoticeLink.textContent = translations.common.legalNotice;
        legalNoticeLink.href = withLanguage('aviso-legal.html', language);
    }

    const privacyLink = document.getElementById('legalFooterPrivacy');
    if (privacyLink) {
        privacyLink.textContent = translations.common.privacyPolicy;
        privacyLink.href = withLanguage('politica-privacidad.html', language);
    }

    const cookieLink = document.getElementById('legalFooterCookies');
    if (cookieLink) {
        cookieLink.textContent = translations.common.cookiePolicy;
        cookieLink.href = withLanguage('politica-cookies.html', language);
    }

    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderLegalPage(getLegalLanguage());
});