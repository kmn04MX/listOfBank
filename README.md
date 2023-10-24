# List of banks
El proyecto List of banks fue creado con la libreria react haciendo uso de la siguiente [URL](https://dev.obtenmas.com/catom/api/challenge/banks) donde se consideraron los siguientes puntos.
+ Arquitectura de la aplicación
+ Manejo de la respuesta de la API (GET)
+ Persistencia de los datos


### Instalación del proyecto
1. Instalar nvm `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
   - Configurar el comando nvm `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`
2. Checar la versión más reciente de node LTS `nvm ls-remote --lts `
3. Instalar la versión `nvm install vXX.XX.X`
2. Clonar el repositorio `git clone https://github.com/kmn04MX/listOfBank.git`
2. Ingresar a la carpeta `cd listOfBank`
3. Ejecutar el comando `npm install`
4. Ejecutar el comando `npm start`

Nota: Se instalo la versión más reciente de node LTS ya que estás versiones se mantienen durante un período más largo, generalmente al rededor de 30 meses. Aunque con el comando `nvm ls-remote` se pudo haber instalado la versión 20.8.1 que aparece en la página oficial de [node](https://nodejs.org/es). Este proyecto fue desarrollado en Ubuntu.

