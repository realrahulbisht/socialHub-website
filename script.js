const profilePic = document.querySelector("#profile-pic");
const dropdown = document.querySelector("#secondary-nav");
console.log(profilePic);
console.log(dropdown)

profilePic.addEventListener('click', ()=>{
     dropdown.classList.toggle("show");
})


const like = document.getElementById("like");
console.log(like)
like.addEventListener('click', ()=>{
    console.log("clicked");
    like.classList.toggle("add");
})


const darkBtn = document.querySelector("#dark-btn");
darkBtn.addEventListener("click",()=>{
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
})