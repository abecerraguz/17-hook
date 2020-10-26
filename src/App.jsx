import React, { useState, useEffect } from 'react'

const App = () => {
  const [post, setPost] = useState([])
    // Creamos otro estado que guarde el ID
    const [id, setId] = useState(1);

  useEffect(() => {
      const getPost = async () => {
      const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await res.json()
      setPost(data)
    }

    getPost()
  }, [id]);

    const handlePrevId = () => {
      if(id > 1) setId(id -1);
    }

    const handleNexId = () => {
      setId(id + 1);
    }

  return (
    <>
      <h1>{post.title}</h1>
      <h6>{post.id}</h6>
      <p>{post.body}</p>
      <button onClick={handlePrevId}>Prev ID</button>
      <button onClick={handleNexId}>Next ID</button>
    </>
  );
}


export default App;