const forms=document.querySelector(".forms")
pwshowhide=document.querySelectorAll(".eye-icon")
links=document.querySelectorAll(".link")
console.log("update");

pwshowhide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click" , ()=>{
let pwfields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")

pwfields.forEach(password =>{
if(password.type==="password"){
password.type="text";
eyeIcon.classList.replace("fa-eye-slash","fa-eye")
return;
}
password.type="password";
eyeIcon.classList.replace("fa-eye","fa-eye-slash")
})
})
});

links.forEach(link=>{
    link.addEventListener("click", e=>{
e.preventDefault();
forms.classList.toggle("show-signup")

    })
})

