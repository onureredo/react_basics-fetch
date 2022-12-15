import React, {useState} from 'react'
import axios from 'axios';


function FetchAxios() {
    
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  // const [tags, setTags] = useState('');

  const fetchData = () => {
    axios.get(`https://api.quotable.io/random`)
    .then(res => {
      // console.log(res)
      setContent(res.data.content)
      setAuthor(res.data.author)
      // setTags(res.data.tags)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className='green_line'>
        <h1>{author}</h1>
        <h3><i>{content}</i></h3>
        {/* <p>{tags}</p> */}
        <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default FetchAxios