import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Backdrop from  "./backdrop";
import CircularProgress from "./circularprogress";
import Navbar from '../../components/NavBar/refugioNavBar.jsx';
import { useAuth } from "../../Context.js";
import RefugioNavBarInterno from './../../components/NavBarInterno/refugioNavBar';

function MainLayout() {
  const [loading, isLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          { isAuthenticated ? ( <RefugioNavBarInterno></RefugioNavBarInterno>) : ( <Navbar></Navbar> ) }
          <Outlet />
    
        </>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default MainLayout;
