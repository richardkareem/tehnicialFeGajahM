FROM node:20.16.0

# Set working directory di dalam container
WORKDIR /nodejs/app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx","next","dev"]