import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';


const DashboardPage = () => 
  <div>
    Dashboard Page
  </div>

registerComponent('DashboardPage', DashboardPage);
