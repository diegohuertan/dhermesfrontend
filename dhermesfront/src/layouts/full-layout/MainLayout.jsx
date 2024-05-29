import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Backdrop from  "./backdrop";
import CircularProgress from "./circularprogress";
import Navbar from '../../components/NavBar/refugioNavBar.jsx';

function MainLayout() {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Navbar></Navbar>
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
