import React from "react"
import { createFileRoute } from '@tanstack/react-router'
import { config } from "@/lib/config"

export const Route = createFileRoute('/')({
  component: function Home() {

    console.log(config.apiUrl)

    return (
      <div>
        <h1 className='text-3xl font-bold'>Home</h1>
        <p>Welcome to the home page</p>
      </div>
    )
  }
})
