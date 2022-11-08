window.onload = function(){
    let searchbtn = document.getElementById("btn");

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
    function getAllSuperHeroes() {
    return fetch("http://localhost:8888/info2180-lab4/superheroes.php")
      .then((result) => result.text())
      .then((data) => data)
      .catch((err) => err);
    }

    function getSpecificHero(hero) {
    return fetch(`http://localhost:8888/info2180-lab4/superheroes.php?query=${hero}`)
      .then((result) => result.text())
      .then((data) => data)
      .catch((err) => err);
    }

    function usedata(response){
        document.getElementById("result").innerHTML = response;
    }

    function searchHeroes(search) {
    if (search === null || sanitizer(search) === "")
      return getAllSuperHeroes();
    return getSpecificHero(search);
    }


    function sanitizer(str){
        str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
        return str.trim()
    }

    searchbtn.addEventListener("click", ()=> {
    searchHeroes(document.getElementById("search-hero").value).then(
        (data) => (document.getElementById("result").innerHTML=data)
    )
  })
};