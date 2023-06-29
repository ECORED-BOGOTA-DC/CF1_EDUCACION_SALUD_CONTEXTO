<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGIMG01.mb-5(data-aos="flip-up")
      .row.justify-content-start.align-items-center
        .col-lg-7.order-lg-1.order-2.p-4
          .row.justify-content-start.align-items-center
            .col-2.ps-5.pe-4
              img(src='@/assets/curso/temas/img01.svg')
            .col
              p.mb-0 Estimado aprendiz, bienvenido al componente formativo “Marco normativo Rutas Integrales de Atención en Salud”. Para iniciar, visualice el siguiente video y conozca más:
        .col-5.d-lg-none.d-flex
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/intro/img01.png' alt="Visualice el siguiente video")
        
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
