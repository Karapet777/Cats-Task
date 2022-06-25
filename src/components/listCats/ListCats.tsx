import React, { FC } from 'react'
import './ListCats.scss'

interface IProps {
    url: string,
}

const ListCats: FC<IProps> = ({ url }) => {
    return (
        <div className='ListCats-app'>
            <img src={url} alt='cat Img'/>
        </div>
    )
}

export default ListCats
