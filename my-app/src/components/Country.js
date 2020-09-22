import React from 'react';
import { Link } from 'react-router-dom';

import "./Country.css";
import { Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Country = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li>
          <Container>
              <Row>
                  <Card style={{margin: "auto"}}>
                    <Card.Img variant="top" src={item.flag} />
                    <Card.Body className="country-card_body">
                      {item.name}
                      <br/>
                      Time Zone: {item.timezones}
                      <br/>
                      Calling Code: +{item.callingCodes}
                      <br/>
                      Region: {item.region}
                      <br/>
                      Population: {item.population}
                    </Card.Body>
                  </Card>
              </Row>
          </Container>
        </li>
      ))}
    </ul>
  );
};

export default Country;