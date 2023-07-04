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
      console.log("charSideBar loaded.")

      myFunc("Antigone");
      myFunc("Orpheus");
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


function myFunc(who) {
  const set = document.querySelectorAll("#main h4");

  for (let i = 0; i < set.length; i++) {
    const element = set[i];
    if (element.innerText == who) {
      element.onclick = function () {
        console.log(`Open ${who}'s info`);

        const infoBox = document.querySelector(`#char-side-info-${who}`);

        infoBox.classList.add("open");
      }
    }
  }
}