import data from "../data";
import Rating from "../components/Rating"
import { Link, useParams } from "react-router-dom";

function ProductScreen (){
    const {id} = useParams()
    const product = data.products.find((X)=> X._id === id);
    if(!product){
        return <div> product not found</div>
       
    }
return (
<div>  
<Link to ="/">Back to result</Link> 
    <div className="row top">
        <div className="col-2" >
            <img className = "large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
            <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                    <Rating
                        rating = {product.rating}
                        numReviews = {product.numReviews}
                    >
                    </Rating>
                </li>
                <li>price: ${product.price}</li>
                <li> Description : 
                    <p>{product.description}</p>
                </li>
            </ul>

        </div>
        <div className="col-1">
            <div className = "card card-body">
                <ul>
                    <li>
                        <div className="row">
                            <div>price</div>
                            <div className="price">${product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className='row'>
                         <div> Status</div>
                            <div>
                              {product.countInStock > 0 ?(
                              <span className="success">In Stock</span>
                             ):(<span className="danger"> Unavailable</span>)}
                            </div>
                        </div>
                    </li>
                    <li>
                        <button className= "primary block"> Add to cart</button>
                    </li>

                </ul>
            </div>

        </div>

    </div>
    </div>
    )

    
}
export default ProductScreen;