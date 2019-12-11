import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import './Tables.css'
import ModalForm from '../../../Component/ModularForm/Modularform'
class Tables extends Component {
  state= {
    seller:[]
  }
  componentDidMount(){
    this.getSellerData();
  }
  getSellerData = ()=>{
    axios.get('http://192.168.1.62:3000/api/seller/info')
    .then((res)=> {
      // console.log(JSON.stringify(res.data));
      this.setState({seller:res.data.data})
  })}
  editSeller=(id)=>{


  }
  render() {
    console.log("Hiii..."+this.state.seller)
    const {seller} =this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Seller Details
              </CardHeader>
              <CardBody>
                <Table className="able" hover bordered striped responsive size="sm">
                  <thead>
                  <tr className="tablerow">
                    <th>Seller Id</th>
                    <th>Seller Name</th>
                    <th>Seller Address</th>
                    <th>Seller Contact</th>
                    <th>Seller Email </th>
                    <th>Seller Validity</th>
                    <th>Seller Type</th>
                    <th>Aadhar Card</th>
                    <th>Pan Card</th>
                    <th>Registration</th>
                    <th>GST</th>
                    <th>Inventory</th>
                    <th>Cancel Check</th>
                    <th>Edit</th>
                  </tr>
                  </thead>
                  
                  {seller.map((items)=>
                  <tbody>

                  <tr key={items.id} className="myList">
                    <td>{items.id}</td>
                    <td>{items.seller_name}</td>
                    <td>{items.address}</td>
                    <td>{items.contact_no}</td>
                    <td>{items.email}</td>
                    <td>{items.valid_till}</td>
                    <td>{items.seller_type_id}</td>
                     
                    <td> {items.aadhar_doc.length > 0}</td>
                    
                    <td>{items.pan_doc.length > 0}</td>
                    
                    <td>{items.pan_doc.length > 0}</td>
                    
                    <td>{items.gst_doc.length > 0}</td>
                    
                    
                    <td>{items.inventory_docs.length > 0} </td>
                    <td>{items.cancelled_cheque.length > 0}</td>
                     
                    
                    
                    <div style={{width:"110px"}}>
                      <ModalForm buttonLabel="Edit" item={items}/>
               
                   </div>
                  </tr>
                  </tbody>
                  )
                }
                  
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
