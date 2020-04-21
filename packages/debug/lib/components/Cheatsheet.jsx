import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const methodList = Meteor.isServer ? Meteor.server.method_handlers : Meteor.connection._methodHandlers;

const renderFunction = (func, name) => {
  const s = func.toString();
  const openParen = s.indexOf('(');
  const closeParen = s.indexOf(')');

  return (
    <li key={name}>
      <code>{name}({s.substr(openParen + 1, closeParen - openParen - 1)})</code>
    </li>
  )
}

const renderCallback = (callbacks, key) => {
  if (Array.isArray(callbacks)) {
    return (
      <div className="callbacks" key={key}>
        <h6>{key}</h6>
        <ul>
          {_.map(callbacks, (item, key) => <li key={key}><code>{item.name}</code></li>)}
        </ul>
      </div>
    )
  } else {
    return null
  }
}

const Cheatsheet = props => {
  return (
    <div className="cheatsheet">
      <Jumbotron className="section-hero section-xsmall">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <h3 className="display-3">Cheatsheet</h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section">
        <Container>
          <Row>
            <Col sm={12}>

              <div className="cheatsheet-block">
                <h3 className="display-3">Users</h3>
                <h5>Helpers (<code>Users.*</code>)</h5>
                <ul>
                  {_.map(Users, (item, key) => (key[0] !== "_" ? renderFunction(item, key) : null) )}
                </ul>
                <ul>
                  {_.map(Users.is, renderFunction)}
                </ul>
                <h5>Methods</h5>
                <ul>
                  {_.map(methodList, (item, key) => (key.indexOf("users.") !== -1 ? renderFunction(item, key) : null))}
                </ul>
              </div>

              <div className="cheatsheet-block">
                <h3 className="display-3">Callbacks</h3>
                <h5>Functions</h5>
                <ul>
                  <li><code>add()</code></li>
                  <li><code>remove()</code></li>
                  <li><code>run()</code></li>
                  <li><code>runAsync()</code></li>
                </ul>
                <h5>Hooks (<code>Grudr.callbacks.*</code>)</h5>
                <ul>
                  {_.map(Grudr.callbacks, renderCallback)}
                </ul>
              </div>

              <div className="cheatsheet-block">
                <h3 className="display-3">Utils</h3>
                <h5>Helpers (<code>Grudr.utils.*</code>)</h5>
                <ul>
                  {_.map(Grudr.utils, renderFunction)}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

module.exports = Cheatsheet
export default Cheatsheet
