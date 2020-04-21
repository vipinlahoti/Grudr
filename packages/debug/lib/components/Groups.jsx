import Users from 'meteor/grudr:users';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Group = ({name, actions}) => {
  return (
    <tr>
      <td>{name}</td>
      <td><ul>{actions.map((action, index) => <li key={index}><code>{action}</code></li>)}</ul></td>
    </tr>
  )
}

const Groups = props => {
  return (
    <div className="groups">
      <Jumbotron className="section-hero section-xsmall">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <h3 className="display-3">Groups</h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section">
        <Container>
          <Row>
            <Col sm={12}>
              <table className="table">
                <thead>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Actions</strong></td>
                  </tr>
                </thead>
                <tbody>
                  {_.map(Users.groups, (group, key) => <Group key={key} name={key} actions={group.actions} />)}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}


module.exports = Groups
export default Groups
