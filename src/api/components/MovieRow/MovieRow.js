import React, { useState } from "react";
import './MovieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () => {
        let x = scrollX + 200
        if(x > 0){
            x = 0
        }

        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - 200
        if(x < (-(window.innerWidth - items.results.length )) - 200){
            x = 0
        }
        setScrollX(x)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{ 
                    marginLeft: scrollX,
                    //esse valor muda de acordo com as dimensões da tela do usuário, no caso, é proporcional ao tamanho lateral das capas dos filmes.
                    width: items.results.length * 300
                 }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}