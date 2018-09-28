const botaoMenu = document.querySelector('#burger');
const menuFlutuante = document.querySelector('#navegacao');





function controlarMenu(){
    if(menuFlutuante.style.display === "flex"){
        menuFlutuante.style.display = "";
      }
      else{
        menuFlutuante.style.display = "flex";
      }
    }

    botaoMenu.onclick = controlarMenu;
