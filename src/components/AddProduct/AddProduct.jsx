import React, { useState } from "react";

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        var alertString = formData.name + ", " + formData.description + ", " + formData.category + ", " + formData.quantity + ", " + formData.price;
        console.log(alertString);
        alert(alertString);
    };

    return(
        <form onSubmit={handleSubmit} className="addProduct">
            <h3>Add Product</h3>
            <label className="AddProduct__text" htmlFor="name">
                Name: 
            </label>
            <input
                type="text"
                id="name"
                className="AddProduct__input"
                name="name"
                value={formData.name}
                onChange={handleChange}
            /><br></br>

            <label className="AddProduct__text" htmlFor="description">
                Description: 
            </label>
            <input
                type="text"
                id="description"
                className="AddProduct__input"
                name="description"
                value={formData.description}
                onChange={handleChange}
            /><br></br>

            <label className="AddProduct__text" htmlFor="category">
                Category: 
            </label>
            <input
                type="text"
                id="category"
                className="AddProduct__input"
                name="category"
                value={formData.category}
                onChange={handleChange}
            /><br></br>

            <label className="AddProduct__text" htmlFor="quantity">
                Quanitity: 
            </label>
            <input
                type="text"
                id="quantity"
                className="AddProduct__input"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
            /><br></br>

            <label className="AddProduct__text" htmlFor="price">
                Price: 
            </label>
            <input
                type="text"
                id="price"
                className="AddProduct__input"
                name="price"
                value={formData.price}
                onChange={handleChange}
            /><br></br>

            <button className="AddProduct__button" type="submit">
                Submit
            </button>
        </form>
    );
}