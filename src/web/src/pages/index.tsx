import { useState } from 'react';
import SEO from '../components/SEO';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import NavBar from '../components/NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    transition:
      'color 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [bannerIsVisible, setBannerVisibility] = useState(true);
  return (
    <>
      <SEO pageTitle="Telescope" />
      <Banner onVisibilityChange={(visible) => setBannerVisibility(visible)} />
      <main className={classes.main}>
        <NavBar disabled={bannerIsVisible} />
        <Posts />
      </main>
    </>
  );
};

export default Home;
