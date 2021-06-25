import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    <span style={{ padding: `0 1rem`, fontWeight: 400 }}>DEEP&nbsp;<span style={{ fontWeight: 900 }}>INSIGHT</span></span>
  </Header>
);

export default CustomHeader;
