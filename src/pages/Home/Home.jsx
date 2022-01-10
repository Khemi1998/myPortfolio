import "./Home.scss";

import Nav from "../../components/Nav/Nav";

const Home = () => {

    return  <div id="home" className="home">
        <Nav />
        <h1 className="home__heading">I'm Khemi</h1>
        <h2 className="home__subheading">A Junior Full-Stack Engineer</h2>
    </div>
}

export default Home;