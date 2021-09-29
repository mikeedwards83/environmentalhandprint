import { ReactNode, useEffect, useState } from "react"
import { Button } from "../../atoms/Button/Button";

import Cookies from 'js-cookie'

export const cookieName = "cookiesAccepted";

const CookieBanner = (props: {
  className?: string,
  children: ReactNode
}) => {

  const {
    className = "",
    children

  } = props;


  const [accepted, setAccepted] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleAccept = () => {
    Cookies.set(
      cookieName,
      "true",
      {
        expires: new Date('2030-05-30T12:30:00.00-05:00'),
        path: "/"
      }
    )

    setDisplay(false);
    setAccepted(true);
  }

  useEffect(() => {
    const accepted = Cookies.get(cookieName);

    if (accepted && accepted === "true") {
      setDisplay(false);
      setAccepted(true);
    }
    else {
      setDisplay(true);
      setAccepted(false);
    }
  }, [])

  return (


    <div className={`CookieBanner ${className}`}>
      {display &&
        <>
          <div className={'CookieBanner-Modal'}>
          </div>
          <div className={'CookieBanner-Notice'}>
            <div className={'CookieBanner-Notice-Container'}>
              <h3>We Use Cookies</h3>
              <p>
                Cookies are used to give you the best possible experience. <br />
                Read our <strong><a href="/pages/privacypolicy" target="_blank">Cookie Policy</a></strong> to find out more.
              </p>
              <Button onClick={handleAccept} >
                Accept
              </Button>
            </div>
          </div>
        </>
      }
      {accepted && children}
    </div>
  )
}

export default CookieBanner;