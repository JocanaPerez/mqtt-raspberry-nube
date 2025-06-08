FROM nodered/node-red:latest

# Copia tus archivos de flujo y dependencias
COPY package.json /data/package.json
COPY flows.json /data/flows.json
COPY settings.js /data/settings.js

# Expón el puerto por defecto de Node-RED
EXPOSE 1880

# Usa el directorio de datos por defecto
WORKDIR /data

CMD ["npm", "start", "--", "--userDir", "/data"]
