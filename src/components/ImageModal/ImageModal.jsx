// import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const ImageModal = ({ modalIsOpen, onRequestClose, image }) => {
  return (
    <Modal
      className={css.modalContainer}
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      {image && (
        <div className={css.modalImg}>
          <img
            className={css.modalImg}
            src={image.urls.regular}
            alt={image.slug}
          />
          <div>
            <ul className={css.imgDescription}>
              <li>{/* <p>{image.tags}</p> */}</li>
              <li>
                <p>{image.description || 'No description'}</p>
              </li>
              <li>
                <p>By: {image.user.name}</p>
              </li>
              <li>
                <p>Likes: {image.user.likes}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
};
export default ImageModal;