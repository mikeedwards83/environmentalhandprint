import { ReactNode } from "react"
import './BannerImage.scss'

export const BannerImage = (props: { title: string | ReactNode, imageUrl: string }) => {

    const { title, imageUrl } = props;

    return (
        <div className="BannerImage d-flex justify-content-center align-items-center " style={{ backgroundImage: `url('${imageUrl}')` }}>
                <h1 className="">
                    {title}
                </h1>

                {/*}
                <div className="text-center tt-heading-3-down">
                    <a href="#downTarget">
                        <svg className="svg-inline--fa fa-chevron-circle-down fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"></path></svg><!-- <i className="fas fa-chevron-circle-down"></i> -->
                    </a>
                </div>
                */}
        </div>
    )
}