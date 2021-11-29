
function check(a,b,callback){
    var temp=0;
    if(a == "admin" && b == "12345" )
    {
        temp =1;
        
    }
    else
    {
        temp =0;
    }
    callback(temp);
   
}
function next(c){
    if(c==1){
        
        alert("successfully login");
        window.open("./home.html");
   
    }
    else{
        
        document.getElementById("error").innerHTML ="invalid password or user id";
        // location.reload(disable);
        window.stop(); 
    }
}

function validate(){
    
    var user_name = document.getElementById("user_name").value;
    var pswd = document.getElementById("pswd").value;
    check(user_name,pswd,next);

}



    
   
    




