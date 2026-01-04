function printName() {
  let first = document.getElementById("firstname").value;
  let last = document.getElementById("lastname").value;

  let fullName = first + " " + last;

  document.getElementById("result").innerText = fullName;
}


f