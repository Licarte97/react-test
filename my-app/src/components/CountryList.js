import React from 'react';
import { Link } from 'react-router-dom';

// import Card from './UIElements/Card';
import './CountryList.css';
import { Card, CardGroup, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryList = props => {

    console.log(props);
  return (
    <ul>
      {props.items.map(item => (
        <li>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    {/* <Card.Title>{item.name}</Card.Title> */}
                    <Card.Body>
                      {item.name}
                      <br/>
                      {item.timezones}
                      <br/>
                      +{item.callingCodes}
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={item.flag} />
                </Card>
              </Col>
            </Row>
          </Container>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;