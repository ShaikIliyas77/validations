function Validate() {
    var passwordRegularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    var emailRegularExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  

    var email = document.getElementById('emailId').value;
    var psw = document.getElementById('psw').value;
    var rpsw = document.getElementById('rpsw').value;


   
    if (emailRegularExpression.test(email)) {
        console.log("valid email");
    }
    else {
        console.log("Invalid email");
        var text=document.getElementById("emailValidation");
        text.classList.remove("hiddenElement");
        text.classList.add("hiddenElementColor");

    }


    if (passwordRegularExpression.test(psw)) {
        console.log("valid password");
    }
    else {
        console.log("Invalid password");
        var text1=document.getElementById("passValidation");
        text1.classList.remove("hiddenElement");
        text1.classList.add("hiddenElementColor");


    }


    if (passwordRegularExpression.test(rpsw)) {
        console.log("password matched");
    }
    else {
        console.log("password not matched");
        var text2=document.getElementById("repassValidation");
        text2.classList.remove("hiddenElement");
        text2.classList.add("hiddenElementColor");


    }
console.log(document.getElementById("check").checked);

}
function clearValidation(){
    document.getElementById("emailId").value="";
    document.getElementById("psw").value="";
    document.getElementById("rpsw").value="";

    var text=document.getElementById("emailValidation");
        text.classList.add("hiddenElement");
        text.classList.remove("hiddenElementColor");

        var text1=document.getElementById("passValidation");
        text1.classList.add("hiddenElement");
        text1.classList.remove("hiddenElementColor");

        var text2=document.getElementById("repassValidation");
        text2.classList.add("hiddenElement");
        text2.classList.remove("hiddenElementColor");



}
