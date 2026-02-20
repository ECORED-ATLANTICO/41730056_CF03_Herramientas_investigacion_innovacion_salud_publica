export default {
  global: {
    Name: 'Innovación en salud pública: tecnología y propuesta de valor.',
    Description:
      'Este componente aborda el uso de tecnologías de la información y la formulación de propuestas de valor para impulsar soluciones innovadoras en salud pública. Se analizan herramientas tecnológicas para el análisis y visualización de datos, y tendencias, destacando su aplicación en la investigación y la toma de decisiones en salud pública',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Elementos de la propuesta de valor y <em>pitch</em> para proyectos innovadores en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto de propuesta de valor y su importancia en salud pública',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas para formular la propuesta de valor',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '<em>Pitch</em> de proyectos, estructura y elementos clave',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Comunicación del valor a actores del sistema de salud',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Tecnologías de la información y comunicación (TIC) aplicadas al análisis y visualización de datos en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Rol de las TIC en la toma de decisiones basadas en evidencia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas para análisis y visualización de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Interoperabilidad y gobernanza de datos en salud',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Buenas prácticas en protección de datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Tendencias y casos de éxito en inteligencia artificial (IA), <em>Big Data</em>, salud digital, medicina de precisión y analítica predictiva en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Inteligencia Artificial y <em>Big Data</em> para vigilancia y predicción de riesgos sanitarios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Salud digital: telemedicina, telesalud y monitoreo remoto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Medicina de precisión: aplicaciones poblacionales y uso de información genómica',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Casos de éxito en América Latina y aprendizajes para Colombia',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Concepto de propuesta de valor y su importancia en salud pública.',
      referencia:
        'Bioxnet <em>WEB & BRANDING</em>. (2021). <em>Características vs beneficios: en cuál debes enfocarte</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NKofrZZWYuI',
    },
    {
      tema:
        'Herramientas para formular la propuesta de valor: Value Proposition Canvas, Lean Canvas.',
      referencia:
        'Shopify – español. (2023). <em>Como diseñar una PROPUESTA DE VALOR</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=46xFqJTJZLM&t=73s',
    },
    {
      tema: 'Cómo crear una propuesta de valor eficaz',
      referencia: 'Steve Blanck, (2024) <em>Desarrollo empresarial</em>',
      tipo: 'Blog',
      link: 'https://abcbootcamps.com/value-proposition/',
    },
    {
      tema: '<em>Pitch</em> de proyectos, estructura y elementos clave.',
      referencia:
        'EduCaixaTV. (2020) <em>ELEVATOR PITCH ¡Tienes 20 segundos!</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i8OD_r5QUbQ',
    },
    {
      tema: 'Rol de las TIC en la toma de decisiones basadas en evidencia.',
      referencia:
        'Mesko, B. y Gyorffy, Z. (2019). <em>Salud digital: un marco para médicos</em>. <em>Ebook</em> o publicación especializada.',
      tipo: 'Articulo',
      link:
        'https://www.roche.es/actualidad/notas-prensa/2025/mayo/salud-digital-abordaje-clinico-cancer-pulmon-esclerosis-multiple#:~:text=La%20salud%20digital%20est%C3%A1%20transformando%20ya%20el,una%20mejora%20real%20de%20la%20atenci%C3%B3n%20sanitaria',
    },
    {
      tema:
        'Tendencias y casos de éxito en inteligencia artificial (IA), <em>Big Data</em>, salud digital, medicina de precisión y analítica predictiva en salud pública.',
      referencia:
        'Revista Médica de Chile, 146(10), 1178-1188. (2010). <em>Medicina de precisión: conceptos, aplicaciones y proyecciones</em>.',
      tipo: 'Articulo',
      link: 'https://www.scielo.cl/pdf/rmc/v138n8/art05.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Dashboard</em>',
      significado:
        'Panel de control que visualiza información clave, como indicadores (<em>KPIs</em>), de manera gráfica y fácil de entender para facilitar la toma de decisiones. Funciona como el tablero de un automóvil, mostrando de un vistazo datos relevantes en tiempo real, lo que permite a los usuarios monitorear el rendimiento y la estrategia de un negocio sin tener que consultar múltiples fuentes.',
    },
    {
      termino: 'Gobernanza de datos en salud',
      significado:
        'Disciplina de gestión que establece las políticas, procesos y estándares para controlar, proteger y utilizar los datos de salud de forma eficaz y ética.',
    },
    {
      termino: 'Interoperabilidad en salud',
      significado:
        'Capacidad de sistemas y aplicaciones de salud para conectarse, intercambiar e interpretar datos de manera coordinada y segura.',
    },
    {
      termino: 'Plataformas de visualización',
      significado:
        '<em>Software</em> o aplicaciones que permiten a los usuarios crear representaciones gráficas de datos para hacerlos más fáciles de entender e interpretar',
    },
    {
      termino: 'Seguridad de los datos',
      significado:
        'Proceso continuo que implica identificar y proteger los datos reforzando los controles de <em>hardware</em> y <em>software</em> que rigen el uso, el movimiento y el almacenamiento de los datos.',
    },
    {
      termino: 'Sistemas de información en salud (SIS)',
      significado:
        'Conjunto de herramientas tecnológicas y procesos para recolectar, procesar, analizar y utilizar datos del sector salud.',
    },
  ],
  referencias: [
    {
      referencia:
        'ACEMI. (2019). <em>Big data: sistemas de información e historia clínica</em>. Conexxion.',
      link: '',
    },
    {
      referencia:
        'Adelusi, B. &.-A. (2025). <em>A Review of Data Visualization Tools and Techniques in Public Health: Enhancing Decision-Making through Analytics</em>.',
      link: '',
    },
    {
      referencia: 'AHIMA. (2022). <em>Healthcare Data Governance</em>.',
      link:
        'https://www.ahima.org/media/pmcb0fr5/healthcare-data-governance-practice-brief-final.pdf',
    },
    {
      referencia:
        'Ball, B. (2025). <em>How to Craft a Perfect Pitch Deck Structure – Impress Investors Now</em>.',
      link: 'https://benjaminball.com/blog/perfect-pitch-deck-structure/',
    },
    {
      referencia:
        'INS. (s.f.). Instituto nacional de salud. <em>Portal Sivigila 4.0</em>',
      link: 'https://portalsivigila.ins.gov.co/',
    },
    {
      referencia:
        'Keyrus. (s.f.). <em>Comparativa. Power BI, Looker, Tableau o Qlik ¿Cuál es mejor?</em> <em>Insights</em>.',
      link:
        'https://keyrus.com/sp/es/insights/comparativa-power-bi-looker-y-tableau-cual-es-mejor',
    },
    {
      referencia:
        "Maurya, A. (2012). <em>Running Lean: Iterate from Plan A to a Plan That Works</em>. Sebastopol, CA: O'Reilly.",
      link: '',
    },
    {
      referencia:
        'OMS. (2021). <em>Tecnologías innovadoras clave para salvar vidas</em>. Organizacion Munidal de la salud.',
      link:
        'https://www.paho.org/sites/default/files/2024-08/ai-ra-tool-rev-final-esp-aug-1_0.pdf',
    },
    {
      referencia: 'OPS. (s.f.). Organizacion Panamericana de la salud.',
      link: '',
    },
    {
      referencia:
        'Pro Pharma Research Organization. (s.f.). <em>¿Cómo están revolucionando la IA y Big Data la Farmacovigilancia?</em>',
      link:
        'https://propharmaresearch.com/recursos/difusion/como-estan-revolucionando-ia-big-data-farmacovigilancia',
    },
    {
      referencia:
        'Sotos, J. P.-T. (2011). <em>Tecnologías de la Información y las Telecomunicaciones: telemedicina</em>. Revista Clínica de Medicina de Familia.',
      link:
        'https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1699-695X2011000100007',
    },
    {
      referencia:
        'Sahu Kirti Sundar, M. S. (2021). <em>NextGen Public Health Surveillance and the Internet of Things (IoT)</em>. Frontiers in Public Health.',
      link:
        'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2021.756675/full',
    },
    {
      referencia:
        'Salud, S. D. (s.f.). <em>Sistema de vigilancia epidemiológica de lesiones de causa externa</em>.',
      link:
        'https://www.saludcapital.gov.co/sitios/VigilanciaSaludPublica/Protocolos%20de%20Vigilancia%20en%20Salud%20Publica/Lesiones%20de%20Causa%20Externa.pdf',
    },
    {
      referencia:
        'Sánchez Arroyo, R. (2017). <em>Utilización de las TIC en la toma de decisiones en modo colaborativo</em>. [Tesis].',
      link:
        'https://uvadoc.uva.es/bitstream/handle/10324/23051/TFG%20G2347.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Schulze, A., Brand, F., Geppert, J., & Böl, G. F. (s.f.). <em>Frontiers in public health</em>.',
      link:
        'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2023.999958/full',
    },
    {
      referencia:
        'SDS. (s.f.). Secretaria distrital de salud. <em>SIVIGILA</em>.',
      link: 'https://sivigila.saludcapital.gov.co/sivigiladc/Login.aspx',
    },
    {
      referencia:
        'Sotos, J. R., Párraga Martínez, I., López-Torres Hidalgo, J., Andrés Pretel, F., & Navarro Bravo, B. (2011). <em>Telemedicina</em>. Revista Clínica de Medicina de Familia.',
      link:
        'https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1699-695X2011000100007',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leonor Cristina Cañón Uribe',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación-Instituto Nacional de Salud',
        },
        {
          nombre: 'Angelica Roció Borbón Orjuela',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación-Instituto Nacional de Salud',
        },
        {
          nombre: 'María Luz Gunturiz Albarracín',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación-Instituto Nacional de Salud',
        },
        {
          nombre: 'Angela Navas Cáceres',
          cargo: 'Expertas Técnica',
          centro:
            'Centro de Formación de Talento humano en Salud- Regional Distrito Capital',
        },
        {
          nombre: 'Gina Carol Villate Calderón',
          cargo: 'Expertas Técnica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro de Formación de Talento humano en Salud- Regional Distrito Capital',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
