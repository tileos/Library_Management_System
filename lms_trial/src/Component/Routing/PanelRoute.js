import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Homepage from '../../Homepage';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';



const PanelRouting = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <ListGroup>
          <ListGroupItem action>
              <Link to="/home-page">Go to Home</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/admin-panel">Open Admin Panel</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/user-panel">Open Use Panel</Link>
            </ListGroupItem>
           
          </ListGroup>
        </Col>
        <Col md={10}>
          <Switch>
          <Route path="/home-page" component={Homepage} />
          <Route path="/admin-panel" component={AdminPanel} />
            <Route path="/user-panel" component={UserPanel} />
           
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default PanelRouting;



