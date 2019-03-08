/**
 * @returns {Array} - An array of DOM nodes
 * @param {NodeList} nodes - A NodeList (usually result
 * of querySelectorAll) that gets converted to an array
 */
export default function nodeListToArray(nodes) {
  const nodesArray = Array.prototype.slice.call(nodes);
  
  return nodesArray;
}