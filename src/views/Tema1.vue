<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Marco normativo y conceptual
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.png' alt="Resultados ubicados en los sujetos")
      .col-lg-8(data-aos="fade-left")
        p La Atención Integral en Salud es un concepto que organiza la acción del sector salud y otros sectores en el marco de la garantía del derecho a esta. Las Rutas Integrales de Atención en Salud son una herramienta que permite articular los esfuerzos de los actores del sector y otros sectores, apuntando al logro de los resultados ubicados en los sujetos, por medio de procesos de gestión vinculados a escenarios de atención que potencian la acción organizada y promueven la capacidad de agencia en las personas, familias y comunidades.
        .BG02.p-4
          .row.justify-content-start.align-items-center
            .col-lg-1.col-2
              img(src='@/assets/curso/temas/img02.svg')
            .col
              p.mb-0 Este componente formativo brinda los elementos para la comprensión de la Atención Integral en Salud, los desarrollos normativos y conceptuales que le son propios, haciendo énfasis en las Rutas Integrales de Atención en Salud como una apuesta del sector, y en particular, en la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .BG03.p-lg-4.p-3(titulo="Atención Integral en Salud" alt="Derecho a la salud")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p  Es el conjunto de acciones coordinadas, complementarias y efectivas para garantizar el derecho a la salud, expresadas en políticas, planes, programas, proyectos, estrategias y servicios, que se materializan en atenciones dirigidas a las personas, familias y comunidades, para la promoción de la salud, prevención de la enfermedad, diagnóstico, tratamiento, rehabilitación y cuidados paliativos.
            .cajon.color-primario.p-4
              p.mb-0 Plantea que las intervenciones se realicen de forma integral, complementaria y anticipatoria, teniendo en cuenta las ventanas de oportunidad en el desarrollo integral de las personas en sus diferentes momentos del curso de la vida.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img02.png' alt="Ley 1751 de 2015")
      .BG03.p-lg-4.p-3(titulo="Ley Estatutaria en Salud")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p.mb-0 La Ley Estatutaria de la Salud (Ley 1751 de 2015) plantea como su objetivo “garantizar el derecho a la salud, regularlo y establecer sus mecanismos de protección”. Implica nuevos acuerdos entre el Estado y la sociedad, considerando como centro del sistema de salud a los sujetos (individuales y colectivos), bajo un planteamiento esencial:
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img03.png')
    
    .tarjeta-avatar-b.mb-5(data-aos="fade-right")
      .tarjeta-avatar-b__img(style="min-width: 9%")
        img(src='@/assets/curso/tema1/img04.svg' alt='La salud es un derecho')
      .tarjeta.BGR04S(style="margin-left:-5%")
        .p-4
          .h4 La salud es un derecho social fundamental
          p.mb-0 Lo cual implica que atiende a la dignidad humana, requiere de la acción positiva del Estado, tiene carácter progresivo, nunca regresivo, entre otros.

    p En el siguiente video se resumen los aspectos clave a recordar en el marco de la salud:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
