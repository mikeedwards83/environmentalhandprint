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
        src: "https://images.unsplash.com/photo-1457301608316-fc12b0d40dbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        alt: "Boy putting is handprint on a tree",
        fpy: 0.55,
        fpx: 0.2
    };

    return (
        <Layout >
            <PageHead title="Your individual handprint" description="How you can make a positive impact and grow your handprint"
                image={image} />
            <BannerImage image={image} subTitle="A positive impact" title="Your individual handprint" />

            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <p className="lead">
                            We all have a handprint. Normally we discover this as a kid by painting our hand and then pressing it against the nearest wall we can find (much to the delight of our parents). But we also have an Environmental Handprint and this one doesn&#39;t leave paint on the wall, it leaves a better world!
                        </p>

                    </div>
                </div>

                <TextImage imageUrl={"https://images.unsplash.com/photo-1531237848491-c44ca4736f27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"} imageText={"Children painting a hand"} side={"left"} className="mt-5">
                    <p>
                        Unlike your painted handprint, your Environmental Handprint can grow with each action you take. From recycling and reducing your carbon usages to repairing old clothes and growing your own food,your handprint gets bigger, sometimes just a little bit and sometimes in huge jumps.
                    </p>
                    <p>
                        Read on to discover more about your handprint and your actions can help save our planet (or follow us on social media to get the bite sized version).
                    </p>
                </TextImage>

                <TextImage imageUrl={"https://images.unsplash.com/photo-1544787219-2c5077fcfcf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80"} imageText={""} side={"right"} className="mt-5" fpy={0.9} >
                    <h2 id="habit">Growing a habit</h2>
                    <p>
                        We know that forming habits is hard (the good ones anyway, bad habits seem to form easily!), but forming habits is important because our actions are no longer one-off - they become part of who we are and how we see the world.
                    </p>
                    <p>
                        Habits are easier to form if there is a small reward, like a biscuit and cup of tea after a run, or watching a TV show after studying.Your Handprint becomes part of your reward, growing a little bit with each environmental action taken, and making the world a nicer place.
                    </p>
                </TextImage>
                <TextImage imageUrl={"/images/peoplechating.svg"} imageText={"People talking about their Handprints"} side={"left"} className="mt-5">
                    <h2 id="positive">A Positive Conversation
                    </h2>
                    <p>
                        Positive conversations are amazing. We love talking with our friends, family, the random person you always talk to on the bus who just wants to sleep. Positive conversations are easier to start and engage people with (this statement does not apply to social media).

                    </p>
                    <p>
                        By asking someone about their Handprint you can start a positive conversation about helping our planet. It&#39;s an opportunity to talk about the challenges you have faced, share the great things you are doing now and dream up amazing solutions for the future!

                    </p>
                </TextImage>
            </div>

            <Section color="dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h2 id="money">
                                Where Your Money Goes
                            </h2>
                            <p>
                                At the end of the month, most of us look at our bank balance and ask “Where has my money gone?”,  normally we are trying to work out how we spent so much money on a night out when you swear you only had 2 drinks.
                            </p>
                            <p>
                                Knowing where our money goes and how companies use that money can make a huge difference to our own Handprints. Companies have Handprints to and by spending our money with companies that actively grow theirs, we can also grow our own, and together, do something great for the planet. .
                            </p>
                            <p>
                                We know that finding companies that care about the planet can be a challenge and we won&#39;t always be able to get it right, but where we can, and can afford to, we should. Start with something simple like buying coffee from a coffee shop that offers a discount for bringing a reusable cup. Let the company know that you bought from them because of their Handprint and their commitment to making a sustainable planet.
                            </p>
                        </div></div></div>
            </Section>
            <div className="container">

                <TextImage imageUrl={"/images/peoplehelpingeachother.svg"} imageText={"People helping each other to climb blocks"} side={"right"} className="mt-5">
                    <h2 id="together">
                        Working Together

                    </h2>
                    <p>
                        No person is an island (there is however a place called “Persön” in Sweden but even this has 200+ inhabitants and is definitely not an island). One individual making changes on their own won&#39;t solve the climate and environmental crisis, but working together is a different story. When lots of people take lots of small actions it adds up to a huge wave of positive movement and a huge Community Environmental Handprint.
                    </p>
                    <p>
                        To riff off Captain Planet
                    </p>
                    <blockquote>
                        “When our Handprints combine, we are ….”.
                    </blockquote>
                    <p>
                        Growing your Handprint brings people together to have fun, help the planet and drink tea (nothing happens without tea).

                    </p>
                    <p>
                        What are the groups of people in your life and what Handprints do they have?
                    </p>
                    <ul>
                        <li>School Handprint</li>
                        <li>Friday night jazz club Handprint</li>
                        <li>Your town&#39;s Handprint</li>
                        <li>Your country&#39;s Handprint</li>
                        <li>The world&#39;s Handprint</li>
                    </ul>
                    <p>
                        All of the planet positive actions you take add to these Community Handprints.
                    </p>
                </TextImage>
                <TextImage imageUrl={"https://images.unsplash.com/photo-1622539354515-e207f88e1074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"} imageText={"Lady holding here hand up to the camera"} side={"left"} className="my-5">
                    <h2 id="physical">
                        Something Physical

                    </h2>
                    <p>
                        As Olivia Newton-John once said “Let&#39;s get physical” , so let&#39;s discuss how your Handprint has a physical aspect.
                    </p>
                    <p>
                        You leave your handprint on all the things that you interact with as you go through your day. This means you have the choice to leave it on things that have a positive impact on the environment, for example choosing a reusable water bottle instead of single use plastic, reading a news article about climate change or even just turning the lights off when you leave a room (if you live with your parents, this will make them happy).
                    </p>
                    <p>
                        You can see your physical handprint, just turn your palm to your face and it is there!
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