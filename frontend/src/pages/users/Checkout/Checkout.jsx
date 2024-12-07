import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import "./Checkout.css";

export default function Checkout() {
  return (
    <Container className="checkout-page">
      {/* Div để nhập thông tin mua hàng */}
      <Col className="checkout-form-column">
        <Card className="checkout-form-card">
          <Card.Body>
            <h2 className="checkout-form-title">Billing Information</h2>
            <Form>
              {/* Các trường nhập thông tin mua hàng */}
              <Form.Group controlId="formName" className="form-checkout-custom">
                <Form.Label className="checkout-label">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group
                controlId="formPhone"
                className="form-checkout-custom"
              >
                <Form.Label className="checkout-label">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Form.Group
                controlId="formEmail"
                className="form-checkout-custom"
              >
                <Form.Label className="checkout-label">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group
                controlId="formAddress"
                className="form-checkout-custom"
              >
                <Form.Label className="checkout-label">Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group>

              <Form.Group
                controlId="formNotes"
                className="form-checkout-custom"
              >
                <Form.Label className="checkout-label">Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter any notes or special instructions"
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>

      {/* Div để hiển thị order summary */}
      <Col className="checkout-summary-column">
        <Card className="checkout-summary-card">
          <Card.Body>
            <h2 className="checkout-summary-title">Order Summary</h2>
            {/* Hiển thị thông tin order summary */}
            <div className="order-summary-details"></div>
            <Button variant="success" className="btn-purchase">
              Purchase
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
