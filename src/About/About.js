import './About.scss'
export default function About() {
    return <section className="about">
        <div className='about__content'>
              <h1 className="about__heading">Optimum Roofing</h1>
              <p className="about__description">Protect your roof from the relentless onslaught of weather damage. Our specialized team excels in the art of professional roof repair and restoration, delivering unparalleled expertise and craftsmanship. With us, you can rest assured that your roof receives the utmost care and attention, ensuring long-lasting quality that surpasses expectations.</p>
              <p className='about__description'> Shield your home from the perils of leaks and costly repairs by entrusting us with the responsibility. Our unwavering commitment to excellence guarantees resilient solutions that stand the test of time. Don't hesitate, reach out to us today and experience the difference of our unparalleled services.</p>
              </div>
              <img className='about__image' src={require('../square.jpeg')}/>
    </section>
}