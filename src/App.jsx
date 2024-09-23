import "./App.css";
import PlayerCard from "./components/PlayerCard";
import zachedeyImg from "./assets/zachedey.png";
import jamorantImg from "./assets/jamorant.png";
import jarenjacksonImg from "./assets/jarrenjacksonjunior.png";
import santialdamaImg from "./assets/santialdama.png";
import brandoncalrkeImg from "./assets/brandonclarke.png";
import camspencerImg from "./assets/camspencer.png";
import desmondbaneImg from "./assets/desmondbane.png";
import ggjacksonImg from "./assets/ggjackson.png";
import marcussmartImg from "./assets/marcussmart.png";
import vincewilliamsImg from "./assets/vincewilliamsjnr.png";
import memphislogo from "./assets/memphislogo.png";

function App() {
  return (
    <div className="body">
      <img className="logo" src={memphislogo} alt="" />
      <h1 className="head">Meet your Grizzlies</h1>
      <div className="player__list">
        <PlayerCard
          firstName={"Zach"}
          lastName={"Edey"}
          img={zachedeyImg}
          age={22}
          position={"Center"}
          stats={"https://www.espn.com/nba/player/_/id/4600663/zach-edey"}
        />
        <PlayerCard
          firstName={"Ja"}
          lastName={"Morant"}
          img={jamorantImg}
          age={25}
          position={"Guard"}
          stats={"https://www.espn.com/nba/player/_/id/4279888/ja-morant"}
        />
        <PlayerCard
          firstName={"Desmond"}
          lastName={"Bane"}
          img={desmondbaneImg}
          age={26}
          position={"Forward"}
          stats={"https://www.espn.com/nba/player/_/id/4066320/desmond-bane"}
        />
        <PlayerCard
          firstName={"Jaren"}
          lastName={"Jackson"}
          img={jarenjacksonImg}
          age={25}
          position={"Center"}
          stats={
            "https://www.espn.com/nba/player/_/id/4277961/jaren-jackson-jr"
          }
        />
        <PlayerCard
          firstName={"Santi"}
          lastName={"Aldama"}
          img={santialdamaImg}
          age={23}
          position={"Forward"}
          stats={"https://www.espn.com/nba/player/_/id/4593125/santi-aldama"}
        />
        <PlayerCard
          firstName={"Brandon"}
          lastName={"Clarke"}
          img={brandoncalrkeImg}
          age={28}
          position={"Forward"}
          stats={"https://www.espn.com/nba/player/_/id/3906665/brandon-clarke"}
        />
        <PlayerCard
          firstName={"Cam"}
          lastName={"Spencer"}
          img={camspencerImg}
          age={24}
          position={"Guard"}
          stats={"https://www.espn.com/nba/player/_/id/4433083/cam-spencer"}
        />
        <PlayerCard
          firstName={"G.G."}
          lastName={"Jackson"}
          img={ggjacksonImg}
          age={19}
          position={"Forward"}
          stats={"https://www.espn.com/nba/player/_/id/5105550/gg-jackson-ii"}
        />
        <PlayerCard
          firstName={"Marcus"}
          lastName={"Smart"}
          img={marcussmartImg}
          age={30}
          position={"Guard"}
          stats={"https://www.espn.com/nba/player/_/id/2990992/marcus-smart"}
        />
        <PlayerCard
          firstName={"Vince"}
          lastName={"Williams"}
          img={vincewilliamsImg}
          age={24}
          position={"Guard"}
          stats={
            "https://www.espn.com/nba/player/_/id/4397227/vince-williams-jr"
          }
        />
      </div>
    </div>
  );
}

export default App;
