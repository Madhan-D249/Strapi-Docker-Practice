FROM node:20

WORKDIR /app

# Copy package files and install dependencies
COPY strapi/package*.json ./
RUN npm install

# Copy the rest of the app
COPY strapi/. .

EXPOSE 1337
CMD ["npm", "run", "develop"]
