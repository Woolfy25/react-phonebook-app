import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import "./App.css";
import { PrivateRoute } from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';

// bg-amber-300;
// bg-violet-300
const LazyApp = lazy(() => import('../pages/Contacts/Contacts'));
const LazyNotFound = lazy(() => import('../pages/NotFound/NotFoundPage'));
const LazyLogin = lazy(() => import('../pages/LoginForm/LoginForm'));
const LazyRegister = lazy(() => import('../pages/RegisterForm/RegisterForm'));
// bg-violet-100

const App = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 h-screen overflow-auto bg-gradient-to-br from-violet-800 to-white-400">
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<LazyApp />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<LazyApp />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LazyLogin />}
              />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LazyRegister />}
              />
            }
          ></Route>
          <Route path="*" element={<LazyNotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
