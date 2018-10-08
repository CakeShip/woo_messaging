import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { Header } from '../../messages/header/header';
import './main.css';

export class Messaging extends Component {
  render() {
    return (
      <Grid>
        {/* style="line-height:1em" */}
        <br />
        <Row className="center">
          <Col>
            {/* style="border:1px solid black; margin-top:10px" */}
            <Col xs={8} md={6} lg={4} xsOffset={2} mdOffset ={3} lgOffset={4}>
              <Header />
              <br />
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}