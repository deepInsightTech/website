import React from 'react';
// import Layout from 'gatsby-theme-carbon/src/components/Layout';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon/src/components/Homepage';
import Carbon from 'gatsby-theme-carbon/src/images/carbon.jpg';
// import Main from 'gatsby-theme-carbon/src/components/Main';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
// import Utils from 'gatsby-theme-carbon/src/components/Utils';

// import NextPrevious from 'gatsby-theme-carbon/src/components/NextPrevious';

import Layout from '../components/Layout';

const Homepage = ({
  // children,
  Banner,
  FirstCallout,
  // SecondCallout,
  // location,
  pageContext,
}) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { title, description, keywords } = frontmatter;
  const { homepageTheme } = useMetadata();

  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      homepage
      theme={homepageTheme}>
      {Banner}
      {FirstCallout}
    </Layout>
  );
};
Homepage.defaultProps = {
  Banner: (
    <HomepageBanner
      renderText={() => (
        <h1>
          Deep Insight
          <br />
          Tech for e-commerce success.
        </h1>
      )}
      image={Carbon}
    />
  ),
  FirstCallout: <HomepageCallout />,
  SecondCallout: (
    <HomepageCallout color="inverse01" backgroundColor="#061f80" />
  ),
};

export default Homepage;
