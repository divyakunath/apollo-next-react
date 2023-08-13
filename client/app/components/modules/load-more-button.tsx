import { Button, Column, Row } from "../elements";

const LoadMoreButton = ({ loadMore }) => (
    <Row>
        <Column style={{ textAlign: 'center' }}>
            <Button onClick={loadMore} className="my-4 ml-auto">Load more</Button>
        </Column>
    </Row>
);

export default LoadMoreButton;