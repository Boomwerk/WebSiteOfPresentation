
// alert("Bienvenue 😄, Le Site Est Actuellement En Construction, Vous pouvez tout de même visitez le site, Bonne Visite 🖐");
// popup for the download cv

let Download = document.querySelector(".download");
let popupDownload = document.querySelector(".popupDownload");
let popup = document.querySelector(".body");

function openPopupDownload(){
    popupDownload.style.display= "none";
    popupDownload.style.display= "block";

}

function closePopupDownload(){
    popupDownload.style.display= "none";
}

Download.addEventListener("click", openPopupDownload);
popup.addEventListener('click',closePopupDownload);
