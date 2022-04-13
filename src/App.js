import Header from './components/Header';
import Container from './components/Container';
import Entry from './components/Entry';
import CompleteEntry from './components/CompleteEntry';
import UpcomingEntry from './components/UpcomingEntry';
import AddEntry from './components/AddEntry';

function App() {
  return (
    <div id="page" style={{backgroundColor:'black'}}>
      <Container flex = {3} flexDirection = 'column' color = 'black'>
        <Container flex = {2} color='orange'>
          <Container flexDirection = 'column' color = 'red'>
            <Header title="Daily"></Header>
            <Entry></Entry>
          </Container>
          <Container color = 'crimson'>
            <Header title="Weekly"></Header>
          </Container>
          <Container color = 'red'>
            <Header title="Monthly"></Header>
          </Container>
          <Container color = 'crimson'>
            <Header title="Todo"></Header>
          </Container>
        </Container>
        <Container color = 'lightblue'>
          <Container flex = {2} flexDirection = 'column' color = 'green'>
            <Header title="Add Entry"></Header>
            <AddEntry></AddEntry>
          </Container>
          <Container color = 'lightgreen'>
            <Header title="Task Tracker"></Header>
          </Container>
        </Container>
      </Container>
      <Container flexDirection = 'column' color = "pink">
        <Container flexDirection = 'column' color = 'grey'>
          <Header title="Upcoming"></Header>
          <UpcomingEntry></UpcomingEntry>
        </Container>
        <Container flexDirection = 'column' color = 'grey'>
          <Header title="Completed"></Header>
          <CompleteEntry></CompleteEntry>
        </Container>
      </Container>
    </div>
  );
}

export default App;
