import { FC } from 'react'
import { useNavBar } from './useNavBar'


import './NavBar.scss'


const NavBar: FC = () => {
    const { gategory, getCatsData, loading } = useNavBar()

    return (
        <div className='NavBar-App'>
            <div className='NavBar-App_block'>
                {loading ? <div>Loading....</div> :
                    gategory.map(({ name, id }) => {
                        return <button 
                            onClick={() => { 
                                getCatsData(10, id)}
                            } 
                            className='NavBar-App_block_btn' 
                            key={name}
                            >
                                {name}
                            </button>
                    })
                }
            </div>
        </div>
    )
}

export default NavBar
