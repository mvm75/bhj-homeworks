for (let i = 1; i < 10; i++){
    const dead  = document.getElementById("dead");
    const lost = document.getElementById("lost");
    let number ='hole' + i;
    const hole = document.getElementById(number);
 
    hole.onclick = function() {
       if (hole.className.includes('hole_has-mole')) {
          dead.textContent ++;
          } else {
          lost.textContent ++;
          }
       if (dead.textContent === "5") {
          update ("Вы победили!")
 
          }
       if (lost.textContent === "10") {
          update ("Вы проиграли!")
          } 
    } 
    
    function update (text) {
       alert(text);
       dead.textContent = 0;
       lost.textContent = 0;
    }
 }
 