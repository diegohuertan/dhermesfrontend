import React from 'react';
import './perrosContainer.css';

const HeaderPerros = () => {
  return (
    <>
        <div class="flex items-center filtrosPerros">
            <div class="flex items-center">
                <p className='ml-4 mr-4'>En Adopción</p>
                 <svg class='w-12 h-12 mr-2' viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m36.08 33c0-2.13.8-3.62 2.15-4.08s3 .35 4.07 2a6.1 6.1 0 0 1 .87 5.28 3.16 3.16 0 0 1 -1.93 2.21 2.64 2.64 0 0 1 -.78.12 3.48 3.48 0 0 1 -2.07-.77 6 6 0 0 1 -2.31-4.76z"/><path d="m57 37.27a4.3 4.3 0 0 1 -.61 0 2.92 2.92 0 0 1 -1.81-.6 3.06 3.06 0 0 1 -1.06-2.25 6.92 6.92 0 0 1 4.56-6.22 3.2 3.2 0 0 1 2.81.47 3.13 3.13 0 0 1 1.11 2.59 6.55 6.55 0 0 1 -5 6.01z"/><path d="m9.26 26.57a2.91 2.91 0 0 1 -2.26.91h-.53a6 6 0 0 1 -4.35-2.86c-1.12-1.92-1.12-3.62-.22-4.68s2.79-1.23 4.5-.37a6.14 6.14 0 0 1 3.41 4.12 3.09 3.09 0 0 1 -.55 2.88z"/><path d="m64.75 41a6 6 0 0 1 -4 5.56 4 4 0 0 1 -1.27.22 2.68 2.68 0 0 1 -1.61-.5 3.1 3.1 0 0 1 -1.11-2.67 6.14 6.14 0 0 1 4.56-5.4 2.69 2.69 0 0 1 3.43 2.79z"/><path d="m29.61 34.08a3.82 3.82 0 0 1 -.56 2.92 3.62 3.62 0 0 1 -2.34 1.54 15.43 15.43 0 0 1 -3.17.16c-.71 0-1.37 0-2 0a21.51 21.51 0 0 0 -3.81.64 10.06 10.06 0 0 0 -1.47.57 10.29 10.29 0 0 1 -1.86.68 4.07 4.07 0 0 1 -1 .11 4 4 0 0 1 -2.34-.75 4.2 4.2 0 0 1 -1.69-3 12.6 12.6 0 0 1 .29-4 19 19 0 0 1 4.45-9c2.69-2.79 5.85-3 8.9-.57a11.83 11.83 0 0 1 1.89 1.8c.5.64 1 1.3 1.5 2a20 20 0 0 1 2.86 5.64c.14.38.25.82.35 1.26z"/><path d="m17.89 17a6.9 6.9 0 0 1 .79-7.67 3.24 3.24 0 0 1 2.67-1 3.15 3.15 0 0 1 2.27 1.67 5.69 5.69 0 0 1 .74 2.9 6.41 6.41 0 0 1 -2.06 4.8 3.11 3.11 0 0 1 -2 .77h-.38a3 3 0 0 1 -2.03-1.47z"/><path d="m7.58 14.57c0-.22 0-.44 0-.66a3.17 3.17 0 0 1 1.23-2.91 3.16 3.16 0 0 1 3.16.15 6.35 6.35 0 0 1 3.12 6.54 3.09 3.09 0 0 1 -1.78 2.4 2.58 2.58 0 0 1 -.91.17 3.49 3.49 0 0 1 -2-.71l-.24-.18a7.18 7.18 0 0 1 -2.58-4.8z"/><path d="m55.75 47.48a20.15 20.15 0 0 1 -.37 6.31c-.11.44-.22.88-.37 1.31a3.83 3.83 0 0 1 -1.93 2.21 3.73 3.73 0 0 1 -1.59.36 3.58 3.58 0 0 1 -1.21-.21 15.09 15.09 0 0 1 -2.82-1.46c-.6-.36-1.17-.71-1.77-1a21.48 21.48 0 0 0 -3.61-1.37 10.25 10.25 0 0 0 -1.55-.25 11.27 11.27 0 0 1 -2-.35 4 4 0 0 1 -2.53-2.23 4.17 4.17 0 0 1 .07-3.47 12.38 12.38 0 0 1 2.33-3.33 19.13 19.13 0 0 1 8.38-5.53c3.74-1 6.56.38 8 4a11.44 11.44 0 0 1 .72 2.5c.09.81.17 1.63.25 2.51z"/><path d="m30.89 17a6 6 0 0 1 -.62 6.8 3.22 3.22 0 0 1 -2.37 1.2h-.26a3.11 3.11 0 0 1 -2.31-1.74 5.26 5.26 0 0 1 -.6-2.54 6 6 0 0 1 1.81-4.43 2.7 2.7 0 0 1 4.35.69z"/><path d="m45.66 32.57a7.12 7.12 0 0 1 .19-5.43 6.45 6.45 0 0 1 .29-.59 3.2 3.2 0 0 1 2.58-1.89 3.06 3.06 0 0 1 2.64 1.73 6.34 6.34 0 0 1 -.6 7.22 3.23 3.23 0 0 1 -2.37 1.2h-.38a3.05 3.05 0 0 1 -2.24-1.93c-.04-.13-.08-.21-.11-.31z"/></svg>
            </div>
            <button class='mx-2'>
                Machos
            </button>
            <button class='mx-2'>
                Hembras
            </button>
            <button class='mx-2'>
                Cachorros
            </button>
        </div>
    </>
  );
};

export default HeaderPerros;