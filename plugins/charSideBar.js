(function () {
  var myPlugin = function (hook, vm) {
    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      console.log("charSideBar loaded.")

      openCharInfo("Antigone");
      openCharInfo("Orpheus");

      closeCharInfo();
      // ...
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(myPlugin, $docsify.plugins || []);
})();


function openCharInfo(who) {
  const set = document.querySelectorAll("#main h4");

  for (let i = 0; i < set.length; i++) {
    const element = set[i];
    if (element.innerText == who) {

      element.classList.add("clickable");

      element.onclick = function() {
        console.log(`Open ${who}'s info`);

        const infoBox = document.querySelector(`#char-side-info-${who}`);

        infoBox.classList.add("active"); // toggle

        const closeBtn = document.querySelector(`#char-side-btn`);

        closeBtn.classList.add("active"); // toggle

        const body = document.querySelectorAll("body")[0];

        body.classList.add("locked"); // toggle
      }
    }
  }
}

function closeCharInfo() {
  const btn = document.querySelector("#char-side-btn");
  const charInfoBox = document.querySelectorAll("[id*='char-side-info-']");

  btn.onclick = function() {

    btn.classList.remove("active");
    const body = document.querySelectorAll("body")[0];

    body.classList.remove("locked");

    for (let i = 0; i < charInfoBox.length; i++) {
      const box = charInfoBox[i];
      box.classList.remove("active");
    }
  }
}