import App from '../container/App';
import Main from '../container/Main';
import Detail from '../container/Detail';
import Example from '../container/Example';

const routes = [
  {path: '/app', component: App},
  {path: '/main', component: Main},
  {path: '/detail', component: Detail},
  {path: '/example', component: Example},
];
export default routes;