import React from "react";
import {  useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import logo from '../../assets/user_icon.png';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
 
  MDBTypography,

 
  MDBCardHeader,


   
 
  
} from "mdb-react-ui-kit";

export default function Home() {
    const navigate = useNavigate();

   
   
    // const handleSubmit = () => {
       
    //   navigate('/chat', {state:{name:'event'}});
    
    // }

    function handleSubmit(name) {
        navigate('/chat', {state:{name:name}});
      }
    const location = useLocation();
    const name  = location.state.name
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{height: "90vh"}}>
          <MDBCardHeader
              className="d-flex justify-content-between align-items-center p-3"
              style={{ borderTop: "4px solid #7f00ff", marginBottom: "-30px" }}
            >
              <h5 className="mb-0">{name}</h5>
               
            </MDBCardHeader>
             
            <MDBCardBody>
        <MDBRow>
          <MDBCol   className="mb-4 mb-md-0">
            <div className="p-3">
            
                <MDBTypography listUnStyled className="mb-0">
                  <li className="p-2 border-bottom">
                    <a
                      href=""
                      onClick={() => handleSubmit('James')}
                      className="d-flex justify-content-between"
                    >
                      <div className="d-flex flex-row">
                        <div >
                          <img
                            src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#7f00ff", borderRadius: "50%" }}
                            className="d-flex align-self-center me-3"
                            width="60"
                          />
                         </div>
                        <div className="pt-1">
                          <p style={{ color: "#7f00ff"}} className="fw-bold mb-0">Aaron Oteng</p>
                          <p className="small text-muted">
                            Hello, Are you there?
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">Just now</p>
                        
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a
                      href="#!"
                      className="d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <div>
                        <img
                            src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#7f00ff", borderRadius: "50%" }}
                            className="d-flex align-self-center me-3"
                            width="60"
                          />
                         </div>
                        <div className="pt-1">
                          <p style={{ color: "#7f00ff"}} className="fw-bold mb-0">Aaron Oteng</p>
                          <p className="small text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">
                          5 mins ago
                        </p>
                        
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a
                      href="#!"
                      className="d-flex justify-content-between"
                    >
                      <div className="d-flex flex-row">
                        <div>
                        <img
                            src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#7f00ff", borderRadius: "50%" }}
                            className="d-flex align-self-center me-3"
                            width="60"
                          />
                          
                        </div>
                        <div className="pt-1">
                          <p style={{ color: "#7f00ff"}} className="fw-bold mb-0">Aaron Oteng</p>
                          <p className="small text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a
                      href="#!"
                      className="d-flex justify-content-between"
                    >
                      <div className="d-flex flex-row">
                        <div>
                        <img
                            src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#7f00ff", borderRadius: "50%" }}
                            className="d-flex align-self-center me-3"
                            width="60"
                          />
                           
                        </div>
                        <div className="pt-1">
                          <p style={{ color: "#7f00ff"}} className="fw-bold mb-0">Aaron Oteng</p>
                          <p className="small text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a
                      href="#!"
                      className="d-flex justify-content-between"
                    >
                      <div className="d-flex flex-row">
                        <div>
                        <img
                            src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#7f00ff", borderRadius: "50%" }}
                            className="d-flex align-self-center me-3"
                            width="60"
                          />
                          
                        </div>
                        <div className="pt-1">
                          <p style={{ color: "#7f00ff"}} className="fw-bold mb-0">Aaron Oteng</p>
                          <p className="small text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      href="#!"
                      className="d-flex justify-content-between"
                    >
                      <div class="d-flex flex-row">
                        <div >
                        <img
                            src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#7f00ff", borderRadius: "50%" }}
                            className="d-flex align-self-center me-3"
                            width="60"
                          />
                          
                        </div>
                        <div className="pt-1">
                          <p style={{ color: "#7f00ff"}} className="fw-bold mb-0">Aaron Oteng</p>
                          <p className="small text-muted">
                            Lorem ipsum dolor sit.
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                </MDBTypography>
             
            </div>
          </MDBCol>
           
        </MDBRow>
      </MDBCardBody>
             
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
 