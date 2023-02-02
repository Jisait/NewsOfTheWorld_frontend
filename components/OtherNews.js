import styles from '../styles/OtherNews.module.css';

function OtherNews(props) {
  return (
    <div>
      <div  className={styles.container}>
      <img className={styles.image} src={props.urlToImage}/>
      <div className={styles.article}>{props.title}</div>

      </div>
    </div>
  );
}

export default OtherNews;
