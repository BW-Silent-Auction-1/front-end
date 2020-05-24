import React from 'react';
import FadeIn from 'react-fade-in';




const Home = () => {

    return(
        <FadeIn transitionDuration='5000' delay='500'>
    <div className='homeInfo'> <h1 className="headers">Welcome to Silent-Auction!</h1>
    <p>We're pleased to welcome you aboard to our online auction platform,
      were buyers and sellers can do so while being in the comfort of thier own home (anonymously!). </p>
    </div>
</FadeIn>

)}

export default Home;