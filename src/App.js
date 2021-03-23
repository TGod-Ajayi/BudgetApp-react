import "./App.css";
import { Container, Grid, Segment } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";

import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import EntryLine from "./components/EntryLine";

function App() {
  const dummyData = [
    {
      type: true,
      balance: 5000,
    },
    {
      type: false,
      balance: 3000,
    },
  ];
  const moreDummyData = [
    {
      type: true,
      description: "salary",
      amount: "5000",
    },
    {
      type: false,
      description: "boxers",
      amount: "250",
    },
  ];
  return (
    <Container>
      <MainHeader title="budget" type="h1" />

      <DisplayBalance balance={"2558.53"} size="small" />
      <Segment textAlign="center">
        <Grid columns="2">
          <Grid.Row>
            {dummyData.map((data) => (
              <Grid.Column>
                <DisplayBalance
                  color={data.type ? "green" : "red"}
                  type={data.type}
                  balance={data.balance}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader type="h3" title="History" />

      {moreDummyData.map((value) => (
        <EntryLine
          description={value.description}
          value={value.amount}
          type={value.type}
        />
      ))}
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
