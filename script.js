function frogotpassword(){ 

        var email = document.getElementById("email").value;

        var request = new XMLHttpRequest();
        
        request.onreadystatechange = function(){
        
        if(request.readyState == 4 && request.status == 200) {
        
        var response = request.responseText;

     alert(response);
    }

}
request.open("GET", "forgotProcess.php?e=" + email, true);
        request.send();
}