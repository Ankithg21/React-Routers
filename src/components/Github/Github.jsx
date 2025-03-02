import React, { useState, useEffect } from 'react'


function Github() {
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/ankithg21')
        .then((response)=>response.json())
        .then((data)=>{
            setData(data);
        })
    }, []);
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub Followers:{data.followers}
        <br />
        GitHub Following:{data.following}
        <img src={data.avatar_url} alt="pic" width={300} />
    </div>
  )
}

export default Github;
