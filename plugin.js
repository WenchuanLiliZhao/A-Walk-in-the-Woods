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

      quoteClass();
      markTheorem("Definition");
      markTheorem("Lemma");
      markTheorem("Theorem");
      markTheorem("Corollary");
      markTheorem("Example");

      markFigure();
      // ...
    });

    // Invoked one time after rendering the initial page
    hook.ready(function () {
      
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


function markTheorem(_input) {
  const set = document.querySelectorAll("#main h4 a span strong");
  var index = 0;

  for (let i = 0; i < set.length; i++) {
    

    if (set[i].textContent == _input) {
      // Do something with the <h5> tag
      index += 1;

      set[i].innerHTML += " " + index + "";
      set[i].parentElement.innerHTML += ".";
    }
  }
}

function markFigure() {
  const set = document.querySelectorAll("#main figure figcaption");
  var index = 0

  for (let i = 0; i < set.length; i++) {
    const element = set[i];

    index += 1;

    set[i].innerHTML = "<strong>Figure " + index + ".</strong> " + set[i].innerText;
    
  }
}