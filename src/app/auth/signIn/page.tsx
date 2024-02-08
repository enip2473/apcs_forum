import * as React from "react"
import { 
    EnvelopeClosedIcon,
    GitHubLogoIcon 
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInCard() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <Card className="w-1/2 bg-gray-50">
        <CardHeader>
            <CardTitle>登入 / 註冊</CardTitle>
        </CardHeader>
        <CardContent>
            <form>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="輸入 email" />
                </div>
            </div>
            </form>
        </CardContent>
        <CardFooter className="flex justify-around mx-10">
            <Button variant="secondary"><EnvelopeClosedIcon className="mr-2"/>以 Email 登入</Button>
            <Button variant="secondary"><GitHubLogoIcon className="mr-2"/> 以 GitHub 登入</Button>
        </CardFooter>
        </Card>
    </div>
  )
}
