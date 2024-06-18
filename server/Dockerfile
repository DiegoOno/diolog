FROM --platform=linux/amd64 app/base:latest as base
FROM node:20.3.0-alpine3.17

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy .env file
COPY .env ./

# Copy the rest of the application code
COPY . .

# Make the entrypoint script executable
RUN chmod +x /usr/src/app/entrypoint.sh

# Expose port
EXPOSE 8000

# Define the entrypoint script to run
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]