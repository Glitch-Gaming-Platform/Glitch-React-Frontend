# Base image with Node.js 20
FROM node:20 AS build

# Set environment variables
ARG REACT_APP_API_URL
ARG REACT_APP_GA_TRACKING_ID
ARG REACT_APP_OAUTH_FACEBOOK_URL
ARG REACT_APP_OAUTH_GOOGLE_URL
ARG REACT_APP_OAUTH_MICROSOFT_TEAMS_URL
ARG REACT_APP_OAUTH_MICROSOFT_URL
ARG REACT_APP_OAUTH_STRIPE_URL
ARG REACT_APP_OAUTH_TWITCH_URL
ARG REACT_APP_OAUTH_TIKTOK_URL
ARG REACT_APP_OAUTH_URL
ARG REACT_APP_OAUTH_YOUTUBE_URL
ARG REACT_APP_SITE_DOMAIN
ARG REACT_APP_SITE_TAG_DESCRIPTION
ARG REACT_APP_TEMPLATE_DIRECTORY
ARG REACT_APP_SITE_TITLE
ARG REACT_APP_SITE_TAG_LINE
ARG REACT_APP_COPYRIGHT
ARG REACT_APP_STRIPE_PUBLIC_KEY
ARG REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_FLAT
ARG REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN1
ARG REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN2
ARG REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN3

ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_GA_TRACKING_ID=$REACT_APP_GA_TRACKING_ID
ENV REACT_APP_OAUTH_FACEBOOK_URL=$REACT_APP_OAUTH_FACEBOOK_URL
ENV REACT_APP_OAUTH_GOOGLE_URL=$REACT_APP_OAUTH_GOOGLE_URL
ENV REACT_APP_OAUTH_MICROSOFT_TEAMS_URL=$REACT_APP_OAUTH_MICROSOFT_TEAMS_URL
ENV REACT_APP_OAUTH_MICROSOFT_URL=$REACT_APP_OAUTH_MICROSOFT_URL
ENV REACT_APP_OAUTH_STRIPE_URL=$REACT_APP_OAUTH_STRIPE_URL
ENV REACT_APP_OAUTH_TWITCH_URL=$REACT_APP_OAUTH_TWITCH_URL
ENV REACT_APP_OAUTH_TIKTOK_URL=$REACT_APP_OAUTH_TIKTOK_URL
ENV REACT_APP_OAUTH_URL=$REACT_APP_OAUTH_URL
ENV REACT_APP_OAUTH_YOUTUBE_URL=$REACT_APP_OAUTH_YOUTUBE_URL
ENV REACT_APP_SITE_DOMAIN=$REACT_APP_SITE_DOMAIN
ENV REACT_APP_SITE_TAG_DESCRIPTION=$REACT_APP_SITE_TAG_DESCRIPTION
ENV REACT_APP_TEMPLATE_DIRECTORY=$REACT_APP_TEMPLATE_DIRECTORY
ENV REACT_APP_SITE_TITLE=$REACT_APP_SITE_TITLE
ENV REACT_APP_SITE_TAG_LINE=$REACT_APP_SITE_TAG_LINE
ENV REACT_APP_COPYRIGHT=$REACT_APP_COPYRIGHT
ENV REACT_APP_STRIPE_PUBLIC_KEY=$REACT_APP_STRIPE_PUBLIC_KEY
ENV REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_FLAT=$REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_FLAT
ENV REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN1=$REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN1
ENV REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN2=$REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN2
ENV REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN3=$REACT_APP_STRIPE_SUBSCRIPTION_INFLUENCER_PLAN3

RUN apt-get update && apt-get install -y \
    libx11-xcb1 \
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
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the source code
COPY . ./

# Install dependencies
RUN npm install

RUN npm install puppeteer

# Build the React application
RUN npm run build

# Stage 2: Set up Nginx
FROM fholzer/nginx-brotli:v1.23.4

WORKDIR /etc/nginx
# Copy the Nginx configuration file
COPY ./.docker/production/nginx.conf /etc/nginx/nginx.conf

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80 8080

# Start Nginx when the container starts
# CMD ["nginx", "-g", "daemon off;"]
