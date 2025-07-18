"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingParticles } from "@/components/floating-particles"
import { GeometricShapes } from "@/components/geometric-shapes"
import {
  MessageSquare,
  Smartphone,
  Bot,
  Globe,
  Code,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Menu,
  X,
  Mail,
  Phone,
  Send,
  Rocket,
  Award,
  Lock,
  Server,
  Wifi,
  Star,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react"

export default function CNIDLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: MessageSquare,
      title: "WhatsApp Masivo",
      description: "Hasta 10,000 mensajes por campaña con personalización completa",
      features: ["Anti-bloqueo", "Programación automática", "Soporte 24/7", "Envío desde Excel"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "SMS Masivo",
      description: "99.9% de entrega garantizada con cobertura nacional",
      features: ["Entrega inmediata", "Sin instalación", "Solo pagas entregados", "Cobertura total"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "Bot WhatsApp",
      description: "Atención automática 24/7 sin intervención humana",
      features: ["Menús interactivos", "Integración CRM", "Recolección datos", "Derivación ventas"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Sistemas a Medida",
      description: "Desarrollo personalizado para tu negocio específico",
      features: ["Panel usuarios", "Reportes", "APIs", "Multiplataforma"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Hosting & Dominios",
      description: "Presencia web profesional con soporte completo",
      features: ["Dominios .py/.com", "Hosting rápido", "Correos corporativos", "SSL incluido"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const plans = [
    {
      name: "Básico",
      messages: "1,000",
      price: "250,000",
      popular: false,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      name: "Estándar",
      messages: "2,500",
      price: "500,000",
      popular: false,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Comercial",
      messages: "5,000",
      price: "950,000",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Ejecutivo",
      messages: "10,000",
      price: "1,800,000",
      popular: false,
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  const clients = ["Bristol", "Forever", "Tajy", "Santa Clara", "La Trinidad", "Woden"]

  const stats = [
    { number: "500+", label: "Empresas Atendidas", icon: Users },
    { number: "1M+", label: "Mensajes Enviados", icon: MessageSquare },
    { number: "99.9%", label: "Uptime Garantizado", icon: Shield },
    { number: "24/7", label: "Soporte Técnico", icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 from-gray-50 via-blue-50 to-purple-50 transition-all duration-500">
      <FloatingParticles />
      <GeometricShapes />

      {/* Header */}
      <header className="fixed top-0 w-full glass-effect z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white dark:text-white text-gray-900">CNID</span>
                <div className="text-xs text-white/60 dark:text-white/60 text-gray-600">Centro Digital</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Inicio", "Servicios", "Planes", "Beneficios", "Clientes", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 dark:text-white/80 text-gray-700 hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4 text-sm text-white/80 dark:text-white/80 text-gray-700">
                <div className="flex items-center space-x-1 glass-effect px-3 py-1 rounded-full">
                  <Phone className="w-4 h-4" />
                  <span>+595994854167</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white dark:text-white text-gray-900 glass-effect p-2 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 dark:border-white/10 border-gray-200">
              <nav className="flex flex-col space-y-2 mt-4">
                {["Inicio", "Servicios", "Planes", "Beneficios", "Clientes", "Contacto"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 dark:text-white/80 text-gray-700 hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors py-2 px-4 rounded-lg glass-hover"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white/90 dark:text-white/90 text-gray-700 text-sm font-medium">
                Registro Legal N.º 17789 • Líderes en Paraguay
              </span>
              <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white dark:text-white text-gray-900 mb-8 leading-tight">
              Automatizá tu negocio y
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                {" "}
                conectate
              </span>{" "}
              con miles de clientes
            </h1>

            <p className="text-2xl text-white/80 dark:text-white/80 text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Somos CNID, tu socio tecnológico en mensajería masiva, desarrollo de sistemas, páginas web, bots, dominios
              y hosting profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 group"
              >
                <Send className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Solicitar un Servicio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 dark:border-white/20 border-gray-300 text-white dark:text-white text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-100 px-10 py-6 text-xl rounded-2xl bg-transparent glass-effect hover:scale-105 transition-all duration-300 group"
              >
                <MessageSquare className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Hablar con un asesor
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-white/60 dark:text-white/60 text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-white/60 dark:text-white/60 text-gray-600 mb-4 text-lg">
                🎯 Empresas inteligentes ya lo hacen. ¿Y vos?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 glass-effect">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-purple-400" />
              <span className="text-white/90 dark:text-white/90 text-gray-700 text-sm font-medium">Quiénes Somos</span>
            </div>

            <h2 className="text-5xl font-bold text-white dark:text-white text-gray-900 mb-8">
              Centro Nacional de
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Información Digital
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-xl text-white/80 dark:text-white/80 text-gray-600 leading-relaxed mb-6">
                  Somos el{" "}
                  <strong className="text-white dark:text-white text-gray-900">
                    Centro Nacional de Información Digital (CNID)
                  </strong>
                  , legalmente constituido (Registro N.º 17789), líderes en soluciones digitales integrales en Paraguay.
                </p>
                <p className="text-xl text-white/80 dark:text-white/80 text-gray-600 leading-relaxed">
                  Ayudamos a empresas, emprendedores, instituciones y profesionales a digitalizar y automatizar sus
                  procesos con tecnología de vanguardia y soporte especializado.
                </p>
              </div>

              <div className="glass-effect rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white dark:text-white text-gray-900">500+</div>
                    <div className="text-white/60 dark:text-white/60 text-gray-600 text-sm">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white dark:text-white text-gray-900">5+</div>
                    <div className="text-white/60 dark:text-white/60 text-gray-600 text-sm">Años</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white dark:text-white text-gray-900">24/7</div>
                    <div className="text-white/60 dark:text-white/60 text-gray-600 text-sm">Soporte</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white dark:text-white text-gray-900">100%</div>
                    <div className="text-white/60 dark:text-white/60 text-gray-600 text-sm">Seguro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Rocket className="w-5 h-5 text-orange-400" />
              <span className="text-white/90 dark:text-white/90 text-gray-700 text-sm font-medium">
                Beneficios Exclusivos
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
              ¿Por qué tener
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {" "}
                todo propio?
              </span>
            </h2>
            <p className="text-2xl text-white/80 dark:text-white/80 text-gray-600">
              La diferencia entre ser amateur y profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <Card className="glass-effect glass-hover border-0 group hover:scale-105 transition-all duration-500 overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-6">
                  Tu propio dominio personalizado
                </h3>
                <ul className="text-white/80 dark:text-white/80 text-gray-600 space-y-4 text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Transmite confianza y profesionalismo absoluto
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Ejemplo: www.tuempresa.com.py
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Mejora tu presencia en buscadores
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Fortalece tu identidad de marca
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/30">
                  <p className="text-yellow-200 dark:text-yellow-200 text-yellow-700 font-medium">
                    🧠 La diferencia entre vender con @gmail.com y @tuempresa.com.py es ENORME.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect glass-hover border-0 group hover:scale-105 transition-all duration-500 overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <Server className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-6">
                  Tu propio hosting profesional
                </h3>
                <ul className="text-white/80 dark:text-white/80 text-gray-600 space-y-4 text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Sitio web online 24/7 sin depender de nadie
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Capacidad escalable para crecer
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Correos corporativos ilimitados
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Backup y soporte técnico garantizado
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl border border-red-500/30">
                  <p className="text-red-200 dark:text-red-200 text-red-700 font-medium">
                    ⚡ No pongas tu empresa en servidores compartidos y lentos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect glass-hover border-0 group hover:scale-105 transition-all duration-500 overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl" />
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-6">
                  Tu propia página web o aplicación
                </h3>
                <ul className="text-white/80 dark:text-white/80 text-gray-600 space-y-4 text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Tu local abierto todo el día
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Presentás, vendés y captás clientes
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Integrá pagos, WhatsApp, formularios
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Desarrollo a medida para tu rubro
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
                  <p className="text-blue-200 dark:text-blue-200 text-blue-700 font-medium">
                    📱 Si no estás en la web, no existís. Y si estás mal, espantás clientes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 glass-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 dark:text-white/90 text-gray-700 text-sm font-medium">
                Nuestros Servicios
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
              Soluciones
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                tecnológicas integrales
              </span>
            </h2>
            <p className="text-2xl text-white/80 dark:text-white/80 text-gray-600">
              Para llevar tu negocio al siguiente nivel
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-effect border-0 group hover:scale-105 transition-all duration-500 overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <CardContent className="p-10 relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-white/80 dark:text-white/80 text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/70 dark:text-white/70 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 bg-gradient-to-r ${service.gradient} hover:scale-105 transition-all duration-300 text-white border-0 py-3 text-lg font-semibold`}
                  >
                    Más información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 dark:text-white/90 text-gray-700 text-sm font-medium">
                Planes de WhatsApp
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
              Planes de
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                WhatsApp Masivo
              </span>
            </h2>
            <p className="text-2xl text-white/80 dark:text-white/80 text-gray-600">
              Elegí el plan que mejor se adapte a tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative glass-effect border-0 group hover:scale-105 transition-all duration-500 overflow-hidden ${
                  plan.popular ? "ring-2 ring-purple-500 shadow-2xl shadow-purple-500/25" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Más Popular
                    </div>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <CardContent className="p-10 text-center relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-6">{plan.name}</h3>
                  <div className="mb-8">
                    <div className="text-5xl font-bold text-white dark:text-white text-gray-900 mb-2">
                      {plan.messages}
                    </div>
                    <div className="text-white/60 dark:text-white/60 text-gray-600 text-lg">mensajes</div>
                  </div>
                  <div className="mb-8">
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                    >
                      Gs. {plan.price}
                    </div>
                  </div>
                  <ul className="text-white/80 dark:text-white/80 text-gray-600 space-y-3 mb-10 text-lg">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Envío desde Excel
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Programación automática
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Multimedia incluido
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Soporte 24/7
                    </li>
                  </ul>
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:scale-105 transition-all duration-300 text-white border-0 py-4 text-lg font-semibold shadow-lg`}
                  >
                    Solicitar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-24 glass-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-gold-400" />
              <span className="text-white/90 dark:text-white/90 text-gray-700 text-sm font-medium">
                Nuestros Clientes
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
              Clientes que ya
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                confían en CNID
              </span>
            </h2>
            <p className="text-2xl text-white/80 dark:text-white/80 text-gray-600">
              Unite a cientos de empresas que ya automatizaron sus procesos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center glass-hover group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-white dark:text-white text-gray-900 font-bold text-lg">{client}</div>
                <div className="text-white/60 dark:text-white/60 text-gray-600 text-sm mt-2">Cliente Satisfecho</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8">
                <Send className="w-5 h-5 text-green-400" />
                <span className="text-white/90 dark:text-white/90 text-gray-700 text-sm font-medium">Contactanos</span>
              </div>

              <h2 className="text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
                ¿Listo para llevar tu empresa
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  al siguiente nivel?
                </span>
              </h2>
              <p className="text-2xl text-white/80 dark:text-white/80 text-gray-600">
                Completá el formulario y nos ponemos en contacto
              </p>
            </div>

            <Card className="glass-effect border-0 overflow-hidden">
              <CardContent className="p-12">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white dark:text-white text-gray-900 mb-3 text-lg font-medium">
                        Nombre completo
                      </label>
                      <Input
                        className="glass-effect border-white/20 dark:border-white/20 border-gray-300 text-white dark:text-white text-gray-900 placeholder:text-white/50 dark:placeholder:text-white/50 placeholder:text-gray-500 h-14 text-lg rounded-xl"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-white dark:text-white text-gray-900 mb-3 text-lg font-medium">
                        Empresa
                      </label>
                      <Input
                        className="glass-effect border-white/20 dark:border-white/20 border-gray-300 text-white dark:text-white text-gray-900 placeholder:text-white/50 dark:placeholder:text-white/50 placeholder:text-gray-500 h-14 text-lg rounded-xl"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white dark:text-white text-gray-900 mb-3 text-lg font-medium">
                        Teléfono / WhatsApp
                      </label>
                      <Input
                        className="glass-effect border-white/20 dark:border-white/20 border-gray-300 text-white dark:text-white text-gray-900 placeholder:text-white/50 dark:placeholder:text-white/50 placeholder:text-gray-500 h-14 text-lg rounded-xl"
                        placeholder="+595..."
                      />
                    </div>
                    <div>
                      <label className="block text-white dark:text-white text-gray-900 mb-3 text-lg font-medium">
                        Email
                      </label>
                      <Input
                        type="email"
                        className="glass-effect border-white/20 dark:border-white/20 border-gray-300 text-white dark:text-white text-gray-900 placeholder:text-white/50 dark:placeholder:text-white/50 placeholder:text-gray-500 h-14 text-lg rounded-xl"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white dark:text-white text-gray-900 mb-3 text-lg font-medium">
                      Tipo de servicio
                    </label>
                    <select
                      className="w-full p-4 glass-effect border border-white/20 dark:border-white/20 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 text-lg"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="sms">SMS Masivo</option>
                      <option value="whatsapp">WhatsApp Masivo</option>
                      <option value="bot">Bot de WhatsApp</option>
                      <option value="hosting">Hosting/Dominio</option>
                      <option value="web">Desarrollo Web/App</option>
                      <option value="sistema">Sistema a Medida</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white dark:text-white text-gray-900 mb-3 text-lg font-medium">
                      Comentarios
                    </label>
                    <Textarea
                      className="glass-effect border-white/20 dark:border-white/20 border-gray-300 text-white dark:text-white text-gray-900 placeholder:text-white/50 dark:placeholder:text-white/50 placeholder:text-gray-500 text-lg rounded-xl"
                      placeholder="Contanos más sobre tu proyecto..."
                      rows={6}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl">
                      <Send className="w-6 h-6 mr-3" />
                      Enviar Solicitud
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-2 border-white/20 dark:border-white/20 border-gray-300 text-white dark:text-white text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-100 bg-transparent glass-effect py-6 text-xl font-semibold rounded-2xl hover:scale-105 transition-all duration-300"
                    >
                      <MessageSquare className="w-6 h-6 mr-3" />
                      Hablar por WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 glass-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white dark:text-white text-gray-900 mb-8">
              Confianza, legalidad y
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                soporte
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: Shield, text: "Registro legal N.º 17789", color: "text-green-400" },
                { icon: Users, text: "Soporte técnico real", color: "text-blue-400" },
                { icon: Zap, text: "Paneles intuitivos", color: "text-purple-400" },
                { icon: Lock, text: "Información protegida", color: "text-yellow-400" },
                { icon: Wifi, text: "Certificados SSL", color: "text-cyan-400" },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 mb-4">
                    <item.icon
                      className={`w-12 h-12 ${item.color} mx-auto group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className="text-white dark:text-white text-gray-900 font-semibold text-lg">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 glass-effect border-t border-white/10 dark:border-white/10 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-white dark:text-white text-gray-900">CNID</span>
                  <div className="text-sm text-white/60 dark:text-white/60 text-gray-600">Centro Digital</div>
                </div>
              </div>
              <p className="text-white/60 dark:text-white/60 text-gray-600 text-lg leading-relaxed">
                Centro Nacional de Información Digital - Tu socio tecnológico de confianza
              </p>
            </div>

            <div>
              <h4 className="text-white dark:text-white text-gray-900 font-bold mb-6 text-xl">Contacto</h4>
              <div className="space-y-4 text-white/60 dark:text-white/60 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span className="text-lg">info@cnid.com.py</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">+595 994 854 167</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5" />
                  <span className="text-lg">www.cnid.com.py</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white dark:text-white text-gray-900 font-bold mb-6 text-xl">Servicios</h4>
              <div className="space-y-3 text-white/60 dark:text-white/60 text-gray-600 text-lg">
                <div>WhatsApp Masivo</div>
                <div>SMS Masivo</div>
                <div>Bot WhatsApp</div>
                <div>Hosting & Dominios</div>
                <div>Desarrollo Web</div>
              </div>
            </div>

            <div>
              <h4 className="text-white dark:text-white text-gray-900 font-bold mb-6 text-xl">Legal</h4>
              <div className="space-y-3 text-white/60 dark:text-white/60 text-gray-600 text-lg">
                <div>Términos de Servicio</div>
                <div>Política de Privacidad</div>
                <div>Cookies</div>
                <div>Registro N.º 17789</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 dark:border-white/10 border-gray-200 mt-12 pt-8 text-center text-white/60 dark:text-white/60 text-gray-600">
            <p className="text-lg">
              &copy; 2024 CNID - Centro Nacional de Información Digital. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
