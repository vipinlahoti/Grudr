import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import { Jumbotron, Container, Row } from 'react-bootstrap';

const DashboardPage = () => 
  <React.Fragment>
    <Jumbotron fluid>
      <Container>
        <Row>
          <h4 className="display-3"><FormattedMessage id="account.dashboard" /></h4>
        </Row>
      </Container>
    </Jumbotron>

    <Container>
      <Row>
        <div className="section-main">
          Dashboard Page
        </div>
      </Row>
    </Container>
  </React.Fragment>

registerComponent('DashboardPage', DashboardPage);
