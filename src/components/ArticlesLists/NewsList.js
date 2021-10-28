import React from "react";
import EmptyHeart from '../../emptyheart.svg';
import FilledHeart from '../../filledheart.svg';
import './NewsList.css';

const NewsList = (props) => {
 var helperArray = props.favorites;
 
 const showArticle=(event)=>{
  var d = event.currentTarget.children;
  var e = d[0].children
  var c = d[1].children
  if(c[2].style.display == 'none' && c[2].textContent.length>=280){
    c[2].style.display='block';
    c[3].style.display='block';
    event.currentTarget.style.height='35vh';
    e[0].style.height= '35vh';
  }else if(c[2].style.display == 'none' && c[2].textContent.length<280){
    c[2].style.display='block';
    c[3].style.display='block';
    event.currentTarget.style.height='25vh';
    e[0].style.height='25vh';
  }else{
    c[2].style.display = 'none';
    c[3].style.display = 'none';
    e[0].style.height='15vh';
    event.currentTarget.style.height='15vh';
  }

 }


    return ( 
      <>
              {props.articles.map((item) =>(
              <div className="news-article" onClick={(e)=>showArticle(e)}>
                <div>
                <img id="article-image" src={item.imageUrl} alt="articleImage"></img>
                </div>
                  <div id="article-content">
                    <h2>{item.title}</h2>
                    <p>{"Published: "+item.publishedAt.substr(0,10) + " at " + item.publishedAt.substr(11,5)}</p>
                    <p id="article-text">{item.summary}</p>
                    <a id="article-link" href={item.url}><p>READ MORE</p></a>
                  </div>

                {(() => {
                if (localStorage.getItem('favourites').toString().includes(item.id)){
                    return <div id="heart-icon"><img  alt="filledHeart" src={FilledHeart} onClick={()=>props.effectOnClick(item)}></img></div>;
                }else{
                    return <div id="heart-icon"><img  alt="emptyHeart" src={EmptyHeart} onClick={()=>{props.effectOnClick(item)}}></img></div>
                }})()}
              </div>
              ))};
      </>
    );
  }

export default NewsList;