import { createPortal } from 'react-dom';
import { Overlay, ModalImage } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ selectedPhoto: { largeImageURL, tags }, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onCloseModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalImage>
        <img src={largeImageURL} alt={tags} />
      </ModalImage>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
