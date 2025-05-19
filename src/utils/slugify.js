// src/utils/slugify.js
export function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')                 // strip accents
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')         // remove non-word chars
    .replace(/\-\-+/g, '-')
    .trim();
}
