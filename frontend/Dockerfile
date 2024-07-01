# Используем образ Node.js в качестве базового
FROM node:14-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY package*.json ./
COPY . .

# Устанавливаем зависимости
RUN npm install

# Собираем production-версию приложения
RUN npm run build

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
