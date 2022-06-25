import { useEffect } from 'react'

import { changeCategoryId, getCatData, getCotegoryCats, selectCatCategory, selectCategoryId, selectLoading } from '../../features/cats/catsSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export const useNavBar = () => {
    const dispatch = useAppDispatch()
    const gategory = useAppSelector(selectCatCategory)
    const loading = useAppSelector(selectLoading)
    const selectCatCategoryId = useAppSelector(selectCategoryId)

    useEffect(() => {
        dispatch(getCotegoryCats(1))
        dispatch(getCatData({ limit : 10, id: selectCatCategoryId }))
    }, [])

    const getCatsData = (limit: number, id :number) => {
        dispatch(getCatData({ limit, id }))
        dispatch(changeCategoryId(id))
    }
    
    return {
        gategory,
        getCatsData,
        loading,
    }

}