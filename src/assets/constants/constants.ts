import { Routes } from '@/app/models';
import businessImg from '../../assets/images/business.jpg';
import bag from '../images/bag.svg';
import home from '../images/home.svg';
import about from '../images/about.svg';
import service from '../images/service.svg';
import blog from '../images/blog.svg';
import contact from '../images/contact.svg';
import bussines from '../images/business.svg';
import vector from '../images/Vector.svg'
import vision from '../../assets/images/MvvImages/eye.svg'
import mision from '../../assets/images/MvvImages/cohete.svg'
import bandera from '../../assets/images/MvvImages/flag.svg'
import reclamo from '../../assets/images/businessInsightImages/reclamasmart2 1.jpg'
import respuesta from '../../assets/images/businessInsightImages/Fotos38 1 (1).jpg'
import recuperar from '../../assets/images/businessInsightImages/Fotos38 1 (2).jpg'


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
    image: vector,
    title: 'Vuelos',
    benefits: ['Cancelaciones de Vuelo', 'Demoras excesivas', 'Negación de Embarque (Overbooking)', 'Incidentes en el vuelo', 'Perdida de equipaje']
  },
  {
    image: bussines,
    title: 'Bancos',
    benefits: ['Cancelaciones de Vuelo', 'Demoras excesivas', 'Negación de Embarque (Overbooking)', 'Incidentes en el vuelo', 'Perdida de equipaje']
  },
  {
    image: bag,
    title: 'Compras',
    benefits: ['Cancelaciones de Vuelo', 'Demoras excesivas', 'Negación de Embarque (Overbooking)', 'Incidentes en el vuelo', 'Perdida de equipaje']
  },
  {
    image: bag,
    title: 'Compras',
    benefits: ['Cancelaciones de Vuelo', 'Demoras excesivas', 'Negación de Embarque (Overbooking)', 'Incidentes en el vuelo', 'Perdida de equipaje']
  },
];

export const iconRoute = [
  {icon: home},
  {icon:about},
  {icon: service},
  {icon: blog},
  {icon: contact}
];

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
    title: "¿Tengo que pagar algo por adelantado?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "¿Quién puede reclamar?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "¿Cuanto tiempo tengo para reclamar?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
  {
    title: "Ya presente mi reclamo con ustedes, ¿y ahora que?",
    description:
      "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
  },
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