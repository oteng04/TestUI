
import './chat.css';
import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../../assets/user_icon.png';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn,
  MDBCardFooter,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Chat() {
    const location = useLocation();
    const name  = location.state.name
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{height: "90vh"}}>
            <MDBCardHeader
              className="d-flex justify-content-between align-items-center p-3"
              style={{ borderTop: "4px solid #7f00ff" }}
            >
              <h5 className="mb-0">{name}</h5>
               
            </MDBCardHeader>
             
              <MDBCardBody>
                
                <div className="d-flex flex-row justify-content-start">
                <img
                            src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#7f00ff", borderRadius: "50%",width: "45px", height: "100%" }}
                            
                           
                          />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-3 rounded-3 text-white"
                      style={{ backgroundColor: "#7f00ff" }}
                    >
                      Lorem ipsum dolor sit Lorem ipsum dolor sit
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>

                
                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-3  rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                    Lorem ipsum dolor sit
                    </p>
                  </div>
                  <img
                        src={logo}
                            alt="avatar"
                            style={{ backgroundColor: "#eee", borderRadius: "50%",width: "45px", height: "100%" }}
                            
                  />
                </div>

                
              </MDBCardBody>
             
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3"  style={{ backgroundColor: "#7f00ff" }}>
              <MDBInputGroup className="mb-0" style={{  borderRadius: "20px"  }}>
                <input
                  className="form-control"
                  placeholder="Start typing"
                  type="text"
                  style={{  borderRadius: "20px"  }}
                />
                <MDBBtn color="white" style={{ paddingTop: ".55rem" , borderRadius: "20px" , paddingLeft:"12px",paddingRight:"12px", marginLeft: "8px"}}>
                  Send
                </MDBBtn>
              </MDBInputGroup>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}