import React from "react";
import './App.css'
import Relatorio from './Components/Relatorio'



const App = () => {
  
  return(
  <>
     <main>
      
      <div class ="home">
          <div id="home-texto">
              <div id="home-texto_2">
                  <h1>Estoqueasy</h1>
                  <h2>Seu negócio</h2>
          <table class="produtos">
              <tr>
                <th>Nome do produto</th>
                <th >Custo</th>
                <th >Valor</th>
              </tr>
              <tr>
                <td>brinco</td>
                <td >$30</td>
                <td >$40</td>
              </tr>
          </table>
                  <a href="#cadastro" class="btn" id="ir-cadastro">adicionar</a>
                  <a href="#produzir" class="btn" id="ir-produzir">produzir</a>
                  <a href="#relatorio" class="btn" id="ir-relatorio">relatórios</a>
              </div>
          </div>
      </div>
      <div id="cadastro">
          <div id="header">
              <h2>Cadastro de produtos</h2>
            </div>
          <form id="form_produto" class="cadastro_form">
              <label for="nome">Nome do produto</label>
              <input type="text" id="nome" />
              <label for="qtd">Quantidade</label>
              <input type="text" id="number" />
              <label for="custo">Custo</label>
              <input type="text" id="number" />
              <label for="valor">Valor</label>
              <input type="text" id="number" />
              <label for="tipo">Tipo</label>
              <input type="text" id="text" />
              <label for="materia-prima">Matéria-prima 1</label>
              <input type="text" id="text" />
              <label for="materia-prima">Matéria-prima 2</label>
              <input type="text" id="text" />
              <label for="materia-prima">Matéria-prima 3</label>
              <input type="text" id="text" />
              <button type="menu" class="btn">adicionar matéria-prima</button>
              <button type="submit" class="btn">criar</button>
          </form>
  
  
      </div>
  
  
      <div id="produzir">
          <div id="header">
              <h2>Produção</h2>
            </div>
            <h1>Clique produzir para salvar no Estoqueasy</h1>
          <table class="producao">
              <tr>
                <th>Nome do produto</th>
              </tr>
              <tr>
                <td>brinco</td>              
              </tr>            
        </table>
        <button type="menu" onclick="alert('Pouca materia-prima')" class="btn_2">produzir</button>
      </div>
  
        <Relatorio />
  
  
      </main>
  </>  
   
  )
}

export default App;