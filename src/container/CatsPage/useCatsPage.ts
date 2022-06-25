import { useEffect, useState } from 'react';

import { getCatData, selectCatData, selectCategoryId, selectLoading } from '../../features/cats/catsSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export const useCatsPage = () => {
    const dispatch = useAppDispatch()
    const catData = useAppSelector(selectCatData)
    const loading = useAppSelector(selectLoading)
    const categoryId = useAppSelector(selectCategoryId)
    const [limit, setLimit] = useState(10)

    const moreHandler = () => {
        setLimit((prevState) => {
            return prevState + 10
        })
    }

    useEffect(() => {
        setLimit(10)
    }, [categoryId])

    useEffect(() => {
        dispatch(getCatData({ limit, id: categoryId}));
    }, [limit])

    return {
        catData,
        loading,
        moreHandler,
    }
}