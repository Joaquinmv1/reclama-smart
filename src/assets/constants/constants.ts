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

export const routes: Routes[] = [
  { name: "Inicio", route: "/" },
  { name: "Conócenos", route: "/about" },
  { name: "Servicios", route: "/" },
  { name: "Blog", route: "/" },
  { name: "Contacto", route: "/" }
];

export const cardsServices = [
  { image: vector, title: "Vuelos" },
  { image: bussines, title: "Estadías" },
  { image: bag, title: "Compras" }
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