import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Fetch() {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            console.log(res)
            setPosts(res.data) // render
          })
          .catch(err => {
            console.log(err);
          })
    }, [])

  return (

    <div>
        <ol>            
           {posts.map(name => (
            <li key={name.id}>{name.title}</li>
           ))}
        </ol>
    </div>
  )
}

export default Fetch