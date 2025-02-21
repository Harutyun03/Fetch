
import { Routes,Route } from 'react-router-dom'
import { useEffect,useState } from 'react'
import './App.css'
import Header from './Componets/Header.jsx/Header'
import Products from './Componets/Products.jsx/Products'

function App() {
  
  const[records,setRecords]= useState([])

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err)
      )
  },[])



  return (
    
      <div>
        <Routes>
          <Route path='/' element={<Header products={records}/>}/>
          <Route path='/prod/:id' element={<Products products={records}/>}/>
        </Routes>
      </div>
    
  )
}

export default App
