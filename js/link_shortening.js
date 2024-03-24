const { nanoid } = require('nanoid');
const db = require('./db_connection');
const dbQueries = require('./db_queries');

// Функція для скорочення посилання
function shortenLink(originalLink) {
    const shortLink = generateShortLink();
    dbQueries.addLink(originalLink, shortLink);
    return shortLink;
}

// Генерація скороченого посилання
function generateShortLink() {
    return nanoid(8); // Генеруємо випадковий ідентифікатор довжиною 8 символів
}

module.exports = {
    shortenLink
};
