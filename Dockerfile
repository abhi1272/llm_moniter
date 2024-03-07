# Use the official Node.js image as the base image
FROM node:alpine 

# Set the working directory inside the container
WORKDIR /app

# RUN rm -rf /app/node_modules
# RUN rm -rf /app/prisma

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# RUN npx prisma generate
# Copy the rest of the application code to the container
COPY . .

# Expose the port that your Next.js application will run on
EXPOSE 3000

# Build the Next.js application
# RUN npm run build

# Specify the command to run your application
CMD ["npm", "run", "dev"]
