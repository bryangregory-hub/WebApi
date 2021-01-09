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