
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProviders from '../../redux/actions/actions'
import Cards from '../cards'

function Home() {

    const allProviders = useSelector((state) => state.provider)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProviders())

    }, [dispatch])


    return (
        <div>
            <div>
                {allProviders?.map(el => {
                    return (
                        <div key={el}>
                            <Cards
                               id={el._id}
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
                <h1>hola mundo</h1>
            </div>
        </div>
    )
}

export default Home