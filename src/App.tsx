import { Error } from "./components/Error"
import Loader from "./components/Loader"
import Product from "./components/Product"
import { useProducts } from "./hooks/products"

const App = () => {
  const {loading,error,products} = useProducts()

  return (
    <div className='w-full flex flex-col justify-center items-center  '>
        {loading && <Loader/> }
        {error && <Error error={error}/>}
        
      {products.map((el)=><Product product={el} key={el.id}/>) }


    </div>
  )
} 

export default App