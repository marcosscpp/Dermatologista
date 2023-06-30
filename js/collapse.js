var coll = document.getElementsByClassName("post");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function () {
    var content = this.nextElementSibling;
    content.classList.add("active--post");
  });

  coll[i].addEventListener("mouseleave", function () {
    var content = this.nextElementSibling;
    content.classList.remove("active--post");
  });

  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    content.classList.toggle("active--post-click");
  });
}
