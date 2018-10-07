import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { Header } from '../header/header';
import { MessageHead } from '../message_head/main';
import './main.css';

export class Main extends Component {
  render() {
    return (
      <Grid>
        {/* style="line-height:1em" */}
        <Row>
          {/* style="border:1px solid black; margin-top:10px" */}
          <Col xs={12} md={12} lg={4}>
            <Header />
            <br />
           
            {/*  style="margin: 10px" */}
            <div>
              {/* style="margin-bottom:10px;" */}
              <div className="title">
                <h2 className="title2">Messages</h2>
              </div>
              <div>
                <div className="form-group">
                  {/* style = "background-color: #F3EFEE" */}
                  <input type="text" className="form-control" id="usr" placeholder="Search for a message" />
                </div>
              </div>

              <MessageHead />

              

            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}