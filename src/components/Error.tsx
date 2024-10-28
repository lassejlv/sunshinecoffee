import { ErrorComponentProps } from "@tanstack/react-router";



export default function ErrorPage({ error }: { error: ErrorComponentProps["error"] }) {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">Error</h1>
      <p className="text-lg text-gray-600">{error.message}</p>
    </div>
  )
}
