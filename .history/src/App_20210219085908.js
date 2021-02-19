import './App.css';
import PixiLearning from './components/pixiLearn/pixi-learning'
import TimeLineGant from './components/pixiLearn/reactTimline/timelinegant'
import SjWaypoint from './components/pixiLearn/waypoint-mobile/sjwaypiont'
import Global from './components/pixiLearn/styledComponentsWay/global'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*  <TimeLineGant/> */}

           {/*   <PixiLearning/>
           <SjWaypoint/> */}
<Global/>
      </header>
    </div>
  );
}

export default App;
