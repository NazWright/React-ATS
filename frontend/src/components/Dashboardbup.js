import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import './css/Dashboard.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import {WrkfwidgetData} from './data/WrkfwidgetData';
import Badge from 'react-bootstrap/Badge'

function Dashboard() {
        return (
        <div className='dashboard'>
            <div className='row'>
            <CardDeck>
                {WrkfwidgetData.map(
                   (item, index) =>{
                       return(
                           <Card
                           
                           bg={item.background}
                           key={index}
                           text='white'
                           >
                               <span>
                               <Badge variant="light" className='counter'>9</Badge>
                               </span>
                               <Card.Header>
                                   {item.title}
                               </Card.Header>
                               <Card.Body>
                                   <Card.Title>
                                       # of applicants
                                   </Card.Title>
                                   <Card.Text>
                                       additional info like progress
                                   </Card.Text>
                                   <Button variant='secondary'>{item.buttonText}</Button>
                               </Card.Body>
                           </Card>

                       )
                   } 
                )}
            </CardDeck>
            </div>
           <div className='row'>
               <CardDeck>
                   
                   <Card
                   bg='secondary'
                   text='white'
                   >
                       <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title> Card Title </Card.Title>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's conent.
                        </Card.Text>
                        </Card.Body>

                   </Card>
           
           <Card
                   bg='secondary'
                   text='white'
                   className="z-depth-3"
                   >
                       <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title> Card Title </Card.Title>
                        
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's conent.
                        </Card.Text>
                        </Card.Body>

                   </Card>
                       </CardDeck>
            </div>
        </div>
    )
}

export default Dashboard;
