window.onload = function(){
    let searchbtn = document.getElementById("btn");

    searchbtn.addEventListener("click",function(e){
        e.preventDefault();
        fetch('http://localhost:8888/info2180-lab4/superheroes.php').then(response => {
            console.log(response);
            return response.text();
        })
        .then(response => {
            console.log(response);
            // document.getElementById("")
            alert(response);
        })
    })
};