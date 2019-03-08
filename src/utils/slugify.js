/**
 * 
 * @param {String} text - A string that gets converted that is used to
 * return another URL-safe string.
 */
export default function slugify(text) {
  return text
    .replace(/[^\w\s$*_+~.()'"!\-:@]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}