import axios from 'axios'

const fetchDynamicRoutes = async () => {
    const page = await getPagesRoutes()
    const app = await getAppsRoutes()
    return {
      pages: {
        include: page,
        exclude: [],
      },
      apps: {
        include: app,
        exclude: [],
      }
    }
  }
  
const getPagesRoutes = async () => {
  const response = await axios.get(
    'https://api.frederikkohler.de/api/pages?fields=slug'
  );

  let routes = response?.data?.data.map((pages) => ({ 
      route: `${pages.attributes.slug}`
  }));

  return routes;
};
  
const getAppsRoutes = async () => {
  const response = await axios.get(
    'https://api.frederikkohler.de/api/apps?fields=slug'
  );

  let routes = response?.data?.data.map((app) => ({ 
      route: `${app.attributes.slug}`
  }));

  return routes;
};

export const sitemap = {
  sitemaps: {
    pages: {
      async urls() {
        const dynamicRoutes = await fetchDynamicRoutes();
        return ['/',...dynamicRoutes.pages.include.map((page) => `${page.route}`)];
      },
    },
    apps: {
      async urls() {
        const dynamicRoutes = await fetchDynamicRoutes();
        return dynamicRoutes.apps.include.map((app) => `/app/${app.route}`);
      },
    }
  },
}

export const prerender = {
  routes: ['/sitemap.xml']
}