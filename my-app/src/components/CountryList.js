import React from 'react';
import { Link } from 'react-router-dom';

// import Card from './UIElements/Card';
import './CountryList.css';
import { Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryList = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li>
          <Container>
            <Link to={`/${item.name}/details`}>
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
                  <Card >
                    <Card.Img variant="top" src={item.flag} />
                  </Card>
                </Col>
              </Row>
            </Link>
          </Container>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;