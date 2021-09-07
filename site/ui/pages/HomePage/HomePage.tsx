import { BannerVideo } from "../../components/BannerVideo/BannerVideo"
import { PageHeader } from "../../components/PageHeader/PageHeader"
import { QuickLinks } from "../../components/QuickLinks/QuickLinks"
import { TextImage, TextImageSide } from "../../components/TextImage/TextImage"
import book from './../../components/QuickLinks/assets/Book1.svg'
import textImage from './../../components/TextImage/Assets/Image.jpg'
import videoImage from './../../components/BannerVideo/Assets/VideoThumb.jpg'


export const HomePage = (props: {}) => {

    const quicklinks = {
        links: [{
            imageUrl: book,
            linkText: "Learn More",
            linkUrl: "http://test.com",
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        {
            imageUrl: book,
            linkText: "Learn More",
            linkUrl: "http://test.com",
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        {
            imageUrl: book,
            linkText: "Learn More",
            linkUrl: "http://test.com",
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        {
            imageUrl: book,
            linkText: "Learn More",
            linkUrl: "http://test.com",
            text: "Become planet positive, plant trees and reduce your footprint.",
            title: "Personal Subscription"
        },
        ]
    }

    const block1 = {
        imageText: "Desk Trees",
        imageUrl: textImage as any,
        side: TextImageSide.ImageLeft,
        title: "Step 1 - Planet Positive Workforce",
        content: <>
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
        side: TextImageSide.ImageRight,
        title: "Step 1 - Planet Positive Workforce",
        content: <>
            <p>
                Make a planet positive contribution on behalf of your employees by planting trees and offsetting their climate impact.
            </p>
            <p>
                Show your employees and customers how you are helping our planet.
            </p>
        </>
    }

    return (
        <div>
            <PageHeader
                title="Environmental Handprint"
                logo="https://media.istockphoto.com/vectors/hand-print-vector-id165761878?k=20&m=165761878&s=612x612&w=0&h=vWMybbPjcI32m3w2Qaiyx1NnMk1COtL1FpaX5_3SJxM="
            />
            <BannerVideo
                videoId="489517523"
                videoImage={videoImage as any}
                subTitle="Make a positive impact"
                title="Environmental Handprint"
                buttonText="Findout More"
                buttonUrl="http://test.com"
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
        </div>
    )
}