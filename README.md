# Health Indicator

![CI](https://github.com/grigrach/clearfunction/actions/workflows/ci.yml/badge.svg?branch=main)

Учебный проект на JavaScript с использованием **чистых функций**, Jest и GitHub Actions.  
Функция определяет состояние здоровья персонажа по числовому полю `health`:

- `healthy` — здоровье > 50
- `wounded` — здоровье от 50 до 15 (включительно)
- `critical` — здоровье < 15

## 🚀 Установка и запуск

Склонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/grigrach/clearfunction.git
cd <REPO>
npm ci
```

Запустите тесты:

```bash
npm test
```

## 🧪 Тестирование

В проекте используется **Jest**.  
Тесты покрывают все граничные значения и обеспечивают **100% покрытие кода**.  
Результат можно посмотреть прямо в терминале после запуска тестов.  

HTML-отчёт о покрытии формируется в папке `coverage/lcov-report`.

## ⚙️ CI/CD (GitHub Actions)

Каждый `push` и `pull request` запускают GitHub Actions:

1. Сборка проекта
2. Установка зависимостей
3. Прогон тестов с проверкой покрытия
4. Выгрузка HTML-отчёта о покрытии как артефакта
5. Вывод сводки покрытия в Job Summary

Бейдж статуса сверху показывает текущее состояние сборки ветки `main`.

## 📂 Структура проекта

```
health-indicator/
├─ src/
│  └─ health.js           # основная функция
├─ __tests__/
│  └─ health.test.js      # тесты Jest
├─ .github/
│  └─ workflows/
│     └─ ci.yml           # GitHub Actions workflow
├─ package.json
└─ README.md
```

---


