<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center.mb-5
          .col-lg-3.mb-3
            figure
              img(src="@/assets/curso/1.png", data-aos="zoom-in")
          .col-lg-9
            .bg-color-1.p-4
              p.mb-0 Este componente aborda cómo transformar ideas en soluciones de alto impacto para la salud pública mediante innovación y tecnología. Se estudian los elementos de la propuesta de valor y el uso de herramientas como Value Proposition Canvas y Lean Canvas para estructurar proyectos, así como la construcción de pitches claros y persuasivos dirigidos a actores del sistema de salud. Además, se explora el papel de las TIC en el análisis y visualización de datos para la toma de decisiones basadas en evidencia, incluyendo interoperabilidad, gobernanza y protección de datos. Finalmente, se analizan tendencias como IA, Big Data, salud digital y medicina de precisión, junto con casos latinoamericanos que ofrecen aprendizajes aplicables al contexto colombiano.

        .row.justify-content-center.bg-color-sintesis.tarjeta.p-4
          .col-lg-10.mb-5.bgs.p-4.brad
            figure
              img(src="@/assets/curso/sintesis.svg", alt="La figura muestra la estructura del componente formativo: Innovación en salud pública: tecnología y propuesta de valor”. Presenta tres ejes principales. El primero aborda la construcción de la propuesta de valor y el pitch de proyectos innovadores en salud pública, incluyendo su concepto, herramientas como Value Proposition Canvas y Lean Canvas, estructura del pitch y estrategias de comunicación del valor a actores del sistema de salud. El segundo eje se centra en las TIC para el análisis y visualización de datos, destacando su rol en decisiones basadas en evidencia, sistemas de información en salud, plataformas de visualización, interoperabilidad, gobernanza y protección de datos. Finalmente se muestran tendencias como IA, Big Data, salud digital, medicina de precisión y casos de éxito en América Latina aplicables en Colombia.  ")
          .col-auto
            a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/bullets/icono-pdf.svg")
              .anexo__texto
                p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
