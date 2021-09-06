
function searchList() {
  var input, filter, ul, li, a, i, txtValue, de;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent + data[i][1] || a.innerText + data[1][i];
    if (txtValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
