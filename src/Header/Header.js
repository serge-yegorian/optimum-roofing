import './Header.scss';
export default function Header() {
    return <>
    <div className='header__background'>
            <header className="header">
                <div className='header__text'>
                    <h1 className="header__heading">Roofing Experts in Southeast Florida </h1>
                    <p className="header__description"><a className="header__a" target="_blank" rel="noreferrer" href="https://optimumdevelopmentllc.com/">Optimum Development & Construction</a> is South Florida leading builder with a unique ability to transform a client’s vision. Specializing in Commercial & Residential New Construction and Renovations.</p>
                </div>
                <div className='header__image-div'>
                    <a className='header__logo-link' href="https://optimumdevelopmentllc.com/" target="_blank" rel="noreferrer">
                        <img className="header__logo" src={require('../logo.png')} alt="logo"/>
                    </a>
                </div>
            </header>
        </div>
    </>;
}