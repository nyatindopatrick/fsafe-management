import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { useSignUpForm } from '../customHooks';
import axios from 'axios';
import Snackbar from '../Snackbar';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback
} from 'reactstrap';

const RiderRegister = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    handleSignup
  );
  const [message, setMessage] = useState();
  // all callback funcitons should always be defined using the function keywords arrow funciton wont work
  function handleSignup() {
    return axios
      .post('/api/admin/newsacco', inputs)
      .then(res => {
        console.log(res);
        setMessage(res.data);
      })
      .catch(err => console.error(err));
  }
  console.log(inputs);
  return (
    <>
      <ReactCSSTransitionGroup
        component='div'
        transitionName='TabsAnimation'
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Card className='main-card mb-3'>
          <CardBody>
            <CardTitle align='center'></CardTitle>
            <Snackbar message={message} />
            <CardTitle align='center'>New Rider</CardTitle>
            <Form>
              <CardTitle>Rider Info</CardTitle>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleEmail11'>Name</Label>
                    <Input
                      type='text'
                      name='name'
                      placeholder='Name'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for='examplePassword11'>Email</Label>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Email'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleCity'>Driving License</Label>
                    <Input
                      type='text'
                      name='drivingLicense'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Driving License Issue Date</Label>
                    <Input
                      type='date'
                      name='dlIssueDate'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleZip'>Driving License Expiry Date</Label>
                    <Input
                      type='date'
                      name='dlExpDate'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>Insurance Number</Label>
                    <Input
                      type='text'
                      name='insNumber'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for='date_founded'>Insurance Issue Date</Label>
                    <Input
                      type='date'
                      name='ins_issue_date'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={5}>
                  <FormGroup>
                    <Label for='exampleZip'>Plate Number</Label>
                    <Input
                      type='text'
                      name='plateNumber'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleCity'>ID Number</Label>
                    <Input
                      type='number'
                      name='idNumber'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Status</Label>
                    <Input
                      type='text'
                      name='status'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleZip'>Sacco</Label>
                    <Input
                      type='text'
                      name='sacco'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>Sacco ID</Label>
                    <Input
                      type='text'
                      name='saccoId'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleState'>Phone</Label>
                    <Input
                      type='text'
                      name='phone'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle>{/* <b>Sacco Leader Details</b> */}</CardTitle>
              <hr />
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>Base</Label>
                    <Input
                      type='text'
                      name='base'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleZip'>Residence</Label>
                    <Input
                      type='text'
                      name='residence'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <h5>Bike Details</h5>
              <hr />

              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Motorbike Make</Label>
                    <Input
                      type='text'
                      name='motorbikeMake'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleZip'>Motorbike Brand</Label>
                    <Input
                      type='text'
                      name='motorbikeBrand'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Motorbike Owner's ID</Label>
                    <Input
                      type='number'
                      name='bikeOwnerID'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>
                      Motorbike Owner's First Name
                    </Label>
                    <Input
                      type='text'
                      name='bikeOwnerFname'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleZip'>Motorbike Owner's Last Name</Label>
                    <Input
                      type='text'
                      name='bikeOwnerLname'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Motorbike Owner's Phone</Label>
                    <Input
                      type='number'
                      name='bikeOwnerPhone'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>Motorbike Owner's Residence</Label>
                    <Input
                      type='text'
                      name='bikeOwnerResidence'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div className='divider' />
              <Button color='primary' onClick={handleSignup} className='mt-2'>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </>
  );
};
export default RiderRegister;
