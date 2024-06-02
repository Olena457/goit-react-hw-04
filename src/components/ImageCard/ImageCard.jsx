import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      {/* <img src={image.webformatURL} alt={image.tags} /> */}
      <img
        className={css.itemImg}
        src={image.urls.small}
        alt={image.slug}
        key={image.id}
        onClick={() => onClick(image)}
      />
      {/* <p>{image.description}</p> */}
    </div>
  );
};

export default ImageCard;
