const API_KEY = 'bc34ec85d030c246cd2696a6aaa6ef72'
const API_BASE = 'https://api.themoviedb.org/3'


/*
 - Originais Netflix
 - Recomendados (Filmes em destaque / Trending)
 - Em alta (Top rated)
 - Ação
 - Comédia
 - Terror
 - Romance
 - Documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?&api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            }
        ]
    },

    getmovieInfo: async (movieID, type) => {
        let info = {}

        if(movieID){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieID}?api_key=${API_KEY}`)
                break
                
                case 'tv':
                    info = await basicFetch(`/tv/${movieID}?api_key=${API_KEY}`)
                break
            }
        }

        return info
    }
}