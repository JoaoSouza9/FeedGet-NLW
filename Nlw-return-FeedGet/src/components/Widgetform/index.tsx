import { CloseButton } from "../CloseButton";

import bugIconURL from '../../../src/assets/bug.svg'
import ideaIconURL from '../../../src/assets/idea.svg'
import thoughtIconURL from '../../../src/assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const FeedbackOptions = {
    BUG: {
        title: "Problema",
        icon: {
            source: bugIconURL,
            alt: "Imagem de um inseto, referente a um 'bug'",
        }
    },
    IDEA: {
        title: "Ideia",
        icon: {
            source: ideaIconURL,
            alt: "Imagem de uma lâmpada, referente a uma ideia",
        }
    },
    OTHER: {
        title: "Outro",
        icon: {
            source: thoughtIconURL,
            alt: "Imagem de uma nuvem, referente a um pensamento",
        }
    }
}

export type feedbackTypes = keyof typeof FeedbackOptions;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<feedbackTypes | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartRequest(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return (
        <div className="bg-zinc-900 relative p-4 mb-4 shadow-lg rounded-2xl flex flex-col items-center sm:w-auto w-[calc(100vw-2rem)]">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartRequest}/>
            ) : (
                <>
                    {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ) : (
                    <FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartRequest}
                    onFeedbackSent={() => setFeedbackSent(true)}
                    />
                )}
                </>
            )}
            <span className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://github.com/JoaoSouza9">João Souza</a>
            </span>
        </div>
    );
}