import { useEffect, useRef, useState } from "react";
import { ButtonLink, ButtonLinkType } from "../../atoms/ButtonLink/ButtonLink";
import useDimension from "../../hooks/useDimension";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ILink } from "../../interfaces/ILink";

export const BannerVideo = (props: {
    videoImage: string,
    videoId: string
    title: string,
    subTitle: string
    button?:ILink
}) => {

    const { videoImage, videoId, title, subTitle, button} = props;

    const [videoUrl, setVideoUrl] = useState<string>();
    const screenSize = useWindowSize();

    const videoRef = useRef<HTMLDivElement>(null);

    const { height, width } = useDimension(videoRef);

    const [videoDimensions, setVideoDimensions] = useState<{ width: number, height: number, margin: number }>();


    useEffect(() => {

        let url = `https://player.vimeo.com/video/${videoId}?api=1&player_id=player1&background=1&autoplay=1&loop=1`
        setVideoUrl(url);

    }, [videoId])

    useEffect(() => {

        let sW = height * (16 / 9);
        let sH = width * (9 / 16);

        if (sH < height) {

            sH = height;

        } else {
            sW = width;
        }

        let dH = sH - height;
        let margin = 0;

        if (dH > 0) {
            margin = dH / 2 * -1;
            console.log("here", margin)
        }

        setVideoDimensions({
            height: sH,
            width: sW,
            margin: margin
        })

    }, [height, width])


    return (
        <div className="bannerVideo" data-videoid={videoId} ref={videoRef}>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div className="bannerVideo-image ">
                <img src={videoImage} />
            </div>
            {videoDimensions &&
                <div className="bannerVideo-video " style={{ marginTop: `${videoDimensions.margin}px` }} >
                    {videoUrl && <iframe frameBorder='0' allow='autoplay; fullscreen' width={videoDimensions?.width} height={videoDimensions?.height} allowFullScreen src={videoUrl}></iframe>}
                </div>
            }
            <div className="bannerVideo-text">
                <div className="bannerVideo-text-container">

                    <h1>
                        {title}
                    </h1>
                    {subTitle &&
                        <h2>
                            {subTitle}
                        </h2>
                    }

                    {button  &&
                        <ButtonLink link={button} type={ButtonLinkType.Primary} />
                    }

                </div>
            </div>
        </div>
    )
}
