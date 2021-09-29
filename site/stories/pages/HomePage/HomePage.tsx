import { BannerVideo } from "../../components/BannerVideo/BannerVideo"
import { PageHeader } from "../../components/PageHeader/PageHeader"
import { QuickLinks } from "../../components/QuickLinks/QuickLinks"
import { Side, TextImage } from "../../components/TextImage/TextImage"
import book from './../../components/QuickLinks/assets/Book1.svg'
import textImage from './../../components/TextImage/Assets/Image.jpg'
import videoImage from './../../components/BannerVideo/Assets/VideoThumb.jpg'
import { PageFooter } from "../../components/PageFooter/PageFooter"

export const HomePage = (props: {}) => {

    const quicklinks = {
        links: [{
            imageUrl: book,
            link: {
                text: "Learn More",
                url: "http://test.com"
            },
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        {
            imageUrl: book,
            link: {
                text: "Learn More",
                url: "http://test.com"
            },
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        {
            imageUrl: book,
            link: {
                text: "Learn More",
                url: "http://test.com"
            },
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        {
            imageUrl: book,
            link: {
                text: "Learn More",
                url: "http://test.com"
            },
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        ]
    }

    const block1 = {
        imageText: "Desk Trees",
        imageUrl: textImage as any,
        side: "left" as Side,
        title: "Step 1 - Planet Positive Workforce",
        children: <>
            <p>
                Make a planet positive contribution on behalf of your employees by planting trees and offsetting their climate impact.
            </p>
            <p>
                Show your employees and customers how you are helping our planet.
            </p>
        </>
    }
    const block2 = {
        imageText: "Desk Trees",
        imageUrl: textImage as any,
        side: "right" as Side,
        title: "Step 1 - Planet Positive Workforce",
        children: <>
            <p>
                Make a planet positive contribution on behalf of your employees by planting trees and offsetting their climate impact.
            </p>
            <p>
                Show your employees and customers how you are helping our planet.
            </p>
        </>
    }

    const footer = {
        links1: [
            {
                text: "Link 1",
                url: "http://test,com"
            },
            {
                text: "Link 1",
                url: "http://test,com"
            },
            {
                text: "Link 1",
                url: "http://test,com"
            }
            , {
                text: "Link 1",
                url: "http://test,com"
            }
        ],
        links2: [
            {
                text: "Link 1",
                url: "http://test,com"
            },
            {
                text: "Link 1",
                url: "http://test,com"
            },
            {
                text: "Link 1",
                url: "http://test,com"
            }
            , {
                text: "Link 1",
                url: "http://test,com"
            }
        ],
        copyRight: "© 2021 - Environmental Handprint, All Rights Reserved",
        instagram: {
            url: "http://"
        },
        facebook: {
            url: "http://"
        },
        twitter: {
            url: "http://"
        }
    };

    return (
        <div>
            <PageHeader
                title="Environmental Handprint"
                logo="https://media.istockphoto.com/vectors/hand-print-vector-id165761878?k=20&m=165761878&s=612x612&w=0&h=vWMybbPjcI32m3w2Qaiyx1NnMk1COtL1FpaX5_3SJxM="
                links={[]}
            />
            <BannerVideo
                videoId="489517523"
                videoImage={videoImage as any}
                subTitle="Make a positive impact"
                title="Environmental Handprint"
                button={{
                    text: "Findout More",
                    url: "http://test.com"
                }}
            />
            <QuickLinks
                {...quicklinks}
            />
            <div className="container">
                <TextImage
                    {...block1}
                />
                <TextImage
                    {...block2}
                />

            </div>
            <PageFooter {...footer} />
        </div>
    )
}