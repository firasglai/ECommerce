import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className=' container mt-3'>
      <h2 className='text-center'>Men's Watch</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
               <NavLink to={`/cart/${element.id}`}>
                  <Card.Img variant="top" src={element.imgdata } style={{height:"16rem"}} className="mt-3" />
                  </NavLink>
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : TND {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards