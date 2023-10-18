import React, { useState } from "react";

function AddProduct() {
    const [formData, setFormData] = useState({
        nam: "",
        des: "",
        cat: "",
        qua: "",
        pri: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Name: ${formData.nam}\nDescription: ${formData.des}\nCategory: ${formData.cat}\nQuantity: {formData.qua}\nPrice: {formData.pri}');
        console.log(formData);
    };

    return(
        <form onSubmit={handleSubmit} className="addProduct">
            <input
                type="text"
                id="name"
                className="addProduct__input"
                name="name"
                value={formData.nam}
                onChange={handleChange}
            />
            <input
                type="text"
                id="description"
                className="addProduct__input"
                name="description"
                value={formData.des}
                onChange={handleChange}
            />
            <input
                type="text"
                id="category"
                className="addProduct__input"
                name="category"
                value={formData.cat}
                onChange={handleChange}
            />
            <input
                type="text"
                id="quantity"
                className="addProduct__input"
                name="quantity"
                value={formData.qua}
                onChange={handleChange}
            />
            <input
                type="text"
                id="price"
                className="addProduct__input"
                name="price"
                value={formData.pri}
                onChange={handleChange}
            />
            <button className="addProduct__button" type="submit">
                Submit
            </button>
        </form>
    );
}

export default AddProduct;