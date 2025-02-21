import { useParams, useNavigate} from 'react-router-dom'
import './Products.css'

function Products(props){
    const {id} = useParams()

  const product = props.products.find((el) => el.id === +id)

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return(
    <div className='list'>
        <h2>{product.title}</h2>
        <img src={product.image} className='image'/>
        <p>{product.description}</p>
        <span>Price:{product.price}$</span>
        <div className='btngroup'>

        <button type='submit' onClick={goBack} className='btn'>Go back</button>

        </div>
    </div>
  )
}

export default Products