import html2canvas from "html2canvas";
import { backgroundSize } from "html2canvas/dist/types/css/property-descriptors/background-size";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { LoadingNotch } from "./LoadingNotch";

interface ScreenshotButtonProps{
        screenshot: string | null;
        onScreenshotTook: (setScreenshot: string | null) => void;
}

export function ScreenshotButton(props: ScreenshotButtonProps){
    const [isTakingScreeshot, setIsTakingScreenshot] = useState(false);
    async function HandleTakeScreenshot(){
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64Image = canvas.toDataURL('image/png');
        props.onScreenshotTook(base64Image);
        setIsTakingScreenshot(false)
    }
    if(props.screenshot){
        return(
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => props.onScreenshotTook(null)}
            style={{
                backgroundImage: `url(${props.screenshot})`,
                backgroundSize: 150,
                backgroundPosition: 'right-bottom'
            }}
            >
                <Trash weight="fill"></Trash>
            </button>
        )

    }
    return (
        <button 
            type="button"
            className="p-2 bg-zinc-800 hover:bg-zinc-700 bg-transparent transition-colors focus focus:outline-none focus:ring-2 focus: ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 rounded-md"
            onClick={HandleTakeScreenshot}
            >
            {!isTakingScreeshot ? (
                    <Camera className="text-zinc-400 hover:text-zinc-100 w-6 h-6"/>
                ) : (
                    <LoadingNotch />
            )}
        </button>
    )
}