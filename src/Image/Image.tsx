import s from './Image.module.css'

interface Props {
    image: string
}

const Image = ({ image }: Props) => {
    return (
        <div className={s.wrapper}>
            {image ? <img src={image} alt='newsImage' className={s.image} /> : <div>Ошибка получения изображения</div>}
        </div>
    );
};

export default Image;