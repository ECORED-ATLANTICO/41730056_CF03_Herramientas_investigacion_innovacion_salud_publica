<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tecnologías de la información y las comunicaciones (TIC) aplicadas al análisis y visualización de datos en salud pública
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las TIC se aplican al análisis y visualización de datos en salud pública a través de herramientas como el análisis de datos ("ciencia de datos"), sistemas de información geográfica (SIG), telemedicina, y la creación de plataformas que integran y visualizan información de diversas fuentes (como los registros electrónicos de salud - EHR) para mejorar la toma de decisiones, la vigilancia epidemiológica y el acceso a la atención. La visualización de datos, por ejemplo, usa gráficos como las curvas epidémicas para monitorear brotes de enfermedades.  
        
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Rol de las TIC en la toma de decisiones basadas en evidencia
        
        img(src="@/assets/curso/tema2/2.png", alt="Imagen decorativa")
        
        .row.justify-content-center
          .col-lg-10
            .bloque-texto-b.color-secundario.p-4(data-aos="fade-up").mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 Las TIC han sido reconocidas como herramientas estratégicas para optimizar procesos internos y fortalecer las relaciones tanto internas como externas, facilitando la conectividad, la eficiencia y la toma de decisiones en salud basadas en datos 
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 (OMS, 2021).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.bg-color-1.p-4
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La tecnología influye en muchas etapas distintas de la toma de decisiones. Por ejemplo, influye en el momento de obtener información, ya que las personas accedemos constantemente a motores de búsqueda como <em>Google</em>, o <em>Wikipedia</em>; y esta información obtenida influye en los siguientes pasos hasta finalmente hacer una elección. Nos ayuda a filtrar, analizar y procesar la información, así como a encontrar alternativas y evaluarlas, ya sea de forma consciente o inconsciente.
    
    p Las ventajas del uso de las TIC para la toma de decisiones las podríamos desglosar de la siguiente manera:  

    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center
          .col-lg-10
            .row.mb-5.justify-content-center.align-items-center.bg-color-9.p-4
              .col-lg-3.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/5.svg", data-aos="zoom-in")
              .col-lg-9
                p.mb-0(data-aos="fade-right") Ahorro en costos y tiempo; mejora del manejo de la información; mayor volumen de información, lo que favorece la toma de la decisión más adecuada ya que se dispone de un conocimiento más profundo; optimización de la recopilación de la información para su posterior tratamiento y análisis; mejora de la comunicación entre personas que se encuentren alejadas físicamente y posibilidad de interactuación en tiempo real, entre otras. 
        
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 También las empresas pueden utilizar las TIC para contactar más fácilmente con sus usuarios, conocer sus prioridades, visión de la empresa, posibilidades de mejora, etc. En este sentido, utilizando al usuario, la empresa posteriormente podría tomar una decisión en modo colaborativo difundiendo esta información al más alto nivel (directivo) o pidiendo opinión a sus empleados. Por todo ello, es necesario que las organizaciones dispongan de las herramientas necesarias para tomar las mejores decisiones, ya no sólo para obtener una ventaja competitiva frente al resto, si no también facilitar que dichas decisiones sean las óptimas (Sánchez Arroyo, 2017). 
    
        separador
        
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.2 Herramientas para análisis y visualización de datos
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
          .col-lg-7
            p.mb-0(data-aos="fade-right") Las herramientas para el análisis y visualización de datos desempeñan un papel fundamental en la innovación en salud pública, ya que permiten transformar grandes volúmenes de información en conocimiento útil para la toma de decisiones. A través de métodos analíticos y representaciones visuales claras, estas herramientas facilitan la identificación de patrones, tendencias y brechas en los datos, apoyando la formulación de intervenciones basadas en evidencia. Además, contribuyen a comunicar resultados de manera accesible a diversos actores, fortaleciendo la comprensión, el monitoreo y la evaluación de políticas, programas y proyectos en salud pública.
        
        div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
          h3.mb-0.text-white Sistemas de información en salud
        
        p.mb-5 Los sistemas de información en salud (SIS) son el conjunto de herramientas tecnológicas y procesos para recolectar, procesar, analizar y utilizar datos del sector salud. Su propósito principal es apoyar la toma de decisiones estratégicas, mejorar la calidad de la atención médica, optimizar la gestión de recursos y fortalecer la salud pública mediante la generación de información oportuna y veraz (OPS, Organizacion Panamericana de la salud, s.f.).
    
    h3 Funciones y características principales
    .bg-full-width.bg-fondo-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6").p-4
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Recopilación y procesamiento de datos
                p.text-center Capturan datos de diversas fuentes, como historias clínicas, encuestas, registros de pacientes y transacciones administrativas y financieras.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Análisis e información
                p.text-center Transforman datos brutos en información útil para identificar riesgos, evaluar el desempeño de los servicios, planificar recursos y tomar decisiones basadas en evidencia.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Soporte a la toma de decisiones
                p.text-center Proporcionan información para la gestión en todos los niveles, desde lo operativo hasta lo estratégico, incluyendo el uso de cuadros de mando integral.  
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Atención al paciente
                p.text-center Permiten generar alertas tempranas, recordar seguimientos y asegurar que la información clínica sea accesible y segura para el cuidado del paciente.  
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Vigilancia de la salud pública
                p.text-center Facilitan la monitorización de eventos de salud, la vigilancia epidemiológica y la respuesta ante brotes de enfermedades. 
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/7.png', alt='')
    
    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0.text-white Ejemplos de sistemas de información en salud

    img(src="@/assets/curso/tema2/13.png", alt="Imagen decorativa").mb-5
    
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-10.mb-3.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
          div(titulo="SIVIGILA").ms-4
            .row.mb-5.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/14.png")
              .col-lg
                p.mb-0 Es el Sistema Nacional de Vigilancia en Salud Pública (INS, s.f.), (SDS, Secretaria distrital de salud, s.f.), una infraestructura de información que recopila y analiza datos sobre eventos de salud para guiar la toma de decisiones en salud pública. Su objetivo es proveer información oportuna sobre la dinámica de eventos que afectan a la población colombiana, como enfermedades infecciosas y factores de riesgo, con el fin de orientar políticas, planificar intervenciones y optimizar recursos para proteger la salud individual y colectiva. 
            h4 Funciones principales:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Orientar y planificar</strong>: proporciona la información necesaria para la orientación y planificación de las políticas y acciones de salud pública.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Prevenir y controlar</strong>: permite tomar decisiones para prevenir y controlar enfermedades y factores de riesgo.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Seguimiento y evaluación</strong>: facilita el seguimiento y la evaluación de las intervenciones y programas de salud.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Optimizar recursos</strong>: ayuda a racionalizar y optimizar el uso de los recursos disponibles. 
          div(titulo="VESPA (Sistema para la vigilancia de las sustancias psicoactivas)").ms-4
            .row.mb-0.mb-xl-3.justify-content-center.align-items-center
              .col-xl-auto.mb-3.mb-xl-0
                figure
                  img(src="@/assets/curso/tema2/15.png")
              .col-xl
                p.mb-0 Se constituye en la principal fuente de datos en el Distrito Capital sobre dicho evento (SDS, Secretaria Distrital de salud, s.f.). El propósito esencial es la consolidación del sistema en la identificación del abuso e intoxicaciones por sustancias psicoactivas que facilite el monitoreo y seguimiento de los eventos y provea información oportuna, comparable, válida y confiable dirigida a caracterizar periódicamente a la población que demanda los servicios de atención especializada en adicciones a través de los centros de atención para la drogadicción (CAD)  y servicios de atención de urgencias por eventos relacionados con la intoxicación por sustancias psicoactivas.
          div(titulo="SIVIM (Sistema para la vigilancia de la violencia intrafamiliar, el maltrato infantil y la violencia sexual)").ms-4
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/16.png")
              .col-lg
                p.mb-0 El sistema de vigilancia epidemiológica de la violencia intrafamiliar, el maltrato infantil y la violencia sexual, SIVIM se constituye en la principal fuente de datos en el Distrito Capital sobre dichos eventos (SDS, Secretaria distrital de salud, s.f.). De esta manera, el mantenimiento de unidades primarias generadoras del dato, de las unidades informadoras del sistema enunciado, así como el seguimiento de los casos de violencia intrafamiliar, maltrato infantil y violencia sexual, con énfasis en abuso sexual y casos en riesgo de fatalidad es a su vez el quehacer esencial de para su consolidación.  
            .cajon.color-primario.bg-color-4.p-4.mb-4
              p.mb-0 En este sentido se trata de desarrollar un proceso orientado a asegurar la notificación (inmediata y periódica) al Área de Vigilancia en Salud Pública de “casos identificados de violencia intrafamiliar, maltrato infantil y violencia sexual”, así como su canalización y seguimiento, con el propósito de facilitar su atención integral oportuna y la restitución de derechos de las víctimas. 
          div(titulo="LCE: Sistema para la vigilancia de lesiones de causa externa").ms-4
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/17.png")
              .col-lg
                p.mb-0 Conjunto de acciones para recopilar, analizar e interpretar datos sobre daños a la salud intencionales y no intencionales, como accidentes, agresiones y envenenamientos, con el fin de implementar medidas de prevención y control. Es un sistema crucial para entender la carga de enfermedad, planificar intervenciones de salud pública y reducir los costos asociados a estas lesiones  (SDS, Secretaria distrital de salud, s.f.).
            h4 Características principales del sistema LCE: 
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Propósito</strong>: recolectar datos sobre daños a la salud intencionales (ej: agresiones, suicidios) y no intencionales (ej: accidentes de tráfico, caídas) para informar la toma de decisiones en salud pública.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Función</strong>: identificar la carga de enfermedad, el riesgo y las tendencias de las lesiones para poder implementar estrategias efectivas de prevención y control.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Fuentes de datos</strong>: utiliza diversas fuentes, como los registros del Sistema de Vigilancia en Salud Pública (SIVIGILA), Registros Individuales de Prestación de Servicios (RIPS) y registros de mortalidad.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Alcance</strong>: abarca una amplia gama de eventos, incluyendo lesiones por exposición laboral, accidentes de consumo, procedimientos estéticos, traumatismos, envenenamientos y agresiones.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                p.mb-0 <strong>Importancia</strong>: permite orientar acciones de prevención y control, mejorar la atención sanitaria y reducir los costos económicos y sociales asociados a las lesiones. 
            h4 Ejemplos de su aplicación:
            .row.mb-3.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/18.png")
              .col-lg
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 <strong>Vigilancia de accidentes laborales</strong>: permite identificar patrones de riesgo en menores de 18 años expuestos a condiciones de trabajo peligrosas.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 <strong>Análisis de la carga de enfermedad</strong>: estudios utilizan datos del LCE para medir el impacto de las lesiones en la población, calculando variables como los Años de Vida Perdidos por Discapacidad (AVD) o por Muerte Prematura (AVPM).
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 <strong>Monitoreo de eventos específicos</strong>: se puede utilizar para dar seguimiento a la incidencia de lesiones relacionadas con procedimientos estéticos o accidentes específicos.
          div(titulo="SISVECOS (Sistema para la vigilancia de la conducta suicida").ms-4
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/19.png")
              .col-lg
                p.mb-0 Está definido como el conjunto de procesos dinámicos e integrales interrelacionados para la recopilación, análisis, interpretación, divulgación y evaluación oportuna de información de la conducta suicida en Bogotá D.C (SDS, Secretaria Distrital de salud, s.f.). En ese sentido, desde este subsistema se cuenta con un proceso que incluye la notificación por parte de las unidades primarias generadoras del dato (UPGD) o unidades informadoras (UI) quienes la remiten a localidad de la Subred que les compete, posteriormente se realiza la investigación epidemiológica de campo que permite realizar la valoración del riesgo e intervención individual y familiar con el objetivo de mitigar el riesgo de reincidencia y canalización sectorial e intersectorial y monitoreo según corresponda.
            p De la misma manera, ante el análisis del comportamiento inusual del evento se emiten alertas epidemiológicas con el fin de determinar la focalización de las acciones y atención en los casos individuales y colectivos notificados. 
            .cajon.color-primario.bg-color-4.p-4.mb-4
              p.mb-0 Actualmente, las conductas suicidas que son objeto de la vigilancia son: ideación suicida, amenaza suicida e intento de suicidio; así mismo la muerte por suicidio es captada por el SISVECOS, sin embargo, es el Instituto Nacional de Medicina Legal y Ciencias Forenses (INMLCF), la fuente de información oficial para este evento, tanto a nivel Distrital como Nacional.
    
    .align-items-center.justify-content-star.mb-1
      .div.mb-3(data-aos="fade-left")
        h3.subtitle.position-relative Plataformas de visualización
          img.image(src='@/assets/curso/4.svg', alt='Imagen decorativa')
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.bg-color-11.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/20.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las plataformas de visualización son <em>softwares</em> o aplicaciones que permiten a los usuarios crear representaciones gráficas de datos para hacerlos más fáciles de entender e interpretar. Transforman grandes y complejos conjuntos de datos en gráficos, tablas y paneles interactivos que ayudan a identificar patrones, tendencias y tomar decisiones (Adelusi, 2025).
        
        div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
          h3.mb-0.text-white Características principales
        
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Facilitan la interpretación de datos")
                figure.mb-3
                  img(src="@/assets/curso/tema2/22.png", style="max-width: 420px").mx-auto
                p.mb-0 Hacen que la información sea más digerible al presentarla de forma visualmente atractiva.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Interactivas")
                figure.mb-3
                  img(src="@/assets/curso/tema2/23.png", style="max-width: 420px").mx-auto
                p.mb-0 Permiten a los usuarios filtrar, explorar y manipular los datos dinámicamente para obtener diferentes perspectivas.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Conectan a múltiples fuentes de datos")
                figure.mb-3
                  img(src="@/assets/curso/tema2/24.png", style="max-width: 420px").mx-auto
                p.mb-0 Pueden extraer información de diversas fuentes, como bases de datos, flujos de datos y más, para un análisis completo.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Ayudan a tomar decisiones")
                figure.mb-3
                  img(src="@/assets/curso/tema2/25.png", style="max-width: 420px").mx-auto
                p.mb-0 Al revelar patrones y tendencias, permite a las empresas y profesionales tomar decisiones más informadas.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Se adaptan a diferentes necesidades")
                figure.mb-3
                  img(src="@/assets/curso/tema2/26.png", style="max-width: 420px").mx-auto
                p.mb-0 Existen herramientas para diferentes usuarios, desde aquellos que necesitan funcionalidades básicas de arrastrar y soltar, hasta desarrolladores que requieren <em>scripting</em> avanzado. 

        h3.mb-5 Ejemplos de uso


        .row.justify-content-center.mb-5.text-center
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  h5 Inteligencia empresarial (<em>Business Intelligence</em>)
                  p.mb-0 Monitorear métricas clave de rendimiento (KPIs).
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  h5 Investigación científica
                  p.mb-0 Analizar datos para descubrir nuevos descubrimientos.
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  h5 Diseño de productos
                  p.mb-0 Explorar el comportamiento de los usuarios.
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.bg-color-4
                .p-4
                  h5 Informes y <em>dashboards</em>
                  p.mb-0 Combinar múltiples visualizaciones en una sola pantalla interactiva.
    
    img(src="@/assets/curso/tema2/28.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text <em>Power BI</em>, <em>Tableau</em>, y <em>Qlik</em> son las principales plataformas de visualización de datos, cada una con fortalezas específicas, a continuación, se detallan cada una de ellas (Keyrus, 2023): 
    
    .row.align-items-center.justify-content-center
      .col-lg-10.mb-3.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
          div(titulo="<em>POWER BI</em>").ms-4
            .row.mb-3.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/29.png")
              .col-lg
                p.mb-0  Es una herramienta de inteligencia empresarial desarrollada por Microsoft. Permite a las organizaciones conectarse a diversas fuentes de datos, crear visualizaciones interactivas y paneles de control, y tomar decisiones informadas basadas en datos. Es ideal para una rápida integración con <em>Microsoft Office</em> y para usuarios empresariales.
            h4 Características: 
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Ofrece una variedad de visualizaciones y gráficos personalizables.
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Permite la creación de informes interactivos y paneles de control. 
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Tiene una comunidad activa que comparte recursos y ayuda con problemas.
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Ofrece capacidades de análisis avanzadas, como el análisis predictivo y la inteligencia artificial. 
            h5 Ventajas
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/31.png")
              .col-lg.order-lg-1
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Integración con herramientas de Microsoft, lo que facilita a las organizaciones que ya utilizan productos de Microsoft.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Interfaz de usuario intuitiva y amigable.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Ofrece una versión gratuita (<em>Power BI Desktop</em>) y opciones de licencia flexibles.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Amplia biblioteca de conectores de datos.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Escalabilidad y opciones de implementación en la nube o local.
          div(titulo="<em>TABLEAU</em>").ms-4
            .row.mb-3.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/32.png")
              .col-lg
                p.mb-0  Es una de las herramientas líderes en visualización y análisis de datos. Permite a los usuarios conectarse a diversas fuentes de datos, crear visualizaciones impactantes y explorar datos de manera efectiva. Destaca por sus visualizaciones interactivas y personalizables.
            h5 Características
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/33.png")
              .col-lg.order-lg-1
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Tableau es conocido por su potente capacidad de visualización y análisis de datos.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Ofrece una amplia gama de visualizaciones y gráficos interactivos.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Permite la creación de informes y paneles de control altamente personalizables.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Facilita la conexión a múltiples fuentes de datos.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Tiene capacidades avanzadas de análisis y modelado de datos.
            h4 Ventajas: 
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Potentes capacidades de visualización y análisis de datos.
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Amplia comunidad de usuarios y recursos disponibles en línea. 
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Integración con muchas fuentes de datos y servicios en la nube.
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.bg-color-2
                    .p-3
                      p.mb-0 Ofrece opciones de implementación en la nube o local. 
          div(titulo="<em>QLIK</em>").ms-4
            .row.mb-3.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/34.png")
              .col-lg
                p.mb-0  Es una de las plataformas líderes en <em>Business Intelligence</em> (BI) y análisis de datos que proporciona a las organizaciones las herramientas necesarias para explorar, visualizar y analizar sus datos de manera efectiva. se Enfoca en el modelado de datos asociativo para análisis complejos. 
            h4 Características: 
            p Qlik es conocido por su enfoque en la asociatividad de datos, lo que permite a los usuarios explorar datos de manera intuitiva. Ofrece productos como <em>QlikView</em> y <em>Qlik Sense</em> para visualización y análisis de datos. 
            h5 Ventajas
            .row.mb-3.justify-content-center.align-items-center
              .col-lg
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Modelo de datos asociativo que permite a los usuarios explorar relaciones de datos de manera flexible.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Capacidad de descubrimiento de datos autónomo.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Enfoque en la toma de decisiones guiadas por datos.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    p.mb-0 Facilidad de exploración de datos. 

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Interoperabilidad y gobernanza de datos en salud
    
    .bloque-texto-g.color-secundario.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/35.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interoperabilidad y la gobernanza de datos en salud son procesos interconectados que buscan el intercambio seguro y eficaz de datos médicos para mejorar la atención, con la gobernanza estableciendo las reglas y la interoperabilidad como la capacidad técnica de los sistemas para compartirlos. La gobernanza de datos define políticas y normas para gestionar los datos de salud, mientras que la interoperabilidad permite que diferentes sistemas (como las historias clínicas electrónicas) se comuniquen y compartan información para optimizar resultados de salud y toma de decisiones (AHIMA, 2022).


    TabsC.color-primario(data-aos="zoom-in").mb-5
      .p-3.p-md-4(titulo="Interoperabilidad en salud")
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-6.mb-4.mb-md-0
            p Se refiere a la capacidad de sistemas y aplicaciones de salud para conectarse, intercambiar e interpretar datos de manera coordinada y segura.
            h5 Propósito:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Optimizar los resultados de salud al permitir el acceso oportuno a información precisa y completa para médicos y pacientes.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Facilitar la prestación de servicios de salud más eficientes y coordinados entre diferentes proveedores.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/36.png', alt='Imagen de acompañamiento')
        .row.justify-content-center
          .col-lg-10
            .row.align-items-center.bg-color-9.p-4.mb-5
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/37.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 <strong>Ejemplo</strong>: un enfermero puede acceder a la historia clínica completa de un paciente, incluyendo vacunas y medicamentos, antes de su primera consulta, gracias a la interoperabilidad. 
      .p-3.p-md-4(titulo="Gobernanza de datos en salud")
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-6.mb-4.mb-md-0
            p Es una disciplina de gestión que establece las políticas, procesos y estándares para controlar, proteger y utilizar los datos de salud de forma eficaz y ética.
            h5 Propósito:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Garantizar la calidad y el uso adecuado de los datos, evitando usos indebidos, poco éticos o ilegales.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Equilibrar la privacidad del paciente con la necesidad de compartir datos para mejorar la salud pública.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Asegurar el cumplimiento normativo y legal en el manejo de la información.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/38.png', alt='Imagen de acompañamiento')
        .row.justify-content-center
          .col-lg-10
            .row.align-items-center.bg-color-9.p-4.mb-5
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/37.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 <strong>Implementación</strong>: se crean estructuras, como comités de gobernanza de datos, para coordinar y supervisar las políticas de datos dentro del sector salud. 
    
    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0.text-white Relación entre interoperabilidad y gobernanza de datos
    
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg-color-9.p-4
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/39.svg", data-aos="zoom-in")
          .col-lg-9
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | La gobernanza de datos proporciona el marco y las reglas para la gestión y seguridad de los datos.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | La interoperabilidad se encarga de la implementación técnica de esas reglas para permitir el flujo de datos entre sistemas.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Ambas son esenciales para construir un sistema de salud digital robusto, que pueda aprovechar los datos como un activo estratégico para la toma de decisiones informadas y la mejora continua de la atención. 
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Buenas prácticas en protección de datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/40.png", data-aos="zoom-in")
      .col-lg-8
        p La seguridad de los datos es un proceso continuo que implica identificar y proteger los datos reforzando los controles de <em>hardware</em> y <em>software</em> que rigen el uso, el movimiento y el almacenamiento de los datos. Para proteger su infraestructura de TI, es necesario mejorar la visibilidad de los datos y las estrategias de seguridad implementadas en un doble enfoque, es decir, estrategias centradas en los datos y centradas en el usuario.  
        .row.align-items-center.bg-color-3.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/41.svg").mx-auto
          .col-lg
            p.mb-0 Las buenas prácticas en protección de datos incluyen medidas técnicas como usar contraseñas seguras, cifrar información y actualizar <em>software</em>, y medidas de comportamiento como no compartir datos sin autorización, bloquear el equipo al ausentarse, destruir documentos de forma segura y capacitarse continuamente. La gestión de datos también requiere minimizar la recopilación, limitar el almacenamiento y garantizar la confidencialidad, integridad y disponibilidad de la información. 
    
    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0.text-white Medidas técnicas y de seguridad

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/42.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Contraseñas seguras")
            figure.mb-3
              img(src="@/assets/curso/tema2/43.png", style="max-width: 420px").mx-auto
            p.mb-0 No compartir contraseñas, no anotar en lugares visibles o reutilices. Usar contraseñas únicas y considera la autenticación biométrica donde sea posible.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Actualización constante")
            figure.mb-3
              img(src="@/assets/curso/tema2/44.png", style="max-width: 420px").mx-auto
            p.mb-0 Mantener actualizados el sistema operativo, las aplicaciones y el antivirus de tus dispositivos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cifrado de datos")
            figure.mb-3
              img(src="@/assets/curso/tema2/45.png", style="max-width: 420px").mx-auto
            p.mb-0 Usar el cifrado para proteger la información confidencial, especialmente cuando se transfiere o se almacenas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Seguridad de dispositivos")
            figure.mb-3
              img(src="@/assets/curso/tema2/46.png", style="max-width: 420px").mx-auto
            p.mb-0 Bloquear el dispositivo con contraseña o datos biométricos cuando no se uses. Evita conectar dispositivos USB de origen desconocido.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Configuración de privacidad")
            figure.mb-3
              img(src="@/assets/curso/tema2/47.png", style="max-width: 420px").mx-auto
            p.mb-0 Revisar y restringir los permisos de las aplicaciones para limitar el acceso a tus datos. 
    
    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0.text-white Medidas de comportamiento y organización
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/48.png", data-aos="zoom-in")
      .col-lg-7
        LineaTiempoD.color-secundario
          p(numero="A" titulo="Acceso y cesión de datos") No compartir datos personales sin tener seguridad de que el destinatario está autorizado. No enviar información sensible por correos electrónicos o mensajes no seguros.
          
          p(numero="B" titulo="Entorno de trabajo") No dejar documentos con datos personales a la vista sobre el escritorio ni en la impresora. Al salir del puesto, bloquear la sesión del equipo.
          
          p(numero="C" titulo="Destrucción segura") No tirar documentos con información personal a la basura común. Utilizar trituradoras o contenedores de destrucción específicos.
          
          p(numero="D" titulo="Traslado de datos") Evita trasladar información confidencial fuera de la oficina. Si es imprescindible, asegurar de que esté protegida con contraseñas o cifrado.

          p(numero="E" titulo="Capacitación continua") Evita trasladar información confidencial fuera de la oficina. Si es imprescindible, asegurar de que esté protegida con contraseñas o cifrado.
    



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
