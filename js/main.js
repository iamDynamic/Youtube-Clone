var settings = document.getElementById("settings")
var d = document.getElementById("username")
var mode = document.getElementById("mode")
var auth = document.getElementById("auth")
var clse = document.getElementById("cle")
var bd = document.querySelector("body")
var nav = document.querySelector("nav")
window.onload = ()=>{
    d.style.display = "none"
}
settings.addEventListener("click",()=>{
   d.style.display = "block"
})
clse.addEventListener("click",()=>{
    d.style.display = "none"
 })
mode.addEventListener("click",()=>{

})
auth.addEventListener("click",()=>{
    location.href = "/html/auth.html?id=1deb1918-abd5-474f-9fc6-62262bb47224"
})
