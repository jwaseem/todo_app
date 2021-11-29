function todo() {
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {        
       var response = JSON.parse(this.responseText);
        var ab="";
        for(var i=0; i<response.length; i++){
  
          ab += `<label><input type= checkbox onclick=num();>` +"  " + response[i].title + `</label><br>`;
          

        }
        document.getElementById("demo").innerHTML =ab;
        
      }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();

    
 
  }
  function num() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if(checkboxes.length == 5){
      alert("Congrats. 5 Tasks have been Successfully Completed ");
    }
  }
