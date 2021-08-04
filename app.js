const links = document.querySelectorAll(".link-item");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    console.log(link.children[1]);
    link.children[1].classList.add("sublink--show");

    link.children[1].addEventListener("mouseleave", function (e) {
      link.children[1].classList.remove("sublink--show");
    });
  });
});
