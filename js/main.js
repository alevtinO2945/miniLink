import { addLink } from './db_queries.js';
import { shortenLink } from './link_shortening.js';

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const originalUrlInput = document.getElementById('original-url');
    const shortLinkWrapper = document.getElementById('shortened-link');
    generateBtn.addEventListener('click', () => {
        const originalLink = originalUrlInput.value.trim();

        if (originalLink) {
            const shortLink = shortenLink(originalLink);
            

            shortLinkWrapper.innerText = shortLink;
            addLink(originalLink, shortLink);
        } else {
            console.error('Введіть оригінальне посилання');
        }
    });
});
