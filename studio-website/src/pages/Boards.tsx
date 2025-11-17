
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const boardProducts = [
  {
    name: 'Code-bear STM32系列A1开发板',
    description: '功能丰富的入门级STM32开发板。',
    image: 'https://via.placeholder.com/300x200.png?text=A1+Dev+Board'
  },
  {
    name: 'Code-bear STM32系列A2开发板',
    description: '性能更强，接口更丰富的进阶STM32开发板。',
    image: 'https://via.placeholder.com/300x200.png?text=A2+Dev+Board'
  }
];

function Boards() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">开发板</h1>
      <Row>
        {boardProducts.map((product, index) => (
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

export default Boards;
