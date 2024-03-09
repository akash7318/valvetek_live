import { BrowserRouter } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {

  return (
    <BrowserRouter>
      {
        window.location.href.includes('admin') || window.location.href.includes('login')
          ?
          <AdminLayout />
          :
          <SiteLayout />
      }
    </ BrowserRouter>
  );
}

export default App;
