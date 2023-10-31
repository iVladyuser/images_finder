import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImage } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
 

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const {
      selectedPhoto: { largeImageURL, tags },
    } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImage>
          <img src={largeImageURL} alt={tags} />
        </ModalImage>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
