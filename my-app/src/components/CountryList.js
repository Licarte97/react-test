import React from 'react';
import { Link } from 'react-router-dom';

// import Card from './UIElements/Card';
import './CountryList.css';
import { Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryList = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li>
          <Card>
            <Row>
              <Col>
                <Card.Body>
                  {/* <Card.Title>{item.name}</Card.Title> */}
                    {item.name}
                    <br/>
                    <div className="item-Container">
                      {item.timezones }
                    </div>
                    
                    <br/>
                    +{item.callingCodes}
                </Card.Body>
              </Col>
              <Col>
                <Link to={`/${item.name}/details`}>
                  <Card.Img variant="top" src={item.flag} />
                </Link>
              </Col>
            </Row>
            </Card>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;