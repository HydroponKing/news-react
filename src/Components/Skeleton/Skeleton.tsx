import s from './Skeleton.module.css'
import {DirectionType, SkeletonType} from "../../interfaces";

interface Props {
    count?: number
    type?: SkeletonType
    direction?: DirectionType
}

const Skeleton = ({ count= 1, type="banner", direction= `column` }: Props) => {
    return (
        <>
            {count > 1 ? (
                <ul className={direction === 'column' ? s.columnList : s.rowList}>
                    {[...Array(count)].map((_, index) => (
                        <li key={index} className={type === "banner" ? s.banner : s.item}></li>
                    ))}
                </ul>
            ) : (
                <li className={type === "banner" ? s.banner : s.item}></li>
            )}
        </>
    );
};

export default Skeleton;