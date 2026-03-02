<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tendencias y casos de éxito en Inteligencia Artificial (IA), <em>Big Data</em>, salud digital, medicina de precisión y analítica predictiva en salud pública
    
    .bg-full-width.bg-fondo-1
      .px-5
        img(src="@/assets/curso/tema3/1.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-up")
            p.banner-text La transformación digital está redefiniendo la forma en que los sistemas de salud pública generan, analizan y aplican conocimiento. Tecnologías como la Inteligencia Artificial, el <em>Big Data</em>, la salud digital y la medicina de precisión permiten identificar patrones, anticipar riesgos y personalizar intervenciones sanitarias. Estas herramientas no solo amplían la capacidad de respuesta ante emergencias o epidemias, sino que fortalecen la toma de decisiones basada en evidencia, la eficiencia de los servicios y la equidad en el acceso. Analizar las tendencias y casos de éxito en estas áreas permite comprender cómo la innovación tecnológica puede convertirse en un motor clave para mejorar la salud poblacional en América Latina. 
        
        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Inteligencia Artificial y <em>Big Data</em> para vigilancia y predicción de riesgos sanitarios
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mn-lg-0
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-4.mb-3
                figure
                  img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
              .col-lg-8
                .bg-color-9.p-4.p-lg-5
                  p.mb-0 La Inteligencia Artificial (IA) y el <em>Big Data</em> están transformando los enfoques tradicionales de vigilancia y respuesta en salud pública, al permitir analizar grandes volúmenes de información en tiempo real, identificar patrones epidemiológicos emergentes y generar alertas tempranas que fortalecen la toma de decisiones basada en evidencia. 
            .row.align-items-center.bg-color-sintesis.p-4
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema3/4.svg").mx-auto
              .col-lg
                p.mb-0 En América Latina, aunque la infraestructura tecnológica aún se encuentra en consolidación, la adopción de herramientas de analítica avanzada en los sistemas de salud es una tendencia creciente, impulsada por la necesidad de anticipar riesgos y optimizar recursos.  Antes de profundizar en su aplicación, es importante diferenciar ambos conceptos. 
    
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0(data-aos="flip-up")
        .bg-color-4.h-100.p-4.tarjeta
          .row.mb-3
            .col.align-items-end.d-flex 
              h5 <em>Big data</em>
            .col-auto
              img(src="@/assets/curso/tema3/5.svg").mx-auto
          p.mb-0 Capacidad de recopilar, integrar y gestionar grandes volúmenes de datos provenientes de múltiples fuentes clínicas, epidemiológicas, ambientales, genómicas, geoespaciales o incluso de redes sociales que, por su magnitud y velocidad, no pueden procesarse con métodos estadísticos convencionales. 
      .col-lg-6.mb-3.mb-lg-0(data-aos="flip-down")
        .bg-color-1.h-100.p-4.tarjeta
          .row.mb-3
            .col.align-items-end.d-flex 
              h5 Inteligencia artificial
            .col-auto
              img(src="@/assets/curso/tema3/6.svg").mx-auto
          p.mb-0 Comprende un conjunto de técnicas de aprendizaje automático y análisis inteligente que permiten reconocer patrones, clasificar información y generar predicciones útiles para la gestión sanitaria (ACEMI, 2014). En este sentido, el <em>Big Data</em> es el insumo y la IA el motor que convierte los datos en conocimiento aplicable a la toma de decisiones en salud pública.   
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La combinación de ambas herramientas ha fortalecido la capacidad predictiva y de respuesta epidemiológica. En Colombia, por ejemplo, se aplicaron modelos de IA para monitorear la propagación del COVID-19 y variables ambientales, lo que permitió identificar focos de contagio y planificar intervenciones preventivas. En Brasil y México, la IA y el <em>Big data</em> se han extendido hacia la farmacovigilancia y la gestión hospitalaria, optimizando la detección de reacciones adversas a medicamentos y la eficiencia operativa (Pro Pharma Research Organization, s.f.).
    
    .row.justify-content-center
      .col-lg-10
        .row.mb-3.justify-content-center.align-items-center.bg-color-9.p-4
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/8.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p.mb-0(data-aos="fade-right") Sin embargo, su implementación enfrenta retos estructurales: la fragmentación de los sistemas de información, la falta de marcos éticos y de protección de datos sensibles, y la escasez de talento digital especializado (OPS, Organización Panamericana de la Salud, 2025) A pesar de ello, sus ventajas son evidentes: detección temprana de brotes, mejor asignación de recursos, generación de evidencia local y mayor equidad sanitaria. Como destacan Khedkar y Sahay (2019), la revolución de la información en salud, impulsada por la IA y la analítica predictiva, está haciendo posible sistemas más eficientes, preventivos y equitativos.  

        .row.align-items-center.bg-color-sintesis.p-4
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 De acuerdo con la (OMS & BID, 2024), cuando los sistemas de salud cuentan con marcos técnicos, éticos y de gobernanza adecuados, la IA puede anticipar, actuar y aprender de forma continua ante riesgos emergentes. En síntesis, IA y <em>Big Data</em> no son solo tecnologías, sino habilitadores estratégicos de la innovación sanitaria. 
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Salud digital: telemedicina, telesalud y monitoreo remoto 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-9.p-4.px-lg-5.py-lg-4
          p.mb-0 El avance de las tecnologías de la información y la comunicación (TIC) ha transformado la atención y la vigilancia en salud pública. Hoy, la salud digital integra herramientas de telemedicina, telesalud y monitoreo remoto que facilitan el acceso a servicios sanitarios, la educación del paciente y la continuidad asistencial, especialmente en zonas rurales o dispersas. Según el Informe del Ministerio de Sanidad de España (2024), las TIC fortalecen la comunicación entre profesionales y ciudadanos, y son esenciales para la recolección, análisis y difusión de información sanitaria.  
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Telemedicina
            p.mb-0 Es la provisión de servicios sanitarios a distancia mediante tecnologías que facilitan diagnóstico, prevención, tratamiento y formación profesional; mejorando el acceso, la oportunidad en la atención y la continuidad del cuidado, especialmente en zonas apartadas o con limitada oferta de servicios.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/11.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Telesalud
            p.mb-0 La telesalud es el uso de tecnologías de la información y la comunicación para brindar servicios, educación y apoyo en salud a distancia. Facilita el acceso a atención, orientación y seguimiento, especialmente en poblaciones con barreras geográficas, económicas o de movilidad.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Monitoreo remoto
            p.mb-0 Modalidad de atención en la que datos de salud de una persona se recolectan a distancia, mediante dispositivos o aplicaciones, y se envían a profesionales de salud para su seguimiento, análisis y toma de decisiones oportunas.
    
    .row.justify-content-center.align-items-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-0(data-aos="fade-right") Adicionalmente, las soluciones de monitoreo remoto y tableros digitales (<em>dashboards</em>) permiten registrar variables fisiológicas y visualizar indicadores epidemiológicos en tiempo real. Según Schulze et al. (2023), estos tableros facilitan la vigilancia, la transparencia y la comunicación de riesgos, mejorando la toma de decisiones tanto institucional como comunitaria. No obstante, su éxito depende de garantizar interoperabilidad, protección de datos personales y alfabetización digital en salud. 
    
    .bg-full-width.bg-fondo-1
      .px-5
        separador
        
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Medicina de precisión: aplicaciones poblacionales y uso de información genómica

        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-4.p-4.px-lg-5.py-lg-4
              p.mb-0 La medicina de precisión adapta las intervenciones médicas a las características genéticas, ambientales y sociales de cada persona o población. En el ámbito de la salud pública de precisión, esta información se emplea para predecir patrones de riesgo, diseñar estrategias personalizadas y optimizar los recursos. Sahu et al. (2021), tecnologías como la <em>Internet de las Cosas</em> (IoT) y los dispositivos portátiles generan ecosistemas de datos continuos que complementan la información genómica tradicional, permitiendo construir indicadores dinámicos que integran factores biológicos y ambientales.  

        .row.align-items-center.bg-color-sintesis.p-4
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los programas nacionales de genómica poblacional han demostrado el valor del uso ético y seguro de datos genéticos, pero también la necesidad de infraestructuras interoperables, gobernanza de datos y formación especializada. El reto para América Latina radica en la baja representatividad genética, las limitaciones presupuestales y los dilemas éticos asociados al manejo de información sensible. Avanzar hacia una medicina de precisión equitativa implica fortalecer la colaboración multisectorial, integrar datos locales y construir políticas basadas en evidencia.    
    
        separador
        
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.4 Casos de éxito en América Latina y aprendizajes para Colombia   
        
        img(src="@/assets/curso/tema3/15.png", alt="Imagen decorativa")

    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 América Latina ha demostrado un compromiso creciente con la innovación en salud pública, combinando salud digital, inteligencia artificial y medicina de precisión. Estos esfuerzos buscan mejorar la equidad, eficiencia y calidad de la atención sanitaria mediante tecnologías adaptadas a los contextos locale.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (HolonIQ y BID Lab, 2024).
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
          .col-lg-8
            p En Chile, el programa Hospital Digital (2018) conecta la atención primaria con especialistas a través de telemedicina, reduciendo tiempos de espera y mejorando la gestión de pacientes crónicos. En Brasil, la Rede Nacional de Dados em Saúde (RNDS) integra información clínica, epidemiológica y genómica, facilitando la respuesta ante brotes y políticas basadas en evidencia. En México, la IA ha optimizado la farmacovigilancia y la telesalud comunitaria, fortaleciendo la vigilancia epidemiológica. Finalmente, Argentina y Uruguay han desarrollado historias clínicas electrónicas unificadas, promoviendo interoperabilidad y gobernanza ética de datos.  
        
        p.mb-5 Estos casos ofrecen aprendizajes clave para Colombia: 

        .row.justify-content-center.mb-5
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  p.mb-0 Integrar la innovación en la política pública, con estrategias nacionales y presupuesto sostenido. 
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  p.mb-0 Asegurar interoperabilidad y gobernanza de datos, como lo demuestra Brasil. 
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  p.mb-0 Fortalecer capacidades digitales locales, garantizando sostenibilidad. 
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  p.mb-0 Promover equidad territorial, ampliando el acceso a servicios digitales en regiones apartadas. 
        
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Colombia, con iniciativas como Salud Digital Colombia, requiere una estrategia articulada que combine IA, <em>Big Data</em> y genómica poblacional bajo un marco ético y de interoperabilidad, avanzando hacia una salud pública de precisión inclusiva y sostenible. 



</template>

<script>
export default {
  name: 'Tema3',
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
