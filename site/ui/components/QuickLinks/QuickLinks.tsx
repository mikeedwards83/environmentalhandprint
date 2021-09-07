import { ButtonLink, ButtonLinkSize, ButtonLinkType } from '../../atoms/ButtonLink/ButtonLink'
import './QuickLinks.scss'
import aos from './../../../public/scripts/aos';
import { useEffect } from 'react';


export interface IQuickLink {
    title: string,
    text: string,
    linkUrl: string,
    linkText: string,
    imageUrl: string,
}
export const QuickLinks = (props: { links: IQuickLink[] }) => {

    const { links } = props;

    useEffect(() => {
//AOS END
        aos.init({
            duration : 2000
          });
        
    }, [])

    return (
        <div className="quickLinks">
            <div className="container">
                <div className="row ">

                    {links.map(x=><QuickLink link={x} />)}

                </div>
            </div>
        </div>

    )
}

const QuickLink = (props: { link: IQuickLink }) => {

    const {link} = props;

    return (
        <div className="col-12 col-sm-6 col-md-3 quickLinks-link">
            <div className="">
                <img src={link.imageUrl} data-aos="fade-right" data-aos-delay="000" data-aos-offset="0" />
                <h4>{link.title}</h4>
                <p>
                    {link.text}
                </p>
                <div>
                    <ButtonLink size={ButtonLinkSize.Small} type={ButtonLinkType.PrimaryWhite} text={link.linkText} url={link.linkUrl} />
                </div>
            </div>
        </div>
    )
}