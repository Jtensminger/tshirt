//= require jquery
//= require_tree .

var swap = function(img) {
    var current = img.attr("src");
    var swap = img.attr("data-swap");
    img.attr('src', swap).attr("data-swap",current);
 }

$(document).ready(() => {
  var arr = [0,1,2]
  arr.forEach((num) => {
    $(".flip" + num).click(() => {
      swap($("#flip" + num));
    });
  });
});
