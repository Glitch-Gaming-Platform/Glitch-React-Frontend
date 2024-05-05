# Base image with Node.js 18
FROM node:18 AS build

RUN apt-get update && apt-get install -y \
    libx11-xcb1

RUN apt-get update && apt-get install -y \
    gconf-service \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
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
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libnss3 \
    lsb-release \
    xdg-utils \
    wget

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get update && apt-get install -y google-chrome-stable



# Set the working directory
WORKDIR /app

# Copy the source code
COPY . ./

# Install dependencies
RUN npm install

## Why s this neededed?
#RUN npm install puppeteer

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