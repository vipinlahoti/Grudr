import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import { Jumbotron, Container, Row } from 'react-bootstrap';

const QuestionsPage = () => 
  <React.Fragment>
    <Jumbotron fluid>
      <Container>
        <Row>
          <h4 className="display-3"><FormattedMessage id="account.questions" /></h4>
        </Row>
      </Container>
    </Jumbotron>

    <Container>
      <Row>
        <div className="section-main">
          Questions Page
        </div>
      </Row>
    </Container>
  </React.Fragment>

registerComponent('QuestionsPage', QuestionsPage);
