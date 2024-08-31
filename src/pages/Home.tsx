import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, MenuIcon, RadioIcon, X } from "lucide-react"
import { useEffect, useRef, useState } from 'react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0)
  const collaboratorsRef = useRef<HTMLDivElement>(null)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const events = [
    {
      title: "Verdurería la 21 Saravena",
      content: "Gran sorteo de la Verdureria La 21 Saravena participa y gana un bono redimible por $ 150.000 pesos en verdura o víveres en este gran establecimiento",
      image: "/verdureria-21.png"
    },
    {
      title: "Champions Fitness Festival 2024",
      content: "Atletas, pilas pues! ￼ quedan tan sólo cuatro días para el cierre definitivo de inscripciónes , no te quedes por fuera de la mejor competencia Crossfit del departamento  ￼#championfitnessfestival2024 #crossfitsaravena #eleventofitnessdelaño #crossfitarauca Cañas Yehin Gimnasio Champion @fans destacados",
      image: "/champions.jpg"
    },
    {
      title: "Inicio Semana comercial - Alabanza y Adoración",
      content: "Invitación especial para que nos acompañen en este superconcierto de alabanza y adoración de Inicio de semana comercial de Ascomercial #Saravena #SaravenaArauca",
      image: "/bendicion.png"
    },
  ]

  const news = [
    {
      title: "Perrito extraviado",
      content: "El es pancho  se  extravió!!  Alrededores de la  invasión, el paraíso salió ayer a las 8 de la mañana y no ha vuelto cualquier información 321 9800084 o al 314 6355630 #Saravena #saravenaarauca @seguidores Fabian Acevedo Gomez",
      image: "/dog.webp"
    },
    {
      title: "Se alquila bodega en Saravena - Arauca",
      content: "Se alquila bodega en Saravena mayor inf al 3203868974 Bodega de 180 cuadrados ubicada en la carrera  15 #12 10 barrio palmeras esquina #saravena  @laredstereo",
      image: "/bodega.png"
    },
    {
      title: "Se alquila bodega en Saravena - Arauca",
      content: "Gran remate 📢 en la plaza de mercado de saravena venta o arriendo de mejora  de tres puestos de venta de verdura, en excelente estado listos para uso comercial por tan solo 💸5.500.000 Llame ya 321 4080071 @destacar #saravenaarauca #Saravena @destacar Cañas Yehin La RED Stereo",
      image: "/plaza.webp"
    },
  ]

  const collaborators = [
    "/logos/en-tu-cara.png",
    "/logos/fabian.png",
    "/logos/foto-show.jpg",
    "/logos/setelin.png",
    "/logos/siete-granos.png",
    "/logos/soft&com.jpg",
    "/logos/videsgk.jpg",
  ]

  const currentAndUpcomingPrograms = [
    { time: "AHORA", name: "Mañanas de Éxitos", host: "Carlos Rodríguez" },
    { time: "11:00", name: "Noticiero del Mediodía", host: "Laura Martínez" },
    { time: "13:00", name: "Tardes de Melodía", host: "Pedro Sánchez" },
    { time: "16:00", name: "La Hora Pico", host: "María López" },
    { time: "19:00", name: "Noches de Jazz", host: "Javier Ruiz" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  const nextNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev + 1) % news.length)
  }

  const prevNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev - 1 + news.length) % news.length)
  }

  const close = () => setShowMobileNav(false)

  const open = () => setShowMobileNav(true)

  useEffect(() => {
    const slider = collaboratorsRef.current
    if (slider) {
      const scroll = () => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0
        } else {
          slider.scrollLeft += 1
        }
      }
      const intervalId = setInterval(scroll, 30)
      return () => clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-center">

          {/* Nav mobile */}
          <nav className="items-center space-x-6 text-sm font-medium flex md:hidden justify-between w-full">
            <div className='h-20 aspect-square bg-white py-5 rounded-md shadow-md'>
              <img
                src="/logo.png"
                alt="LaRedStereo Logo"
                className="h-full w-full object-contain block"
              />
            </div>
            <div className="gap-2 items-center hidden sm:flex">
              <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
                Nosotros
              </a>
              <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
                Noticias
              </a>
              <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
                Programación
              </a>
              <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
                Contacto
              </a>
            </div>
            <button onClick={open} className="block sm:hidden">
              <MenuIcon />
            </button>
          </nav>

          <nav className={cn("fixed h-screen top-0 left-0 p-4 pt-12 w-full bg-white/90 text-black backdrop-blur-lg md:hidden transition-all duration-300", {
            "opacity-0 invisible": !showMobileNav
          })}>
            <ul className="flex flex-col gap-4 text-xl">
              <li>
                <a className="hover:text-landing-primary transition-all hover:ps-2" href="/#us">Nosotros</a>
              </li>
              <li>
                <a className="hover:text-landing-primary transition-all hover:ps-2" href="/#schedules">Noticias</a>
              </li>
              <li>
                <a className="hover:text-landing-primary transition-all hover:ps-2" href="/#trainers">Programacion</a>
              </li>
              <li>
                <a className="hover:text-landing-primary transition-all hover:ps-2" href="/#contact">Contacto</a>
              </li>
            </ul>

            <Button onClick={close} className="hover:bg-landing-primary absolute top-2 right-2 p-3 transition-colors bg-orange-600">
              <X className="bg-orange-600" />
            </Button>
          </nav>

          {/* Nav desktop */}
          <nav className="justify-center items-center space-x-6 text-sm font-medium hidden md:flex">
            <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
              Nosotros
            </a>
            <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
              Noticias
            </a>
            <div className='h-28 aspect-square p-2 bg-white py-5 rounded-md shadow-md'>
              <img
                src="/logo.png"
                alt="LaRedStereo Logo"
                className="h-full w-full object-contain block relative top-4"
              />
            </div>
            <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
              Programación
            </a>
            <a className="transition-colors hover:text-orange-600 text-gray-600" href="#">
              Contacto
            </a>
          </nav>
          {/* <nav className="absolute right-2">
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)}>
              <Search className="h-5 w-5 text-gray-600" />
              <span className="sr-only">Buscar</span>
            </Button>
          </nav> */}
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-48 bg-[url('/hero.jpeg')] px-8 bg-center">
          <div className="container max-w-[1000px] p-10 md:px-6 bg-gradient-to-r from-gray-100/90 to-gray-200/90 rounded-xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800">
                  Bienvenido a LaRedStereo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Sintoniza la mejor música, noticias y entretenimiento. Transmitiendo 24/7 para tu placer auditivo.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row">
                <Button className="bg-orange-600 text-white hover:bg-orange-700">Escuchar en vivo</Button>
                <Button variant="outline" className="text-gray-800 border-gray-300 hover:bg-gray-100">
                  Ver programación
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Programación Reciente
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {currentAndUpcomingPrograms.map((program, index) => (
                <Card key={index} className={index === 0 ? "col-span-full md:col-span-2 lg:col-span-1 bg-orange-50" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${index === 0 ? "bg-orange-500" : "bg-gray-200"}`}>
                        <RadioIcon className={`h-5 w-5 ${index === 0 ? "text-white" : "text-gray-500"}`} />
                      </div>
                      <div>
                        <p className={`font-semibold ${index === 0 ? "text-orange-600" : "text-gray-800"}`}>{program.time}</p>
                        <h3 className="font-bold text-lg text-gray-800">{program.name}</h3>
                        <p className="text-sm text-gray-600">{program.host}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Últimos eventos
            </h2>
            <div className="relative">
              <Card className="overflow-hidden border-gray-200 max-w-[1000px] mx-auto">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={events[currentSlide].image}
                      alt={events[currentSlide].title}
                      className="rounded-lg object-cover object-top h-[200px] aspect-square"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{events[currentSlide].title}</h3>
                      <p className="text-gray-600">{events[currentSlide].content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <Button className="bg-orange-600 text-white hover:bg-orange-700 block mx-auto mt-4">
              Ver todos los eventos
            </Button>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Últimos Noticias
            </h2>
            <div className="relative">
              <Card className="overflow-hidden border-gray-200 max-w-[1000px] mx-auto">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={news[currentNewsSlide].image}
                      alt={news[currentNewsSlide].title}
                      className="rounded-lg object-cover object-top h-[200px] aspect-square"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{news[currentNewsSlide].title}</h3>
                      <p className="text-gray-600">{news[currentNewsSlide].content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={prevNewsSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={nextNewsSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <Button className="bg-orange-600 text-white hover:bg-orange-700 block mx-auto mt-4">
              Ver todas las noticias
            </Button>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
              Colaboradores
            </h2>
            <div
              ref={collaboratorsRef}
              className="flex overflow-hidden space-x-8"
              style={{ width: '100%', whiteSpace: 'nowrap' }}
            >
              {[...collaborators, ...collaborators].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Colaborador ${i % collaborators.length + 1}`}
                  width={180}
                  height={80}
                  className="block w-[200px] h-auto object-contain rounded-lg"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-laredstereo-Y5q32QKkwswHDpQY7xlF9KS6sdJiTT.jpeg"
                alt="LaRedStereo Logo"
                width={120}
                height={60}
                className="mb-2"
              />
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Sobre Nosotros</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Nuestra Historia
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Equipo
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Carreras
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Programas</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Programa Matutino
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Tarde de Éxitos
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Mezcla Nocturna
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-gray-600 hover:text-orange-600" href="#">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            © 2023 LaRedStereo. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Fixed social media */}

      <div className="flex gap-4 flex-col fixed bottom-20 right-2">
        <a href="#" className="text-gray-600 hover:text-orange-600">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-600">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-600">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  )
}