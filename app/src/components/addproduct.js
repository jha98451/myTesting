import React,{ useState,useHistory } from "react";

import axios from 'axios';
const Addproduct = ()=>{
    
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState(null);
    const [categroy, setCategroy] = useState(null);
    const addNewProduct = async () => {
        let formField = new FormData()
        formField.append('name',name)
        formField.append('price',price)
        formField.append('description',description)
        formField.append('categroy',categroy)

        if(image !== null) {
          formField.append('image', image)
        }

        await axios({
          method: 'post',
          url:'http://localhost:8000/api/',
          data: formField
        }).then(response=>{
          console.log(response.data);
        //   history.push('/')
        })
    }
   
    return(
        
        <div className="container">
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Add A Product</h2>
    

    <div className="form-group">
    <label>Image</label>
         <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
     
      <div className="form-group">
        <input
          type="number"
          className="form-control form-control-lg"
          placeholder="Enter Product Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Phone Number"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your address Name"
          name="categroy"
          value={categroy}
          onChange={(e) => setCategroy(e.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-block" onClick={addNewProduct}>Add Student</button>
   
  </div>
</div>
    </div>
    );
};
export default Addproduct;