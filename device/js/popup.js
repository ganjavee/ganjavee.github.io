var link = document.querySelector(".contacts button.with-yellow-background");
var close = document.querySelector(".modal-close");
var popup = document.querySelector(".write-us");
var login = popup.querySelector("[name=login]");

function outt() {
    popup.classList.remove("write-us-popup");
}

function errorr() {
    popup.classList.remove("modal-error");
}

function yeah() {
    popup.classList.add("modal-error");
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-user");
    popup.classList.add("write-us-popup");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-user");
    setTimeout(outt, 1000);
    errorr();
});

var email = popup.querySelector("[name=email]");

popup.addEventListener("submit", function(evt) {

    if(!login.value || !email.value) {
        evt.preventDefault();

        if(popup.classList.contains("modal-error")) {
            popup.classList.remove("modal-error");
        }
        setTimeout(yeah, 0.0001);
        
    }

    else {
        console.log("Отправлено.");
        
    }
});
window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            if (popup.classList.contains("write-us-popup")) {
                popup.classList.remove("write-us-popup");
            }
        }
    });