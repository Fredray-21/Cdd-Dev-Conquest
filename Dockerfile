# Utilisez une image de base légère contenant Python
FROM python:3.9-slim

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez votre fichier index.html dans le conteneur
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 8080

# Démarrez un serveur HTTP Python pour servir le fichier index.html
CMD ["python", "-m", "http.server", "8080"]
