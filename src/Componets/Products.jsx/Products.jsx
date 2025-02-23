import { useParams, useNavigate} from 'react-router-dom'
import './Products.css'
import { useEffect,useState } from 'react'

function Products(props){
    const {id} = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
       fetch(`https://fakestoreapi.com/products/${id}`)
       .then((res) => res.json())
       .then((res) => setData(res))
    },[])


  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return(
    <div className='list'>
    
            
                <h2>{data.title}</h2>
                <img src={data.image} className='image'/>
                <p>{data.description}</p>
               <span>Price:{data.price}$</span>
            
             <div className='btngroup'>
              <button type='submit' onClick={goBack} className='btn'>Go back</button>
            </div>
            
       
      
      </div>


  )
}

export default Products