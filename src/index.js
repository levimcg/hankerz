import nodeListToArray from './utils/noeListToArray';
import slugify from './utils/slugify';

function Hankerz(options) {
  const defaults = {
    headingSelectors: 'h1, h2, h3, h4, h5, h6',
    className: 'anchor-heading',
    linkIcon: `🔗`
  };

  // Merge user options with defaults above
  const settings = Object.assign({}, defaults, options);

  // The container is the only required option
  this.container = document.querySelector(settings.container);
  this.className = settings.className;
  this.headingSelectors = settings.headingSelectors;
  this.linkIcon = settings.linkIcon;

  // If the container doesn't exist then bail
  if (!this.container) {
    throw new Error('The container option is required. Please provide a CSS selector.');
  }

  const headingsNodeList =
    this.container.querySelectorAll(this.headingSelectors);

  const headings = nodeListToArray(headingsNodeList);

  headings.forEach(heading => {
    // Create the slug for the heading link
    const headingSlug = slugify(heading.textContent);
    
    // Add id for linking and CSS for styling
    heading.setAttribute('id', headingSlug);
    heading.setAttribute('class', this.className);
    
    // Build up link with attributes and content
    const linkWithIcon = document.createElement('a');
    linkWithIcon.setAttribute('href', `#${headingSlug}`);
    linkWithIcon.setAttribute('aria-hidden', 'true');
    linkWithIcon.innerHTML = this.linkIcon;

    // Add the link inside the heading
    heading.appendChild(linkWithIcon);
  });
}

export default Hankerz;