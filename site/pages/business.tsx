import React from "react";
import Section from "../stories/atoms/Section/Section";
import { BannerImage } from "../stories/components/BannerImage/BannerImage";
import CtaSocial from "../stories/components/CtaSocial/CtaSocial";
import Layout from "../stories/components/Layout/Layout";
import Markdown from "../stories/components/Markdown/Markdown";
import PageHead from "../stories/components/PageHead/PageHead";
import { TextImage } from "../stories/components/TextImage/TextImage";
import { IImage } from "../ui/interfaces/IImage";


const individual = () => {

    var image: IImage = {
        src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        alt: "Office with lots of plants",
        fpy: 0.55,
        fpx: 0.2
    };

    return (
        <Layout >
            <PageHead title="Your business handprint" description="How your company can grow its own handprint."
                image={image} />
            <BannerImage image={image} subTitle="Your company's handprint" title="Business for the planet" />

            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <p className="lead">
                            Your company has an Environmental Handprint: the representation of the positive actions your company takes to save our planet.
                            Learn how growing your Handprint is great for your business, your customers, the environment and the world. Simply put, why wouldn’t you?!

                        </p>
                    </div>
                </div>

                <TextImage imageUrl={"https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} imageText={"Children painting a hand"} side={"left"} className="mt-5">
                    <h2 id="shape">Which Shape?</h2>

                    <p>
                        It’s said that you can tell a lot about a society by the way it shapes its economy; from feudal systems, to communism and capitalism and now the emergence of the green economy.

                    </p>
                    <p>
                        The green economy is an economic system where companies work with the planet, not against it, to minimise impact and maximise happiness. To quote Gordon The Gecko, “Green is good”.

                    </p>
                    <blockquote>
                        "Green is good"
                        <span>- Gordon The Gecko</span>
                    </blockquote>
                    <p>
                        By joining the Handprint movement, you are helping the economy and the world to embrace a sustainable and bright future. You become part of the growing green economy.

                    </p>
                </TextImage>

                <TextImage imageUrl={"/images/oiladvert.jpg"} imageText={""} side={"right"} className="mt-5" fpy={0.9} >
                    <h2 id="deep">More Than PR
                    </h2>
                    <p>
                        Building your Handprint needs to extend beyond the marketing team and be embraced by your entire company.
                    </p>
                    <p>
                        For your Handprint to have an impact your company needs to have a <strong>net positive</strong> impact on the environment.
                        This means not just narrowly focusing on one issue, but taking a holistic view,  from reducing greenhouse gases, to reducing waste and 
                        minimising resource usage.
                    </p>
                    <p>
                        With a net positive impact, you and your customers will know that when they buy or use services 
                        from your company that they will be adding to their own Handprint.
                    </p>
                    <p>
                        The way <strong>your</strong> business adds to the Handprints of <strong>your</strong> customers makes <strong>your</strong> businesses 
                        critical to shaping our future.
                    </p>
                </TextImage>
                <TextImage imageUrl={"/images/peoplechating.svg"} imageText={"People talking about their Handprints"} side={"left"} className="mt-5">
                    <h2 id="positive">Being Net Positive
                    </h2>
                    <p>
                        So what does it mean to be <strong>Net Positive</strong>? How can your company achieve this?

                    </p>
                    <p>
                        Being Net positive isn’t easy, it will take work and require you to look at all aspects of your business. But the journey will be worth it, and creates a cleaner, greener and fairer planet for future generations.
                    </p>
                    <p>
                        From the supplies coming in, to the products going out, to companies you hire and services you outsource, you will need to look at all aspects of your business.
                    </p>
                </TextImage>
                <TextImage imageUrl={"/images/shopwithboxes.jpg"} imageText={"People talking about their Handprints"} side={"right"} className="mt-5">
                    <h2 id="network">Growing The Network

                    </h2>
                    <p>
                        By joining the growing network of companies who are striving to do better, you help to grow the Handprint community and the larger it grows, the easier it will become for other companies to grow their Handprint. Eventually this web of connected companies will magnify each other's effect into a huge impact.

                    </p>
                    <p>
                        Together we can create the Handprint economy, one that focuses on positive environmental outcomes, and not just profit. One where each purchase, service and transaction has a positive environmental impact and triggers a chain reaction of benefits to our planet.

                    </p>

                </TextImage>
            </div>

            <Section color="dark">
                <div className="container">

                    <TextImage imageUrl={"/images/circulareconomy.svg"} imageText={"Arrow around the planet Earth"} side={"left"} >
                        <h2 id="circular">
                            Circular Economies
                        </h2>
                        <p>
                            The Circular Economy is core to growing your Environmental Handprint. In the Circular Economy, businesses and individuals strive to minimise waste.

                        </p>
                        <p>
                            Waste is defined as anything that has to be sent to landfill so ideally everything should be reused or recycled, in the same way that nature reuses the waste that it creates, in a constant renewing cycle.
                        </p>
                    </TextImage>
                </div>
            </Section>
            <div className="container">

                <TextImage imageUrl={"/images/peoplehelpingeachother.svg"} imageText={"People helping each other to climb blocks"} side={"right"} className="mt-5">
                    <h2 id="team">
                        Building Your Team
                    </h2>
                    <p>
                        Use your Environmental Handprint to shape and build an environmentally focused team within your company. Today employees and
                        future employees are looking to work for companies that make environmental commitments and are taking <strong>action</strong> to meet them.
                    </p>
                    <p>
                        Growing your Handprint can help you attract and retain the most talented employees,creating a double win, for your company and the environment.


                    </p>
                    <p>
                        By growing your company around the concept of the Handprint your teams will automatically look for the solution that not only helps the business but also the planet. Where each business decision is driven both with sustainability  and growth in mind.

                    </p>
                    <p>
                        A Green Team is a happy team.

                    </p>
                </TextImage>
                <TextImage imageUrl={"https://images.unsplash.com/photo-1617886322168-72b886573c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} imageText={"Lady holding here hand up to the camera"} side={"left"} className="my-5">
                    <h2 id="physical">
                        More Than Carbon
                    </h2>
                    <p>
                        Climate change is the major issue we are facing and every individual, company and country needs to tackle this as a matter of urgency. However your company’s Handprint is more than carbon, it is about the waste your company produces, the products it buys, supporting biodiversity and much more.
                    </p>
                    <p>
                        Your Environmental Handprint represents all the impacts you have on the planet, from the choosing to use biodegradable straws or purchasing recycled paper for printing to sending staff by train instead of a plane to a conference. When considering how you can have a Handprint that helps the planet, you must consider the entirety of your business operations.
                    </p>
                </TextImage>

                <TextImage imageUrl={"https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} imageText={"Lady holding here hand up to the camera"} side={"right"} className="my-5">
                    <h2 id="physical">
                        Shout About It
                    </h2>
                    <p>
                        It is important that companies who are actively growing their Handprint talk about their achievements to inspire other companies to do the same. By sharing your company’s journey you will add as a guide and leader to the companies that follow.
                    </p>
                    <p>
                        It is very important to <strong>evidence the positive actions</strong> you have taken to avoid <strong>Green Washing</strong>.
                         Words without actions are meaningless and actions without proof haven’t happened.
                    </p>
                </TextImage>

                <CtaSocial imageUrl="/images/SocialMediaIcons.png" imageText={"Social media icons in speach bubbles"}>
                    <h2>Share your Handprint 🖐!</h2>
                    <p className="lead pt-3">
                        <strong>Write an action</strong> you are going to take on the palm of your hand and share it with us on social media!
                    </p>
                    <p className="text-center lead">
                        <strong>Find us here:</strong>
                    </p>
                </CtaSocial>
            </div>
        </Layout >
    )
}

export default individual;