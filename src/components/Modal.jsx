import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modalRoot');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = evt => {
      if (evt.code === 'Escape') {
        alert(
          'Are you sure you have already changed your contact? If so, click on the button "Change contact".'
        );
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      alert(
        'Are you sure you have already changed your contact? If so, click on the button "Change contact".'
      );
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleOverlay}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
