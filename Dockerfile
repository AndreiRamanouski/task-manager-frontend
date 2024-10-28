#Simpliest version. build folder has to be created first.
#npm run build

#WORKS IN TUTORIALS. DOES NOT WORK IN MY CASE.

#FROM node:latest
#WORKDIR /app
#COPY package.json ./
#RUN npm install
#COPY . .
#EXPOSE 80
#CMD ["npm", "start"]


#Advanced version. For production. Splits the project on layers
#you do not need to do anything. just docker build .
#downloads a lot of dependencies and takes almost 20 minutes to create an image, though.

FROM node:18 as frontend-build
WORKDIR /task-manager-frontend

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx
COPY --from=frontend-build /task-manager-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

