import React from 'react';
import s from './BannersList.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import NewsBanner from "../NewsBanner/NewsBanner.jsx";

const BannersList = ({ banners }) => {
    return (
        <ul className={s.banners}>
            {banners?.map(banner => {
                return <NewsBanner key={banner.id} item={banner} />

            })}
        </ul>
    );
};

const BannerListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')

export default BannerListWithSkeleton;