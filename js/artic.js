let articleContentHeight =
  document.getElementsByClassName("article__content")[0].offsetHeight;
let articleImg =
  document.getElementsByClassName("article__img")[0].offsetHeight;
let totalHeight = articleImg + articleContentHeight;

let articHeight =
  document.getElementsByClassName("all-articles")[0].offsetHeight;

let allArticle = document.getElementsByClassName("artic-link");

let articlesQuantity = Math.round(totalHeight / allArticle[0].offsetHeight);

for (let i = 0; i < allArticle.length; i++) {
  console.log(i);
  if (articlesQuantity - 1 == i) {
    allArticle[i].remove();
  }
}
