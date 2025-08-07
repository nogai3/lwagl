# LWAGL

**LWAGL (Lightweight Arizona Games Launcher)** — легковесный лаунчер для серверов проекта Arizona RP, написанный на Electron (HTML, CSS, JS).

## Возможности

- Современный интерфейс выбора сервера с поиском и отображением онлайна.
- Быстрый запуск игры с выбранными параметрами.
- Гибкие настройки клиента (ник, память, режим окна, графика и др.).
- Интеграция с внешними API для получения информации о серверах, администраторах, семьях и игроках.
- Кроссплатформенность (Windows, macOS, Linux).

## Установка

1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/nogai3/lwagl.git
   cd lwagl
   ```

2. Установите зависимости:
   ```sh
   npm install
   ```

## Запуск

Для запуска лаунчера в режиме разработки:
```sh
npm start
```

## Сборка

Для сборки приложения используйте [electron-builder](https://www.electron.build/):

1. Убедитесь, что electron-builder установлен (уже прописан в package.json).
2. Добавьте скрипт сборки в `package.json` (если его нет):
   ```json
   "scripts": {
     "build": "electron-builder"
   }
   ```
3. Выполните:
   ```sh
   npm run build
   ```
Собранные файлы появятся в папке `dist/`.

## Структура проекта

- [`main.js`](main.js) — основной процесс Electron, управление окнами и IPC.
- [`launcher/index.html`](launcher/index.html) — основной интерфейс лаунчера.
- [`launcher/scripts/mainpage.js`](launcher/scripts/mainpage.js) — логика интерфейса и работы с серверами.
- [`launcher/scripts/settings.js`](launcher/scripts/settings.js) — загрузка и сохранение пользовательских настроек.
- [`launcher/scripts/back/start_game.js`](launcher/scripts/back/start_game.js) — запуск игры с нужными параметрами.
- [`launcher/scripts/config.json`](launcher/scripts/config.json) — файл пользовательских настроек.
- [`launcher/assets/`](launcher/assets/) — иконки и изображения серверов.

## Разработка

- Для отладки интерфейса используйте DevTools (открываются автоматически).
- Для запуска отдельной страницы используйте конфигурацию в [`.vscode/launch.json`](.vscode/launch.json).

## Лицензия

Проект распространяется под лицензией Apache 2.0. Подробнее см. [LICENSE](LICENSE).

---

**Авторы:**  
Gleb Ustimenko (glackus, nogai3) | LighSync Games