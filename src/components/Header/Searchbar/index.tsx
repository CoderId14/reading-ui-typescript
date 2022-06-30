import { Button, Form, FormControl } from "react-bootstrap";
import { Wrapper } from "src/components/Header/DataList";
import ItemSearch from "src/components/Header/ItemSearch";
function Searchbar(): JSX.Element {
  return (
    <Form.Group>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          list="browsers"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Wrapper root="browsers">
        <ItemSearch></ItemSearch>
      </Wrapper>
    </Form.Group>
  );
}

export default Searchbar;
