
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Quote from "../Quote/Quote";
import './Home.scss'

export default function Home() {
    return <section className="home">
        <About/>
        <Benefits/>
        <Quote/>
    </section>;
}