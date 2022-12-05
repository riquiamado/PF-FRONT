
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProviders,clean} from '../../redux/actions/actions'
import Cards from '../cards'
import SearchBar from '../searchBar'


function Home() {

    const allProviders = useSelector((state) => state.provider)
    const providers = useSelector((state)=> state.allProviders)
     console.log(allProviders)
    const dispatch = useDispatch()

    useEffect(() => {
        if(allProviders.length===providers.length){

            dispatch(getProviders())
        }
        return dispatch(clean())

    }, [dispatch])


    return (
        <div>
           {/* <SearchBar/> */}
            <div>
                {
                   allProviders?.map((el,index)=>  {
                        return(
                            <div key={index}>
                             <Cards
                             _id={el._id}
                             name={el.name}
                             email={el.email}
                             service={el.service}
                             />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h1>Tuki tuki tuki</h1>
            </div>
        </div>
    )
}

export default Home