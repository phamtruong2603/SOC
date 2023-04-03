import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/bai1">Bài 1</Link><br/>
            <Link to="/bai2">Bài 2</Link><br/>
            <Link to="/bai3">Bài 3</Link>
        </div>
    )
}

export default Navbar