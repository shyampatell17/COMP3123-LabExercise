import logo from './logo.svg';
import './App.css';
import CourseWelcome from './components/CourseWelcome';
import ExerciseNum from './components/ExerciseNum';
import Studid from './components/Values'
import College from './components/College';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        
        {/* Course Welcome */}
        <CourseWelcome name="FullStack Development - I"/>

        {/* Exercise Information */}
        <ExerciseNum work="Week09 Lab Exercise"/>

        {/* Student Id and Name */}
        <Studid value="101412165"> </Studid>
        <h4>Shyam Patel</h4>

        {/* College Name */}
        <College name="Gorge Brown College"/>

      </header>
    </div>
  );
}

export default App;
