import Pagination from "../Pagination/Pagination.tsx";
import {ReactNode} from "react";
import {IPaginationProps} from "../../interfaces";
interface Props {
    top?: boolean
    bottom?: boolean
    children: ReactNode
}

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }: Props & IPaginationProps) => {
    return (
        <>
            {top && <Pagination { ...paginationProps }/>}
                {children}
            {bottom && <Pagination { ...paginationProps }/>}
        </>
    );
};

export default PaginationWrapper;