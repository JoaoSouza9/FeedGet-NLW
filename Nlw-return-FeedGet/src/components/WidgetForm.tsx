import { CloseButton } from "./CloseButton";

import bugIconURL from '../../src/assets/bug.svg'
import ideaIconURL from '../../src/assets/idea.svg'
import thoughtIconURL from '../../src/assets/thought.svg'
import { useState } from "react";

const FeedbackOptions = {
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

type feedbackTypes = keyof typeof FeedbackOptions;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<feedbackTypes | null>(null);
    return (
        <div className="bg-zinc-900 relative p-4 mb-4 shadow-lg rounded-2xl flex flex-col items-center sm:w-auto w-[calc(100vw-2rem)]">
            <div>
                <span className="text-xl leading-6">Deixe seu feedback!</span>

                <CloseButton />
            </div>
            {!feedbackType ? (<div className="flex flex-row py-8 gap-2">
                {
                    Object.entries(FeedbackOptions).map(([key, value]) => {
                        return (
                            <button key = {key} className=" bg-zinc-800 rounded-lg w-24 py-5 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                onClick={() => setFeedbackType(key as feedbackTypes)}
                                type="button"
                            >
                                <img src={value.icon.source} alt={value.icon.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    })
                    
                }

            </div>) : (
                <span>Hello World!</span>
            )}
            <span className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://github.com/JoaoSouza9">João Souza</a>
            </span>
        </div>
    );
}