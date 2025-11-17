
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Wechat } from 'react-bootstrap-icons';

function Support() {
  return (
    <Container className="my-5">
      {/* Technical Support Section */}
      <Row className="justify-content-center mb-5">
        <Col md={10} lg={8}>
          <Card className="text-center shadow-lg">
            <Card.Body className="p-5">
              <h1 className="fw-bold">支持与定制</h1>
              <p className="lead text-muted mb-4">
                遇到技术问题？希望与我们深入交流？欢迎加入我们的技术支持群！
              </p>
              <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                  <h4 className="fw-bold">扫码添加微信</h4>
                  <p className="text-muted">请备注“技术支持”</p>
                  <img 
                    src="https://via.placeholder.com/250x250.png?text=WeChat+QR+Code" 
                    alt="技术支持微信二维码" 
                    className="img-fluid rounded"
                  />
                </Col>
                <Col md={6}>
                  <h4 className="fw-bold">或直接添加微信号</h4>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <Wechat size={24} className="me-2" />
                    <span className="fs-5 fw-bold user-select-all">tech-support-wechat</span>
                  </div>
                  <p className="text-muted">
                    添加好友后，我们会邀请您进入专属技术交流群，与众多开发者一同探讨技术，解决问题。
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Custom Services Section */}
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="text-center shadow-lg">
            <Card.Body className="p-5">
              <h1 className="fw-bold">定制服务</h1>
              <p className="lead text-muted mb-4">
                需要个性化的软硬件解决方案？我们提供专业的一对一定制开发服务。
              </p>
              <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                  <h4 className="fw-bold">扫码添加微信</h4>
                  <p className="text-muted">请备注“定制服务”，并详细描述您的需求，方便我们更好地报价。</p>
                  <img 
                    src="https://via.placeholder.com/250x250.png?text=Custom+Service+QR" 
                    alt="定制服务微信二维码" 
                    className="img-fluid rounded"
                  />
                </Col>
                <Col md={6}>
                  <h4 className="fw-bold">或直接添加微信号</h4>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <Wechat size={24} className="me-2" />
                    <span className="fs-5 fw-bold user-select-all">custom-service-wechat</span>
                  </div>
                  <p className="text-muted">
                    为了给您提供更精确的报价和方案，请在添加好友时尽可能详细地描述您的需求。
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Support;
