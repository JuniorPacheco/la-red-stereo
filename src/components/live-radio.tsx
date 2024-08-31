import { Pause, Play, Volume2 } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "./ui/button"

const LiveRadio = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const radio = useRef<HTMLAudioElement>(null)

  const handlePlay = () => {
    radio.current?.play()
    setIsPlaying(true)
    console.log('isPlaying', isPlaying)
  }

  const handlePause = () => {
    radio.current?.pause()
    setIsPlaying(false)
  }

  return (
    <main>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Logo la-red-stereo"
              width={40}
              height={40}
              className="rounded-md shadow-md p-1"
            />
            <div>
              <div className="font-semibold text-gray-800">La Red Stereo</div>
              <div className="text-sm text-gray-600">Tu sintonía</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className={isPlaying ? "" : "hidden"} onClick={handlePause} variant="ghost" size="icon">
              <Pause className="h-6 w-6 text-gray-600" />
            </Button>
            <Button className={isPlaying ? "hidden" : ""} onClick={handlePlay} variant="ghost" size="icon">
              <Play className="h-6 w-6 text-gray-600" />
            </Button>

            <Button variant="ghost" size="icon">
              <Volume2 className="h-6 w-6 text-gray-600" />
              <span className="sr-only">Volumen</span>
            </Button>
          </div>
        </div>
      </div>
      <audio ref={radio} className="hidden" controls>
        <source src="https://stream.zeno.fm/5ldssiafsgruv" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </main>
  )
}
export default LiveRadio