**Editor Lite** is a simple text editor for mobile devices. It is a lightweight library that runs on vanilla-javascript and primarily for my personal use.

![20240617_192851_206](https://github.com/creuserr/editor-lite/assets/151720755/b1f06863-05ad-411d-ae8c-54f4f0efc55e)


### Installation
```html
<script src="https://cdn.jsdelivr.net/gh/creuserr/editor-lite/dist/editor-lite.min.js"></script>
```

### Usage
```js
var element = document.querySelector("#editor");
var editor = new EditorLite(element);
editor.setValue("Lorem ipsum dolor sit amet, consectetur.");
```

### Documentation
#### `getValue()`
Returns the content of the editor.

#### `setValue(value)`
Set the content of the editor to a specific string value.

#### `setHighlighter(highlighter)`
Set the highlighter of the editor to a specific highlighter.

Read [Building a Syntax Highlighter](docs/highlighting.md) for more information about highlighting.
