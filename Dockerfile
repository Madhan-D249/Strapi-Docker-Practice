FROM node:20

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Strapi default port
EXPOSE 1337

# Start the Strapi app
CMD ["npm", "start"]
