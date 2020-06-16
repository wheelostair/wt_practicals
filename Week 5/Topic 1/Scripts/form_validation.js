function main() {
    console.log("in main fuction");

var myForm = document.getElementById("formTest")
myForm.addEventListener("submit", validateForm)

function validateForm(event) {
    let form_valid = true;
    if(formTest.name.value == ""){
        document.getElementById("errorName").innerHTML = "Please enter a valid name";
        document.getElementById("errorName").style.display = "inline";
        event.preventDefault(event);
    }
    else{
        form_valid = true;
        document.getElementById("errorName").style.display = "none";
    }
    if(formTest.age.value == ""){
        document.getElementById("errorAge").innerHTML = "Please enter a valid age";
        document.getElementById("errorAge").style.display = "inline";
        event.preventDefault(event);
    }
    else{
        form_valid = true;
        document.getElementById("errorName").style.display = "none";
    }
    if(formTest.location.value == ""){
        document.getElementById("errorLocation").innerHTML = "Please enter a valid location";
        document.getElementById("errorLocation").style.display = "inline";
        event.preventDefault(event);
    }
    else{
        form_valid = true;
        document.getElementById("errorName").style.display = "none";
    }
    if(formTest.location.value == ""){
        document.getElementById("errorLocation").innerHTML = "Please enter a valid location";
        document.getElementById("errorLocation").style.display = "inline";
        event.preventDefault(event);
    }
    else{
        form_valid = true;
        document.getElementById("errorName").style.display = "none";
        }
    if(formTest.email.value == ""){
            document.getElementById("errorEmail").innerHTML = "Please enter a valid email";
            document.getElementById("errorEmail").style.display = "inline";
            event.preventDefault(event);
        }
    else{
            form_valid = true;
            document.getElementById("errorName").style.display = "none";
    }
    if(formTest.phone.value == ""){
        document.getElementById("errorPhone").innerHTML = "Please enter a valid phone number";
        document.getElementById("errorPhone").style.display = "inline";
        event.preventDefault(event);
    }
    else{
        form_valid = true;
        document.getElementById("errorName").style.display = "none";
    }
    if(formTest.address.value == ""){
        document.getElementById("errorAddress").innerHTML = "Please enter a valid phone address";
        document.getElementById("errorAddress").style.display = "inline";
        event.preventDefault(event);
    }
    else{
        form_valid = true;
        document.getElementById("errorName").style.display = "none";
    }
    if(formTest.post.value == ""){
        document.getElementById("errorPost").innerHTML = "Please enter a valid post code";
        document.getElementById("errorPost").style.display = "inline";
        event.preventDefault(event);
    }
    else{
        form_valid = true;
        document.getElementById("errorName").style.display = "none";
    }
}
}
