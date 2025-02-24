# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built app
RUN npm install -g serve

# Expose the port that the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]