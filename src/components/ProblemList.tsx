import type { Problem } from "@/lib/types"
import ProblemCard from "./ProblemCard"

export default function ProblemList({problems}: {problems: Problem[]}) {
    return (
        <div className="w-full flex flex-col items-center">
            {problems.map((problem, index) => (
                <ProblemCard key={index} problem={problem}/>
            ))}
        </div>
    )
}