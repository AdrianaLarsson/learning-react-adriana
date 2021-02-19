import './App.css';
import PixiLearning from './components/pixiLearn/pixi-learning'
import TimeLineGant from './components/pixiLearn/reactTimline/timelinegant'
import SjWaypoint from './components/pixiLearn/waypoint-mobile/sjwaypiont'
import Global from './components/pixiLearn/styledComponentsWay/global'
import Home from './components/pixiLearn/styledComponentsWay/home'


const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Grundstäd",
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: lorem,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: lorem,
    bgColor: "#9FEACD"
  }
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*  <TimeLineGant/> */}

           {/*   <PixiLearning/>
           <SjWaypoint/> */}
    <>
      <Global />
      <Home boxData={data} />
    </>
      </header>
    </div>
  );
}

export default App;
