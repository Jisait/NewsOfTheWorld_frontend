import styles from '../styles/RightColumn.module.css';
import { useSelector } from 'react-redux';

function RightColumn(props) {

  const language = useSelector((state) => state.language.value.language);

  const utcDate = props.publishedAt
 /*  const countryFormat = ["fr-FR", "de-GE", "en-UK", "en-US", "es-SP"]; */
  const date = new Date(utcDate);

let optionsToday = {
    hour: '2-digit', minute: 'numeric',
    hour12: true,
    timeZone: 'Europe/Paris'
  };

let options = {
 month: 'long', day: 'numeric' , hour: 'numeric', minute: 'numeric',
};
  let cleanDate = new Intl.DateTimeFormat(language, options).format(date)

  if ( date.getDate() === new Date(Date.now()).getDate() && date.getMonth()=== new Date(Date.now()).getMonth()) {
    cleanDate = new Intl.DateTimeFormat('en-US', optionsToday).format(date)}
  
  return (
    <div>
      <div className={styles.date}>
      {cleanDate}
      </div>
      <div className={styles.columnPosition}>
      {props.title}
      </div>
      <div className={styles.trait}></div>
    </div>
  );
}

export default RightColumn;
