import './Hero.scss'
import MyInput from '../UI/MyInput/MyInput';
import MyLine from '../UI/MyLine/MyLine';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero__content">
                <div className="container">
                    <h1 className='hero__title'>Unlimited movies, TV shows, and more</h1>
                    <p className='hero__descr'>Watch anywhere. Cancel anytime.</p>
                    <MyInput>Ready to watch? Enter your email to create or restart your membership.</MyInput>
                </div>
            </div>
            <MyLine />
        </section>
    );
};

export default Hero;