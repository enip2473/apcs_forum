import { Problem } from "@/lib/types";
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function ProblemCard({problem}: {problem: Problem}) {
    return (
        <Card className="w-3/5">
            <Link href={`/problems/${problem.id}`}>
                <CardHeader>
                    <CardTitle>{problem.title}</CardTitle>
                    <CardDescription>{problem.author}</CardDescription>
                </CardHeader>
                <CardContent>
                    {problem.content}
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Link>
        </Card>
    )
}