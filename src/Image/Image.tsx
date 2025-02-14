import React from 'react';
import s from './Image.module.css'

const Image = ({ image }) => {
    return (
        <div className={s.wrapper}>
            {image ? <img src={image} alt='newsImage' className={s.image} /> : <div>Ошибка получения изображения</div>}
        </div>
    );
};

export default Image;