# Hankerz
A simple vanilla JavaScript plugin for adding anchor links to headings on your static website.

## Getting started

```javascript
const headings = new Hankerz({
  container: '.content-container',
  className: 'custom-heading-class',
  headingSelectors: '.content-container > h2, .content-container > h3',
  linkIcon: someIcon // A string, or a function that returns a string
})
```

## To-do
- [ ] Write some actual documentation
- [ ] Should the plugin just wrap heading `innerText` with a link instead of creating a separate link with an icon, etc. This would make every heading inside of the `container` option a link. Are there any A11Y considerations there?
- [ ] Explore how the `linkIcon` option should work. Should it be a function that returns a string? Should the plugin sanitize whatever input the user provides?
- [ ] Add a a build/dist process for publishing, etc.

