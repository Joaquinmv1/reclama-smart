import { Routes } from '@/app/models';
import businessImg from '../../assets/images/business.jpg';
import bag from '../images/bag.svg';
import home from '../images/home.svg';
import about from '../images/conocenos.svg';
import service from '../images/servicios.svg';
import blog from '../images/blog.svg';
import contact from '../images/contacto.svg';
import bussines from '../images/business.svg';
import vector from '../images/Vector.svg'
import vision from '../../assets/images/MvvImages/eye2.svg'
import mision from '../../assets/images/MvvImages/cohete2.svg'
import bandera from '../../assets/images/MvvImages/flag2.svg'
import otros from '../../assets/images/MvvImages/Vector (1).svg'
import reclamo from '../../assets/images/businessInsightImages/reclamasmart2 1.jpg'
import respuesta from '../../assets/images/businessInsightImages/Fotos38 1 (1).jpg'
import recuperar from '../../assets/images/businessInsightImages/Fotos38 1 (2).jpg'

//PERSONS
import person1 from "../images/person1.png"
import person2 from "../images/person2.jpg"
import person3 from "../images/person3.jpg"
import person4 from "../images/person4.jpg"
import person5 from "../images/person5.jpg"
import person6 from "../images/person6.jpg"

import reclamaAqui from '../images/imgTrajectory.svg'
import canal9 from '../images/imgTrajectory1.svg'
import UIlima from '../images/imgTrajectory2.svg'
import reclamaSmart from '../images/imgTrajectory3.svg'
import errorService from '../images/errorService.svg'
import gestionamos from '../images/gestionamos.svg'
import exitoService from '../images/exitoService.svg'
import calculoService from '../images/calculoService.svg'
import img1 from 'src/assets/images/logo-face.svg'
import img2 from 'src/assets/images/logo-insta.svg'
import img3 from 'src/assets/images/logo-tik.svg'
import img4 from 'src/assets/images/logo-wp.svg'


export const routes: Routes[] = [
  { name: "Inicio", route: "/" },
  { name: "Conócenos", route: "/about" },
  { name: "Servicios", route: "/ourServices" },
  { name: "Blog", route: "/blog" },
  { name: "Contacto", route: "/contact" }
];

export const cardsServices = [
  { image: vector, title: "Vuelos" },
  { image: bussines, title: "Estadías" },
  { image: bag, title: "Compras" }
];

export const benefitsData = [
  {
    image: bag,
    title: 'Compras',
    benefits: ['Dificultades con entregas', 'Complicaciones en reembolsos', 'Inconvenientes con garantías', 'Artículos con fallas']
  },
  {
    image: bussines,
    title: 'Bancos',
    benefits: ['Cargos desconocidos', 'Pagos excesivos', 'Fraude bancario', 'Uso inadecuado de tarjetas de crédito']
  },
  {
    image: vector,
    title: 'Vuelos',
    benefits: ['Cancelaciones', 'Tardanzas', 'Sobreventa de pasajes (Overbooking)', 'Incidentes con equipaje']
  },
  {
    image: otros,
    title: 'Otros',
    benefits: ['Servicios de suscripción', 'Incidentes en suministro de luz o agua', 'Contratos desfavorables', 'Servicios no brindados']
  },
];

export const iconRoute = [
  { icon: home },
  { icon: about },
  { icon: service },
  { icon: blog },
  { icon: contact }
];

export const dataClients = [
  {
    name: "Maria",
    image: person1,
    comment: '"Una aerolínea me negó asiento por sobreventa, pero reclama smart logró 25% de compensación."',
  },
  {
    name: "Alvaro",
    image: person2,
    comment: '"Superé una injusticia aérea con Reclama Smart, logramos un reembolso de USD$160. Su apoyo hizo la diferencia."',
  },
  {
    name: "Roberto",
    image: person3,
    comment: '"Recuperé S/2031 a través de Reclama Smart por unos lentes defectuosos ¡Excelente servicio!"',
  },
  {
    name: "María",
    image: person4,
    comment: '"Increíble experiencia con ReclamaSmart."',
  },
  {
    name: "Javier",
    image: person5,
    comment: '"ReclamaSmart superó mis expectativas."',
  },
  {
    name: "Sofía",
    image: person6,
    comment: '"Recomendaría ReclamaSmart a cualquiera que busque una forma efectiva de resolver problemas."',
  },
];

export const imgTrajectory = [
  { img: UIlima, title: "Reclamaquí", text: "con un MVP para crear una empresa digital" },
  { img: canal9, title: "Canal 9", text: "Entrevista Canal 9 “El Cliente" },
  { img: reclamaSmart, title: "ULima Emprendimiento Social", text: "Ganamos en el Contest “ULima Emprendimiento Social”" },
  { img: reclamaAqui, title: "Reclama Smart", text: "Lanzamos nueva plataforma" }
]
export const imgService = [
  {img: errorService, title: "Tu producto falló", text: "Imagina invertir 1000 soles en un televisor que se avería rápidamente debido a defectos de fábrica."},
  {img: gestionamos, title: "Gestionamos tu reclamo", text: "Presentas tu reclamo con nosotros y nos encargamos de todo el proceso."},
  {img: exitoService, title: "Hemos tenido éxito", text: "Si ganamos, la entidad pública obliga a la empresa a reembolsarte."},
  {img: calculoService, title: "Calcula tu pago", text: "Nuestra tarifa es del 20%, si invertiste 1000 soles, tu recuperas 800 soles. 20% tarifa x s/1000= 800"},
]

export const businessInfo = [
  {
    image: reclamo,
    title: "Ingresa tu reclamo",
    description: "Comunícate con nosotros por WhatsApp para contarnos los detalles de tu caso."
  },
  {
    image: respuesta,
    title: "Responderemos en 24hs",
    description: "Nosotros nos encargamos de todo, incluyendo la evaluación del reclamo, si podemos o no ayudarte."
  },
  {
    image: recuperar,
    title: "Recuperamos tu dinero",
    description: "Te mantenemos informado en cada paso del proceso."
  }
];

export const info = [
  {
    title: "¿Qué servicios ofrecen?",
    description:
      "Ofrecemos servicios de gestión y atención de reclamos de consumidores ante las empresas de las que compraron el producto o servicio.",
  },
  {
    title: "¿Quién puede hacer un reclamo?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "¿Cuánto tiempo tengo para reclamar?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "¿Cómo funciona su servicio legal de atención de reclamos de consumidores?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "¿Qué tipos de reclamos de consumidores manejan?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "¿Cómo puedo ponerme en contacto con su equipo para comenzar?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "¿De qué países atienden reclamos?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  }
];

export const mvvData = [
  {
    image: mision,
    title: 'Misión',
    description: 'Ayudar a nuestros clientes a resolver sus reclamos de manera rápida y fácil.'
  },
  {
    image: vision,
    title: 'Visión',
    description: 'Crear una experiencia positiva para nuestros clientes.'
  },
  {
    image: bandera,
    title: 'Valores',
    description: 'Equidad y accesibilidad en temas relacionados al consumo.'
  }
];

export const redes = [
  {
    img: img4,
    link: "https://api.whatsapp.com/send?phone=+51932468027&text=¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Reclamaqu%C3%AD."
  }
  ,
  {

    img: img2,
    link: "https://www.instagram.com/reclamaqui.pe/"
  },
  {
    img: img1,
    link: ""

  },
  {
    img: img3,
    link: "https://www.tiktok.com/@reclamaqui.pe?_t=8ao4mz66gfk&_r=1"

  }

]