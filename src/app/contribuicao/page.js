'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Contribuicao() {

  const statiData = [
    {
        "id": 1,
        "codReferencia": "BR_RJANRIO_SG_O_JIN_0020_d0001de0001",
        "tipoItem": "SONOROS",
        "linkItem": "https://drive.google.com/file/d/1iJ9X_QxyCHUfHUy-S0CQHyP-Bz6PGc9b/preview"
    },
    {
        "id": 2,
        "codReferencia": "BR_RJANRIO_J3_0_DSO_0001_d0002de0002",
        "tipoItem": "SONOROS",
        "linkItem": "https://drive.google.com/file/d/1hFsWBxQUCBLoNW7g7uBNCjpYKc2kbOb7/preview"
    },
    {
        "id": 3,
        "codReferencia": "BR_RJANRIO_J3_0_DSO_0001_d0001de0002",
        "tipoItem": "SONOROS",
        "linkItem": "https://drive.google.com/file/d/1c7RyKKgFLYKqEQL1EDwKX_CqDbSjJOmc/preview"
    },
    {
        "id": 4,
        "codReferencia": "BR_RJANRIO_HG_0_0_0064_d0002de0002",
        "tipoItem": "SONOROS",
        "linkItem": "https://drive.google.com/file/d/1H81sFS-gQRAc8l9cXLlqfsUeAv4A4K3I/preview"
    },
    {
        "id": 5,
        "codReferencia": "BR_RJANRIO_HG_0_0_0064_d0001de0002",
        "tipoItem": "SONOROS",
        "linkItem": "https://drive.google.com/file/d/176ELymlCVU24KBYg4qhOOlNgRTM4vN9O/preview"
    },
    {
        "id": 6,
        "codReferencia": "BR_RJANRIO_NO_0_FIL_1724_d0001de0001",
        "tipoItem": "AUDIOVISUAL",
        "linkItem": "https://drive.google.com/file/d/14zyAJ0umOwiq-C9m1bjF3CHJVAu3PMX2/preview"
    },
    {
        "id": 7,
        "codReferencia": "BR_RJANRIO_NO_0_FIL_1701_d0001de0001",
        "tipoItem": "AUDIOVISUAL",
        "linkItem": "https://drive.google.com/file/d/1DeDxDgbfgLF2bkSk8VOoejCC4-eenoF5/preview"
    },
    {
        "id": 8,
        "codReferencia": "BR_RJANRIO_NO_0_FIL_1700_d0001de0001",
        "tipoItem": "AUDIOVISUAL",
        "linkItem": "https://drive.google.com/file/d/1HhfMJhpJ4Fi3_qx0iWdpsTcTUHgxWK7v/preview"
    },
    {
        "id": 9,
        "codReferencia": "BR_RJANRIO_NK_0_RAV_0015_d0001de0001",
        "tipoItem": "AUDIOVISUAL",
        "linkItem": "https://drive.google.com/file/d/1SHMPy7dXDeaKmHmlN4710p6aFNTAmLzc/preview"
    },
    {
        "id": 10,
        "codReferencia": "BR_RJANRIO_NK_0_RAV_0002_d0001de0001",
        "tipoItem": "AUDIOVISUAL",
        "linkItem": "https://drive.google.com/file/d/1x8OIZKLxdv3_e9XjQQEJ_vXJJb029j4p/preview"
    },
    {
        "id": 11,
        "codReferencia": "BR_RJANRIO_U0_0_MAP_0013_d0001de0001",
        "tipoItem": "CARTOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1MKnOQpAV6uxo8YiLdGg-43gOcz7ZxMOd/preview"
    },
    {
        "id": 12,
        "codReferencia": "BR_RJANRIO_PH_0_MAP_0074_d0001de0001",
        "tipoItem": "CARTOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1ZFYz0g9K8S-x_P_DBm5jxE-laGsVwzoR/preview"
    },
    {
        "id": 13,
        "codReferencia": "BR_RJANRIO_HK_0_MAP_0013_d0001de0001",
        "tipoItem": "CARTOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1nXyl7DRqGu-nR0ZCgae5chIVLpFZCJ1k/preview"
    },
    {
        "id": 14,
        "codReferencia": "BR_RJANRIO_F2_0_MAP_0467_d0001de0001",
        "tipoItem": "CARTOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1_UIQNOneKuSBJ_xT8KhSkN41EaG9efC2/preview"
    },
    {
        "id": 15,
        "codReferencia": "BR_RJANRIO_F2_0_MAP_0316_d0003de0005",
        "tipoItem": "CARTOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1G3ScSn4gzAieIEOBAgzaknjr1iL7FxR7/preview"
    },
    {
        "id": 16,
        "codReferencia": "BR_RJANRIO_PH_0_FOT_23005_001V",
        "tipoItem": "ICONOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1k1e-btPQEOTvsZpLGvLSC9vzRKVSbKbj/preview"
    },
    {
        "id": 17,
        "codReferencia": "BR_RJANRIO_PH_0_FOT_23005_001",
        "tipoItem": "ICONOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1b9ebbkzQSTNFL3UwFWR2KqJn8o-kTSvG/preview"
    },
    {
        "id": 18,
        "codReferencia": "BR_RJANRIO_PH_0_FOT_05059_d0001Vde0001",
        "tipoItem": "ICONOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1gwMY7UA4bCEEDkDB2eeAvKhgkKXbN6Yj/preview"
    },
    {
        "id": 19,
        "codReferencia": "BR_RJANRIO_PH_0_FOT_05059_d0001de0001",
        "tipoItem": "ICONOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1XUmEP6Uphi55Oinkgy76IbHLr8Q1rlsC/preview"
    },
    {
        "id": 20,
        "codReferencia": "BR_RJANRIO_PH_0_FOT_03243_001V",
        "tipoItem": "ICONOGRAFICO",
        "linkItem": "https://drive.google.com/file/d/1wNVVidM6FmZ0cl4Q5a2xdIY_rnpxYIKJ/preview"
    }
  ]

  const router = useRouter();

  const handleClicl = (id) => {
    router.push(`/item`);
  }

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

        <section>
        <h3>Audiovisuais</h3>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[0].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[1].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[2].codReferencia}</p>
          </button>
        </div>

        <h3>Cartográficos</h3>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[5].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[6].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[7].codReferencia}</p>
          </button>
        </div>

        <h3>Iconográficos</h3>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[10].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[11].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[12].codReferencia}</p>
          </button>
        </div>

        <h3>Sonoros</h3>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[15].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[16].codReferencia}</p>
          </button>
          <button onClick={()=>handleClicl(1)}>
            <p>{statiData[17].codReferencia}</p>
          </button>
        </div>
      </section>
    </main>
  );
}
