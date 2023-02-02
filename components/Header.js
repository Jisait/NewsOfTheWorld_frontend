import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { YoutubeOutlined, TwitterOutlined, InstagramOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguageToStore } from '../reducers/language';

function Header() {

  const countryList = [
    { country: "Fra", language: "fr-FR", image: "/france.png" },
    { country: "Ger", language: "de-GE", image: "/germany.png" },
    { country: "UK",  language: "en-UK", image: "/united-kingdom.png" },
    { country: "USA", language: "en-US", image: "/united-states.png" },
    { country: "Esp", language: "es-ES", image: "/spain.png" },
  ];

  const dispatch = useDispatch();
  const countryFromReducer = useSelector((state) => state.language.value.country);

  const addLanguage = (country, language) => {
    dispatch(addLanguageToStore({country: country, language: language}));
  };
console.log("langueHeader", countryFromReducer)
let prout = countryFromReducer == "Fra" ? "Le Monde" : countryFromReducer == "Ger" ? "Bild" : countryFromReducer == "USA" ? "The Washington Post" : countryFromReducer == "Ger" ? "Bild" : countryFromReducer == "UK" ? "Business Insider" : ""

const country = countryList.map((data,i) => {
  let iconStyle = data.country == countryFromReducer ? styles.flagSelected : styles.flag 
 

  return (
    <Link href={`/${data.country}`}>
      <img
        onClick={() => addLanguage(data.country, data.language)}
        className={iconStyle}
        src={data.image}
      />
    </Link>
  );
})

  return (
    <div>
      <main className={styles.header}>
        <div className={styles.logos}>
          <div className={styles.follow}>follow us : </div>
          <YoutubeOutlined
            style={{ marginLeft: "5x", fontSize: "22px", color: "grey" }}
          />
          <TwitterOutlined
            style={{ marginLeft: "10px", fontSize: "22px", color: "grey" }}
          />
          <InstagramOutlined
            style={{ marginLeft: "10px", fontSize: "22px", color: "grey" }}
          />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>News Of The World</h1>
          <h2 className={styles.paperTitle}>{prout}</h2>
        </div>
        <div className={styles.flags}>{country}</div>
      </main>
    </div>
  );
}

export default Header;
