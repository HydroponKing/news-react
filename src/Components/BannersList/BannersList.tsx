import s from './BannersList.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import NewsBanner from "../NewsBanner/NewsBanner.tsx";
import { INews } from '../../interfaces/index.ts';

interface Props {
    banners?: INews[] | null
}

const BannersList = ({ banners }: Props) => {
    return (
        <ul className={s.banners}>
            {banners?.map(banner => {
                return <NewsBanner key={banner.id} item={banner} />

            })}
        </ul>
    );
};

const BannerListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row')

export default BannerListWithSkeleton;