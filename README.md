# Калькулятор факториала и чисел Фибоначчи

Простое API для вычисления факториала и последовательности Фибоначчи.

## Установка:

**1. Склонируйте репозиторий:**
   git clone https://github.com/ваш-репозиторий.git
   cd ваш-проект
**2. Запустить сервер:**
    node server
    порт сервера 3000
**3. Сделать запрос:**
    curl.exe -X POST http://localhost:3000/calculate `
    -H "Content-Type: application/json" `
    -d '{\"n\":5, \"calc_type\":\"calc_factorial\"}'
	
	**Вывод: {"result":[1,2,6,24,120]}**
## Тестирование:

**1. Перейти в котолог server:**
    cd server
**2. Запуск тестов:**
    node test