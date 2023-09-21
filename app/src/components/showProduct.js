import axios from "axios";
import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowProduct = ()=>{
    const [products,setProducts] = useState([])
    const getProduct= async()=>{
        const response = await axios.get('http://localhost:8000')
        setProducts(response.data);
    }
    useEffect(()=>{
        getProduct();
    },[])
    return(
        <div>
             <h1>Show All Product</h1>
             <div>
                {products.map((product,index)=>(
                     <Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src={product.image} />
                     <Card.Body>
                       <Card.Title>{product.name}</Card.Title>
                       <Card.Text>
                       <p>{product.description}</p>
                       <h3>{product.price}</h3>
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
                   </Card>
                   
                
                )
                    
                )}
             </div>
        </div>
       
       
    );
};
export default ShowProduct;