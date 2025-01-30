import React, { useEffect, useState,} from 'react'
import { useLoaderData } from 'react-router'


function Github() {
    const data = useLoaderData()
    // const [data,setData] =useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(reponse => reponse.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }
// )
  return (
    <div className=' flex justify-center bg-orange-700 text-white text-3xl m-3 p-3'>
      Github Followers:{data.followers}
      <img className='grid justify-items-start rounded-full' src={data.avatar_url} alt ="Github picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    return response.json()
}