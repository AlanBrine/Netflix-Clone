import React, { useEffect } from 'react';
import { categories } from '../../assets/Apis/Api';
import Row from '../../components/Row';
import { Container } from './style';

export default function Home() {
    
    useEffect(()=>{},[])
    return( <>
        
        <Container>
  {categories.map( a => <Row key={a.name} title={a.title} path={a.path}/>)  }

    
        </Container>
    </>);
}

 