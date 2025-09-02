import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { routes } from './lib/route'
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import DashboardBlogs from './pages/dashboard/Blogs'
import ProtectedRoute from './pages/dashboard/ProtectedRoute'
import CreateBlog from './pages/dashboard/CreateBlog'
import BlogDetails from './pages/BlogDetails'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
     <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.about} element={<AboutUs />} />
          <Route path={routes.portfolio} element={<Portfolio />} />
          <Route path={routes.blog} element={<Blog />} />
          <Route path={routes.blogDetails} element={<BlogDetails />} />
          <Route path={routes.contact} element={<ContactUs />} />
          <Route element={<ProtectedRoute />}>
            <Route path={routes.dashboardBlogs} element={<DashboardBlogs />} />
            <Route path={routes.createBlog} element={<CreateBlog />} />
            <Route path={routes.editBlog} element={<CreateBlog />} />
          </Route>
        </Routes>
     </Router>
  )
}

export default App
