FROM nodered/node-red:latest

# Copia archivos al directorio esperado
COPY package.json /data/package.json
COPY flows.json /data/flows.json
COPY settings.js /data/settings.js

EXPOSE 1880

CMD ["node-red", "--userDir", "/data", "--settings", "/data/settings.js"]
