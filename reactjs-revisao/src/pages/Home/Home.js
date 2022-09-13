import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Ambiente: <b>{process.env.NODE_ENV}</b></p>
            <p>URL API: <b>{process.env.REACT_APP_LINK_API}</b></p>
        </div>
    );
}