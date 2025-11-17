import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const otherProducts = [
  {
    name: 'Code-bear B1编码器TT电机',
    description: '带霍尔编码器的高精度TT电机。',
    image: 'https://via.placeholder.com/300x200.png?text=B1+Motor'
  }
];

function Others() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">其他</h1>
      <Row className="justify-content-center">
        {otherProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Others;
