import React from 'react';
import './perrosContainer.css';

const AdoptionCard = ({ gender, imageSrc, name }) => {
  return (
    <>
    <div className="max-w-sm overflow-hidden shadow-lg containerCard">
      <img className="w-full" src={imageSrc} alt={`Imagen de ${name}`} />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className='flex items-center'>
          <div>
            <svg height="20" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"/></svg>
          </div>
          <p className=" ml-2 text-gray-700 text-base">
            {gender}
          </p>
          <div className='ml-8'>
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.852 5.148a3.317 3.317 0 0 0-.96-2.183 3.333 3.333 0 1 0-4.713 4.714l-5.499 5.5a3.333 3.333 0 1 0-4.714 4.713c.606.606 1.39.918 2.183.96.042.793.354 1.576.96 2.183a3.333 3.333 0 1 0 4.713-4.714l5.499-5.499a3.333 3.333 0 1 0 4.714-4.713 3.313 3.313 0 0 0-2.183-.961z"/></svg>
          </div>
        </div>

      </div>
      <div className="flex justify-center">
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-full">
          <div className="flex items-center">
            <i className="fas fa-heart text-white mr-2"></i>
            <p className="text-white">Adoptar</p>
          </div>
        </button>
      </div>
    </div>
    </>
  );
};

export default AdoptionCard;