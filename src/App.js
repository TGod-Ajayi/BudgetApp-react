import "./App.css";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2558.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Income
                </Statistic.Label>
                <Statistic.Value>1,045</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Outgoing
                </Statistic.Label>
                <Statistic.Value>5000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Boxer
            </Grid.Column>
            <Grid.Column width="3" textAlign="right">
              10$
            </Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Free Money
            </Grid.Column>
            <Grid.Column width="3" textAlign="right">
              10$
            </Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Add new transaction</Header>
      <Form>
        <Form.Group>
          <Form.Input
            label="description"
            icon="tags"
            width="12"
            placeholder="new shiny thing"
          />
          <Form.Input
            placeholder="100"
            icon="dollar"
            iconPosition="left"
            label="amount"
          />
        </Form.Group>
        <ButtonGroup style={{ marginTop: "2em" }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Save</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
