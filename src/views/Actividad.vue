<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Hacen parte de las herramientas para formular la propuesta de valor, excepto:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Value Proposition <em>Canvas</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Lean Canvas</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Pitch</em> de proyectos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rol de las TIC',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones.',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 2,
          texto:
            'Diseñar una solución que permita al usuario realizar sus tareas de manera más eficiente, reduciendo molestias y frustraciones, y que además le aporte beneficios, mejoras o ganancias significativas. Esta acción forma parte de la herramienta:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Value Proposition <em>Canvas</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Gains</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Pains</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'A y b son correctas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones.',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 3,
          texto:
            'Los beneficios deseados son aquellos beneficios adicionales que el usuario idealmente espera obtener, aunque no siempre los exprese de manera explícita. Estos forman parte de la herramienta:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Gains</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Pains</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Canvas</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Value Proposition',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 4,
          texto:
            'Fase que permite esbozar rápidamente el modelo y poner a prueba las hipótesis clave con los usuarios:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clarificar la estrategia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollar y validar ideas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Identificar riesgos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comunicar el modelo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 5,
          texto:
            'Dentro de la estructura del <em>pitch</em>, el elemento que transmite seguridad y entusiasmo por el proyecto, generando credibilidad y logrando conectar emocionalmente con la audiencia, se denomina:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasión y confianza',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solución',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Problema',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Respaldo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 6,
          texto:
            'Hace referencia a la mejora en el manejo de la información, donde un mayor volumen de datos favorece la toma de decisiones más acertadas. Incluye la optimización en la recopilación de información para su posterior tratamiento y análisis, así como el fortalecimiento de la comunicación entre las personas:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Pains</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Canvas</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Data</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'TIC',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 7,
          texto:
            'Sistema diseñado para la vigilancia y control de sustancias psicoactivas:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SIVIM',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'VESPA',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'CAD',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'SIVIGILA',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 8,
          texto:
            'Conjunto de acciones orientadas a recopilar, analizar e interpretar datos sobre daños a la salud, tanto intencionales como no intencionales —incluidos accidentes, agresiones y envenenamientos— con el objetivo de implementar medidas efectivas de prevención y control:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'TIC',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'LCE',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'SIVIM',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'VESPA',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 9,
          texto:
            'Es una solución de inteligencia empresarial desarrollada por Microsoft que permite a las organizaciones conectarse a múltiples fuentes de datos, generar visualizaciones interactivas y paneles dinámicos, y tomar decisiones estratégicas basadas en información confiable:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'TABLEAU',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Power BI',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'QLIK',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'LOOKER',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 10,
          texto:
            'La propuesta de valor (PV) es el compromiso que una organización o proyecto asume para ofrecer beneficios concretos y diferenciados a sus usuarios o clientes.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 11,
          texto:
            'El lienzo del Value Proposition <em>Canvas</em> se compone de dos bloques principales: el bloque del usuario y el bloque del producto. Al desarrollar ambos, es posible evaluar si nuestra propuesta de valor tiene potencial de éxito o si, por el contrario, requiere ser replanteada.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 12,
          texto:
            'El análisis de <em>Pains</em> permite identificar qué factores motivarían al usuario a preferir una solución frente a otra, así como los elementos que pueden incrementar su satisfacción o generar un impacto significativo en su vida personal o profesional.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 13,
          texto:
            'Los <em>Pains</em> se refieren a las situaciones no deseadas que experimentan los usuarios al intentar realizar las actividades descritas en el ‘<em>Customer Jobs</em>’. Representan los dolores, molestias o frustraciones que afectan su experiencia.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 14,
          texto:
            'Este paso consiste en definir detalladamente cada aspecto del producto o servicio, asegurando que todos estén orientados a resolver las molestias del usuario. Forma parte del bloque <em>Products & Services</em> (Productos y servicios).',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 15,
          texto:
            'El <em>Lean Canvas</em> se estructura en cinco bloques principales, enfocados en la identificación de problemas y en la comprensión del usuario.',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 16,
          texto:
            'Un <em>pitch</em> de proyectos es una presentación breve y persuasiva diseñada para comunicar y vender una idea, producto o negocio. Su estructura esencial incluye: una introducción, la identificación del problema, la solución propuesta, la propuesta de valor, el modelo de negocio y un llamado a la acción.',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 17,
          texto:
            'La comunicación del valor debe centrarse en demostrar cómo la propuesta contribuye a reducir complicaciones, optimizar la experiencia en el cuidado, mejorar la accesibilidad y disminuir costos.',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 18,
          texto:
            'Las TIC se aplican al análisis y visualización de datos en salud pública mediante herramientas como la ciencia de datos, los sistemas de información geográfica (SIG), la telemedicina y el desarrollo de plataformas que integran y presentan información proveniente de diversas fuentes.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 19,
          texto:
            'SIVIGILA es el Sistema Nacional de Vigilancia en Salud Pública, una plataforma que recopila y analiza datos sobre eventos de salud para orientar la toma de decisiones en el ámbito de la salud pública.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 20,
          texto:
            'SISVECOS hace referencia al conjunto de procesos dinámicos e integrales, interrelacionados para la recopilación, análisis, interpretación, divulgación y evaluación oportuna de información relacionada con la conducta suicida.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
