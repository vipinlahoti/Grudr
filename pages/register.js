import Grudr from '@grudr';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default () => {
  return (
    <Grudr.components.Layout>
      <Grudr.components.HeadTags title="Register Page" description="Register Page" />
      
      <div className="login__wrapper">
        <Container>
          <Row>
            <div className="accounts-card">
              <div className="accounts-card-banner"></div>
              Register Form
            </div>
          </Row>
        </Container>
      </div>
    </Grudr.components.Layout>
  )
}
