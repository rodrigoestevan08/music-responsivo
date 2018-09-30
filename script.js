const botaoMenu = document.querySelector('#burger');
const menuFlutuante = document.querySelector('#navegacao');
const botaoMeio = document.querySelector('.sd');
const secaoMeio = document.querySelector('.meio');





function controlarMenu(){
    if(menuFlutuante.style.display === "flex"){
        menuFlutuante.style.display = "";
      }
      else{
        menuFlutuante.style.display = "flex";
      }
    }

    function secaoDoMeio(){
      if(secaoMeio.style.display === "flex"){
        secaoMeio.style.display = "";
      }
      else{
        secaoMeio.style.display = "flex"
      }
    }

    botaoMenu.onclick = controlarMenu;
    botaoMeio.onclick = secaoDoMeio;
