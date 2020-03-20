import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';


const HomePage = () => {
  const headerBg = {
    background: `url(//s3.amazonaws.com/creativetim_bucket/products/56/cover_nuk_regular.jpg) no-repeat 50% center / cover`
  }
  return (
    <React.Fragment>
      <Components.HeroComponent />
      <Components.FeaturesBlock />
    </React.Fragment>
  )
}

registerComponent('HomePage', HomePage);
