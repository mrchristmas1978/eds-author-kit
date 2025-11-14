function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.innerHTML = '❄';
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
  return snowflake;
}

export default function initSnowEffect() {
  const snowContainer = document.createElement('div');
  snowContainer.className = 'snow-container';
  document.body.appendChild(snowContainer);

  const createSnow = () => {
    const snowflake = createSnowflake();
    snowContainer.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
  };

  setInterval(createSnow, 200);
}
