import React, { useState, useEffect, lazy, Suspense, CSSProperties } from 'react';
import ReactGA from 'react-ga';
import Glitch from 'glitch-javascript-sdk';
import ReactDOM from 'react-dom/client';
import RingLoader from 'react-spinners/RingLoader'



const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState(null);

  const override: CSSProperties = {
    display: "block",
    margin: "auto",
    marginTop: "45%",
  };

  useEffect(() => {
    const fetchData = async () => {

      try {
        const domain = getDomain();
        const response = await Glitch.api.Communities.findByDomain(domain);

        setData(response.data.data);

        Glitch.config.Config.setCommunity(response.data.data);
        Glitch.util.Storage.set('community_id', response.data.data.id);
        Glitch.util.Storage.set('community',response.data.data);

        let community = response.data.data;
        let templateDir = community?.template?.directory + community?.template?.entry_point_file;

        if(community.custom_css) {
          const styleElement = document.createElement('style');
          styleElement.innerHTML = community.custom_css;
          document.head.appendChild(styleElement);
        }

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

    if (currentDomain === process.env.REACT_APP_SITE_DOMAIN || currentDomain.endsWith(process.env.REACT_APP_SITE_DOMAIN)) {
      const subdomain = currentDomain.split('.')[0];
      return subdomain;
    } else {
      return currentDomain;
    }
  }

  if (loading) {
    return <RingLoader 
      loading = {loading}
      cssOverride = {override}
      size = {60}
      color = '#0dcaf0' />
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
