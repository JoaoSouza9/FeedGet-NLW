import { FeedbackOptions, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps{
    onFeedbackTypeChanged: (type: feedbackTypes) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps){
    return (
        <>
        <div>
            <span className="text-xl leading-6">Deixe seu feedback!</span>

            <CloseButton />
        </div>
        <div className="flex flex-row py-8 gap-2">
            {
                Object.entries(FeedbackOptions).map(([key, value]) => {
                    return (
                        <button key = {key} className=" bg-zinc-800 rounded-lg w-24 py-5 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => props.onFeedbackTypeChanged(key as feedbackTypes)}
                            type="button"
                        >
                            <img src={value.icon.source} alt={value.icon.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })
            }
        </div>
        </>
    )
}