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
    image: businessImg,
    title: "Ingresa tu reclamo 1",
    description: "Cuéntanos los detalles de tu caso a través de nuestro WhatsApp"
  },
  {
    image: businessImg,
    title: "Ingresa tu reclamo 2",
    description: "Cuéntanos los detalles de tu caso a través de nuestro WhatsApp"
  },
  {
    image: businessImg,
    title: "Ingresa tu reclamo 3",
    description: "Cuéntanos los detalles de tu caso a través de nuestro WhatsApp"
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
    description: 'agiliza el proceso mientras empoderamos a los consumidores'
  },
  {
    image: vision,
    title: 'Visión',
    description: 'agiliza el proceso mientras empoderamos a los consumidores'
  },
  {
    image: bandera,
    title: 'Valores',
    description: 'agiliza el proceso mientras empoderamos a los consumidores'
  }
];