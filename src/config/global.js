export default {
  global: {
    componenteFormativo:
      'Marco normativo Rutas Integrales de Atención en Salud',
    descripcionCurso:
      'En Colombia, el marco normativo se entiende como el conjunto de acciones ordenadas, programadas, complementarias y reales que garantizan el derecho a la salud, mencionadas en políticas, planes, programas, proyectos, estrategias y servicios que se realizan en atenciones encaminadas al individuo, familias y sociedad, para la promoción, prevención de la salud, y de la enfermedad, diagnóstico, tratamiento, recuperación, servicio y cuidados del individuo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.svg'),
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
        titulo: 'Marco normativo y conceptual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Política de Atención Integral en Salud',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Rutas Integrales de Atención en Salud (RIAS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ordenadores de las RIAS',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de RIAS',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estructura de las RIAS',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Gestión e intervenciones en las RIAS',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ruta para la Promoción y el Mantenimiento de la Salud (RPMS)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Educación para la salud en el marco de las RIAS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Aproximaciones generales a la Educación para la Salud',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Transformaciones del concepto Educación para la Salud',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Fundamentos pedagógicos para la educación de las RIAS',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Diálogo de saberes',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Orientaciones para el desarrollo de Educación para la Salud',
            hash: 't_5_5',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Rutas Integrales de Atención en Salud (RIAS)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Generalidades y principios Rutas Integrales de Atención en Salud RIAS</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=OQ8PuL4ft1U&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Rutas Integrales de Atención en Salud (RIAS)',
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2016). <em>Manual metodológico para la elaboración e implementación de las RIAS</em>. ',
      tipo: 'Documento ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/Manual-metodologico-rias.pdf',
    },
    {
      tema: 'Educación para la Salud ',
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2018). <em>Marco conceptual y metodológico para el desarrollo de la educación para la salud de las Rutas Integrales de Atención en Salud - RIAS.</em> ',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/directrices-educacion-pp.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Momentos del curso de vida',
      significado:
        'se constituyen en el primer ordenador de la RPMS, permite abordar a las personas en los diferentes  momentos del continuo de la vida (primera infancia, infancia, adolescencia, juventud, adultez y vejez), reconociendo las características y los cambios que, desde la particularidad de cada  uno, potencian el desarrollo y la salud  de las personas, constituyéndose como lo plantea Parodi (s. f.) en una aproximación transversal para facilitar la medición y monitoreo, sin perder de vista que se trata de un continuo, evitando caer en el error de analizar segmentos aislados.',
    },
    {
      termino: 'Disciplinamiento',
      significado:
        'hace referencia a una imposición moral que se instala en esta etapa sobre el cuerpo, el puritanismo de la sexualidad, así como valores sociales correctos, como el trabajo excesivo y la falta de ocio.',
    },
    {
      termino: 'Intervenciones individuales',
      significado:
        'las intervenciones individuales se definen como el conjunto de intervenciones en salud dirigidas a las personas en sus diferentes momentos del curso de la vida y a la familia como sujeto de atención, que tienen como finalidad la valoración integral, la detección temprana, la protección específica y la Educación para la Salud de forma individual, grupal o familiar.',
    },
    {
      termino: 'Intervenciones colectivas',
      significado:
        'las intervenciones colectivas se definen como el conjunto de intervenciones, procedimientos o actividades para la promoción de la salud y la gestión del riesgo dirigidas a grupos poblacionales a lo largo del curso de la vida, definidas con fundamento en la evidencia disponible y en las prioridades de salud de cada territorio.',
    },
    {
      termino: 'Educación para la Salud',
      significado:
        'proceso pedagógico de construcción de conocimiento que pretende aportar al desarrollo del potencial de las personas, familias y comunidades, para proveer el cuidado de la salud, gestionar el riesgo de salud y transformar positivamente los entornos en los que  sus vidas se desenvuelven.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, A. (2014). <em>Los discursos otros. Críticas al universalismo occidental</em>. Ediciones Desde Abajo.',
    },
    {
      referencia:
        'Federación Internacional Fe y Alegría. (2003). La Pedagogía de la Educación Popular en Fe y Alegría. Revista Internacional Fe y Alegría, (4), p. 8-33. ',
      link:
        'https://www.feyalegria.org/wp-content/uploads/fya-biblioteca/images/acrobat/FyA4_3394.pdf',
    },
    {
      referencia:
        'Fernández, R. (2007). <em>Características y condiciones del aprendizaje de los adultos</em>. Curso para Educadores de adultos - Plan Libre Asistido. ',
      link:
        'https://www.academia.edu/9399632/Caracter%C3%ADsticas_y_condiciones_del_Aprendizaje_de_los_ADULTOS',
    },
    {
      referencia:
        'Kaplún, M. (2002). <em>Una pedagogía de la comunicación (el comunicador popular)</em>. Editorial Caminos de la Habana.',
    },
    {
      referencia:
        'Ley Estatutaria 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones. Febrero 16 de 2015. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201751%20de%202015.pdf',
    },
    {
      referencia:
        'López, J. (s. f.). <em>Vigencia de las ideas de L.S. Vigotsky</em>. Instituto Central de Ciencias Pedagógicas. ',
      link: 'http://es.calameo.com/books/000233168fd5593a8ebd2',
    },
    {
      referencia:
        'Mejía, M. (2016). <em>La educación popular en tiempos de globalización. Deconstruyendo escenarios para reconstruir actores</em>. XXIII reunión anual de la Associação Nacional de Pós-graduação e Pesquisa em Educação - ANPED. ',
      link:
        'http://docplayer.es/117408128-La-educacion-popular-en-tiempos-de-globalizacion-1-deconstruyendo-escenarios-para-reconstruir-actores.html',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2016). <em>Política de Atención Integral en Salud “Un sistema de salud al servicio de la gente”</em>> ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2018a). <em>Gestión integral del riesgo en salud. Perspectiva desde el Aseguramiento en el contexto de la Política de Atención Integral en Salud.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/girs-prespectiva-desde-aseguramiento.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2018b). <em>Marco conceptual y metodológico para el desarrollo de la educación para la salud de las Rutas Integrales de Atención en Salud - RIAS. Orientaciones pedagógicas, metodológicas y didácticas.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/directrices-educacion-pp.pdf',
    },
    {
      referencia:
        'Resolución 518 de 2015. [Ministerio de Salud y Protección Social]. Por la cual se dictan disposiciones en relación con la Gestión de la Salud Pública y se establecen directrices para la ejecución, seguimiento y evaluación del Plan de Salud Pública de Intervenciones Colectivas - PIC. Febrero 24 de 2015. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0518-de-2015.pdf',
    },
    {
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social]. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf',
    },
    {
      referencia:
        'Resolución 276 del 2019. [Ministerio de Salud y Protección Social]. Por la cual se modifica la Resolución 3280. Febrero 4 de 2019. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-276-de-2019.pdf',
    },
    {
      referencia:
        'Resolución 2626 de 2019. [Ministerio de Salud y Protección Social]. Por la cual se modifica la Política de Atención Integral en Salud -PAIS y se adopta el Modelo de Acción Integral Territorial-MAITE. Septiembre 27 de 2019. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución%20No.%202626%20de%202019.pdf',
    },
    {
      referencia:
        'Resolución 2381 de 2021. [Ministerio de Salud y Protección Social]. Por la cual se fija el valor anual de la Unidad de Pago por Capitación - UPC que financiará los servicios y tecnologías de salud de los Regímenes Contributivo y Subsidiado para la vigencia 2022 y se dictan otras disposiciones. Diciembre 28 de 2021. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.2381%20de%202021.pdf',
    },
    {
      referencia:
        'Torres, A. (1993). La Educación Popular: Evolución reciente y desafíos. <em>Pedagogía y Saberes</em>, (4), p. 13-27. ',
      link: 'https://doi.org/10.17227/01212494.4pys13.26',
    },
    {
      referencia:
        'Veiga-Neto, A. (1997). Michel Foucault y la educación: ¿Hay algo nuevo bajo el sol? <em>Crítica post-estructuralista y educación</em>, p. 9-62.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Suralba Mosquera Mosquera',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Mónica Genith Castro Hernández',
          cargo: 'Experta Temática',
          centro: 'Ministerio de Salud y Protección Social',
        },
        {
          nombre: 'Nelly Yulisa Rivas',
          cargo: 'Experta Temática',
          centro: 'Ministerio de Salud y Protección Social',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación y vinculación al LMS',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
