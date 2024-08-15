import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import  config from '../utils/config';

const NewsMag = ({ category }) => {

    
  const [ articles,setArticles ] = useState([]); 

  useEffect(  ()=>{
    
       fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${config.API_KEY}`)
        .then((response) => response.json())
        .then(data => {
          setArticles(data.articles);
        } )
  },[category]);

  return (
    <div>
      <h2 className='text-center'> Latest <span className="badge bg-danger">News</span> </h2>
      {
        articles.map((news , index ) => {
          return <NewsItem key={ index  }  title={ news.title } description={news.description} imageUrl={ news.urlToImage} url={news.url}/>
        })
      }
    </div>
  )
}

export default NewsMag