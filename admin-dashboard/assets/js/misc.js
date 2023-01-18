// Select the element where the header should be inserted
  const headerContainer = document.querySelector('#_head');

  headerContainer.innerHTMl = "";
  // Use fetch to get the HTML content of the head file
  fetch('partials/head.html')
    .then(response => response.text())
    .then(data => {
    // Insert the HTML content into the header container
    headerContainer.innerHTML = data;
  });

  // Repeat the same process for the sidebar
  const sidebarContainer = document.querySelector('#_sidebar');
  fetch('partials/_sidebar.html')
    .then(response => response.text())
    .then(data => {
    sidebarContainer.innerHTML = data;
  });

  // Repeat the same process for the footer
  const footerContainer = document.querySelector('#_footer');
  fetch('partials/')
    .then(response => response.text())
    .then(data => {
    footerContainer.innerHTML = data;
  });
let chooseFile = document.getElementById("choose-file");
let imgPreview = document.querySelector("#person");
let inputs = document.querySelectorAll(".inputx");
let outputs = document.querySelectorAll(".outputx");
let priceinp = document.querySelector(".inputx-price");
let priceout = document.querySelector(".outputx-price");
let re3 = document.querySelectorAll(".re3");

if (priceinp && priceout) {
  inputGet(priceinp, priceout);
}

if (chooseFile && imgPreview) {
  chooseFile.addEventListener("change", function () {
    getImgData();
  });
}

function getImgData() {
let imgFiles = chooseFile.files;
if (imgFiles) {
  const reader = new FileReader();
  reader.onload = (e) => {
    imgPreview.src = e.target.result;
  };
  reader.readAsDataURL(imgFiles[0]);

  // Show a pop-up with the number of selected images
  alert(`You have selected ${imgFiles.length} images.`);

  // loop through all the selected images
  for (let i = 1; i < imgFiles.length; i++) {
    // do something with the rest of the images
  }
}
}



for (let index = 0; index < inputs.length; index++) {
  inputGet(inputs[index], outputs[index]);
}

function inputGet(x, y) {
  x.addEventListener("input", (event) => {
    const updatedValue = event.target.value;

    y.textContent = updatedValue;
  });
}

function checkEnter(event) 
{
  // Check if the enter key was pressed
  if (event.key === ",") {
    addToList();
  }
  if(re3 !== "")
  {
    for (let index = 0; index < re3.length; index++) {
      const element = re3[index];

      element.remove();
    }
    console.log("lo")
  }
}

function addToList() {
// Get the value of the input field
var values_input = document.getElementById("inputField").value;

let inputValue = values_input.split(",")

// Check if the input value is not an empty string
if (inputValue !== "") {
  // Clear the list by removing all child elements
  var list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Loop over the inputValue array
  for (var i = 0; i < inputValue.length; i++) {
    // Create a new list item with the value of the current element in the inputValue array
    var newItem = document.createElement("p");
    newItem.innerHTML = inputValue[i];

    // Add the new list item to the list
    list.appendChild(newItem);
  }
}
}

function goOn() {
var goOn = confirm("Are you sure you want to Delete this");
if (goOn) {
  // The user clicked "OK"
  // Do something here, such as navigate to a new page
} else {
  // The user clicked "Cancel"
  // Do something here, such as stay on the current page
}
}


// Get the modal element
var modal = document.getElementById("modalx");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalxt");

// Get the <span> element that closes the modal
var span = document.getElementById("closex");

// When the user clicks on the button, open the modal
for (let index = 0; index < btn.length; index++) {
  const element = btn[index];

  element.addEventListener("click", function() {
  modal.style.display = "block";
});
}

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    function addActiveClass(element) {
      if (current === "") {
        //for root url
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        //for other url
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    $('.horizontal-menu .nav li a').each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    $(".aside-toggler").on("click", function () {
      $(".mail-sidebar,.chat-list-wrapper").toggleClass("menu-open");
    });


    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if (!body.hasClass("rtl")) {
        if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
          const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
        }
        if ($('.chats').length) {
          const chatsScroll = new PerfectScrollbar('.chats');
        }
        if (body.hasClass("sidebar-fixed")) {
          var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
        }
      }
    }

    $('[data-toggle="minimize"]').on("click", function() {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

    //fullscreen
    $("#fullscreen-button").on("click", function toggleFullScreen() {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    })
    if ($.cookie('connectplus-free-banner')!="true") {
      document.querySelector('#proBanner').classList.add('d-flex');
      document.querySelector('.navbar').classList.remove('fixed-top');
    }
    else {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('.navbar').classList.add('fixed-top');
    }
    
    if ($( ".navbar" ).hasClass( "fixed-top" )) {
      document.querySelector('.page-body-wrapper').classList.remove('pt-0');
      document.querySelector('.navbar').classList.remove('pt-5');
    }
    else {
      document.querySelector('.page-body-wrapper').classList.add('pt-0');
      document.querySelector('.navbar').classList.add('pt-5');
      document.querySelector('.navbar').classList.add('mt-3');
      
    }
    document.querySelector('#bannerClose').addEventListener('click',function() {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('#proBanner').classList.remove('d-flex');
      document.querySelector('.navbar').classList.remove('pt-5');
      document.querySelector('.navbar').classList.add('fixed-top');
      document.querySelector('.page-body-wrapper').classList.add('proBanner-padding-top');
      document.querySelector('.navbar').classList.remove('mt-3');
      var date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
      $.cookie('connectplus-free-banner', "true", { expires: date });
    });
  });
})(jQuery);
