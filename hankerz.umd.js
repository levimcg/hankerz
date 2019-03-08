(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Hankerz = factory());
}(this, function () { 'use strict';

  /**
   * @returns {Array} - An array of DOM nodes
   * @param {NodeList} nodes - A NodeList (usually result
   * of querySelectorAll) that gets converted to an array
   */
  function nodeListToArray(nodes) {
    var nodesArray = Array.prototype.slice.call(nodes);
    return nodesArray;
  }

  /**
   * 
   * @param {String} text - A string that gets converted that is used to
   * return another URL-safe string.
   */
  function slugify(text) {
    return text.replace(/[^\w\s$*_+~.()'"!\-:@]/g, '').trim().toLowerCase().replace(/\s+/g, '-');
  }

  function Hankerz(options) {
    var _this = this;

    var defaults = {
      headingSelectors: 'h1, h2, h3, h4, h5, h6',
      className: 'anchor-heading',
      linkIcon: "\uD83D\uDD17"
    }; // Merge user options with defaults above

    var settings = Object.assign({}, defaults, options); // The container is the only required option

    this.container = document.querySelector(settings.container);
    this.className = settings.className;
    this.headingSelectors = settings.headingSelectors;
    this.linkIcon = settings.linkIcon; // If the container doesn't exist then bail

    if (!this.container) return;
    var headingsNodeList = this.container.querySelectorAll(this.headingSelectors);
    var headings = nodeListToArray(headingsNodeList);
    headings.forEach(function (heading) {
      // Create the slug for the heading link
      var headingSlug = slugify(heading.textContent); // Add id for linking and CSS for styling

      heading.setAttribute('id', headingSlug);
      heading.setAttribute('class', _this.className); // Build up link with attributes and content

      var linkWithIcon = document.createElement('a');
      linkWithIcon.setAttribute('href', "#".concat(headingSlug));
      linkWithIcon.setAttribute('aria-hidden', 'true');
      linkWithIcon.innerHTML = _this.linkIcon; // Add the link inside the heading

      heading.appendChild(linkWithIcon);
    });
  }

  return Hankerz;

}));
