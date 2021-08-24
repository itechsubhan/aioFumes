import React from 'react'
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import forest from "../Logo/forest1.png"

import cart from "../Logo/Cart icon.png"
import {BsBag} from 'react-icons/bs'
import './Cl1.css'
function Cl1() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={forest} /> */}
            <Card.Body>
           <img src = {forest} alt = "forest"></img>  

          <Card.Title><h4>Astrophytum <h4 class = 'ca'>Lorem Ipsum</h4> has been </h4></Card.Title>
                <Card.Text className = 'text-secondary'>
                The species of the genus Astrophytum usually grow
                </Card.Text>
                <Button variant="dark">  <img src = {cart} alt = "bag"></img> Add  </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cl1
