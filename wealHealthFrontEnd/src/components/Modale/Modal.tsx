import { useEffect, useState } from 'react';
import './modal.scss'

interface ModalProps {
    text: string;
    imgPath: string;
    isActive: boolean
    onClose: () => void;
}
const Modal = ({ isActive, text, imgPath, onClose }: ModalProps) => {
    const getImg = imgPath

    const [isModalOpen, setIsModalOpen] = useState(isActive);


    console.log(isModalOpen);
    const handleCloseModal = () => {
        setIsModalOpen(false)
        window.location.reload(); // Actualiser la page
    }


    useEffect(() => {
        setIsModalOpen(isActive);

        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                setIsModalOpen(false)
                console.log('on est là');
                onClose();
            }
        };
        isModalOpen ? document.addEventListener('keydown', handleEscapeKey) : document.removeEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey)
        };

    }, [isActive, isModalOpen]);

    // console.log(isModalOpen);


    return (

        <dialog className={isModalOpen ? 'ModalOpen' : 'ModalClose'}>
            {getImg ?
                <img src={getImg} /> : ""}
            <div className='Message'>
                {text}
            </div>
            <button className='CloseModal' onClick={handleCloseModal}>x</button>
        </dialog>
    );
}


export default Modal;