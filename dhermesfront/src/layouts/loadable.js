import Backdrop from './full-layout/backdrop';
import CircularProgress from './full-layout/circularprogress';
import React, { Suspense } from 'react';

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //
const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      <Component {...props} />
      
    </Suspense>
  );
export default Loadable;