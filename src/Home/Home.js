
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Quote from "../Quote/Quote";
import Form from "../Form/Form";
import './Home.scss'

export default function Home() {
    return <section className="home">
        <Form/>
        <About/>
        <Benefits/>
        <Quote/>
    </section>;
}