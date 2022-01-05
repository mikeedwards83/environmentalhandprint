import { ButtonLink } from '../../atoms/ButtonLink/ButtonLink'
import aos from '../../../public/scripts/aos';
import { useEffect } from 'react';
import { ILink } from '../../../ui/interfaces/ILink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


export interface IQuickLink {
    title: string,
    text: string,
    link?: ILink,
    imageUrl?: string
    icon?: IconProp
}
export const QuickLinks = (props: { links: IQuickLink[] }) => {

    const { links } = props;

    useEffect(() => {
        //AOS END
        aos.init({
            duration: 2000
        });

    }, [])

    return (
        <div className="quickLinks">
            <div className="container">
                <div className="row ">

                    {links.map(x => <QuickLink key={x.title} link={x} />)}

                </div>
            </div>
        </div>

    )
}

const QuickLink = (props: { link: IQuickLink }) => {

    const { link } = props;

    return (
        <div className="col-12 col-sm-6 col-md-3 quickLinks-link">
            <div className="">

                {link.imageUrl &&
                    <img src={link.imageUrl} data-aos="fade-right" data-aos-delay="000" data-aos-offset="0" />
                }
                {link.icon &&
                    <FontAwesomeIcon icon={link.icon} />
                }
                <h4>{link.title}</h4>
                <p>
                    {link.text}
                </p>
                {link.link && <div>
                    <ButtonLink size={"Small"} type={"PrimaryWhite"} url={link.link.url}>{link.link.text}</ButtonLink>
                </div>
                }
            </div>
        </div>
    )
}