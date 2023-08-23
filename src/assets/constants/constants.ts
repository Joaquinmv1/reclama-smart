import bussines from '../images/business.svg';
import vector from '../images/Vector.svg';
import bag from '../images/bag.svg';
import businessImg from '../../assets/images/business.jpg';

export const routes = [
  { name: "Inicio", route: "/" },
  { name: "Conócenos", route: "/" },
  { name: "Servicios", route: "/" },
  { name: "Blog", route: "/" },
  { name: "Contacto", route: "/" }
];

export const cardsServices = [
  { image: vector, title: "Vuelos" },
  { image: bussines, title: "Estadías" },
  { image: bag, title: "Compras" }
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