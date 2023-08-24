import bussines from '../images/business.svg';
import vector from '../images/Vector.svg';
import bag from '../images/bag.svg';
import home from '../images/home.svg';
import about from '../images/about.svg';
import service from '../images/service.svg';
import blog from '../images/blog.svg';
import contact from '../images/contact.svg';

export const routes = [
  { name: "Inicio", route: "/" },
  { name: "Conócenos", route: "/" },
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
]