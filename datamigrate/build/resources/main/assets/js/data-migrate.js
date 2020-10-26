(async () => {
  // init --//--
  try {
    const editorDom = document.getElementById('editor');
    const editor = CodeMirror(editorDom, {
      value: "{ count: 10, start: 0 }\n",
      mode:  "javascript"
    });
    console.log('Editor is ready to work!');
  } catch (reason) {
    console.log(`Editor initialization failed; ${reason}`);
  }
})();