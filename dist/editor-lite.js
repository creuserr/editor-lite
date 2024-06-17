class EditorLite {
  version = 1;
  constructor(target) {
    this.style = "";
    this.$main = document.createElement("div");
    this.$main.style.cssText = `width: 100%; height: 100%; display: flex; margin: 0;`;
    target.append(this.$main);
    this.$style = document.createElement("style");
    this.$main.append(this.$style);
    this._init();
    this.$lines = document.createElement("div");
    this.$lines.setAttribute("data-editor-lite", "lines"); 
    this.$lines.style.cssText = `height: calc(100% - 20px); padding: 10px; padding-top: 8px; padding-bottom: 8px; background-color: var(--editorlite-background, #F8F8F8); border-right: 1px solid var(--editorlite-lineborder, rgba(0,0,0,0.05)); padding-left: 9px; margin: 0; display: flex; flex-direction: column; font-family: monospace; font-size: 14px; color: rgba(0,0,0,0.3); overflow: scroll; padding-top: 0; padding-bottom: 0; pointer-events: none;`;
    this.$main.append(this.$lines);
    this.$code = document.createElement("div");
    this.$code.style.cssText = `position: relative; flex-grow: 1; width: calc(100% - 16px - 20px); height: calc(100% - 20px); margin: 0; padding; 0; background-color: var(--editorlite-background, #FAFAFA);`;
    this.$main.append(this.$code);
    this.$pre = document.createElement("pre");
    this.$pre.style.cssText = `margin: 0; font-family: monospace; font-size: 14px; width: 100%;`;
    this.$code.append(this.$pre);
    this.$out = document.createElement("code");
    this.$out.style.cssText = `width: 100%; height: 100%; overflow: scroll; display: inline-block; margin: 0;`;
    this.$out.setAttribute("data-editor-lite", "code");
    this.$pre.append(this.$out);
    this.$in = document.createElement("textarea");
    this.$in.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 5; outline: none; background-color: transparent; border: 0; padding: 0; font-family: monospace; font-size: 14px; margin: 0; color: transparent; caret-color: black; resize: none;`;
    this.$in.wrap = "off";
    this.$in.onscroll = evt => {
      const x = evt.target.scrollLeft;
      const y = evt.target.scrollTop;
      this.$out.scrollLeft = x;
      this.$out.scrollTop = y;
      this.$lines.scrollTop = y;
    }
    this.$in.oninput = evt => {
      this.setValue(evt.target.value, true);
    }
    this.$in.setAttribute("data-editor-lite", "input");
    this.$code.append(this.$in);
  }
  setValue(raw, update) {
    if(!update) this.$in.value = raw;
    this.$out.innerHTML = this.highlight(raw.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("&", "&amp;")).replaceAll("\n", "<br>") + `<br><span data-editor-lite="invisible">x</span>`;
    this._updateLines();
  }
  getValue() {
    return this.$in.value;
  }
  _updateLines() {
    let html = [];
    for(let i = 0; i < this.$in.value.split("\n").length; i++) {
      html.push(i + 1);
    }
    this.$lines.innerHTML = html.join("<br>");
  }
  _init() {
    this.$style.innerHTML = `[data-editor-lite="input"]::selection { color: transparent; background-color: var(--editorlite-selection, rgba(0,0,0,0.07)); } [data-editor-lite="invisible"] { color: transparent } [data-editor-lite] { -ms-overflow-style: none; scrollbar-width: none; } [data-editor-lite]::-webkit-scrollbar { display: none; } ${this.style}`;
  }
  setHighlighter(hl) {
    this.highlight = hl.event;
    this.style = hl.style;
    this._init();
  }
  highlight = (raw) => {
    return raw;
  }
}
