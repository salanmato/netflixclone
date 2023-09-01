import React, { useEffect, useState } from "react";
import Tmdb from "./api/Tmdb";
import MovieRow from "./api/components/MovieRow/MovieRow";
import './App.css'
import FeaturedMovie from "./api/components/FeaturedMovie/FeaturedMovie";
import Header from "./api/components/Header/Header";

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      //cathing movie lists
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //cathing featured
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)) 
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getmovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })
  
  return (
    <div className="page">
      <Header black={blackHeader}></Header>

      {featuredData && <FeaturedMovie item={featuredData}/>}
      
      <section className="lists">
        {movieList.map((item, key) =>( 
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer> Feito seguindo o tutorial <a href="https://www.youtube.com/watch?v=tBweoUiMsDg&t=175s&ab_channel=BoniekyLacerda">🔥 Clone do NETFLIX em REACTJS para Iniciantes</a></footer>
    </div>
  )
}

