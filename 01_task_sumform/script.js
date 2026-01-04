document.getElementById("sum").addEventListener("submit",function(e) {
    e.preventDefault();

    let a = parseFloat(document.getElementById("Firstnum").value)
    let b = parseFloat ( document.getElementById("lastnum").value)

    let sum = a + b 

    document.getElementById("sum").value=sum
})