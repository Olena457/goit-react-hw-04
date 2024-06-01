import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div key={image.id} onClick={() => onClick(image)}>
      {/* <img src={image.webformatURL} alt={image.tags} /> */}
      <img
        className={css.ItemImg}
        src={image.urls.small}
        alt={image.slug}
        id={image.id}
      />
      {/* <p>{image.description}</p> */}
    </div>
  );
};

export default ImageCard;
