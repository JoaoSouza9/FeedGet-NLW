import { CircleNotch } from "phosphor-react";

export function LoadingNotch(){
    return (
        <div className="bg-zinc-800 hover:bg-zinc-700 bg-transparent transition-colors focus focus:outline-none focus:ring-2 focus: ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 rounded-md">
            <CircleNotch weight="bold" className="text-zinc-400 hover:text-zinc-100 w-6 h-6 animate-spin" />
        </div>
    );
}