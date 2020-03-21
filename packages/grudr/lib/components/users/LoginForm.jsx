import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Components,
  getRawComponent,
  replaceComponent
} from 'meteor/vulcan:core';

import { Card } from 'react-bootstrap';

export class LoginForm extends getRawComponent('AccountsForm') {

  render() {
    const {
      // hasPasswordService,
      oauthServices,
      fields,
      buttons,
      // error,
      messages,
      ready = true,
      className,
    } = this.props;
    const _className = classnames('accounts-ui', { ready }, className);
    return (
      <form
        ref={(ref) => this.form = ref}
        className={_className}
        noValidate
      >
        <Card bg="light" className="shadow-lg">
          <Card.Header className="p-5">
            <Components.AccountsFormMessages messages={messages} />
            <Components.AccountsFields fields={ fields } />
            <Components.AccountsButtons buttons={ buttons } />
          </Card.Header>
          <Card.Body className="text-center p-4">
            <div className="text-muted text-center mb-3"><small>or Login with</small></div>
            <Components.AccountsSocialButtons oauthServices={ oauthServices } />
          </Card.Body>
        </Card>
      </form>
    );
  }
}

replaceComponent('AccountsForm', LoginForm);
