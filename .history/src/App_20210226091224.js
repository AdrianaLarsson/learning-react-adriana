import './App.css';
import PixiLearning from './components/pixiLearn/pixi-learning'
import TimeLineGant from './components/pixiLearn/reactTimline/timelinegant'
import SjWaypoint from './components/pixiLearn/waypoint-mobile/sjwaypiont'
import Global from './components/pixiLearn/styledComponentsWay/global'
import Home from './components/pixiLearn/styledComponentsWay/home'
import Card from './components/pixiLearn/atomic-design/Card'

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";
const colorPrim = "#F5F5EE"
const data = [
  {
    id: Math.random(),
    title: "Grundstäd",
    cleanTitle: "Städtid",
    cleanTimeStart: "13:00",
    cleantimeEnd: "17:00",
    text: lorem,
    bgColor: colorPrim
  },
  {
    id: Math.random(),
    title: "Vändstäd",
    cleanTimeStart: "13:00",
    cleantimeEnd: "17:00",
    text: lorem,
    bgColor: colorPrim
  },
  {
    id: Math.random(),
    title: "Grundstäd",
    cleanTimeStart: "13:00",
    cleantimeEnd: "17:00",
    text: lorem,
    bgColor: colorPrim
  },
  {
    id: Math.random(),
    title: "Vändstäd",
    cleanTimeStart: "13:00",
    cleantimeEnd: "17:00",
    text: lorem,
    bgColor: colorPrim
  }
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*  <TimeLineGant/> */}

           {/*   <PixiLearning/>
           <SjWaypoint/> 
    <>
      <Global />
      <Home boxData={data} />
    </>*/}
    <Card/>
      </header>
    </div>
  );
}

export default App;
