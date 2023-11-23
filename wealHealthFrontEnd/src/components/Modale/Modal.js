import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './modal.scss';
const Modal = ({ isActive, text, imgPath, onClose }) => {
    const getImg = imgPath;
    const [isModalOpen, setIsModalOpen] = useState(isActive);
    console.log(isModalOpen);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        window.location.reload(); // Actualiser la page
    };
    useEffect(() => {
        setIsModalOpen(isActive);
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                setIsModalOpen(false);
                onClose();
            }
        };
        isModalOpen ? document.addEventListener('keydown', handleEscapeKey) : document.removeEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isActive, isModalOpen]);
    // console.log(isModalOpen);
    return (_jsxs("dialog", { className: isModalOpen ? 'ModalOpen' : 'ModalClose', children: [getImg ?
                _jsx("img", { src: getImg }) : "", _jsx("div", { className: 'Message', children: text }), _jsx("button", { className: 'CloseModal', onClick: handleCloseModal, children: "x" })] }));
};
export default Modal;
