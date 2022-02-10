FROM node as frontend-build
WORKDIR /task-manager-frontend

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx
COPY --from=frontend-build /task-manager-frontend/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]