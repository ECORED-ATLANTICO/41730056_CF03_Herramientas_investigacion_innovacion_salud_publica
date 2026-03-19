<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8
            p Este componente formativo aborda la integración estratégica de la propuesta de valor, las tecnologías de la información y la comunicación (TIC) y las tendencias emergentes en salud digital para diseñar soluciones innovadoras frente a los retos de la salud pública.
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/intro/2.svg").mx-auto
              .col-lg
                p.mb-0 En primer lugar, se analiza la propuesta de valor como base de la innovación, empleando herramientas clave como el <em>Value Proposition Canvas</em> y el <em>Lean Canvas</em>, además de técnicas de <em>pitching</em> orientadas a los actores del sistema de salud.

        img(src="@/assets/curso/intro/3.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8(data-aos="fade-up")
            p.banner-text Posteriormente, se examina el papel de las TIC en la captura, análisis y visualización de datos, incluyendo la revisión de sistemas de información en salud, plataformas de visualización, interoperabilidad, gobernanza y buenas prácticas para la protección de datos.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/intro/4.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-10.p-4.px-lg-5.py-lg-4
              p.mb-0 Finalmente, se exploran tendencias disruptivas como la Inteligencia Artificial (IA), <em>Big Data</em>, salud digital, medicina de precisión y analítica predictiva, ilustradas con casos de éxito relevantes en América Latina.
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FOlBvWPGPKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.text-bold Video: Innovación en salud pública: tecnología y propuesta de valor


</template>

<script>
export default {
  name: 'Introduccion',
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
