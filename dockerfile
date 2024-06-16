# Используем официальный образ Node.js в качестве базового образа
FROM node:lts

# Создаем рабочую директорию
WORKDIR /QUICKVAC_FRONT

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта в рабочую директорию
COPY . .

# Открываем порт 4200 для доступа к приложению
EXPOSE 4200

# Запускаем проект
CMD ["ng", "serve"]