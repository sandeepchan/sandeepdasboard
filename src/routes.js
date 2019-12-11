import React from 'react';


const Tables = React.lazy(() => import('./views/Base/Tables'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const EditSeller = React.lazy(()=> import('./Component/EditSeller/EditSeller'))


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/tables', name: 'Tables', component: Tables },
  {path: '/editSeller', name: 'EditSeller', component:EditSeller}

];

export default routes;
