import React, {Component, useEffect, useState} from "react";
import './News.css';
import NewsList from './ArticlesLists/NewsList';
import ParticleBackground from '../ParticleBackground';


const News = () => {

  const [items, setItems] = useState([]);
  const [items20, setItems20] = useState([]);
  const [items30, setItems30] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [buttonSelected, setButtonSelected] = useState('items');
  

  useEffect(()=>{
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=10')
      .then(response => response.json())
      .then(setItems)
      .then(()=>setIsLoaded(true))
      .catch(()=>setIsLoaded(false));
      console.log(items);
  }, []);

  useEffect(()=>{
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=20')
      .then(response => response.json())
      .then(setItems20)
      .then(()=>setIsLoaded(true))
      .catch(()=>setIsLoaded(false));
      console.log(items);
  }, []);

  useEffect(()=>{
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
      .then(response => response.json())
      .then(setItems30)
      .then(()=>setIsLoaded(true))
      .catch(()=>setIsLoaded(false));
      console.log(items);
  }, []);



   const addFavorite = (article) => {
    const helperList = favorites.filter(
			(favorite) => favorite.id !== article.id
		);
		const newFavouriteList = [...helperList, article];
		setFavorites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
  };

  const removeFavourite = (article) => {
		const newFavouriteList = favorites.filter(
			(favorite) => favorite.id !== article.id
		);

		setFavorites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  useEffect(() => {
		const articleFavourites = JSON.parse(
			localStorage.getItem('favourites')
		);

		if (articleFavourites) {
			setFavorites(articleFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('favourites', JSON.stringify(items));
	};


    return ( 
      <div class="container-news">
        <div id="container-buttons">
        <button id="favorites-button" onClick={()=>setButtonSelected('favorites')}>FAVORITES</button>
        <button id="articles-button" onClick={()=>setButtonSelected('items')}>ARTICLES</button>
        <button id="articles-button" onClick={()=>setButtonSelected('items20')}>DISPLAY 20</button>
        <button id="articles-button" onClick={()=>setButtonSelected('items30')}>DISPLAY 30</button>
        </div>
        <hr></hr>
        {(() => {
        switch (buttonSelected) {
          case 'items':
            return (<NewsList articles={items} effectOnClick={addFavorite} favorites={favorites}/>);
          case 'favorites':
            return (<NewsList articles={favorites} effectOnClick={removeFavourite} favorites={favorites}/>);
          case 'items20':
              return (<NewsList articles={items20} effectOnClick={addFavorite} favorites={favorites}/>);
          case 'items30':
                return (<NewsList articles={items30} effectOnClick={addFavorite} favorites={favorites}/>);
          default:
            return (<NewsList articles={items} effectOnClick={addFavorite} favorites={favorites}/>);
        }
      })()}
      <ParticleBackground style='news'/>
      </div>
    );
  }

export default News;