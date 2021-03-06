/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect } from 'react';

import Meta from 'gatsby-theme-carbon/src/components/Meta';
// import LeftNav from './LeftNav';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
// import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
// import Footer from './Footer';
import Container from 'gatsby-theme-carbon/src/components/Container';

import 'gatsby-theme-carbon/src/styles/index.scss';

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
}) => {
  // const is404 = children.key === null;

  useLayoutEffect(() => {
    // eslint-disable-next-line global-require
    const scroll = require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  return (
    <>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <Header />
      <Container homepage={homepage} theme={theme}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
