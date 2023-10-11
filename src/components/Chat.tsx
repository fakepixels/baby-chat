'use client'

import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from "ai/react"

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });

    return (
        <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Baby chat</CardTitle>
          <CardDescription>I'm just a baby. Tell me your secrets.</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className=' h-[640px] w-full space-y-5 pr-5'>
                { messages.map(message=> { 
                    return (
                        <div key={message.id} className='flex gap-3 text-slate-400 text-sm mt-4'>
                        {message.role == 'user' && (
                            <Avatar>
                            <AvatarImage src="https://github.com/fakepixels.png" />
                            <AvatarFallback>TH</AvatarFallback>
                            </Avatar>
                        )}

                        {message.role == 'assistant' && (
                            <Avatar>
                            <AvatarImage src="https://github.com/ilikesymmetry.png" />
                            <AvatarFallback>CW</AvatarFallback>
                            </Avatar>
                        )}  

                            <p className='leading-relaxed'>
                            <span className='block font-bold text-slate-200 text-md'>{message.role == 'user' ? 'tino' : 'AI Conner'}:
                            </span>
                            {message.content}
                            </p>
            </div>
                    ) 
                }) }
                </ScrollArea>
        </CardContent>
        <CardFooter>
            <form className='space-x-2 w-full flex gap-2' onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
          <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    )
}