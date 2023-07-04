(function () {
  var myPlugin = function (hook, vm) {
    
    hook.doneEach(function () {
      console.log("page loaded.")

      const peopleList = [
        {
          name: "Antigone",
          key: "A",
          avataLink: "https://play-lh.googleusercontent.com/TYXuv6xbVKH6OKllw_y5DSbBHwd7k_ImIJHRaiYifJUJ5rqBgPtSQ-VrbS-Ao1wr9w=w240-h480-rw",
        },

        {
          name: "Orpheus",
          key: "O",
          avataLink: "https://www.institutfrancais.com/sites/default/files/medias/images/phallaina_marietta-ren_smallbang.jpg",
        },
      ]

      removeHeadingLink("h1");
      removeHeadingLink("h2");
      removeHeadingLink("h3");
      removeHeadingLink("h4");
      removeHeadingLink("h5");
      removeHeadingLink("h6");

      // ...
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(myPlugin, $docsify.plugins || []);
})();


function removeHeadingLink(heading) {
  const array = document.querySelectorAll(`#main ${heading}`);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    const text = element.querySelectorAll("& > a")[0].innerText;

    element.innerText = text;
  }
}




