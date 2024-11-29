import logo from './logo.svg';
import './App.css';
import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';
import DefaultLayout from './layout/DefaultLayout';
import Loader from './common/Loader';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [loading, setLoading] = useState(true);
  const isUserLoggedIn = window.localStorage.getItem('aquaadmin') !== null;
  console.log(isUserLoggedIn)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Routes>
        



        <Route element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Dashboard />} />

          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            >
            </Route>
          ))}
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
