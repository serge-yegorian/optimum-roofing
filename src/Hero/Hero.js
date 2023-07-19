import './Hero.scss'
import Form from "../Form/Form";
function Hero() {
    return <section className="hero">
        <div className='hero__content'>
        <div className="empty"></div>
        <Form/>
        </div>
    </section>;
}

export default Hero;