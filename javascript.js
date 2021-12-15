var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var button = document.getElementsByClassName("button")[0];
button.addEventListener("click", () => {
    console.log("working");
    if (fName.value == "") {
        empty(0, "First Name")

    }
    else{
        notEmpty(0);
    }
    if (lName.value == "") {
        empty(1, "Last Name")

    }
    else{
        notEmpty(1);
    }
    if (email.value == "") {
        empty(2, "Email")
    }
    //https://ui.dev/validate-email-address-javascript/ reg expression from this page
    else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))){
        document.getElementsByClassName("empty")[2].innerHTML = "Looks like this is not an email";
        
    }
    else{
        notEmpty(2);
    }
    if (password.value == "") {
        empty(3, "Password")

    }
    else{
        notEmpty(3);
    }
})

function empty(index, name) {
    document.getElementsByClassName("empty")[index].textContent = name + " can not be empty";
    document.getElementsByClassName("input")[index].style.border = "1px solid red";
    document.getElementsByClassName("input")[index].style.backgroundImage = "url(images/icon-error.svg)";
        

}
function notEmpty(index){
    document.getElementsByClassName("empty")[index].innerHTML = "";
    document.getElementsByClassName("input")[index].style.border = "1px solid lightgrey";
    document.getElementsByClassName("input")[index].style.backgroundImage = "";
}