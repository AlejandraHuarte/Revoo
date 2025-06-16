"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Search,
  DollarSign,
  Shield,
  Users,
  Camera,
  Wrench,
  Car,
  Home,
  Gamepad2,
  Music,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Download,
  ExternalLink,
  Loader2,
  Globe,
  Languages,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { trackFormSubmission, trackButtonClick, trackLanguageChange } from "@/components/google-analytics"

// Language translations
const translations = {
  en: {
    // Header
    howItWorks: "How it Works",
    categories: "Categories",
    mobileApp: "Mobile App",
    signIn: "Sign In",
    getStarted: "Get Started",

    // Hero Section
    webMvpLive: "🚀 Web MVP Live Now",
    heroTitle: "Why buy it when you can",
    heroTitleHighlight: "Revoo it?",
    heroDescription:
      "Borrow what you need, rent out what you don't—and have fun while saving money, cutting clutter, and turning everyday borrowing into a step toward a more sustainable future.",
    startRenting: "Start Renting",
    listYourItems: "List Your Items",
    verifiedUsers: "Verified users",
    securePayments: "Secure payments",
    insuranceCovered: "Insurance covered",

    // How It Works
    howRevooWorks: "How Revoo Works",
    howRevooWorksDesc: "Simple, secure, and convenient. Start renting or earning in just a few steps.",
    needSomething: "Need something?",
    justRevooIt: "Just Revoo it",
    searchDiscover: "Search & Discover",
    searchDiscoverDesc: "Find the item you need from people in your area",
    bookPay: "Book & Pay",
    bookPayDesc: "Secure booking with instant payment protection",
    pickUpEnjoy: "Pick Up & Enjoy",
    pickUpEnjoyDesc: "Meet the owner, get your item, and enjoy using it",
    ownIt: "Own it?",
    earnWithIt: "Earn with it",
    listItems: "List Your Items",
    listItemsDesc: "Take photos and describe what you want to rent out",
    getBookings: "Get Bookings",
    getBookingsDesc: "Approve rental requests and set your availability",
    earnMoney: "Earn Money",
    earnMoneyDesc: "Get paid automatically when the rental is complete",

    // Categories
    popularCategories: "Popular Categories",
    popularCategoriesDesc: "From tools to tech, find everything you need or list what you have.",
    toolsDiy: "Tools & DIY",
    electronics: "Electronics",
    vehicles: "Vehicles",
    homeGarden: "Home & Garden",
    gaming: "Gaming",
    musicAudio: "Music & Audio",
    items: "items",

    // Mobile App
    comingSoon: "Coming Soon",
    revooMobileApp: "Revoo Mobile App",
    mobileAppDesc:
      "Take Revoo with you everywhere. Our mobile app will make renting and listing items even easier with location-based search, instant messaging, and seamless mobile payments.",
    appFeatures: "App Features:",
    locationBasedDiscovery: "Location-based item discovery",
    inAppMessaging: "In-app messaging with item owners",
    quickPhotoUpload: "Quick photo upload for listings",
    pushNotifications: "Push notifications for bookings",
    downloadOn: "Download on the",
    appStore: "App Store",
    getItOn: "Get it on",
    googlePlay: "Google Play",

    // Benefits
    whyChooseRevoo: "Why Choose Revoo?",
    whyChooseRevooDesc:
      "Built with trust, security, and community in mind. We make peer-to-peer rental safe and simple.",
    secureInsured: "Secure & Insured",
    secureInsuredDesc: "All rentals are covered by our comprehensive insurance policy",
    verifiedCommunity: "Verified Community",
    verifiedCommunityDesc: "All users are verified with ID and background checks",
    fairPricing: "Fair Pricing",
    fairPricingDesc: "Competitive rates with transparent pricing and no hidden fees",

    // CTA Section
    readyToStart: "Ready to Start with Revoo?",
    readyToStartDesc:
      "Join thousands of people already using Revoo to save money and earn income from their unused items.",
    enterEmail: "Enter your email",
    startWebPlatform: "Start with our web platform today, mobile app coming soon!",
    browseItems: "Browse Items",

    // Footer
    allRightsReserved: "© 2024 Revoo. All rights reserved.",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    support: "Support",
    contact: "Contact",

    // Forms
    wantToRent: "I Want to Rent Items",
    wantToList: "I Want to List My Items",
    getNotified: "Get Notified When Revoo Launches",
    name: "Name",
    email: "Email",
    phone: "Phone",
    whatItemsLookingFor: "What items are you looking for?",
    whatItemsRentOut: "What items do you want to rent out?",
    yourLocation: "Your location/city",
    submitRequest: "Submit Request",
    submitListingRequest: "Submit Listing Request",
    joinNewsletter: "Join Newsletter",
    submitting: "Submitting...",
    nameOptional: "Name (optional)",
    itemsPlaceholderRent: "e.g., Power drill, Camera, Bicycle...",
    itemsPlaceholderList: "e.g., Power tools, Camera equipment, Sports gear...",
    locationPlaceholder: "e.g., Madrid, Barcelona...",
    whenYouNeedIt: "When do you need it?",
    datesPlaceholder: "e.g., June 20–23",

    // Success/Error messages
    thankYouMessage: "Thank you! We've received your {type} request and will contact you soon.",
    errorMessage:
      "There was an error submitting your form. Please try again or contact us directly at revoo.platform@gmail.com",

    // Language Selection
    selectLanguage: "Select Your Language",
    selectLanguageDesc: "Choose your preferred language to continue",
    english: "English",
    spanish: "Español",
    continue: "Continue",
  },
  es: {
    // Header
    howItWorks: "Cómo Funciona",
    categories: "Categorías",
    mobileApp: "App Móvil",
    signIn: "Iniciar Sesión",
    getStarted: "Comenzar",

    // Hero Section
    webMvpLive: "🚀 MVP Web Ya Disponible",
    heroTitle: "¿Por qué comprarlo cuando puedes",
    heroTitleHighlight: "Revoo-earlo?",
    heroDescription:
      "Pide prestado lo que necesitas, alquila lo que no usas—y diviértete mientras ahorras dinero, reduces el desorden y conviertes el préstamo cotidiano en un paso hacia un futuro más sostenible.",
    startRenting: "Comenzar a Alquilar",
    listYourItems: "Lista tus Artículos",
    verifiedUsers: "Usuarios verificados",
    securePayments: "Pagos seguros",
    insuranceCovered: "Cubierto por seguro",

    // How It Works
    howRevooWorks: "Cómo Funciona Revoo",
    howRevooWorksDesc: "Simple, seguro y conveniente. Comienza a alquilar o ganar en solo unos pasos.",
    needSomething: "¿Necesitas algo?",
    justRevooIt: "Solo Revoo-alo",
    searchDiscover: "Buscar y Descubrir",
    searchDiscoverDesc: "Encuentra el artículo que necesitas de personas en tu área",
    bookPay: "Reservar y Pagar",
    bookPayDesc: "Reserva segura con protección de pago instantánea",
    pickUpEnjoy: "Recoger y Disfrutar",
    pickUpEnjoyDesc: "Conoce al propietario, obtén tu artículo y disfrútalo",
    ownIt: "¿Lo tienes?",
    earnWithIt: "Gana con ello",
    listItems: "Lista tus Artículos",
    listItemsDesc: "Toma fotos y describe lo que quieres alquilar",
    getBookings: "Obtener Reservas",
    getBookingsDesc: "Aprueba solicitudes de alquiler y establece tu disponibilidad",
    earnMoney: "Ganar Dinero",
    earnMoneyDesc: "Recibe el pago automáticamente cuando se complete el alquiler",

    // Categories
    popularCategories: "Categorías Populares",
    popularCategoriesDesc:
      "Desde herramientas hasta tecnología, encuentra todo lo que necesitas o lista lo que tienes.",
    toolsDiy: "Herramientas y Bricolaje",
    electronics: "Electrónicos",
    vehicles: "Vehículos",
    homeGarden: "Hogar y Jardín",
    gaming: "Gaming",
    musicAudio: "Música y Audio",
    items: "artículos",

    // Mobile App
    comingSoon: "Próximamente",
    revooMobileApp: "App Móvil de Revoo",
    mobileAppDesc:
      "Lleva Revoo contigo a todas partes. Nuestra aplicación móvil hará que alquilar y listar artículos sea aún más fácil con búsqueda basada en ubicación, mensajería instantánea y pagos móviles sin problemas.",
    appFeatures: "Características de la App:",
    locationBasedDiscovery: "Descubrimiento basado en ubicación",
    inAppMessaging: "Mensajería en la app con propietarios",
    quickPhotoUpload: "Subida rápida de fotos para listados",
    pushNotifications: "Notificaciones push para reservas",
    downloadOn: "Descargar en",
    appStore: "App Store",
    getItOn: "Obtener en",
    googlePlay: "Google Play",

    // Benefits
    whyChooseRevoo: "¿Por qué Elegir Revoo?",
    whyChooseRevooDesc:
      "Construido con confianza, seguridad y comunidad en mente. Hacemos que el alquiler entre pares sea seguro y simple.",
    secureInsured: "Seguro y Asegurado",
    secureInsuredDesc: "Todos los alquileres están cubiertos por nuestra póliza de seguro integral",
    verifiedCommunity: "Comunidad Verificada",
    verifiedCommunityDesc: "Todos los usuarios están verificados con ID y verificaciones de antecedentes",
    fairPricing: "Precios Justos",
    fairPricingDesc: "Tarifas competitivas con precios transparentes y sin tarifas ocultas",

    // CTA Section
    readyToStart: "¿Listo para Comenzar con Revoo?",
    readyToStartDesc:
      "Únete a miles de personas que ya usan Revoo para ahorrar dinero y ganar ingresos con sus artículos no utilizados.",
    enterEmail: "Ingresa tu email",
    startWebPlatform: "¡Comienza con nuestra plataforma web hoy, app móvil próximamente!",
    browseItems: "Explorar Artículos",

    // Footer
    allRightsReserved: "© 2024 Revoo. Todos los derechos reservados.",
    termsOfService: "Términos de Servicio",
    privacyPolicy: "Política de Privacidad",
    support: "Soporte",
    contact: "Contacto",

    // Forms
    wantToRent: "Quiero Alquilar Artículos",
    wantToList: "Quiero Listar Mis Artículos",
    getNotified: "Recibir Notificaciones del Lanzamiento de Revoo",
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    whatItemsLookingFor: "¿Qué artículos estás buscando?",
    whatItemsRentOut: "¿Qué artículos quieres alquilar?",
    yourLocation: "Tu ubicación/ciudad",
    submitRequest: "Enviar Solicitud",
    submitListingRequest: "Enviar Solicitud de Listado",
    joinNewsletter: "Unirse al Newsletter",
    submitting: "Enviando...",
    nameOptional: "Nombre (opcional)",
    itemsPlaceholderRent: "ej., Taladro, Cámara, Bicicleta...",
    itemsPlaceholderList: "ej., Herramientas eléctricas, Equipo de cámara, Equipo deportivo...",
    locationPlaceholder: "ej., Madrid, Barcelona...",
    whenYouNeedIt: "¿Para qué fechas lo necesitas?",
    datesPlaceholder: "ej., 20–23 de junio",

    // Success/Error messages
    thankYouMessage: "¡Gracias! Hemos recibido tu solicitud de {type} y te contactaremos pronto.",
    errorMessage:
      "Hubo un error al enviar tu formulario. Por favor intenta de nuevo o contáctanos directamente en revoo.platform@gmail.com",

    // Language Selection
    selectLanguage: "Selecciona tu Idioma",
    selectLanguageDesc: "Elige tu idioma preferido para continuar",
    english: "English",
    spanish: "Español",
    continue: "Continuar",
  },
}

type Language = "en" | "es"

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("en")
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [showRentForm, setShowRentForm] = useState(false)
  const [showListForm, setShowListForm] = useState(false)
  const [showNewsletterForm, setShowNewsletterForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const t = translations[language]

  useEffect(() => {
    // Check if user has already selected a language
    const savedLanguage = localStorage.getItem("revoo-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    } else {
      // Show language selector for new users
      setShowLanguageSelector(true)
    }
  }, [])

  const handleLanguageSelect = (selectedLanguage: Language) => {
    const previousLanguage = language
    setLanguage(selectedLanguage)
    localStorage.setItem("revoo-language", selectedLanguage)
    setShowLanguageSelector(false)

    // Track language selection
    trackLanguageChange(previousLanguage, selectedLanguage)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("form-type", formType)
    formData.append("language", language)

    try {
      const response = await fetch("https://formspree.io/f/xzzgrbgl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Track successful form submission
        trackFormSubmission(formType, language)

        alert(t.thankYouMessage.replace("{type}", formType))
        // Close the modal
        if (formType === "Rent Request") setShowRentForm(false)
        if (formType === "List Items Request") setShowListForm(false)
        if (formType === "Newsletter Signup") setShowNewsletterForm(false)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(t.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Language Selector Modal */}
      {showLanguageSelector && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-white rounded-2xl shadow-xl p-1">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Globe className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-2xl font-bold mb-2">Select Your Language</h2>
                <p className="text-gray-600">Choose your preferred language to continue</p>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => handleLanguageSelect("en")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full shadow-md transition duration-200"
                  size="lg"
                >
                  🇺🇸 English
                </Button>
                <Button
                  onClick={() => handleLanguageSelect("es")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-200"
                  size="lg"
                >
                  🇪🇸 Español
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Header */}
      <header className="w-full px-4 lg:px-6 py-4 md:py-0 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between w-full gap-2">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/revoo-logo-transparent.png"
              width="60"
              height="60"
              alt="Revoo logo"
              className="h-12 w-12 md:h-20 md:w-20"
            />
            <span className="ml-3 text-3xl font-bold text-gray-900">Revoo</span>
          </Link>
          
          <div className="md:hidden h-px w-full bg-gray-200 my-2"></div>
          <nav className="hidden md:flex gap-6 flex-wrap justify-start w-auto">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
              {t.howItWorks}
            </Link>
            <Link href="#categories" className="text-sm font-medium hover:text-purple-600 transition-colors">
              {t.categories}
            </Link>
            <Link href="#app" className="text-sm font-medium hover:text-purple-600 transition-colors">
              {t.mobileApp}
            </Link>
          </nav>
          <div className="ml-6 flex gap-2 items-center">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                trackButtonClick("Language Switcher", "Header")
                setShowLanguageSelector(true)
              }}
              className="flex items-center gap-1 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-200"
            >
              <Languages className="h-4 w-4" />
              {language === "en" ? "EN" : "ES"}
            </Button>
            <Button
              size="sm"
              className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-4 py-2 rounded-full transition duration-200"
              onClick={() => {
                trackButtonClick("Get Started", "Header")
                setShowRentForm(true)
              }}
            >
              {t.getStarted}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">{t.webMvpLive}</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t.heroTitle}{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                      {t.heroTitleHighlight}
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">{t.heroDescription}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-6 py-3 rounded-full w-full min-[400px]:w-auto transition duration-200"
                    onClick={() => {
                      trackButtonClick("Start Renting", "Hero Section")
                      setShowRentForm(true)
                    }}
                  >
                    {t.startRenting} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border border-purple-600 text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full w-full min-[400px]:w-auto transition duration-200"
                    onClick={() => {
                      trackButtonClick("List Your Items", "Hero Section")
                      setShowListForm(true)
                    }}
                  >
                    {t.listYourItems} <ExternalLink className="ml-2 h-4 w-4 opacity-80" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>{t.verifiedUsers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>{t.securePayments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>{t.insuranceCovered}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/hero-people-sharing-drill.png"
                  width="600"
                  height="600"
                  alt="Two people sharing a power drill through Revoo - demonstrating peer-to-peer rental"
                  className="mx-auto rounded-xl object-contain shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.howRevooWorks}</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.howRevooWorksDesc}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* For Renters */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-100 w-fit">{t.needSomething}</Badge>
                  <h3 className="text-2xl font-bold">{t.justRevooIt}</h3>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
                      <Search className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.searchDiscover}</h4>
                      <p className="text-gray-600">{t.searchDiscoverDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
                      <span className="text-sm font-bold text-violet-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.bookPay}</h4>
                      <p className="text-gray-600">{t.bookPayDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
                      <span className="text-sm font-bold text-violet-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.pickUpEnjoy}</h4>
                      <p className="text-gray-600">{t.pickUpEnjoyDesc}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* For Owners */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 w-fit">{t.ownIt}</Badge>
                  <h3 className="text-2xl font-bold">{t.earnWithIt}</h3>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <Camera className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.listItems}</h4>
                      <p className="text-gray-600">{t.listItemsDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-sm font-bold text-purple-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.getBookings}</h4>
                      <p className="text-gray-600">{t.getBookingsDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.earnMoney}</h4>
                      <p className="text-gray-600">{t.earnMoneyDesc}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.popularCategories}</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.popularCategoriesDesc}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 md:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: Wrench, name: t.toolsDiy, count: "500+" },
                { icon: Camera, name: t.electronics, count: "300+" },
                { icon: Car, name: t.vehicles, count: "150+" },
                { icon: Home, name: t.homeGarden, count: "400+" },
                { icon: Gamepad2, name: t.gaming, count: "200+" },
                { icon: Music, name: t.musicAudio, count: "100+" },
              ].map((category, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer group rounded-xl bg-white">
                  <CardContent className="p-6">
                    <category.icon className="h-8 w-8 mx-auto mb-2 text-purple-600 group-hover:text-violet-600 transition-colors" />
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {category.count} {t.items}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Coming Soon */}
        <section
          id="app"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-white/10 text-white hover:bg-white/10 w-fit">
                    <Smartphone className="h-3 w-3 mr-1" />
                    {t.comingSoon}
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.revooMobileApp}</h2>
                  <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed">{t.mobileAppDesc}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{t.appFeatures}</h3>
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300" />
                      <span className="text-purple-100">{t.locationBasedDiscovery}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300" />
                      <span className="text-purple-100">{t.inAppMessaging}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300" />
                      <span className="text-purple-100">{t.quickPhotoUpload}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300" />
                      <span className="text-purple-100">{t.pushNotifications}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex items-center gap-2 bg-black rounded-full px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors">
                    <Download className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs text-gray-300">{t.downloadOn}</div>
                      <div className="text-sm font-semibold">{t.appStore}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-black rounded-full px-4 py-2 cursor-pointer hover:bg-gray-800 transition-colors">
                    <Download className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs text-gray-300">{t.getItOn}</div>
                      <div className="text-sm font-semibold">{t.googlePlay}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/images/revoo-mobile-app-mockup.png"
                    width="800"
                    height="1600"
                    alt="Revoo mobile app interface mockup showing search, categories, and featured items"
                    className="mx-auto drop-shadow-2xl max-h-[700px] w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.whyChooseRevoo}</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t.whyChooseRevooDesc}
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">{t.secureInsured}</h4>
                      <p className="text-gray-600">{t.secureInsuredDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">{t.verifiedCommunity}</h4>
                      <p className="text-gray-600">{t.verifiedCommunityDesc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">{t.fairPricing}</h4>
                      <p className="text-gray-600">{t.fairPricingDesc}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/trust-security-features.png"
                  width="550"
                  height="400"
                  alt="Trust and security features of the Revoo platform"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-violet-600">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">{t.readyToStart}</h2>
                <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.readyToStartDesc}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex gap-2">
                  <Input type="email" placeholder={t.enterEmail} className="max-w-lg flex-1 bg-white rounded-full px-4 py-2" />
                  <Button
                    type="button"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                    onClick={() => setShowNewsletterForm(true)}
                  >
                    {t.getStarted}
                  </Button>
                </div>
                <p className="text-xs text-purple-100">{t.startWebPlatform}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-full w-full min-[400px]:w-auto transition duration-200 transform hover:scale-105"
                  onClick={() => setShowRentForm(true)}
                >
                  {t.browseItems}
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-full w-full min-[400px]:w-auto transition duration-200 transform hover:scale-105"
                  onClick={() => setShowListForm(true)}
                >
                  {t.listYourItems}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/revoo-logo-transparent.png"
              width="48"
              height="48"
              alt="Revoo logo"
              className="h-12 w-12"
            />
            <p className="text-xs text-gray-600">{t.allRightsReserved}</p>
          </div>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-purple-600">
              {t.termsOfService}
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-purple-600">
              {t.privacyPolicy}
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-purple-600">
              {t.support}
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-purple-600">
              {t.contact}
            </Link>
          </nav>
        </div>
      </footer>

      {/* Modal Forms */}
      {showRentForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-white rounded-2xl shadow-xl p-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{t.wantToRent}</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowRentForm(false)}>
                  ×
                </Button>
              </div>
              <form onSubmit={(e) => handleFormSubmit(e, "Rent Request")} className="space-y-4">
                <div>
                  <Label htmlFor="rent-name">{t.name}</Label>
                  <Input id="rent-name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div>
                  <Label htmlFor="rent-email">{t.email}</Label>
                  <Input id="rent-email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="rent-phone">{t.phone}</Label>
                  <Input id="rent-phone" name="phone" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="rent-items">{t.whatItemsLookingFor}</Label>
                  <Textarea id="rent-items" name="items" placeholder={t.itemsPlaceholderRent} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="rent-location">{t.yourLocation}</Label>
                  <Input id="rent-location" name="location" placeholder={t.locationPlaceholder} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="rent-dates">{t.whenYouNeedIt}</Label>
                <Input
                  id="rent-dates"
                  name="dates"
                  placeholder={t.datesPlaceholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full font-semibold transition duration-200"
 disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    t.submitRequest
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {showListForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-white rounded-2xl shadow-xl p-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{t.wantToList}</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowListForm(false)}>
                  ×
                </Button>
              </div>
              <form onSubmit={(e) => handleFormSubmit(e, "List Items Request")} className="space-y-4">
                <div>
                  <Label htmlFor="list-name">{t.name}</Label>
                  <Input id="list-name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="list-email">{t.email}</Label>
                  <Input id="list-email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="list-phone">{t.phone}</Label>
                  <Input id="list-phone" name="phone" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="list-items">{t.whatItemsRentOut}</Label>
                  <Textarea id="list-items" name="items" placeholder={t.itemsPlaceholderList} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="list-location">{t.yourLocation}</Label>
                  <Input id="list-location" name="location" placeholder={t.locationPlaceholder} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full font-semibold transition duration-200" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    t.submitListingRequest
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {showNewsletterForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-white rounded-2xl shadow-xl p-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{t.getNotified}</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowNewsletterForm(false)}>
                  ×
                </Button>
              </div>
              <form onSubmit={(e) => handleFormSubmit(e, "Newsletter Signup")} className="space-y-4">
                <div>
                  <Label htmlFor="newsletter-email">{t.email}</Label>
                  <Input id="newsletter-email" name="email" type="email" required
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <Label htmlFor="newsletter-name">{t.nameOptional}</Label>
                  <Input id="newsletter-name" name="name"
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full font-semibold shadow-md transition duration-200" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    t.joinNewsletter
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
