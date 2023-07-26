import './Benefits.scss'

export default function Benefits() {
    return <section className="benefits">

        <h2 className='benefits__heading'>Why Optimum:</h2>
        <div className='benefits__list'>
        <div className="benefits__container">
        <div className='benefits__text'>
            <h3 className="benefits__reason">50 Years of Expertise</h3>
            <p className='benefits__description'>Quality that stands the test of time. Decades of experience tought us to provide unmatched reliability. Your roof is our legacy</p>
            </div>
            <img alt="icon of a benefit" className="benefits__icon" src={require('../experience.svg').default}/>
        </div>
        <div className="benefits__container">
            <div className='benefits__text'>
                <h3 className="benefits__reason">4 Weeks Lead Time</h3>
                <p className='benefits__description'>Our streamlined processes and expert team ensure swift and efficient completion of construction projects</p>
            </div>
            <img alt="icon of a benefit" className="benefits__icon" src={require('../complete.svg').default}/>
        </div>
        <div className="benefits__container">
        <div className='benefits__text'>
            <h3 className="benefits__reason">100% Local Geography</h3>
            <p className='benefits__description'>Operating exclusively in Southeast Florida, we bring specialized knowledge to meet your region's unique needs</p>
            </div>
            <img alt="icon of a benefit" className="benefits__icon" src={require('../location.svg').default}/>
        </div>
        </div>
    </section>
}