import { loadBlock } from './ak.js';
import initSnowEffect from './utils/snow.js';

(async function loadPostLCP() {
  const header = document.querySelector('header');
  if (header) await loadBlock(header);
  initSnowEffect();
}());
