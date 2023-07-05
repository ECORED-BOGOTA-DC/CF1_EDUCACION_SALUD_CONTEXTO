<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Política de Atención Integral en Salud

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img01.png' alt=" Ley 1753 de 2015")
      .col-lg-8(data-aos="fade-left")
        p En el marco de lo establecido por la Ley Estatutaria y por la Ley 1753 de 2015, en su Artículo 65, se establece la Política de Atención Integral en Salud, que permite abordar a toda la población residente en el territorio colombiano, estableciendo acciones que orientan a los integrantes del sistema según su competencia, en procura de mejorar la salud de la población en términos de equidad e integralidad. Al otorgar preeminencia al sistema de salud, ubica como núcleo de la intervención de todo el Estado la atención integral, más allá de la garantía de unas prestaciones individuales en salud y pone un acento especial en la rectoría pública en salud.
        .BG02
          .row.justify-content-center.align-items-center
            .col-lg-1.col-2.py-2.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/img05.svg')
            .col.p-4
              p.mb-0 La Política de Atención Integral en Salud es entonces:

    .BG05.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-4.px-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img02.svg' alt="Derecho fundamental a la salud")
        .col-lg-10(data-aos="fade-left")
          .h4.mb-0 “El conjunto de enfoques, estrategias, procesos, instrumentos, acciones y recursos que centra el sistema de salud en el ciudadano, permite atender la naturaleza y el contenido del derecho fundamental a la salud, y orienta los objetivos del sistema de salud, para generar mejores condiciones de salud de la población, ordenando la intervención de los integrantes del sistema de salud y de otros actores responsables de garantizar la promoción de la salud, la prevención de la enfermedad, el diagnóstico, el tratamiento, la rehabilitación, la paliación y la muerte digna, en condiciones de accesibilidad, aceptabilidad, oportunidad, continuidad, integralidad y capacidad resolutiva.”

    p.mb-5 Los determinantes sociales de la salud se consideran como marco de referencia y se definen cuatro estrategias centrales, que se presentan en el siguiente gráfico:

    .BGM07.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-6(data-aos="zoom-in")
          ImagenInfograficaB.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img03.svg', alt='Gestión integral de riesgo de salud')
            div(x="32%" y="49%" tooltip="Atención primaria - Salud familiar" numero="1")
              .h5 Atención primaria - Salud familiar
              p.mb-0 Esta estrategia plantea la gestión intersectorial articulada con una atención en salud que se acerque a los sujetos y a sus entornos, partiendo de una integración de las atenciones individuales y colectivas, así como de los diferentes niveles de complejidad de los servicios de salud y en reconocimiento de la voz de las comunidades. Parte de reconocer métodos, tecnologías y prácticas validadas en la evidencia disponible y socialmente aceptadas, que mejoren la gestión en los servicios de salud aumentando su capacidad resolutiva, favoreciendo la territorialización y adscripción poblacional, así como el desarrollo de escenarios de atención multidisciplinarios e integrales en salud (MinSalud, 2016, p. 33).
            div(x="53.5%" y="32%" tooltip="Gestión integral del riesgo en salud" numero="2")
              .h5 Gestión integral del riesgo en salud
              p.mb-0 Es una estrategia transversal que convoca a todos los actores y otros sectores a concurrir en la acción anticipatoria que permite modular o evitar la aparición de enfermedades o alteraciones; la identificación temprana, cuando se presentan, y su abordaje integral, para disminuir los impactos en la salud y el desarrollo a través de acciones que van desde la prevención hasta la paliación. Implica el seguimiento y monitoreo de los riesgos para la salud, así como de los resultados en los sujetos hacia donde está orientada la acción. Además, propicia mejorar la experiencia de los sujetos en su interacción con los servicios de salud y fortalecer la sostenibilidad del sistema. Tiene un componente colectivo, que se desarrolla desde las intervenciones colectivas y está a cargo de la entidad territorial, y un componente individual, que está en cabeza de las Entidades Promotoras de Salud (EPS) o aseguradores, que se relaciona muy estrechamente con la gestión clínica que desarrolla el prestador, así como con los procesos de autocuidado por parte del individuo, extendido a su familia y comunidad (MinSalud, 2016, p. 40).
            div(x="53.5%" y="88%" tooltip="Enfoque diferencial de territorios y poblaciones" numero="3")
              .h5 Enfoque diferencial de territorios y poblaciones
              p.mb-0 La política identifica la integralidad desde el reconocimiento de los ámbitos territoriales donde las personas, familias y comunidades habitan y desarrollan su trayectoria vital; desde allí, reconoce, asimismo, las particularidades y condiciones que le asisten a las personas según su momento de curso de vida, haciendo un llamado al reconocimiento del género como determinante y en articulación con los demás diferenciales que le son propios a cada uno (pasando por lo étnico, la diversidad sexual, la condición de víctima del conflicto armado o con condición de discapacidad, entre otras). Las personas están determinadas por varias de estas condiciones, lo cual es abordado desde el enfoque interseccional, que nos permite entender que los procesos de salud  – enfermedad, las necesidades asociadas y las respuestas que cada uno puede dar frente a las situaciones son diferentes si se vive en zona rural o urbana, se es mujer u hombre, indígena o sin pertenencia étnica, joven o adulto mayor, si presentó o no una discapacidad, además del contexto socioeconómico y relacional (redes de apoyo) que se tengan con sus  familias (MinSalud, 2016, p. 32).
            div(x="75%" y="49%" tooltip="El enfoque de cuidado" numero="4")
              .h5 El enfoque de cuidado
              p Se entiende como las capacidades, decisiones y acciones que el individuo, la comunidad y el Estado adoptan para proteger la salud propia, de las familias, de la comunidad y del territorio. Involucra el deber de la sociedad y de los sistemas de salud de realizar acciones que permitan ganancias en salud. Se relaciona con el curso de vida y parte de reconocer diferentes esferas del cuidado, desde el cuidar de sí, de los otros y del entorno. Implica generar oportunidades de desarrollo y condiciones para la protección y el bienestar, promueve la convivencia, el cuidado hacia lo público, la solidaridad, la cultura de la seguridad social y el fortalecimiento de redes de apoyo familiar y social.
              p.mb-0 Reconoce, asimismo, el autocuidado e involucra una condición dinámica que integra en diferentes momentos de su vida su capacidad para acumular autonomía para desarrollar lo que la persona quiere emprender; capital de salud relacionado con las decisiones que toma en relación con su apoyo y socialización (MinSalud, 2016, p. 38).

    .BGIMG02.mb-5(data-aos="flip-up")
      .row.justify-content-end.align-items-end
        .col-lg-1.d-lg-none.d-flex
        .col-lg-3.col-6.mb-lg-0.pt-lg-0.pt-4.pe-lg-0.pe-5.mb-4
          img(src='@/assets/curso/tema2/img04.png' alt="Orientación de enfoque")
        .col-lg-8.p-4
          .row.justify-content-start
            .col-2.ps-5.pe-4
              img(src='@/assets/curso/temas/img01.svg')
            .col
              p.mb-0 El proceso de educación para la salud asume las orientaciones de los enfoques que se desarrollan más adelante, desde una perspectiva de integralidad que, en la práctica, aporte a la garantía del derecho fundamental a la salud, en concordancia con la normatividad vigente en el país. Esta visión plantea enormes retos en la implementación del sistema de salud, creado mediante la Ley Estatutaria de Salud 1751 de 2015, pero también traza un camino hacia la consecución de una sociedad mucho más democrática, garantista de los derechos y las libertades, equitativa y justa, capaz de sostener el cambio social que supere las condiciones que impiden el máximo bienestar posible para todos los sujetos. A continuación, se presentan los enfoques que orientan el proceso de educación para la salud en el marco de las RIAS:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR06" data-aos="fade-right")
      div(titulo="Enfoque de derechos")
        p Da marco a lo establecido en la Ley Estatutaria, donde se reconocen como sujetos de derechos y garantes de estos bajo un marco de exigibilidad. Se fundamenta en la garantía de la dignidad humana, la libertad, la igualdad y la no discriminación. Está orientado a promover, proteger y hacer efectivos los derechos humanos (DDHH); en este sentido, se asume que todos los seres humanos son titulares de derechos, es decir, pueden reclamarlos. Los agentes que tienen el deber de garantizar el disfrute de estos derechos son principalmente los Estados (titulares de obligaciones). Todos los titulares de obligaciones están legalmente comprometidos a respetar, proteger y a hacer cumplir los DDHH (Cunego, 2016).
        p.mb-0 Para el sector salud, implica reconocer los DDHH y su interdependencia, de modo que sus intervenciones se conviertan en una oportunidad para promover el desarrollo humano en el país, y por parte de la sociedad civil, implica el reconocimiento de los mismos para su exigibilidad.
      div(titulo="Enfoque diferencial")
        p.mb-0 Está inmerso en el enfoque de derechos, reconoce que el curso de vida es distinto para cada persona según sus condiciones particulares y las situaciones y contextos en los que interactúa. Implica visibilizar y valorar esta diversidad y promover que se elimine cualquier discurso o práctica discriminatoria basada en las diferencias. Se fundamenta en los principios de igualdad, diversidad, interculturalidad, integralidad, participación e inclusión.
      div(titulo="Enfoque de desarrollo humano")
        p.mb-0 Se orienta desde el desarrollo de los derechos como libertades humanas, buscando superar la visión determinista de las necesidades básicas y del desarrollo orientado por prioridades del sistema económico (empleo o distribución de la pobreza). Se asume desde una concepción holística del ser humano que trasciende la fragmentación por dimensiones o por etapas, se distancia de la lógica del tener y del consumo, y se concentra en el ser- y la existencia- en términos de sus condiciones y calidad de vida. Se plantea desde el reconocimiento, promoción y fortalecimiento de las capacidades humanas, entendidas como opciones de elegir libremente la vida que cada persona valora y quiere vivir, para avanzar en sus metas de desarrollo y en el ejercicio de sus derechos.
      div(titulo="Enfoque de salud familiar y comunitaria")
        p.mb-0 Constituye un enfoque para el análisis, toma de decisiones y abordaje en salud que reconoce la importancia de las interacciones en la vida de los sujetos, pues las personas son seres sociales por excelencia y, por tanto, su desarrollo no es posible sin los otros, siendo grupos esenciales la familia y la comunidad. Reconoce a la familia y a la comunidad como sujetos colectivos de derechos y, por tanto, sujetos de atención en salud. Asume que la salud familiar y comunitaria no es resultado de la suma de la salud individual, sino de sus relaciones, manejo de emociones, conflictos y proyectos de vida compartidos y construidos. En coherencia con la estrategia de Atención Primaria en Salud (APS), se preocupa de la salud de las personas antes que aparezca la enfermedad; brinda herramientas para el cuidado, la gestión y la promoción.
      div(titulo="Enfoque de género")
        p.mb-0 El género es un “estructurador social” que determina la construcción de roles, valoraciones, estereotipos, imaginarios asociados a lo masculino y lo femenino, y las relaciones de poder que de estos se desprenden y se exacerban con otras formas de desigualdad. Estas construcciones sociales difieren entre sociedades, se transforman en el tiempo y parten de expectativas colectivas de género. El género es uno de los determinantes estructurales de la salud (junto con la clase social y la etnia) que incide en los procesos de salud y enfermedad de las personas, produciendo inequidades en salud. El enfoque de género permite comprender que hay disparidades sistemáticas entre la salud de mujeres y de hombres que no son consecuencia de las características biológicas de cada sexo, sino del lugar diferente que ocupan las mujeres y los hombres en la sociedad.
      div(titulo="Enfoque de curso de vida")
        p.mb-0 Aborda el continuo de la vida y reconoce que el desarrollo humano y los resultados en salud dependen de la interacción de diferentes factores a lo largo del trayecto vital (históricos, sociales, económicos, etc.), de experiencias acumulativas y situaciones presentes de cada individuo influenciadas por el contexto familiar, social, económico, ambiental y cultural; entendiendo que invertir en atenciones oportunas en cada generación repercutirá en las siguientes y que el mayor beneficio de un momento vital puede derivarse de intervenciones hechas en un periodo anterior. Desde el punto de vista epidemiológico, el curso de la vida es el estudio a largo plazo de los efectos en la salud o la enfermedad de la exposición a riesgos físicos o sociales durante la gestación, la infancia, la adolescencia, la juventud y la vida adulta (MSPS, 2015).
        

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
