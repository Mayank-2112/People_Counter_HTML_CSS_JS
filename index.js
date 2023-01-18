let count = 0
function increment(){
    count = count + 1
    document.getElementById("demo").textContent = count;
}
let dis = document.getElementById("save-el")
function save(){
    dis.textContent += count+" - "
    count = 0
    document.getElementById("demo").textContent = count;
}
// let b = "world"
// console.log(a+b)
