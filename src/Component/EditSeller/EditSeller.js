import React,{Component} from 'react';
 import { withRouter} from 'react-router-dom';
 import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class EditSeller extends Component {
  state = {
   
    
    
    id:0
  }
  
  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  

 

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:5000/updateUser/' + this.state.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        age:this.state.age
      })
    })
      .then(res=> {
        if(res){
        
        this.props.toggle()
        }
      })
      
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, name, age } = this.props.item
      this.setState({ id, name,age })
    }
  }

  render() {
    return (
        <div className="app flex-row ">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1 className="align-items-center">Edit Seller</h1>
                      <p className="text-muted">Edit the seller Info</p>
                      <InputGroup className="mb-3">
                        
                        <Input type="text"  autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        
                        <Input type="password"  autoComplete="current-password" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        
                        <Input type="text"  autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        
                        <Input type="password"  autoComplete="current-password" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        
                        <Input type="text"  autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        
                        <Input type="password"  autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.submitFormEdit}>Submit</Button>
                        </Col>
                       
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(EditSeller)