window.onload = function(){
    let searchbtn = document.getElementById("btn");
    var httpRequest;
    let value1 = document.querySelector("#search-hero").value
    var hero;

    // searchbtn.addEventListener("click",()=>{
    //     // e.preventDefault();
    //     let value = document.getElementById("search-hero").value;
    //     if (value === null || value.trim() === "") {
    //     fetch('http://localhost:8888/info2180-lab4/superheroes.php').then(response => {
    //         console.log(response);
    //         return response.text();
    //     })
    //     .then(response => {
    //         console.log(response);
    //         // document.getElementById("")
    //         //alert(response);
    //         usedata(response);
    //     })
    //     }else{
    //         fetch('http://localhost:8888/info2180-lab4/superheroes.php?query=${value}').then(response=> {
    //             return response.text();
                
    //         })
    //         .then(response => {
    //             usedata(response);
    //             console.log(response)
    //         })
    //     }
    
    // })

     searchbtn.addEventListener('click', function(e){
        e.preventDefault();
        httpRequest= new XMLHttpRequest();
        hero=value1.trim();
         httpRequest.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
         }
         httpRequest.open('GET', 'superheroes.php?h='+hero);
         httpRequest.send();

    });
    
};