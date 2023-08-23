//append signup text to the form section
const signupText = document.querySelector(".signup-text");
const wheelContainer=document.querySelector("#form-widget")
signupText.style.display='block'
wheelContainer.appendChild(signupText);

//congrats 
$(document).on('click', '.submit-button', function() {

    $(".my-3 .container").css("display", "none");
    $(".main-content2").css("display", "none");
    $(".signup-text .col-12 ").css("visibility", "hidden");
    // $(".congrats-banner ").css("margin", "-55px");
});