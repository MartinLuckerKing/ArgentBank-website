import React from 'react';
import Banner from "./../../components/Banner"
import TrustIcon from "./../../components/TrustIcon"
import iconChat from "./../../img/icon-chat.png"
import iconMoney from "./../../img/icon-money.png"
import iconSecurity from "./../../img/icon-security.png"

import "./style.css"

function Home() {
    return (
        <main>
            <Banner title="Promoted Content"
                    subtitleOne="No fees."
                    subtitleTwo="No minimum deposit."
                    subtitleThree="High interest rates."
                    text="Open a savings account with Argent Bank today!" />
                    
        <section className='features'>
            <h2 className="sr-only">Features</h2>
            <TrustIcon  image={iconChat}
                        altText="Chat Icon"
                        subTitle="You are our #1 priority"
                        paragraph="Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes."/>
            
            <TrustIcon  image={iconMoney}
                        altText="Money Icon"
                        subTitle="More savings means higher rates"
                        paragraph="The more you save with us, the higher your interest rate will be!"/>

            <TrustIcon  image={iconSecurity}
                        altText="Security Icon"
                        subTitle="Security you can trust"
                        paragraph="We use top of the line encryption to make sure your data and money is always safe."/>

            
        </section>
        </main>

    );
}

export default Home;
