import {useEffect,useState } from "react";

    

export default function Home(){

    const[products,setProducts]= useState([])

    function getProducts(){
        fetch("http://localhost:4000/products?_sort=id&_order=desc")
        .then(response => {
            if(response.ok){
                return response.json()
            }

            throw new Error()
            
        })
        .then(data => {
          setProducts(data)
        })
        .catch(error => {
            alert("Unable to get the data")
        })
    }
    useEffect(getProducts,[])
    

    return(
        <div className="container my-4">
            <h2>Welcome to our website</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((product,index)=>{
                        return(
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>{product.price}₹</td>
                                <td><img src={"http://localhost:4000/images/" + product.imageFilename} 
                                    width="100" alt="..."/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

