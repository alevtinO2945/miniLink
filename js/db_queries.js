const db = require('./db_connection');

// Додавання нового посилання до бази даних
function addLink(originalLink, shortLink) {
    db.run('INSERT INTO links (original_link, short_link) VALUES (?, ?)', [originalLink, shortLink], (err) => {
        if (err) {
            console.error('Помилка додавання посилання:', err.message);
        } else {
            console.log('Посилання додано успішно');
        }
    });
}

// Інші запити до бази даних можуть бути додані сюди за необхідності

module.exports = {
    addLink,
    // Додавайте інші функції запитів сюди
};
