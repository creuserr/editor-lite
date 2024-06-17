```js
editor.setHighlighter({
  event: value => {
    // process the editor content
    // and add <span> elements
    // for styling
    return value;
  },
  // initial styling goes here
  style: ""
});
```

### `event` function
This function processes the editor content and expected to return an HTML-formatted string.

The returned value will be the inner HTML of the `<pre><code>` element.

This function will be triggered after the content changes.

#### Highlighting

When highlighting, it is recommended to use `<span>` with an attribute of `data-editor-lite="..."`.

#### Example

```js
// Wrap numbers with <span data-editor-lite="hl-1">
value => {
  var html = "";
  var isOpen = false;
  value.split("").forEach(char => {
    if(/[0-9]/.test(char) && !isOpen) {
      html += `<span data-editor-lite="hl-1">`;
      isOpen = true;
    }
    if(isOpen && !/[0-9]/.test(char) {
      html += `</span>`;
      isOpen = false;
    }
    html += char;
  });
  return html;
}
````

### `style` string
This string is a css code for styling the editor.

#### Internal elements
```css
[data-editor-lite="input"] {
  /* Textarea */
}
[data-editor-lite="lines"] {
  /* Line tab */
}
[data-editor-lite="code"] {
  /* Code view */
}
```

#### Example

```js
// Color numbers with royal blue
style: `
[data-editor-lite="hl-1"] {
  color: royalblue;
}`
```
