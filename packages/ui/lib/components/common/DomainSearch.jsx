import Grudr from 'meteor/grudr:lib';
import { Link } from 'react-router-dom';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const DomainSearch = ({ title, lead, placeholder, domainLinks, handleChange, handleValue, handleSubmit }) => {
  return (
    <div className="text-left">
      {title ? (
        <h3 className="title-3">
          {title}
        </h3>
      ) : null}
      { lead ? (<p className="lead">{lead}</p>) : '' }
      
      <Form className="domain-search" onSubmit={handleSubmit}>
        <Form.Control type="text" name="domain-search" value={handleValue} onChange={handleChange} placeholder={placeholder} required />
        
        <Button type="submit" variant="black-fill">
          <Grudr.components.Icon name="search" />
        </Button>
      </Form>

      {domainLinks ?
        (<p className="domain-links mt-xs">
          <Link to={{ pathname: '/domain-transfer' }}>
            Transfer your domain to us.
          </Link>
        </p>)
      : null }
    </div>
  )
}

Grudr.registerComponent('DomainSearch', DomainSearch);
