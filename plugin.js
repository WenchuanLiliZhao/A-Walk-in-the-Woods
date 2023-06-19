(function () {
  var myPlugin = function (hook, vm) {
    // Invoked one time when docsify script is initialized
    hook.init(function () {
      
      // ...
    });

    // Invoked one time when the docsify instance has mounted on the DOM
    hook.mounted(function () {
      
      // ...
    });

    // Invoked on each page load before new markdown is transformed to HTML.
    // Supports asynchronous tasks (see beforeEach documentation for details).
    hook.beforeEach(function (markdown) {
      // ...
      return markdown;
    });

    // Invoked on each page load after new markdown has been transformed to HTML.
    // Supports asynchronous tasks (see afterEach documentation for details).
    hook.afterEach(function (html) {
      // ...

      return html;
    });

    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      
      
      // ...
    });

    // Invoked one time after rendering the initial page
    hook.ready(function () {
      quoteClass()
      markH5("Definition", "", "mark");
      markH5("Lemma", "", "mark");
      markH5("Theorem", "", "mark");
      markH5("Corollary", "", "mark");
      markH5("Example", "", "mark");
      // ...
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(myPlugin, $docsify.plugins || []);
})();


function quoteClass() {
  const set = document.querySelectorAll("#main blockquote");

  for (let i = 0; i < set.length; i++) {
    set[i].classList.add("quote");
  }
}


function markH5(_input, _removeText, _mark) {
  const set = document.querySelectorAll("#main h4 a span strong");
  var index = 0;

  for (let i = 0; i < set.length; i++) {
    

    if (set[i].textContent == _input) {
      // Do something with the <h5> tag
      index += 1;

      if (_removeText == "removeText") {
        set[i].innerText = "";
      }

      if (_mark == "mark") {
        set[i].innerText += " " + index + "";
        set[i].parentElement.innerText += ".";
      }

      
    }
  }
}