para instalar basicamente instalar pm2 con 
  npm install -g pm2

ejecutar el servicio con
  pm2 start index.js --name "accessServer"

instalar pm2-windows-startup
  npm install pm2-windows-startup -g

ejecutar pm2-startup
  pm2-startup install

guardar el proceso
  pm2 save