
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const projectProducts = [
  {
    name: 'Code-bear C1全向轮小车',
    description: '基于STM32的开源全向轮小车项目。',
    image: 'https://via.placeholder.com/300x200.png?text=C1+Omni+Car'
  }
];

function ProductProjects() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">开源项目</h1>
      <Row className="justify-content-center">
        {projectProducts.map((product, index) => (
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

export default ProductProjects;
