let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail-slider .item');


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}


// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail-slider .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail-slider .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// counter
let nums = document.querySelectorAll(".num");
let container = document.querySelector(".container");

let test = false; // when the function doesn't start

window.onscroll = () => {
    if (window.screenY = container.offsetTop) {
        if (!test) {
            nums.forEach((e) => {
                let start = 0;
                let end = e.dataset.num;
                
                let count = setInterval(() => {
                    start++;
                    e.textContent = start;
                    if (start == end) {
                        clearInterval(count);
                    }
                }, 2000 / end)
            })
        }
        test = true;
    }
}

//dropbtn
  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction1(id,cls) {

    var btn = document.getElementById(id);

console.log(btn);

if(btn.classList.contains('show')){
  console.log("enterrred");
  btn.classList.remove("show")

}else{
  document.getElementById(id).classList.toggle("show");
  closeDropDown(cls);
}

  }

  function myFunction2(id,cls) {
    console.log(id,cls);

  var btn = document.getElementById(id);

  console.log(btn);

  if(btn.classList.contains('show')){
    console.log("enterrred");
    btn.classList.remove("show")

  }else{
    document.getElementById(id).classList.toggle("show");
    closeDropDown(cls);
  }

}


function closeDropDown(cls){
  //check if open or not



    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        console.log(dropdowns[i]);
        if (openDropdown.classList.contains('show') && !openDropdown.classList.contains(cls)) {
          openDropdown.classList.remove('show');
        }
      }






    //   if (!event.target.matches('.dropbtn2')) {
    //   var i;
    //   console.log(dropdowns.length);
    //   for (i = 0; i < dropdowns.length; i++) {
    //     var openDropdown = dropdowns[i];
    //     if (openDropdown.classList.contains('show')) {
    //       openDropdown.classList.remove('show');
    //     }
    //   }
    // }else{
      
    // }
}


function myFunction3(id,cls) {
    console.log(id,cls);

  var btn = document.getElementById(id);

  console.log(btn);

  if(btn.classList.contains('show')){
    console.log("enterrred");
    btn.classList.remove("show")

  }else{
    document.getElementById(id).classList.toggle("show");
    closeDropDown(cls);
  }

}
function myFunction4(id,cls) {
    console.log(id,cls);

  var btn = document.getElementById(id);

  console.log(btn);

  if(btn.classList.contains('show')){
    console.log("enterrred");
    btn.classList.remove("show")

  }else{
    document.getElementById(id).classList.toggle("show");
    closeDropDown(cls);
  }

}
function myFunction5(id,cls) {
    console.log(id,cls);

  var btn = document.getElementById(id);

  console.log(btn);

  if(btn.classList.contains('show')){
    console.log("enterrred");
    btn.classList.remove("show")

  }else{
    document.getElementById(id).classList.toggle("show");
    closeDropDown(cls);
  }

}
function myFunction6(id,cls) {
    console.log(id,cls);

  var btn = document.getElementById(id);

  console.log(btn);

  if(btn.classList.contains('show')){
    console.log("enterrred");
    btn.classList.remove("show")

  }else{
    document.getElementById(id).classList.toggle("show");
    closeDropDown(cls);
  }

}

  


  
  // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //   console.log(event);
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     console.log(dropdowns.length);
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

