import React, { useState } from 'react'
import { Container, FormGroup,Input } from 'reactstrap'
import axios from "axios"

const Imagenes = () => {
    const [image, setImage] = useState("")
    const [lowding, setLowding] = useState(false)
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "frelancer-workers")
        setLowding(true);
        const res = await axios.post("http://api.cloudinary.com/v1_1/dihwuukpi/freelancer-workers/upload", {
            method: "POST",
            body: data
        })
        const file = res.data
        console.log(file)
        setImage(file.secure_url)
        console.log(file.secure_url)
        setLowding(false);

    }
    return (
        <Container>
            <h1>imagenes</h1>
            <FormGroup>
                <Input 
                type="file" 
                name='file'
                placeholder='Sube tu imagen aqui'
                onChange={uploadImage} 
                />
            </FormGroup>
        </Container>

    )
}

