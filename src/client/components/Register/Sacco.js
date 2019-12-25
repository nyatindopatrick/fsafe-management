import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { useSignUpForm } from '../customHooks';
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
  Input
} from 'reactstrap';

const SaccoRegister = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    handleSignup
  );
  // all callback funcitons should always be defined using the function keywords arrow funciton wont work
  function handleSignup() {
    return console.log(inputs);
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
            <CardTitle>New Sacco</CardTitle>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleEmail11'>Name</Label>
                    <Input
                      type='text'
                      name='sacco'
                      placeholder='Name of sacco'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for='examplePassword11'>Password</Label>
                    <Input
                      type='password'
                      name='password'
                      id='examplePassword11'
                      placeholder='password placeholder'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleCity'>City</Label>
                    <Input
                      type='text'
                      name='city'
                      id='exampleCity'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>State</Label>
                    <Input type='text' name='state' id='exampleState' />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleZip'>Zip</Label>
                    <Input type='text' name='zip' id='exampleZip' />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleCity'>City</Label>
                    <Input type='text' name='city' id='exampleCity' />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>State</Label>
                    <Input type='text' name='state' id='exampleState' />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleZip'>Zip</Label>
                    <Input type='text' name='zip' id='exampleZip' />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleCity'>City</Label>
                    <Input type='text' name='city' id='exampleCity' />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>State</Label>
                    <Input type='text' name='state' id='exampleState' />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleZip'>Zip</Label>
                    <Input type='text' name='zip' id='exampleZip' />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Label for='exampleEmail22' className='mr-sm-2'>
                  Email
                </Label>
                <Input
                  type='email'
                  name='email'
                  id='exampleEmail22'
                  placeholder='something@idk.cool'
                />
              </FormGroup>
              <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Label for='examplePassword22' className='mr-sm-2'>
                  Password
                </Label>
                <Input
                  type='password'
                  name='password'
                  id='examplePassword22'
                  placeholder="don't tell!"
                />
              </FormGroup>
              <div className='divider' />
              <Button color='primary' className='mt-2'>
                Sign in
              </Button>
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </>
  );
};
export default SaccoRegister;
