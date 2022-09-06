import * as styles from "./styles";
import { ReactSVG } from "react-svg";

interface CardProps {
  img: string;
  title: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ img, title, location }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={img} />
        <button className={styles.likeButton}>
          <ReactSVG src="/icons/like.svg" />
        </button>
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.location}>
        <ReactSVG src="/icons/map.svg" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
