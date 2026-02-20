<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elementos de la propuesta de valor y pitch para proyectos innovadores en salud pública
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-9.mb-3.mb-lg-0
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-4.p-5
                  p.mb-0(data-aos="fade-right") En el ámbito de la innovación en salud pública, comprender los elementos de la propuesta de valor y la construcción de un pitch efectivo es fundamental para transformar ideas en proyectos viables y con impacto. La propuesta de valor permite definir con claridad qué problema de salud se aborda, a quién beneficia la solución, qué la hace diferente y por qué genera resultados relevantes para las comunidades y los sistemas de salud. 
            .row.align-items-center.bg-color-1.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Por su parte, el pitch funciona como una herramienta estratégica de comunicación que sintetiza estos elementos de manera clara, persuasiva y basada en evidencia, facilitando la movilización de aliados, recursos y apoyo institucional. Ambos componentes son esenciales para impulsar iniciativas innovadoras que respondan a necesidades reales en salud pública. 
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")

        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Concepto de propuesta de valor y su importancia en salud pública
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-8
            p <b>Propuesta de valor (PV):</b> Es la promesa de valor que una organización o proyecto ofrece a sus usuarios o clientes (en este caso, la población, los profesionales de la salud, o los financiadores), en esta siempre es necesario priorizar los beneficios, y luego las características. 
            .row.align-items-center.bg-color-1.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema1/3.svg").mx-auto
              .col-lg
                p.mb-0 Dentro de este marco, es crucial entender que la propuesta de valor no se limita al "producto" o "servicio" que entregamos, sino al impacto real que genera. Es, en esencia, la solución al problema del usuario. Para definirla con precisión, debemos responder a las siguientes preguntas clave:
        

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
