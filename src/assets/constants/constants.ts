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
import vision from '../../assets/images/MvvImages/eye.svg'
import mision from '../../assets/images/MvvImages/cohete.svg'
import bandera from '../../assets/images/MvvImages/flag.svg'
import reclamaAqui from '../images/imgTrajectory.svg'
import canal9 from '../images/imgTrajectory1.svg'
import UIlima from '../images/imgTrajectory2.svg'
import reclamaSmart from '../images/imgTrajectory3.svg'
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
  { icon: home },
  { icon: about },
  { icon: service },
  { icon: blog },
  { icon: contact }
];
export const imgTrajectory = [
  { img: UIlima, title: "Reclamaquí", text: "con un MVP para crear una empresa digital" },
  { img: canal9, title: "Canal 9", text: "Entrevista Canal 9 “El Cliente" },
  { img: reclamaSmart, title: "ULima Emprendimiento Social", text: "Ganamos en el Contest “ULima Emprendimiento Social”" },
  { img: reclamaAqui, title: "Reclama Smart", text: "Lanzamos nueva plataforma" }
]

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

export const redes = [
  {
    img: img1,
    link: ""

  }, {

    img: img2,
    link: "https://www.instagram.com/reclamaqui.pe/"
  },
  {
    img: img3,
    link: "https://www.tiktok.com/@reclamaqui.pe?_t=8ao4mz66gfk&_r=1"

  }, {
    img: img4,
    link: "https://api.whatsapp.com/send?phone=+51932468027&text=¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Reclamaqu%C3%AD."
  }

]