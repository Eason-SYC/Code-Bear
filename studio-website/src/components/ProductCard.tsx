import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={image} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>
          <Link to="/support" className="btn btn-outline-primary mt-auto">
            获取详情
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
