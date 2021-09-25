import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export enum ScreenSize {
    XS = 0,
    SM = 1,
    MD = 2,
    LG = 3,
    XL = 4,
    XXL = 5
}


export function useBootstrapSize() {


    const windowSize = useWindowSize();
    const [size, setSize] = useState<ScreenSize>(ScreenSize.XS);

    useEffect(() => {

        const width = windowSize.width;

        let size: ScreenSize =  ScreenSize.XS

        if (width >= 1400) {
            size = ScreenSize.XXL;
        }
        else if (width >= 1200) {
            size = ScreenSize.XL;
        }
        else if (width >= 992) {
            size = ScreenSize.LG;
        }
        else if (width >= 768) {
            size = ScreenSize.MD;
        }
        else if (width >= 576) {
            size = ScreenSize.SM;
        }

        setSize(size);

    }, [windowSize])

    return size;

}
