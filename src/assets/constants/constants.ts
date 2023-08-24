import { Routes } from '@/app/models';
import businessImg from '../../assets/images/business.jpg';
import vector from '../images/Vector.svg';
import bag from '../images/bag.svg';
import home from '../images/home.svg';
import about from '../images/about.svg';
import service from '../images/service.svg';
import blog from '../images/blog.svg';
import contact from '../images/contact.svg';
import bussines from '../images/business.svg';

export const routes: Routes[] = [
  { name: "Inicio", route: "/" },
  { name: "Conócenos", route: "/about" },
  { name: "Servicios", route: "/" },
  { name: "Blog", route: "/" },
  { name: "Contacto", route: "/" }
];

export const cardsServices = [
  { icon: vector, title: "Vuelos" },
  { icon: bussines, title: "Estadías" },
  { icon: bag, title: "Compras" }
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
