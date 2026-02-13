import { getConfig, getMetadata } from '../../scripts/ak.js';
import { loadFragment } from '../fragment/fragment.js';

const FOOTER_PATH = '/fragments/nav/footer';

/**
 * loads and decorates the footer
 * @param {Element} el The footer element
 */
export default async function init(el) {
  const { locale } = getConfig();
  const footerMeta = getMetadata('footer');
  const path = footerMeta || FOOTER_PATH;
  try {
    const fragment = await loadFragment(`${locale.prefix}${path}`);
    fragment.classList.add('footer-content');

    const sections = [...fragment.querySelectorAll('.section')];

    const copyright = sections.pop();
    copyright.classList.add('section-copyright');
    copyright.innerHTML = copyright.innerHTML.replace('2025', '2026');

    const legal = sections.pop();
    legal.remove();

    el.append(fragment);

    // Add Easter images
    const easterContainer = document.createElement('div');
    easterContainer.classList.add('easter-images');
    easterContainer.innerHTML = `
      <img src="/img/easter-eggs.png?v=2" class="easter-eggs-left" alt="Easter Eggs Left" />
      <img src="/img/easter-eggs.png?v=2" class="easter-eggs-center" alt="Easter Eggs Center" />
      <img src="/img/easter-eggs.png?v=2" class="easter-eggs-right" alt="Easter Eggs Right" />
    `;
    el.append(easterContainer);
  } catch (e) {
    throw Error(e);
  }
}
