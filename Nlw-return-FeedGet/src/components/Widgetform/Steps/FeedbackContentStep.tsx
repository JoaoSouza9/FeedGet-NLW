import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackOptions, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: feedbackTypes;
    onFeedbackRestartRequested: () => void; 
    onFeedbackSent: () => void;
}

export function FeedbackContentStep(props: FeedbackContentStepProps){
    const FeedbackTypesInfo = FeedbackOptions[props.feedbackType]
    const [screenshot, setScreenshot] = useState <string | null>(null)
    const [comment, setComment] = useState('');
    function onSubmitFeedback(event: FormEvent){
        event.preventDefault();
        console.log(
            screenshot,
            comment,
        )
        props.onFeedbackSent();
    }
    return (
        <>
            <button onClick={() => props.onFeedbackRestartRequested()} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <div className="flex flex-row items-center gap-2">
                <img src={FeedbackTypesInfo.icon.source} alt={FeedbackTypesInfo.icon.alt} />
                <span className="text-xl leading-6">
                    {FeedbackTypesInfo.title}
                </span>
                <CloseButton />
            </div>
            <form onSubmit={onSubmitFeedback} method="get" id="Feedback-forms" className="my-4 w-full" >
                <textarea
                className="min-w-[302px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent border-zinc-600focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none rounded-md scrollbar-none" 
                placeholder="Conte com detalhes o que está acontecendo"
                onChange={evento =>  setComment(evento.target.value)}
                ></textarea>
                <div className="flex flex-row gap-2 mt-2">
                    <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                    />
                    <button
                    type="submit"
                    disabled={comment.length === 0}
                    className="p-2 bg-brand-500 rounded-md w-full border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300  focus focus:outline-none focus:ring-2 focus: ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>
                </div>
            </form>
        </>
    )
}