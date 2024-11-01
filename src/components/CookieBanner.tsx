import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { Button } from "./ui/button"

export default function CookieBanner() {
  const [withAnalytics, setWithAnalytics] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("cookieBanner") === "true") {
      setWithAnalytics(true)
    } else {
      setWithAnalytics(false)
    }
  }, [withAnalytics])

  // Initialize Google Analytics with Gtag ID
  if (withAnalytics === true) {
    ReactGA.initialize("G-F9Q9F11W6E")
  }

  return (
    <>
      {!withAnalytics &&
        <div className="absolute bottom-0 w-full bg-zinc-900 text-white text-center p-4">
          <p className="text-sm">We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies. <a href="/legal/cookies" className="underline">Learn more</a></p>


          <div className="flex gap-3 justify-center">
            <Button onClick={() => {
              localStorage.setItem("cookieBanner", "true")
              setWithAnalytics(true)
            }}>
              Accept
            </Button>

            <Button onClick={() => {
              localStorage.setItem("cookieBanner", "true")
              setWithAnalytics(true)
            }}>
              Decline
            </Button>
          </div>
        </div>
      }
    </>
  )
}
