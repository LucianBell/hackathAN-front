'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Contribuicao() {
  const [loading, setLoading] = useState(true);
  const [itens, setItens] = useState([]);

  const loadItens = () => {
    const options = {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}};
    axios.get('http://localhost:8080/main/itens', options).then((res) => {
      setItens(res.data);
      console.log(res.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      alert('Erro ao carregar itens');
    });
  }

  useEffect(() => {
    console.log(itens)
  }, [itens])

  useEffect(() => {
    loadItens();
  }, [])

  return (
    /*
    <form>
      <div class="search-bar">
        <div style="height: 110px"></div>
        <input type="search" placeholder="Digite para pesquisar..." />
      </div>
      <div class="four-segments">
        <div class="segment">
          <label for="codRef">Cod de Referência</label>
          <input
            type="text"
            id="codRef"
            placeholder="Digite o código de referência..."
          />
        </div>
        <div class="segment">
          <label for="repositorio">Repositório</label>
          <div class="radio">
            <input type="radio" id="arquivoNacional" />
            <label for="arquivoNacional">Arquivo Nacional</label>
          </div>
        </div>
        <div class="segment">
          <label for="ordenacao">Ordenação</label>
          <div class="radio">
            <input type="radio" id="relevancia" name="ordenacao" />
            <label for="relevancia">Relevância</label>
          </div>
          <div class="radio">
            <input type="radio" id="cronologia" name="ordenacao" />
            <label for="cronologia">Cronologia</label>
          </div>
          <div class="radio">
            <input type="radio" id="titulo" name="ordenacao" />
            <label for="titulo">Título</label>
          </div>
          <div class="radio">
            <input type="radio" id="codRefCheck" name="ordenacao" />
            <label for="codRefCheck">Código de Referência</label>
          </div>
        </div>
        <div class="segment">
          <label for="nivel">Nível</label>
          <div class="radio">
            <input type="radio" id="todosOsNiveis" name="nivel" />
            <label for="todosOsNiveis">Todos os níveis</label>
          </div>
          <div class="radio">
            <input type="radio" id="fundoColecao" name="nivel" />
            <label for="fundoColecao">Fundo/Coleção</label>
          </div>
          <div class="radio">
            <input type="radio" id="secaoSubsecao" name="nivel" />
            <label for="secaoSubsecao">Seção/Subseção</label>
          </div>
          <div class="radio">
            <input type="radio" id="serieSubserie" name="nivel" />
            <label for="serieSubserie">Série/Subsérie</label>
          </div>
          <div class="radio">
            <input type="radio" id="dossie" name="nivel" />
            <label for="dossie">Dossiê</label>
          </div>
          <div class="radio">
            <input type="radio" id="item" name="nivel" />
            <label for="item">Item</label>
          </div>
          <div class="radio">
            <input type="radio" id="fundoSubserie" name="nivel" />
            <label for="fundoSubserie">Fundo/Subsérie</label>
          </div>
          <div class="radio">
            <input type="radio" id="dossieItem" name="nivel" />
            <label for="dossieItem">Dossiê/Item</label>
          </div>
        </div>
      </div>
      <button class="ok-button" type="submit">pesquisar</button>
    </form>
    <div
      id="artigo"
      name="artigo"
      style="
        margin: 20px;
        padding: 20px;
        border: 1px solid #ddd;
        margin-top: 100px;
        margin-bottom: 50px;
      "
    >
    */

    <main className=' bg-white'>
      <h1>Comece a contribuir!</h1>

      <h2>Escolha um arquivo:</h2> 

      {loading ? (<p>Carregando...</p>) : (
        <section>
        <h3>Audiovisuais</h3>

        <div>
          {
            itens.filter((item) => item.tipo == 'AUDIOVISUAL').map((item) => {
              return (
                <div key={item.id}>
                  <iframe src={item.linkItem} width="560" height="315"></iframe>
                </div>
              )
            })
          }
        </div>

        <h3>Cartográficos</h3>

        <div>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>

        <h3>Iconográficos</h3>

        <div>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>

        <h3>Sonoros</h3>

        <div>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>

        <h3>Textuais</h3>

        <div>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>
      </section>
      )}
    </main>
  );
}
