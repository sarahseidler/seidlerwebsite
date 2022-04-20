const menuToggle = document.querySelector(".menu__toggle")
const nav = document.querySelector(".navigation")
const aboutPage = document.querySelector(".page__about")


menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open")
})



const navContainer = document.querySelector(".nav-list")

navContainer.addEventListener("click", changePage)

function changePage(event){
  const selected = event.target
  console.log(selected)
  const resumePage = document.querySelector(".page__resume")
  const aboutPage = document.querySelector(".page__about")
  const mediaPage = document.querySelector(".page__media")
  if(selected.classList.contains("resume")){
    resumePage.style.display = "block"
    aboutPage.style.display = "none"
    mediaPage.style.display = "none"
    nav.classList.toggle("open")
  }
  if(selected.classList.contains("about")){
    window.location.reload()
  }
  if(selected.classList.contains("media")){
    resumePage.style.display = "none"
    aboutPage.style.display = "none"
    mediaPage.style.display = "block"
    
    nav.classList.toggle("open")
  }
}

const imgList = document.getElementsByClassName("imgModal")
const galleryContainer = document.querySelector(".gallery__wrapper")
const modalImg = document.getElementById("img01")
const captionText =  document.getElementById("caption")
const modalItem = document.getElementById("myModal")

galleryContainer.addEventListener("click", modalPop)

let modalSrc
let modalAlt

function modalPop(event){
  
  const selected = event.target;
  if (selected.classList.contains("imgModal")){
  console.log(selected)
  modalImg.src = selected.src
  captionText.innerHTML = selected.alt
  displayModal()
}
}

function displayModal(){
  modalItem.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modalItem.style.display = "none";
}