import { loadBlock } from './ak.js';
import initSpringEffect from './utils/spring.js';

(async function loadPostLCP() {
  const header = document.querySelector('header');
  if (header) await loadBlock(header);
  initSpringEffect();
}());
