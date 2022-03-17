# js-portfolio

***evitar typeouts***

comandos para instalar los plugins necesarios para construir un proyecto

instalar webpack `npm install webpack webpack-cli`

crear archivo webpack.config.js, apartir de alli configuramos nuestras dependencias y extensiones que vamos a usar
-una vez configurado el archivo, ejecutamos el comando ` npx webpack --config webpack.config.js`

ahora instalamos babel para hacer que nuestro proyecto sea compatible con las particularidades de javascript ecmascript6+

npm install babel-loader @babel/core @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

**plugin de webpack para html**

npm install html-webpack-plugin -D
-despues se añade el recurso en el archivo webpack.config

**css y preprocesadores**

`npm install mini-css-extract-plugin css-loader -D`
-despues se añade el recurso a el archivo webpack.config
`npm i css-minimizer-webpack-plugin terser-webpack-plugin -D`

**copiar o mover archivos con webpack**
`npm i copy-webpack-plugin -D`

**ahora vamos a configurar las variables de entorno**
instalamos como dependencia de desarrollo 
`npm install -D dotenv-webpack`

-despues creamos el archivo .env, en el cual estarán anidadas nuestras variables de desarrollo

**limpiar la carpeta dist y hacerlo mas ordenado**

-primero instalamos el paquete 
`npm install -D clean-webpack-plugin`