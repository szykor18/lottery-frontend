FROM node:20.11.0-alpine as build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

FROM nginx:1.25.3-alpine
COPY --from=build /app/dist/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]