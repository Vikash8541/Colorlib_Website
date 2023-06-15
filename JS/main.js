// BIG SEARCH POP UP AND POP OUT WORK

let popup = document.querySelector(".popup");

function openpopup(){
    popup.classList.add("open");
}
function closepopup(){
    popup.classList.remove("open");
}

$('.carousel').carousel({
    interval: 5000
  })

// ADD Cart click Hover Effect

let shopcart = document.querySelector(".shopcart");
function cartopenup(){
    shopcart.classList.add("cartshow");
}
function cartcloseup(){
    shopcart.classList.remove("cartshow");
}


// NAVIGATION ACTIVE LINK 
let currentlocation = window.location.pathname;
let navlinks = document.querySelectorAll(".main-nav");
let dropdownmenu = document.querySelectorAll(".dropdown-item");
navlinks.forEach(link => {
        if(link.href.includes(`${currentlocation}`)){
            link.classList.add("navshow");
        }
})
dropdownmenu.forEach(link2 =>{
    if(link2.href.includes(`${currentlocation}`)){
        link2.classList.add("navshow-2");
    }
})


// SUBDROPDOWN MENU WORK   
let dropdownhome = document.querySelector(".arrow-home-nav");
let dropmenu = document.querySelector(".dropdown-menu");
dropdownhome.addEventListener("click", ()=>{
    dropdownhome.classList.toggle("view");
    dropmenu.classList.toggle("view");
  
});


// NAVIGATION WORK SCROLL
let navheader = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  let pos = window.scrollY > 100;
  navheader.classList.toggle("sticky", pos);
});

// SCROLL TO TOP BUTTON
let scrolltop = document.getElementById("scroll-up-btn");
window.addEventListener("scroll",function(){
  scrolltop.classList.toggle("active", window.scrollY > 200);
});


// FILTER AND SEARCH 
let filtericon = document.querySelector(".filter-icon");
let filterdet = document.querySelector(".filter-box-details");
let searchbox = document.querySelector(".search-box");
let minisearchbox = document.querySelector(".search-mini-box");
let icon = document.querySelector(".fas");
let icon2 = document.querySelector(".mag");
let p1 = document.querySelector(".filter-icon p");
let p2 = document.querySelector(".search-box p");

filtericon.addEventListener("click",()=>{
  if(filterdet.classList.contains='show'){
          icon.classList.toggle('fa-xmark');
          filterdet.classList.toggle("show");

        //   icon.classList.add("fa-xmark");
        //     filterdet.classList.add("show");
        //     icon2.classList.remove("fa-xmark");
        //     minisearchbox.classList.remove("success");


        //   filtericon.classList.toggle("amd");
        //   icon.classList.toggle("amd");
        //   p1.classList.toggle("amd");
        //   filtericon.classList.add("amd");


      }
});
searchbox.addEventListener("click",()=>{
  if(minisearchbox.classList.contains='success'){
          icon2.classList.toggle('fa-xmark');
          minisearchbox.classList.toggle("success");

        //   icon.classList.remove("fa-xmark");
        //       filterdet.classList.remove("show");
        //       icon2.classList.add("fa-xmark");
        //       minisearchbox.classList.add("success");
        //   searchbox.classList.toggle("amd");
        //   icon2.classList.toggle("amd");
        //   p2.classList.toggle("amd");
      }
});



// Clothers Tabular Content                        

// getting all buttons
var tabbutton = document.querySelectorAll('.pro-link-sec');
// getting all contents
var tabcontents = document.querySelectorAll('.tabular-clothes-content');

// defining main function
tabbutton.forEach((tab, index) =>{

    // button add active and remove active function
    tab.addEventListener("click", ()=>{
        tabbutton.forEach(tab =>{
            tab.classList.remove('active1')
        });
        tab.classList.add('active1');

        // button add active and remove active function
        tabcontents.forEach(content =>{
            content.classList.remove('active1')
        });
        tabcontents[index].classList.add('active1');
    })
})

// Cart add and remove item
