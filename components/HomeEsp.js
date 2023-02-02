import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from './Header'
import TopNews from './TopNews'
import RightColumn from './RightColumn'
import OtherNews from './OtherNews'
import HorizontalScroll from "react-scroll-horizontal";
import { useSelector, useDispatch } from 'react-redux';
import { addLanguageToStore } from '../reducers/language';



function Home() {

  const country = useSelector((state) => state.language.value.country);
  const dispatch = useDispatch();
  const [articlesData, setArticlesData] = useState([]);
  const [topArticle, setTopArticle] = useState({});

  useEffect(() => {
    fetch(`https://news-of-the-world-backend-jisait.vercel.app/Spa`)
      .then(response => response.json())
      .then(data => {
        dispatch(addLanguageToStore({country: "Esp", language: "es-ES"}));
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.filter((data, i) => i > 0));
      });
  }, [country]);

 

  const rightColumn = articlesData.map((data, i) => {
    return <RightColumn key={i} {...data} />;
  });

  const otherNews = articlesData.map((data, i) => {
    return <OtherNews key={i} {...data} />;
  });



  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.leftColumn}></div>
      <div className={styles.topNews}>
        <TopNews {...topArticle}/>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.filInfo}>FLASH ACTU</div>
      {rightColumn}
      </div>
      <HorizontalScroll  className={styles.otherNews}>
      {otherNews}
       </HorizontalScroll>
      <div className={styles.farRightColumn}></div>

   
    </div>
  );
}

export default Home;
