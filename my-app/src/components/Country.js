import React from 'react';

import "./Country.css";
import { Card, Container, Row} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Country = props => {
  const history = useHistory();


  const goBackHandler = () => {
    history.goBack();
  };

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
              <Row>
                <br/><br/>
                <Button style={{margin: "auto"}} onClick={goBackHandler}>Go Back</Button>
              </Row>
          </Container>
        </li>
      ))}
    </ul>
  );
};

export default Country;