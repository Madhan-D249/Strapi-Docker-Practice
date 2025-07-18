# Stage 1: Build
FROM node:20 as build

WORKDIR /app

# Copy package files and install only dependencies needed for building
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Stage 2: Production
FROM node:20-slim as production

WORKDIR /app

# Only copy what's needed for production
COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts

# Copy build output and code from the builder stage
COPY --from=build /app ./

# Expose Strapi default port
EXPOSE 1337

# Run Strapi in production mode
CMD ["npm", "run", "develop"]
