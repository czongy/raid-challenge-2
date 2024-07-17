// import { fruits } from "../placeholder-data";
import Row from "react-bootstrap/Row";
import FruitCard from "./FruitCard";

function FruitList({fruits}) {
  return (
    <Row xs={2} sm={3} md={4} lg={5} xl={6} xxl={7} className="px-4 g-4">
      {fruits.map((fruit, index) => (
        <FruitCard key={index} fruit={fruit} index={index} />
      ))}
    </Row>
  );
}

export default FruitList;
