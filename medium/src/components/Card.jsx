import "../css/components/card.css";

const Card = ({ imgUrl, movieTitle, onSelectCard }) => {
  return (
    <div className="card" onClick={onSelectCard}>
      <div className="card__img">
        <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt="" />
      </div>
      <div className="card__title">
        <h5>{movieTitle}</h5>
      </div>
    </div>
  );
};

export default Card;
