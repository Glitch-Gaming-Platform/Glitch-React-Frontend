# Base image with Node.js 18
FROM node:18 AS build

RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
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
    xdg-utils \
    lsb-release \
    libappindicator1 \
    libindicator7

# Add Google Chrome repository
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update && apt-get install -y google-chrome-stable

# Set the working directory
WORKDIR /app

# Copy the source code
COPY . ./

# Install dependencies including Puppeteer
RUN npm install
RUN npm install puppeteer

# Build the React application
RUN npm run build

# Stage 2: Set up Nginx
FROM fholzer/nginx-brotli:v1.12.2
WORKDIR /etc/nginx

# Copy the Nginx configuration file and build output
COPY ./.docker/production/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html

# Expose ports
EXPOSE 80 8080

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
