import { useEffect } from "react"

const Radio = () => {

  useEffect(() => {
    (async () => {
      try {
        console.log('Empieza')
        const response = await fetch('https://stream.zeno.fm/5ldssiafsgruv');
        console.log(response)
        const text = await response.json();
        // Aquí necesitarías parsear la respuesta para extraer la metadata
        console.log(text);
      } catch (err) {
        console.log(err)
      }
    })()

  }, [])

  return (
    <main>
      <audio controls>
        <source src="https://stream.zeno.fm/5ldssiafsgruv" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </main>
  )
}
export default Radio