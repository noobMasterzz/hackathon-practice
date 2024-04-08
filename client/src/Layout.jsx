import { Route, Routes } from 'react-router-dom'
import Admin from './content/Admin.jsx'
import Header from './content/Header.jsx'
function Layout() {
    return (
        <div id="content">
          <Header />
          <Routes>
              <Route path="/admin/dashboard" element={<Admin />} />
          </Routes>
        </div>
    )
}
  
export default Layout
  