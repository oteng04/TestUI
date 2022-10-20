import React, { useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
   
 
}
from 'mdb-react-ui-kit';

function Landing() {

    const navigate = useNavigate();

   
  
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/home', {state:{name:name}});
    
    }
  
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Chat App</h2>

              <form className='align-items-center text-center'  onSubmit={handleSubmit}>
              <MDBInput color='secondary' wrapperClass='mb-4 w-100' label='Enter name' id='formControlLg' name='name' size="lg" onChange={(e) => setName(e.target.value)} value={name} type='text' required/>

              <MDBBtn className='align-items-center' size='lg' color='secondary' type="submit">
                Start
              </MDBBtn>

              </form>

              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Landing;