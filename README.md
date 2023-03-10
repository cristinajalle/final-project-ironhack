<!-- Estructura -->
<!--
*** Estoy usando enlaces de estilo "referencia" de markdown para la legibilidad.
*** Los enlaces de referencia están encerrados en corchetes [ ] en lugar de paréntesis ( ).
*** Vea la parte inferior de este documento para la declaración de las variables de referencia
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- Por favor no borrar este elemeno, ayuda al elemento "back to top" -->

<!-- <a name="readme-top"></a> -->

<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <img src="./resources/images/readMe/wu.png" alt="Logo" width="80" height="80">
  <h3 align="center">Circle Landing Agency Website</h3>
  <a href="https://midterm-project.vercel.app/">Visit Website</a>
</div> -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido Con</a></li>
      </ul>
    </li>
    <li>
    <a href="#roadmap">Roadmap</a>
     <ul>
     <li><a href="#backlog">Back log</a></li>
        <li><a href="#day-one">Lunes 23, Enero 2023</a></li>
        <li><a href="#day-two">Martes 24, Enero 2023</a></li>
        <li><a href="#day-three">Miercoles 25, Enero 2023</a></li>
        <li><a href="#day-four">Jueves 26, Enero 2023</a></li>
        <li><a href="#day-five">Viernes 27, Enero 2023</a></li>
      </ul>
    </li>
    <li><a href="#acerca">Acerca</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#desafío-técnico">Desafío Técnico</a></li>
    <li><a href="#grande-error">Grande Error</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Acerca del Proyecto

<!-- <img src="./resources/images/readMe/screenshot.png" alt="Logo" width="100%" height="50%"> -->

- Una descripción breve del proyecto y su propósito

- Tecnologías utilizadas: HTML, CSS, GIT, Javascript, Vue.js, Supabase, Vercel.
- Funcionalidades principales:

  - Creación de cuenta: los usuarios podrán registrarse en la aplicación mediante un proceso de Sign Up, iniciar sesión con Log In y cerrar sesión con Log Out.
  - Gestión de tareas: los usuarios podrán crear, editar, marcar como completadas o desmarcar, y eliminar tareas.
  - Estilo único: se creará un solo archivo de estilo (assets/style.css) y se insertará correctamente en main.js para tener acceso a las clases y los ids de los componentes.
  - Responsive design: la página será responsive y tendrá al menos dos versiones: mobile y desktop.
  - Despliegue: la aplicación será desplegada en Vercel.
  
- Instrucciones de instalación y configuración:

  - Almacenamiento de datos: la aplicación estará conectada a Supabase y se guardará toda la información de las tareas y usuarios en esa plataforma.
  - Gestión del estado: se usarán las stores de Pinia para conectarse con el backend y controlar el estado de la aplicación.
  - Navegación: se utilizará Vue Router para navegar por la página sin tener que hacer un refresh.
  - Despliegue: la aplicación será desplegada en Vercel.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Construido Con

- Lenguajes de programación utilizados: JavaScript
- Frameworks y bibliotecas utilizadas: Vue.js 3
- Herramientas de desarrollo (IDE, control de versiones, etc): GIT, GITHUB, Visual Studio Code
- Servicios en la nube utilizados (si corresponde).


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

#### Backlog

<!-- - [ ] Ej - Tarea a completar y mover a su respectivo dia de ejecucion -->

<!-- MODELO:
- [ ] Tarea no completada
- [x] Tarea Completada
- [ ] Ej - Crear section "projects" en html
- [x] Ej - Crear section "projects" en html -->

#### Day One

###### Martes 7, Febrero 2023

- [x] Set up del GitHub e instalación del vue project
- [x] Planificación de la primera semana del  proyecto.
- [x] Conectar la aplicacion a Supabase para guardar toda la información de las tareas y usuarios en esa plataforma.
- [x] Empezar a trabajar en la Creación de cuenta: Registro en la aplicación mediante un proceso de SignUp,LogIn, LogOut
    - [x] Crear formulario en SignIn.vue component


#### Day Two

###### Miercoles 8, Febrero 2023
- [x] Registro en la aplicación mediante un proceso de SignUp,LogIn, LogOut:
    - [x] Verificar si formulario SignIn de ayer funciona.
    - [x] Hacer el  LogOut.
- [x] Hacer tabla tasks en Supabase.
- [x] Cambiar html de tasks
    
- [x] Leer documentación de Vue Router, Pinia y Composition API: Lifecycle Hooks

#### Day Three

###### Jueves 9, Febrero 2023
- [x] Empezar a hacer Logica de tasks:
  - [x] Crear task
  - [x] Borrar task
  - [x] Editar
- [x] Empezar a estilar el LogIn
- [x] Deploy en Vercel

#### Day Four

###### Viernes 10 , Febrero 2023
- [x] Logica de tasks:
  - [x] Arreglar editar tarea: al darle al boton de editar no se sustitutyen los cambios en title y description
- [x] Continuar estilos del LogIn


#### Day Five

###### Sábado 11, Febrero 2023
- [x] Logica de tasks:
  - [x] Completar

#### Day Six

###### Lunes 13, Febrero 2023
- [x] Empezar lógica de profile
- [x] Empezar con estilos de tasks


#### Day Seven

###### Martes 14, Febrero 2023
- [x] Empezar estilos de NavBar
- [x] Seguir con estilos de tasks

#### Day Eight

###### Miercoles 15, Febrero 2023
- [x] Crear componente Modal al borrar la tarea

#### Day Nine

###### Sabado 18, Febrero 2023
- [x] Continuar estilos de tasks
- [x] Continuar estilos de Navbar

#### Day Ten

###### Lunes 20, Febrero 2023
- [x] Continuar estilos de tasks
- [x] Continuar estilos de Navbar
- [x] Seguir con lógica del modal al borrar la tarea

#### Day Eleven

###### Martes 21, Febrero 2023
- [x] acabar create new task
- [x] Acabar estilos de Navbar
- [x] Continuar estilos de tasks- container de nuevo task (taskitem)
- [x] Crear Footer y estilar
- [x] arreglar edicion de la tarea, al completar la edicion que desaparezcan los inputs
- [x] Acabar lógica del modal al borrar la tarea

#### Day Twelve

###### Miercoles 22, Febrero 2023
- [x] Empezar y acabar estilos del modal
- [x] Hacer responsive

#### Day Thirteen

###### Jueves 23, Febrero 2023
- [x] Hacer responsive
- [x] Hacer presentacion


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Acerca de mi -->

## Acerca

- Nombre y datos de contacto de la desarrolladora: Cristina Jalle
- Información sobre experiencia laboral o académica relacionada con el proyecto: Product Designer, UX Design.

<!-- En resumen, la sección "sobre mí" es una excelente manera de brindar a los usuarios y contribuidores una idea de quién está detrás del proyecto y cómo pueden ponerse en contacto con ellos si tienen preguntas o comentarios. Es una buena manera de establecer una conexión con la comunidad de desarrolladores y una forma de mostrar la transparencia en el proyecto. -->

Cristina Jalle - jallecristina@gmail.com

Project Link: https://final-project-ironhack-cristinajalle.vercel.app/

Presentation Link:(https://www.canva.com/design/DAFbS32MQPY/9ijzI6P_Wg53d45sgWTvrQ/view?utm_content=DAFbS32MQPY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## agradecimientos

Se proporciona reconocimiento a las personas o instituciones que ayudaron en el desarrollo del proyecto.

- Agradecimientos a los profesores Aleix, Diego y Jarko por su infinita paciencia y su buen humor, así como a todos los compañeros del bootcamp.
- Agradecimientos a instituciones o organizaciones que proporcionaron recursos: StackOverflow, YoutuBe, W3 school, MDN.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Desafío Técnico

- Problemas que se encontraron durante el desarrollo del proyecto:
- Desconocimiento del framework Vue y su curva de aprendizaje.
- Aspectos del proyecto que aún son un desafío o que requieren mejora continua: El estilo de la app, se seguirá mejorando. Realización de la página d eprofile y un cronómetro.


## Grande Error


- Descripción detallada del error cometido: No desglosar mejor en pequeñas tareas la realización de la lógica de crear, editar, completar y eliminar una tarea en la app.
- Consecuencias del error: Ralentización, desorganización, mal entendimiento del framework.
- Lecciones aprendidas y recomendaciones para evitar errores similares en el futuro: Focalizarme en leer y entender el código; y después escribir código.

