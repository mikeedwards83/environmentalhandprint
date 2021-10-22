import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react"
import { Constants } from "../../../Contants";
import { ILink } from "../../../ui/interfaces/ILink";
import { Link } from "../../atoms/Link/Link";

const SocialMediaIcons = (props: {
  className?: string
}) => {

  const {
    className = ""
  } = props;


  const instagram: ILink | undefined = Constants.socialMedia.instagram;
  const twitter: ILink | undefined = Constants.socialMedia.twitter;
  const facebook: ILink | undefined = Constants.socialMedia.facebook;
  const youtube: ILink | undefined = Constants.socialMedia.youtube;

  return (
    <div className={`SocialMediaIcons ${className}`}>
      <SocialMediaIcon link={instagram} icon={faInstagram} />
      <SocialMediaIcon link={twitter} icon={faTwitter} />
      <SocialMediaIcon link={facebook} icon={faFacebook} />
      <SocialMediaIcon link={youtube} icon={faYoutube} />
    </div>
  )
}


const SocialMediaIcon = (props: {
  link?: ILink
  icon: IconProp
}) => {
  const { link,icon } = props;

  return (
    <>
      {link && <Link url={link.url} target="_blank" className="mx-2 "><FontAwesomeIcon icon={icon} /></Link>}
    </>
  )
}
export default SocialMediaIcons