/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

       
         const botoesCarrossel = document.querySelectorAll('.botao');
         const imagens = document.querySelectorAll('.imagem');
       
         botoesCarrossel.forEach((botao,indice) => {
         botao.addEventListener('click', () => {
          
        
         const botaoSelecionado = document.querySelector('.selected');
         botaoSelecionado.classList.remove('selected');   
        
         botao.classList.add('selected');   
         
         const imagemAtiva = document.querySelector(`.ativa`);
         imagemAtiva.classList.remove('ativa');

         imagens[indice].classList.add('ativa');
    })


    })
    
       
       
      
      

        
      