//get input element
let filterInput = document.getElementById("inputItem");

//add event
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  //get value of input

  let filterValue = document.getElementById("inputItem").value.toUpperCase();

  //get list
  let names = document.getElementById("names");
  //get individual items
  let li = names.querySelectorAll("li.collection-item");

  //loop through li
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    //if match
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
