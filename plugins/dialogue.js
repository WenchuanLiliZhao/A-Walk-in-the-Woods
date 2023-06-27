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
      console.log("dialogue loaded.")

      dialogue(["Orpheus", "Antigone", "Hermes"])
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


function dialogue_addClass(who) {
  
  const level1 = document.querySelectorAll("#main > blockquote");

  for (let i = 0; i < level1.length; i++) {

    const element = level1[i];
    

    const level2 = element.querySelectorAll("h5")[0];
    const level3 = level2.querySelectorAll("a")[0];
    const level4 = level3.querySelectorAll("span")[0];

    if (level4.innerHTML == who) {
      level2.classList.add("who")
      level2.innerHTML = `<span class="name">` + level4.innerHTML + `</span>` + `<span class="index"></span>`;
    

      var container = document.createElement("div");
      container.classList.add("dialogue-container");
      element.parentNode.insertBefore(container, element);
      container.appendChild(element);

      var whoContainer = document.createElement("div");
      whoContainer.classList.add("who-container");
      element.parentNode.insertBefore(whoContainer, element);

      var avada = document.createElement("div");
      avada.classList.add("avada");
      whoContainer.appendChild(avada);

      container.classList.add(who);
    }
  }
}

function dialogue(chars) {
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    
    dialogue_addClass(char);

    const level1 = document.querySelectorAll(".dialogue-container");

    for (let i = 0; i < level1.length; i++) {
      const element = level1[i];
      element.id = "dialogue-container-" + i;
    }


    const targets = document.querySelectorAll(".who .index")
    console.log(targets.length)

    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      target.innerHTML = i
    }
  }
}