import './Benefits.scss'

export default function Benefits() {
    return <section className="benefits">

        <h2 className='benefits__heading'>Why work with us:</h2>
        <div className='benefits__list'>
        <div className="benefits__container">
            <h3 className="benefits__reason">Reason #1</h3>
            <p className='benefits__description'>Paragraph that explains more scecifically why...Paragraph that explains more scecifically why...Paragraph that explains more scecifically why...</p>
            <img alt="icon of a benefit" className="benefits__icon" src={require('../square.jpeg')}/>
        </div>
        <div className="benefits__container">
            <h3 className="benefits__reason">Reason #2</h3>
            <p className='benefits__description'>Paragraph that explains more scecifically why...Paragraph that explains more scecifically why...Paragraph that explains more scecifically why...</p>
            <img alt="icon of a benefit" className="benefits__icon" src={require('../square.jpeg')}/>
        </div>
        <div className="benefits__container">
            <h3 className="benefits__reason">Reason #3</h3>
            <p className='benefits__description'>Paragraph that explains more scecifically why...Paragraph that explains more scecifically why...Paragraph that explains more scecifically why...</p>
            <img alt="icon of a benefit" className="benefits__icon" src={require('../square.jpeg')}/>
        </div>
        </div>
    </section>
}