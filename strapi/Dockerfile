FROM node:20

WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose Strapi's default port
EXPOSE 1337

# Start the Strapi app
CMD ["npm", "run", "start"]
