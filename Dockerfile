# # FROM node:17-alpine as builder
# # WORKDIR /app
# # COPY package*.json .
# # RUN npm install
# # COPY . .
# # EXPOSE 3000
# # CMD ["npm","start"]


# # Multi-stage
# # 1) Node image for building frontend assets
# # 2) nginx stage to serve frontend assets

# # Name the node stage "builder"
# FROM node:10 AS builder
# # Set working directory
# WORKDIR /app
# # Copy all files from current directory to working dir in image
# # COPY . .
# # Copy package.json and package-lock.json
# COPY package*.json ./
# # install node modules and build assets
# RUN npm install && npm build

# # nginx state for serving content
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# # RUN rm -rf ./*
# # Copy the custom Nginx configuration
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# # Copy static assets from builder stage
# COPY --from=builder /app/build .
# # Copy the build output from the previous stage
# # COPY --from=build /app/build /usr/share/nginx/html
# #Expose port 
# EXPOSE 3000
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# Use an official Node.js runtime as the base image
FROM node:alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Use a lightweight Nginx image for serving the app
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

