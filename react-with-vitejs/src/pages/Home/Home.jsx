import React, { useEffect, useState } from "react";
import { api_proxy } from '../../services/api-cors-anywhere'
import axios from "axios";

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/')
        .then(resp => {
            console.log(resp)
            setProducts(resp)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}