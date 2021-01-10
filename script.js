mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
 //This function displays servent 
 
 function Servants(){
    fetch("https://api.atlasacademy.io/export/NA/basic_servant.json")
    .then(response =>{
        if(!response.ok){
            
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const html = data.map(user=>{
            return `
              <div class="row">
                  <div class="user">
                      <p><img src="${user.face}" alt="${user.name}"></p>
                      <p>Character No: ${user.collectionNo}</p>
                      <p>Name: ${user.name}</p>
                      <p>Class Type: ${user.name}</p>
                      <p>Highest Attack: ${user.atkMax} DMG </p>
                      <p>Highest Health: ${user.hpMax} HP</p>
                      <p>Stars: ${user.rarity}</p>
                  </div>
              </div>`;
        })
        
        .join("");
        console.log(html);
        
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html); 
        
    })
    
    .catch(error=>{
        console.log(error);
    })
    
}
 //This function displays craft essence
function CraftEssence(){
    fetch("https://api.atlasacademy.io/export/NA/basic_equip.json")
    .then(response =>{
        if(!response.ok){
            
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const html = data.map(user=>{
            return `
              <div class="row">
                  <div class="user">
                      <p><img src="${user.face}" alt="${user.name}"></p>
                      <p>Character No: ${user.collectionNo}</p>
                      <p>Name: ${user.name}</p>
                      <p>Attack: ${user.atkMax} DMG </p>
                      <p>Health: ${user.hpMax} HP</p>
                      <p>Stars: ${user.rarity}</p>
                  </div>
              </div>`;
        })
        
        .join("");
        console.log(html);
        
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html); 
        
    })
    
    .catch(error=>{
        console.log(error);
    })
    
}