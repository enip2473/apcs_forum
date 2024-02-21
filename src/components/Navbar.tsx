"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Navbar() {
    return (
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            APCS 討論區
            </NavigationMenuLink>
        </NavigationMenuItem>
    
        <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                問題集錦
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    
        <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                最新問題
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    
    
        <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                我要提問
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    

        <NavigationMenuItem>
            <div className="relative mx-3 my-2">
                <input type="search" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="搜尋..."/>
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                登入 / 註冊
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    
        <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <GitHubLogoIcon/>
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>

        </NavigationMenuList>
        </NavigationMenu>
    )
}

