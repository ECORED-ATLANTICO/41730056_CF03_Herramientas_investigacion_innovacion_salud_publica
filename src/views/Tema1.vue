<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elementos de la propuesta de valor y <em>pitch</em> para proyectos innovadores en salud pública
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-3.mb-lg-0
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-4.p-4.p-lg-5
                  p.mb-0(data-aos="fade-right") En el ámbito de la innovación en salud pública, comprender los elementos de la propuesta de valor y la construcción de un <em>pitch</em> efectivo es fundamental para transformar ideas en proyectos viables y con impacto. La propuesta de valor permite definir con claridad qué problema de salud se aborda, a quién beneficia la solución, qué la hace diferente y por qué genera resultados relevantes para las comunidades y los sistemas de salud. 
            .row.align-items-center.bg-color-sintesis.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Por su parte, el <em>pitch</em> funciona como una herramienta estratégica de comunicación que sintetiza estos elementos de manera clara, persuasiva y basada en evidencia, facilitando la movilización de aliados, recursos y apoyo institucional. Ambos componentes son esenciales para impulsar iniciativas innovadoras que respondan a necesidades reales en salud pública. 
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")

        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Concepto de propuesta de valor y su importancia en salud pública
        
        .row.justify-content-center.align-items-center.mb-3
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
        
    .row
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              p.mb-0 ¿Qué dolor o frustración de nuestros usuarios o clientes alivia?
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              p.mb-0 ¿Qué ganancia o beneficio significativo les proporciona?
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              p.mb-0 ¿A quién específicamente está dirigida esta solución? 
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Herramientas para formular la propuesta de valor
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las herramientas para formular la propuesta de valor son fundamentales en procesos de innovación en salud pública, ya que permiten estructurar de manera clara y estratégica cómo una solución responde a una necesidad real de la población. Estas facilitan la identificación de problemas prioritarios, la comprensión profunda de los usuarios o comunidades, el análisis de beneficios esperados y la diferenciación frente a otras alternativas existentes. Además, ayudan a conectar la solución propuesta con resultados concretos en salud, eficiencia del sistema o bienestar social. Entre las más comunes, pero más completas tenemos las siguientes:
        
        .align-items-center.justify-content-star.mb-1
          .div.mb-3(data-aos="fade-left")
            h3.subtitle.position-relative <em>Value Proposition Canvas</em> (Lienzo de propuesta de valor)
              img.image(src='@/assets/curso/4.svg', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
          .col-lg-8
            p El <em>Value Proposition Canvas</em> es un método desarrollado por Alexander Osterwalder cuyo propósito es definir la propuesta de valor de nuestra solución o iniciativa de innovación en salud. Consiste en una representación visual donde contrastamos las necesidades de nuestros usuarios con el producto o servicio que le ofrecemos. En esta, el usuario es el centro del análisis, por lo que debemos tener en cuenta que lo que sea que vayamos a ofrecerle, tenga sentido y cubra una necesidad en específico. 
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema1/8.svg").mx-auto
              .col-lg
                p.mb-0 El lienzo del <em>Value Proposition Canvas</em> se divide en dos bloques principales, que son el bloque del usuario y el bloque del producto. Al desarrollar ambos, podemos validar si nuestra propuesta de valor tendrá éxito, o si por el contrario debemos replantearla.

        div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
          h3.mb-0.text-white Bloque del usuario o cliente
    
    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/9.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 <em>Customer Jobs</em> (Trabajos o tareas del usuario)
              p Describe las actividades que los usuarios realizan para resolver situaciones personales o laborales. De acuerdo con lo anterior, se debe prestar atención a:
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Problemas del usuario al desarrollar una determinada actividad o tarea.
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Motivaciones para llevar a cabo dicha actividad o tarea.
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Necesidades con relación a por qué quiere realizar dicha actividad o tarea.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/10.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 <em>Pains</em> (Dolores o problemas del usuario)
              p Aborda las experiencias negativas que enfrentan los usuarios al realizar sus actividades: dolores, frustraciones y molestias. 
              p Los impedimentos y efectos negativos que puede experimentar el usuario:
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Aspectos no deseados relacionados con la posible solución a la tarea o actividad.
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Obstáculos para realizar la tarea o actividad deseada.
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Riesgos presentes al momento de realizar dicha tarea o actividad.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/11.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 <em>Gains </em> (Ganancias o beneficios de los usuarios)
              p Son beneficios y resultados positivos que el usuario espera al resolver su situación, vinculados a eficiencia, accesibilidad, seguridad o bienestar. Orientan la elección y satisfacción. Se organizan en cuatro categorías: 
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Beneficios mínimos: indispensables.
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Beneficios esperados: superan lo básico.
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Beneficios deseados: ideales no siempre expresados.
                li.mb-3.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Beneficios inesperados: mejoras sorpresivas que enriquecen la experiencia.
                    
    
    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0.text-white Bloque del producto
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-0(data-aos="fade-right") El segundo bloque del <em>Value Proposition Canvas</em> corresponde al producto. Una vez se ha trabajado el perfil del usuario y se cuenta con la información organizada sobre sus necesidades, tareas, dolores y expectativas, es posible definir con mayor precisión qué producto o servicio puede responder a ese contexto. El propósito de este bloque es diseñar una solución que ayude al usuario a realizar sus tareas de forma más efectiva, que alivie sus molestias y frustraciones, y que a la vez le genere beneficios, mejoras o ganancias relevantes.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-7
        .row.mb-3.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/36.svg", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") Por esta razón, el <em>Value Proposition Canvas</em> es un método efectivo para desarrollar nuestra idea de innovación, ya que en lugar de desarrollar algo y luego buscar a quién podría servirle, el planteamiento es todo lo contrario. 
        p Primero evaluamos las necesidades del usuario y luego diseñamos un producto o servicio orientado a resolver el problema.
           

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-3.p-md-4(titulo="<em>Pain relievers</em> (Aliviador de dolor)")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            p El primer paso es identificar cómo el producto o servicio alivia molestias del usuario, analizando los “<em>Pains</em>”. Los <em>pain relievers</em> son respuestas directas que reducen barreras, mejoran comodidad, eficiencia y accesibilidad. En salud pública, se traducen en menos esperas, mejor información, menos trámites, mejor coordinación y mayor continuidad del cuidado.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/14.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="<em>Products & Services</em> (Productos y servicios)")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0 
            p En esta etapa es útil describir no solo lo que hace el producto o servicio, sino también cómo y por qué lo hace, por lo que es necesario preguntar:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | ¿Qué función cumple esta característica?
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | ¿Qué molestia específica busca disminuir o eliminar?
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | ¿Qué ganancia o beneficio genera en la experiencia del usuario?
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | ¿Cómo contribuye al impacto esperado en salud pública?
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/15.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="<em>Gains Creators</em> (Generadores de beneficios)")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            p Son elementos del producto o servicio que generan beneficios concretos. Explican cómo la solución produce mejoras alineadas con expectativas, deseos y aspiraciones del usuario. Deben basarse en <em>gains</em> mínimos, esperados, deseados e inesperados, creando características que superen lo básico. Cada beneficio debe corresponder directamente a una ganancia valorada por el usuario.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/17.png', alt='Imagen de acompañamiento')
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.bg-color-1.p-4.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Si se desea estructurar un <em>Value Proposition Canvas</em>, se puede apoyar en la plantilla o lienzo oficial, el cual reúne todas las secciones definidas por Osterwalder y sirve como guía visual para organizar el perfil del usuario y la propuesta de valor de manera coherente y centrada en las necesidades reales.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Lienzo del <em>Value Proposition Canvas</em>
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/18.svg", alt="La figura muestra la estructura del lienzo del Value Proposition Canvas, y de cada uno de sus componentes.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/18-1.svg", alt="La figura muestra la estructura del lienzo del Value Proposition Canvas, y de cada uno de sus componentes.")
        figcaption <strong>Nota:</strong> Plataforma <em>Strategyzer’s</em>, n.d.
  
   
    .align-items-center.justify-content-star.mb-1
      .div.mb-3(data-aos="fade-left")
        h3.subtitle.position-relative <em>Lean Canvas</em>
          img.image(src='@/assets/curso/4.svg', alt='Imagen decorativa')
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3-mb-lg-0
            figure
              img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
          .col-lg-8
            .bloque-texto-b.color-secundario.p-4(data-aos="fade-up").mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 El <em>Lean Canvas</em> es una herramienta visual de una sola página diseñada para desarrollar, evaluar y validar modelos de negocio de manera rápida y ágil. Se utiliza especialmente en contextos de emprendimiento e innovación, ya que permite formular la lógica de una solución con base en el aprendizaje continuo y la experimentación, de acuerdo con los principios de la metodología <em>Lean Startup</em>. 
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 (Maurya, 2012)
          
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema1/8.svg").mx-auto
              .col-lg
                p.mb-0 Su formato está compuesto por nueve bloques interconectados y ayuda a que el equipo innovador centre sus esfuerzos en resolver los problemas reales del usuario, comprender la propuesta de valor y garantizar la sostenibilidad y viabilidad del proyecto desde sus primeras fases. En ese sentido, resulta útil para: 
        
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Desarrollar y validar ideas")
                figure.mb-3
                  img(src="@/assets/curso/tema1/21.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
                p.mb-0 Permite esbozar rápidamente el modelo y poner a prueba las hipótesis clave con los usuarios.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Clarificar la estrategia")
                figure.mb-3
                  img(src="@/assets/curso/tema1/22.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
                p.mb-0 Ayuda a enfocar la atención en los elementos más importantes, como el problema del usuario, la solución y la ventaja competitiva.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Identificar riesgos")
                figure.mb-3
                  img(src="@/assets/curso/tema1/23.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
                p.mb-0 Facilita la identificación de posibles puntos débiles y riesgos de implementación en el modelo antes de invertir grandes recursos.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Comunicar el modelo")
                figure.mb-3
                  img(src="@/assets/curso/tema1/24.png", style="max-width: 420px", data-aos="zoom-in").mx-auto
                p.mb-0 Sirve como una herramienta concisa y visual para comunicar la estrategia, modelo o proyecto a otros actores, bien sea internos, como miembros del equipo, o externos, como inversores.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        div.bg-color-8.tarjeta.p-3.mb-5
          p.mb-0 El formato de una página de <em>Lean Canvas</em> está dividido en nueve bloques que se centran en la solución de problemas y el usuario: 

        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/38.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Formato página Lean Canvas
                  p.text-small Estimado aprendiz para profundizar en el modelo Lean Canvas y comprender claramente su estructura de nueve bloques, le invitamos a descargar este documento. Allí encontrará una explicación práctica que le permitirá identificar problemas, definir soluciones y estructurar su propuesta de valor de manera estratégica.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/LeanCanvas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    
    
    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0.text-white Ejemplo de <em>Lean Canvas</em> en salud pública
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-10
        p <b>Tema del proyecto</b>: sistema de detección temprana de diabetes rural
        p.mb-0 <b>Problema</b>: la falta de acceso y el diagnóstico tardío de la Diabetes Mellitus (DM) en comunidades rurales conllevan altas tasas de complicaciones y costos de atención crónica.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span <em>Lean Canvas</em> aplicado a la detección temprana de diabetes en zonas rurales
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/27.svg", alt="La figura muestra un Lean Canvas diligenciado de un proyecto de sistema de detección temprana de diabetes rural; en cada uno de sus bloques.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/27-1.svg", alt="La figura muestra un Lean Canvas diligenciado de un proyecto de sistema de detección temprana de diabetes rural; en cada uno de sus bloques.")
        figcaption <strong>Fuente:</strong> SENA, 2025.
    
    .bg-full-width.bg-fondo-1
      .px-5
        p.mb-5 La primera clave es el enfoque en el problema, pues el lienzo obliga a identificar los tres obstáculos o dolores principales del usuario, y es a partir de estos que se justifica el resto del modelo. De esta forma, la propuesta de valor y las decisiones de diseño se sujetan a la necesidad real que se desea resolver.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/28.png", data-aos="zoom-in")
          .col-lg-9
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema1/29.svg").mx-auto
              .col-lg
                p.mb-0 Así mismo, las métricas clave se orientan no solo a medir cuántas personas utilizan o acceden a la solución, sino a determinar si está realmente genera impacto en la salud pública. En este caso, el indicador de éxito es detectar la diabetes en una etapa más temprana y mejorar la eficiencia del sistema reduciendo las referencias tardías a niveles de mayor complejidad.


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-xl-5.mb-3.mb-lg-0
            .bg-color-5.p-4.p-lg-5.tarjeta 
              p.mb-0 Otro elemento destacado del <em>Lean Canvas</em> es la claridad sobre quién financia o adopta la solución. El ejemplo muestra que el usuario final (el paciente) no siempre coincide con el usuario que paga. Aquí, el financiamiento proviene principalmente del sistema de salud, lo que cambia la lógica de valor y la estrategia de sostenibilidad.
          .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
          .col-xl-4
            img.d-xl-flex.d-none(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mb-3
            p.mb-0 Finalmente, la denominada ventaja injusta evidencia aquello que no se puede copiar fácilmente, como es la confianza o la red de actores locales. Este tipo de atributos aportan diferenciación y aumentan la probabilidad de éxito frente a otras soluciones externas que suelen fracasar al no contar con legitimidad en las comunidades.
    
    .row.align-items-center.bg-color-sintesis.p-4
      .col-lg-auto.mb-3.mb-lg-0
        img.d-none.d-lg-flex(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 En resumen, este lienzo es un plan estratégico condensado en una sola página que permite validar de manera rápida la viabilidad de la idea con los actores del sistema de salud. En este proceso, los bloques de flujos de ingresos y estructura de costos resultan especialmente relevantes para quienes toman decisiones políticas, administrativas o financieras dentro del sistema sanitario.
    
    .bg-full-width.bg-fondo-1
      .px-5
        separador
        
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3 <em>Pitch</em> de proyectos, estructura y elementos clave

        img(src="@/assets/curso/tema1/32.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Un <em>pitch</em> de proyectos es una presentación concisa y convincente para vender una idea, producto o negocio, cuya estructura clave incluye una introducción, la descripción del problema que resuelve, la solución propuesta, la propuesta de valor, el modelo de negocio y un llamado a la acción. Los elementos clave son la claridad, la concisión, la demostración del valor para el usuario o inversor, y una presentación profesional y apasionada (Ball, 2025).
        
        .align-items-center.justify-content-star.mb-1
          .div.mb-3(data-aos="fade-left")
            h3.subtitle.position-relative Estructura de un <em>Pitch</em>
              img.image(src='@/assets/curso/4.svg', alt='Imagen decorativa')
        
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")
          .col-lg-8
            LineaTiempoD.color-secundario
              p(numero="A" titulo="Claridad y concisión") Se debe usar un lenguaje directo y evita la jerga técnica innecesaria. Los mensajes deben ser comprensibles de inmediato.
              
              p(numero="B" titulo="Respaldo con datos") Apoyar la propuesta con hechos, ejemplos o métricas que demuestren la viabilidad del proyecto.
              
              p(numero="C" titulo="Pasión y confianza") Transmitir seguridad y entusiasmo por el proyecto para generar credibilidad y conectar emocionalmente con la audiencia.
              
              p(numero="D" titulo="Diseño visual (<em>pitch deck</em>)") Si se utiliza una presentación visual, esta debe ser limpia, profesional y fácil de leer, con imágenes de apoyo en lugar de párrafos largos.

              p(numero="E" titulo="Enfoque en el público") Adaptar el mensaje al interlocutor. Un <em>pitch</em> para inversores será diferente a uno para usuarios.
              
              p(numero="F" titulo="Práctica y ensayo") Un buen <em>pitch</em> se basa en la práctica. Se debe ensayar el discurso varias veces para dominar el tiempo y los puntos clave.
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Comunicación del valor a actores del sistema de salud
    
    .bloque-texto-g.color-secundario.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/34.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el ámbito de la salud pública, comunicar el valor de una innovación implica demostrar cómo contribuye de manera medible a mejorar la salud de la población y la eficiencia del sistema. Porter (2010) define el valor en salud como la relación entre los resultados obtenidos para los pacientes y los costos asociados para alcanzarlos, destacando que el objetivo fundamental de cualquier intervención sanitaria debe ser maximizar dicha relación. Bajo este enfoque, una innovación no debe presentarse solo por su novedad tecnológica, sino por su impacto real en los resultados de salud y en la sostenibilidad del sistema.
    
    p.mb-5 La comunicación del valor, por tanto, debe enfocarse en mostrar cómo la propuesta contribuye a reducir complicaciones, mejorar experiencias en el cuidado, aumentar la accesibilidad o disminuir costos, elementos que permiten justificar su adopción dentro del sistema sanitario. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/35.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-center.mb-3
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/36.svg").mx-auto
          .col-lg
            p.mb-0 Esto implica adaptar el mensaje a las expectativas y responsabilidades de cada actor clave: gestores, proveedores, aseguradores, profesionales clínicos, pacientes y comunidades.
        p En esta línea, el modelo de <em>Value-Based Health Care Delivery</em> propuesto por Porter, Kaplan y Ramanujam (2016) subraya que la transformación del sistema solo es posible cuando todos los actores comprenden y comparten una visión común centrada en resultados y valor.
        p.mb-0 Comunicar el valor en salud requiere, por tanto:
    
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.bg-color-4
            .p-4
              p.mb-0 Evidenciar beneficios con datos relacionados con resultados en salud y eficiencia del sistema.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.bg-color-4
            .p-4
              p.mb-0 Adaptar los mensajes al lenguaje y prioridades de cada actor. 
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.bg-color-4
            .p-4
              p.mb-0 Mostrar impacto a nivel poblacional, especialmente en grupos vulnerables, para reforzar la pertinencia en salud pública.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.bg-color-4
            .p-4
              p.mb-0 Humanizar la narrativa, resaltando que la innovación mejora la vida de las personas, no solo indicadores técnicos.
    
    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 De este modo, un <em>Pitch</em> de innovación en salud debe centrarse menos en la sofisticación de la solución y más en cómo y por qué genera valor social y sanitario, sustento clave para impulsar su adopción y escalamiento dentro del sistema de salud colombiano.
      

 
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
