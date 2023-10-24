# List of banks
El proyecto List of banks fue creado con la libreria react haciendo uso de la siguiente [URL](https://dev.obtenmas.com/catom/api/challenge/banks) donde se consideraron los siguientes puntos.
+ Arquitectura de la aplicación
+ Manejo de la respuesta de la API (GET)
+ Persistencia de los datos

## Comenzando
Estas instrucciones te ayudarán a obtener una copia del proyecto en tu máquina local para propósitos de desarrollo y pruebas. Consulta la sección de "Despliegue" para saber cómo desplegar el proyecto en un entorno de producción, si no se puede desplegar el proyecto omite esta parte ya que el objetivo es ejecutar el proyecto en tu local.

### Prerequisitos
Asegúrate de tener instalado lo siguiente en tu sistema:
- nvm para window y linux o fnm para Mac 
- Node.js (18.18.2 LTS)
- npm (viene incluido con node.js)
- Un navegador web moderno

Nota: Se instalo la versión más reciente de node LTS ya que estás versiones se mantienen durante un período más largo, generalmente al rededor de 30 meses. Aunque con el comando `nvm o fnm` se pudo haber instalado la versión 20.8.1 que aparece en la página oficial de [node](https://nodejs.org/es). Este proyecto fue desarrollado en Ubuntu.

### Instalación 
Sigue estos pasos para obtener una copia del proyecto en tu máquina 

1. Clonar el repositorio `git clone https://github.com/kmn04MX/listOfBank.git`
2. Navega hasta el directorio del proyecto `cd listOfBank`
3. Instala las dependencias `npm install`


### Desarrollo
Para iniciar un servidor de desarrollo y ver el proyecto en tu navegador , ejecuta:

`npm start`

Esto iniciará la aplicación en modo de desarrollo. Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000) para ver el proyecto en acción. La página se recargará automáticamente si haces cambios en el código fuente.

### Despliegue 
Para desplegar el proyecto en un entorno de producción, ejecuta:

`npm run build`

Esto generará una versión optimizada del proyecto en la carpeta `build`. Puedes cargar estos archivos en tu servidor web o plataforma de hosting preferida.
`
`
### Construido 
- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.

