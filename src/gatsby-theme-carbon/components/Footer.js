import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const DeepEcomLogo = () => (
  <div>
     DEEP&nbsp;<span style={{ fontWeight: 900 }}>INSIGHT</span>
  </div>
)

const Content = (props) => (
  <>
    <p>
      Questions or comments? 
    </p>
    <p><a href="mailto:info@deepinsight.tech">Email us.</a></p>
    <p>
      Last updated June 2021
      <br />
      Copyright © 2021 Deep EcomInsight Pvt. Ltd
    </p>
  </>
);

const links = {
  firstCol: [
    { href: '/privacy-policy', linkText: 'Privacy' },
    { href: '/terms', linkText: 'Terms of Service' }
  ],
  secondCol: [
    { href: 'https://twitter.com', linkText: 'Twitter' }
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={DeepEcomLogo} />;

export default CustomFooter;