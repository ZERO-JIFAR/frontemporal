import { Badge, Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="aboutUsContainer row" style={{width: 'auto', display: 'block'}}>
          <Card className="justify-content-md-center row" style={{margin:'10px 0px 10px 0px'}}>
            <h3>
              <Badge bg="secondary">About Us</Badge>
            </h3>
            <Card.Body>
              <Card.Text>
                We are a team of passionate individuals who love to create
                amazing things. Our mission is to provide high-quality services
                and products that exceed our customers' expectations.
              </Card.Text>
            </Card.Body>
          </Card>

          <div className="row" style={{padding:'10px 0px 10px 10px'}}>
            <div className="col-12 col-md-4">
              <Card style={{ width: "auto" }}>
                <Card.Img
                style={{ padding : '5%', border: '2px solid #00000063'}}
                  variant="top"
                  src="https://media.wired.com/photos/5932695958b0d64bb35d1674/master/w_1600%2Cc_limit/Johnny-II.jpg"
                />
                <Card.Body>
                  <Card.Title>Feature 1</Card.Title>
                  <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec consequat id velit ut consectetur. Praesent vitae sem
                    vitae sem ultricies."
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4">
              {" "}
              <Card style={{ width: "auto" }}>
                <Card.Img
                style={{ padding : '5%', border: '2px solid #00000063'}}
                  variant="top"
                  src="https://media.wired.com/photos/59326959edfced5820d1024f/master/w_960,c_limit/Noisy-Crachini.jpg"
                />
                <Card.Body>
                  <Card.Title>Feature 2</Card.Title>
                  <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec consequat id velit ut consectetur. Praesent vitae sem
                    vitae sem ultricies."
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4">
              <Card style={{ width: "auto" }}>
                <Card.Img
                style={{ padding : '5%', border: '2px solid #00000063'}}
                  variant="top"
                  src="https://media.wired.com/photos/593269589be5e55af6c24a9e/master/w_960,c_limit/Jonathan-Jones.jpg"
                />
                <Card.Body>
                  <Card.Title>Feature 3</Card.Title>
                  <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec consequat id velit ut consectetur. Praesent vitae sem
                    vitae sem ultricies."
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
