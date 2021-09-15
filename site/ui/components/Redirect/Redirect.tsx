import { useRouter } from "next/dist/client/router";
import React, { ReactNode, useEffect } from "react"
import { Link } from "../../atoms/Link/Link";

export const Redirect = (props: { url: string, redirect?: boolean }) => {

  const { url, redirect = true } = props;
  const route = useRouter();

  useEffect(() => {
    if (redirect) {
      route.push(url)
    }
  }, [])

  return (
    <div className={`Redirect`}>
      <div className="m-auto">
        <h1>Redirecting You</h1>
        <p className="lead">
          We are sending you to a better place!
        </p>
        <p>
          Destination: <Link url={url}>{url}</Link>
        </p>
      </div>
    </div>
  )
}