import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from './LandingTemplate';
// import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Launching</p>;

const FirstRightText = () => (
  <p>
    <code>January</code> 2021
    <br /><strong>Previously known as Go Online</strong>
  </p>
);

// const SecondLeftText = () => <p>Callout component</p>;

// const SecondRightText = () => (
//   <p>
//     You can also not use these components at all by not providing the callout
//     props to the template or writing your own template.
//     <a
//       className={calloutLink}
//       href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
//       Homepage source →
//     </a>
//   </p>
// );

const BannerText = () =>  <div>
<h1>DEEP&nbsp;<strong>INSIGHT</strong></h1>
<p><strong>Tech</strong> for e-commerce success.</p>
</div>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
