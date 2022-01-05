import { Link } from "../stories/atoms/Link/Link";
import { BannerImage } from "../stories/components/BannerImage/BannerImage";
import HighlightsThreeColumn from "../stories/components/HighlightsThreeColumn/HighlightsThreeColumn";
import Layout from "../stories/components/Layout/Layout";
import PageHead from "../stories/components/PageHead/PageHead";
import { TextImage } from "../stories/components/TextImage/TextImage";
import { IImage } from "../ui/interfaces/IImage";

const colours = () => {

    var image: IImage = {
        src: "https://images.unsplash.com/photo-1526270524890-379ff8cec5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Hands covered in paint",
        fpy: 0.55,
        fpx: 0.2
    };

    return (
        <Layout >
            <PageHead title="The Different Handprint Colours" description="The different colours of your Handprint."
                image={image} />
            <BannerImage image={image} subTitle="Different colours help in different ways." title="Handprint Colours" />

            <div className="container pt-5">
                <p className="lead">
                    Your Environmental Handprint can come in a variety of different colours, each one representing the different parts of our environment that we can help.
                </p>
            </div>
            <div className="container pt-5">
                <TextImage side="left" imageText="Green Handprint" imageUrl="/images/Handprint-Green.jpg">
                    <h2>Green Handprint</h2>
                    <p className="lead">
                        Your Green Handprint helps the physical earth and land we live on, creating a cleaner and literally greener planet for all of us.
                    </p>
                </TextImage>
                <HighlightsThreeColumn
                    className="py-4"
                    highlights={[
                        {
                            title: "Critical Issues",
                            description: "The critical issues facing the Green Handprint",
                            features: [
                                "Deforestation",
                                "Species extinction",
                                "Soil degradation",
                                "Habitat collapse"
                            ],
                            
                        },
                        {
                            title: "Grow Your Handprint",
                            features: [
                                "Contacting your government representative and demand change.",
                                "Reduce the amount of meat you have and buy it locally.",
                                "Turn off lights and turn down the heating. ",
                                "Volunteer to plant trees for a day.",
                                "Re-wild part of your lawn, plant some wildflowers, create a bug hotel.",
                            ]
                        },
                        {
                            title: "Organisations",
                            description: `Some great organisations in helping to protect the land we live on.`,
                            features: [
                                <Link key="1" url="https://www.greenpeace.org.uk/">Greenpeace</Link>,
                                <Link key="2" url="https://extinctionrebellion.uk/">Extinction Rebellion</Link>,
                                <Link key="3" url="https://www.greenpeace.org.uk/">Greenpeace</Link>,
                                <Link key="4" url="https://www.rainforest-alliance.org/">Rainforest Alliance</Link>,
                            ],
                            footer: "We are always looking for more great organisations to shout about. Let us know what you are doing."
                        }
                    ]}
                />
            </div>
            <div className="container pt-5">
                <TextImage side="left" imageText="Blue Handprint" imageUrl="/images/Handprint-Blue.jpg">
                    <h2 className="blue">Blue Handprint</h2>
                    <p className="lead">
                        Are you helping to make the world&#39;s oceans, seas, rivers cleaner and bring life back to the deeps?
                    </p>
                </TextImage>
                <HighlightsThreeColumn
                    colour="blue"
                    className="py-4"
                    highlights={[
                        {
                            title: "Critical Issues",
                            description: "The critical issues facing the Blue Handprint",
                            features: [
                                "Plastic pollution",
                                "Chemical pollution",
                                "Fresh water over extraction",
                                "Overfishing",
                                "Sea level rising",
                            ]
                        },
                        {
                            title: "Grow Your Handprint",
                            features: [
                                "Contacting your government representative and demand change.",
                                "Avoid buying plastic products or packaging.",
                                "Reducing the amount of harmful chemicals you put down the drain, for example bleach and washing powders.",
                                "Reduce the amount of fish you eat.",
                                "Use less plastics, and always recycle it.",
                                "Join a beach cleanup."
                            ]
                        },
                        {
                            title: "Organisations",
                            description: `Some great organisations in helping to protect the water we need to live.`,
                            features: [
                                <Link key="1" url="https://www.plasticbusters.org/">Plastic Busters</Link>,
                                <Link key="2" url="https://sasshop.org.uk/">Surfers Against Sewage</Link>,
                                <Link key="3" url="https://seashepherd.org/">Sea Shepard</Link>,
                            ],
                            footer: "We are always looking for more great organisations to shout about. Let us know what you are doing."
                        }
                    ]}
                />
            </div>
            <div className="container pt-5">
                <TextImage side="left" imageText="Grey Handprint" imageUrl="/images/Handprint-Grey.jpg">
                    <h2 className="grey">Grey Handprint</h2>
                    <p className="lead">
                        The Grey Handprint represents the air that we breathe. We need to protect this critical resource to prevent
                        Climate Change, reduce the amount of harmful pollutants that we breathe in.

                    </p>
                </TextImage>
                <HighlightsThreeColumn
                    className="py-4"
                    colour="grey"
                    highlights={[
                        {
                            title: "Critical Issues",
                            description: "The critical issues facing the Grey Handprint",
                            features: [
                                "Carbon emissions and greenhouse gases.",
                                "Air pollution from industry.",
                                "Ozone layer depletion."
                            ]
                        },
                        {
                            title: "Grow Your Handprint",
                            features: [
                                "Contacting your government representative and demand change.",
                                "Where possible avoid using fossil fuel transport.",
                                "Avoid flying, especially for business.",
                                "If you have an open fire, don’t throw just anything on it. Many man made products have very dangerous pollutants.",
                            ]
                        },
                        {
                            title: "Organisations",
                            description: `Some great organisations in helping to protect the air we breath.`,
                            features: [
                                <Link key="1" url="https://onetreeplanted.org/">One Tree Planted</Link>,
                                <Link key="2" url="https://www.ecosia.org/?c=en">Ecosia</Link>

                            ],
                            footer: "We are always looking for more great organisations to shout about. Let us know what you are doing."
                        }
                    ]}
                />
            </div>
            <div className="container pt-5">
                <TextImage side="left" imageText="Yellow Handprint" imageUrl="/images/Handprint-Yellow.jpg">
                    <h2 className="yellow">Yellow Handprint</h2>
                    <p className="lead">
                    Your Yellow Handprint represents actions you take to help communities who are being adversely affected by the environmental 
                    crisis. At this point in time every community around 
                    the world is being affected, but others are clearly being affected a lot worse than others.

                    </p>
                </TextImage>
                <HighlightsThreeColumn
                    className="py-4"
                    colour="yellow"
                    highlights={[
                        {
                            title: "Critical Issues",
                            description: "The critical issues facing the Grey Handprint",
                            features: [
                                "Drought.",
                                "Imported waste and recycling.",
                                "Pest control.",
                                "Climate migration."                                
                            ]
                        },
                        {
                            title: "Grow Your Handprint",
                            features: [
                                "Purchase fair trade and ethically sourced products.",
                                "Avoid fast fashion.",
                                "Purchase from companies with transparent supply chains."
                            ]
                        },
                        {
                            title: "Organisations",
                            description: `Some great organisations in helping people to live clean and secure lives.`,
                            features: [
                                <Link key="1" url="https://www.treeaid.org">Tree Aid</Link>,
                            ],
                            footer: "We are always looking for more great organisations to shout about. Let us know what you are doing."
                        }
                    ]}
                />
            </div>
            <div className="container pt-5">
                <TextImage side="left" imageText="Black Handprint" imageUrl="/images/Handprint-Black.jpg">
                    <h2 className="black">Black Handprint</h2>
                    <p className="lead">
                        Your Blank Handprint represents space, it is crazy to think that in less than 100 years of 
                        space travel we have already started to cause serious problems. If we don’t act quickly and 
                        responsible we may find that we trap ourselves on this planet.


                    </p>
                </TextImage>
                <HighlightsThreeColumn
                    className="py-4"
                    colour="black"
                    highlights={[
                        {
                            title: "Critical Issues",
                            description: "The critical issues facing the Black Handprint",
                            features: [
                                "Rubbish from satellites and rockets.",
                                "Pollution from space tourism."
                            ]
                        },
                        {
                            title: "Grow Your Handprint",
                            features: [
                                "Contacting your government representative and demand change."
                            ]
                        },
                        {
                            title: "Organisations",
                            description: `Some great organisations in helping people to live clean and secure lives.`,
                            features: [
                                `We aren't aware of any, but if you know of any, or are one please let us know.`
                            ],
                            footer: "We are always looking for more great organisations to shout about. Let us know what you are doing."
                        }
                    ]}
                />
            </div>
        </Layout >


    )
}

export default colours;