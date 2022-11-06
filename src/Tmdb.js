/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "a96c08f7e41ab088670af39f2d9e12a9";
const API_BASE = "https://api.themoviedb.org/3";

/*
 Lista de seriados originais da netflix
 > Originais 
 > Recomendados (trending)
 > em alta (top rated)
 > ação
 > comédia
 > terror
 > romance
 > documentários

*/

// Função para pegar os dados da API
const basicFetch = async (endpoint) => {
     const req = await fetch(`${API_BASE}${endpoint}`);
     const json = await req.json();
     return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: []
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: []
      },
      {
        slug: 'acao',
        title: 'Ação',
        items: []
      },
      {
        slug: 'comedia',
        title: 'Comédia',
        items: []
      },
      {
        slug: 'terror',
        title: 'Terror',
        items: []
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: []
      },
      {
        slug: 'documentarios',
        title: 'Documentários',
        items: []
      }
    ];
  },
};
