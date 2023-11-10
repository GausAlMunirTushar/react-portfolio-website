import bannerImg from '../assets/banner.png'
const Home = () => {
    return (
        <div className="mt-20 bg-bgShade">
            <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
                <div className='md:w-1/2 w-full'>
                    <img src={bannerImg} alt="" />
                </div>
                <div className="md:w-1/2 w-full mt-">
                    <h3 className="text-xl text-headingColor font-semibold mb-5">
                        Hey, I am Tushar
                    </h3>
                    <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading[76px] mb-5">
                        I create{' '}
                        <span className="text-primary">product design</span>{' '}
                        <br /> and brand experience
                    </h1>
                    <p className="text-body text-2xl leading-9 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <button className="btn-primary">Get In Touch</button>
                </div>

            </div>
        </div>
    );
};

export default Home;
