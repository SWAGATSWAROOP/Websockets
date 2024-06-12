FROM node:22-alpine3.19
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
ENV PORT=3000
ENTRYPOINT [ "npm" ]
CMD [ "start" ]

