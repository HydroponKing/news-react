import s from './NewsList.module.css'
import NewsItem from "../NewsItem/NewsItem.tsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import {INews} from "../../interfaces";

interface Props {
    news?: INews[]
}

const NewsList = ({ news }: Props) => {
    return (
        <ul className={s.list}>
            {news?.map(item => {
                return <NewsItem key={item.id} item={item}/>
            }) }
        </ul>
    );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 5)

export default NewsListWithSkeleton;