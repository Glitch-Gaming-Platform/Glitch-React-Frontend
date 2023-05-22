import React, { useState, useEffect, lazy, Suspense } from 'react';
import ReactGA from 'react-ga';
import Glitch from 'glitch-javascript-sdk';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const domain = getDomain();
        const response = await Glitch.api.Communities.findByDomain(domain);

        setData(response.data.data);
        console.log("Community Data");
        console.log(response.data.data);
        Glitch.config.Config.setCommunity(response.data.data);
        Glitch.util.Storage.set('community_id', response.data.data.id);
        Glitch.util.Storage.set('community',response.data.data);

        let community = response.data.data;
        let templateDir = community?.template?.directory + community?.template?.entry_point_file;

        loadSite(templateDir);

      } catch (error) {

        let templateDir = process.env.REACT_APP_TEMPLATE_DIRECTORY;
        loadSite(templateDir);
        setData({});
      }
      setLoading(false);
    };

    fetchData();

  }, []);

  async function loadSite(templateDir) {

    if (templateDir) {
      try {
        const loaded = await import(`${templateDir}`);
        setTemplate(loaded);
        
      } catch (error) {
        
        const loaded = await import(`./templates/error/index.js`);
        setTemplate(loaded); // Use a default error template if loading fails
      }
    } else {
      const loaded = await import(`./templates/error/index.js`);
      setTemplate(loaded); // Use a default error template if template directory is not defined
    }

    if (process.env.REACT_APP_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

  }

  function getDomain() {
    const currentDomain = window.location.hostname;

    console.log(currentDomain);

    if (currentDomain === process.env.REACT_APP_SITE_DOMAIN || currentDomain.endsWith(process.env.REACT_APP_SITE_DOMAIN)) {
      const subdomain = currentDomain.split('.')[0];
      return subdomain;
    } else {
      return currentDomain;
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (template) {
    return (
      <Suspense fallback={<div>Loading template...</div>}>
        <template.default />
      </Suspense>
    );
  }
};

export default App;
