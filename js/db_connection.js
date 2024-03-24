const sqlite3 = require('sqlite3').verbose();

// Підключення до бази даних
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error('Помилка підключення до бази даних:', err.message);
    } else {
        console.log('Підключено до бази даних SQLite');
    }
});

module.exports = db;
