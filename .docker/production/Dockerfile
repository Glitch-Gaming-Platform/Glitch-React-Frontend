# Base image with Node.js 18
FROM node:18 AS build

# Install necessary libraries for Puppeteer
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libasound2 \
    libatk1.0-0 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    lsb-release \
    xdg-utils

# Set the working directory
WORKDIR /app

# Copy the source code
COPY . ./

# Install Node.js dependencies including puppeteer
RUN npm install

# Build the React application
RUN npm run build

# Stage 2: Setup Nginx for serving the React app
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx

# Copy the Nginx configuration file
COPY ./.docker/production/nginx.conf /etc/nginx/nginx.conf

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 and 8080
EXPOSE 80 8080

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
