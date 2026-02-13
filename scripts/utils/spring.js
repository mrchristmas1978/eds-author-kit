function createSpringElement() {
    const element = document.createElement('div');
    element.className = 'spring-element';
    const emojis = ['🌸', '🐰', '🥚', '🐣', '🌷', '🦋', '🐝', '🌱', '🌼', '🐇'];
    element.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDuration = `${Math.random() * 3 + 2}s`;
    element.style.opacity = Math.random();
    element.style.fontSize = `${Math.random() * 10 + 15}px`; // Slightly larger for emojis
    return element;
}

export default function initSpringEffect() {
    const container = document.createElement('div');
    container.className = 'spring-container';
    document.body.appendChild(container);

    const createSpringItem = () => {
        const item = createSpringElement();
        container.appendChild(item);
        setTimeout(() => item.remove(), 5000);
    };

    setInterval(createSpringItem, 200);
}
