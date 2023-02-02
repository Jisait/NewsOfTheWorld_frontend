import styles from '../styles/TopNews.module.css';
import { useSelector, useDispatch } from 'react-redux';

function TopNews(props) {

const country = useSelector((state) => state.language.value.country);
let authorCountry = country == "Fra" ? "de" : country == "Esp" ? "por" : country == "Ger" ? "von" : country == "USA" || country == "UK" ? "by" : ""

let sourceName = props.source != undefined ? props.source.name : "";  

  let cleanDate = ""

if(props.publishedAt != undefined) {
  const utcDate = props.publishedAt
  const date = new Date(utcDate);
      let options = {
      hour: 'numeric', minute: 'numeric',
      hour12: true,
      timeZone: 'Europe/Paris'
    };

  cleanDate = new Intl.DateTimeFormat('fr-FR', options).format(date)
}


return (
    <div className={styles.container}>
      <img className={styles.image} src={props.urlToImage}/>
      <div className={styles.articleContainer}>
        <div className={styles.info}>
          <div className={styles.media}>{sourceName}</div>
          <div className={styles.date}>{cleanDate.toLowerCase()}</div>
        </div>
       <h1 className={styles.desc}>{props.title}</h1>
       <p className={styles.author}>{authorCountry} {props.author}</p>
      </div>
    </div>
  );
}

export default TopNews;
