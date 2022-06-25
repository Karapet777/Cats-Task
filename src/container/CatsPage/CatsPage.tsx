import React from 'react'
import ListCats from '../../components/listCats/ListCats'
import { useCatsPage } from './useCatsPage'

import './CatsPage.scss'

const CatsPage = () => {
  const { loading, catData, moreHandler } = useCatsPage()

  return (
    <div>
      <div className='CatsPage-app'>
        {loading ? 'Loading...' :
          catData.map((cat: any) => {
            return <div key={cat.id}>
              <ListCats url={cat.url} />
            </div>
          })
        }
      </div>
      <button className='CatsPage-app_moreBtn' onClick={moreHandler}>More</button>
    </div>
  )
}

export default CatsPage
