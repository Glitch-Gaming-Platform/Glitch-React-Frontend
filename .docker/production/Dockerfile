# Base image with Node.js 18
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the source code
COPY . ./

# Install dependencies
RUN npm install

# Build the React application
RUN npm run build

# Stage 2: Set up Nginx
#FROM nginx:latest
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
# Copy the Nginx configuration file
COPY ./.docker/production/nginx.conf /etc/nginx/nginx.conf

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80 8080

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]