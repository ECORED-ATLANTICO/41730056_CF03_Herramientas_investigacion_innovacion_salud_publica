<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tecnologías de la información y comunicación (TIC) aplicadas al análisis y visualización de datos en salud pública
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las TIC se aplican al análisis y visualización de datos en salud pública a través de herramientas como el análisis de datos ("ciencia de datos"), sistemas de información geográfica (SIG), telemedicina, y la creación de plataformas que integran y visualizan información de diversas fuentes (como los registros electrónicos de salud - EHR) para mejorar la toma de decisiones, la vigilancia epidemiológica y el acceso a la atención. La visualización de datos, por ejemplo, usa gráficos como las curvas epidémicas para monitorear brotes de enfermedades.  
        
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Rol de las TIC en la toma de decisiones basadas en evidencia
        
        img(src="@/assets/curso/tema2/2.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8(data-aos="fade-up")
            p.banner-text Las TICs han sido reconocidas como herramientas estratégicas para optimizar procesos internos y fortalecer las relaciones tanto internas como externas, facilitando la conectividad, la eficiencia y la toma de decisiones en salud basadas en datos (OMS, 2021)

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.bg-color-1.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La tecnología influye en muchas etapas distintas de la toma de decisiones. Por ejemplo, influye en el momento de obtener información, ya que las personas accedemos constantemente a motores de búsqueda como Google, o Wikipedia; y esta información obtenida influye en los siguientes pasos hasta finalmente hacer una elección. Nos ayuda a filtrar, analizar y procesar la información, así como a encontrar alternativas y evaluarlas, ya sea de forma consciente o inconsciente.

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
