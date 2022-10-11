import React from 'react';
import { GetMovies } from '../../assets/Apis/Api';

// import { Container } from './styles';

function Row({title, path }) {
  
  
   // 
   
  
  return (
  <>
 
    
    <h1>{title}</h1>

{
GetMovies(path).map( a => <img key={a.id} src={`https://image.tmdb.org/t/p/w500${a.poster_path}`} alt={a.title} />)

}




  </>
  );
}
 
export default Row;


