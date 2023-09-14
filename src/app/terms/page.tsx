'use client'
import style from './Terms.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import navImage from '../../public/images/nav-term.svg';
import { FrequentQuestions } from '../components';
import Link from 'next/link';
import Script from 'next/script';
import Segments from './components/Segments/Segments';
import FAB from './components/FABresponsive/FAB';




interface ArticleProps {
    title?: string;
    segment?: string;
    text: string;
}

export function ArticleTerms({ title, segment, text }: ArticleProps): JSX.Element {
    return (
        <article className={style.article} >
            <h2 className={style.title} >{title}</h2>
            <h3>{segment}</h3>
            <p>{text}</p>
        </article>
    )
}



export default function TermsAndConditions() {
    const articles: Array<Array<ArticleProps>> = [
        [
            {
                title: "PRIMERA: DEFINICIONES",

                text: `Para efectos de los términos y condiciones aquí regulados (los “Términos y Condiciones”), las palabras indicadas a continuación tendrán el significado que se les atribuye más adelante: \n
                -Autoridad Gubernamental: Es cualquier entidad que ejerza funciones ejecutivas, legislativas, judiciales o arbitrales, municipales, regionales, regulatorias o administrativas de, o que correspondan, a funciones de gobierno y ejerzan jurisdicción sobre cualquier persona o materia en cuestión, con competencia según las Leyes Aplicables en la República del Perú. \n
                -Contenido: Material registrado, marcas, patentes, logos, derechos de propiedad intelectual e industrial de exclusiva propiedad de Reclama Smart, asimismo incluyendo, sin ser esta lista taxativa, información, texto, software, diseños, dibujos, fotos y gráficas de titularidad de Reclama Smart y otros explicados en la sección 5.1 del presente documento.\n
                -Leyes Aplicables: Es la Constitución Política del Perú, cualquier Ley, Decreto de Urgencia, Decreto Ley, Decreto Legislativo, Decreto Supremo, y en general, cualquier norma u otra disposición de carácter legal o reglamentario vigente en la República del Perú, que puedan ser expedidas por los distintos poderes y autoridades de la República del Perú. \n

                -Reclama Smart: RECLAMAQUÍ S.A.C., con Registro Único de Contribuyentes Nº 20610421157. \n

                -Plataforma Web: Sitio web con la dirección https://www.reclamasmart.com.pe. \n
                
                -Políticas de Privacidad: Son las políticas de privacidad de Reclama Smart que resultan aplicables para efectos de la utilización de nuestro Canal de WhatsApp de Reclama Smart, de nuestra Plataforma Web y de nuestro correo electrónico info@reclamasmart.pe, con relación al tratamiento de sus datos personales de conformidad con la Ley N° 29733, Ley de Protección de Datos Personales y su Reglamento. \n -Servicios: Son los servicios brindados por Reclama Smart, que son comercializados u ofrecidos a través de la Plataforma Web o del Canal de WhatsApp de Reclama Smart, sea gratuito u oneroso.
                -Canal de WhatsApp: Es el medio de comunicación de Reclama Smart a través de la aplicación WhatsApp con número +51 932 468 027. A través de esta, los Usuarios se podrán poner en contacto con Reclama Smart. 
                -Usuario: Toda persona, natural o jurídica, que utilice el Canal de Whatsapp de Reclama Smart. Estos podrán o no ser clientes de Reclama Smart. 
                -Contrato: Es el acuerdo de voluntades entre el Usuario y Reclama Smart, mediante el cual el primero se establecen las obligaciones de Reclama Smart ante el Usuario y viceversa, y mediante el cual se convierte en un Cliente.
                -Cliente: Toda persona, natural o jurídica que accede a uno de nuestros Servicios a través del Canal de WhatsApp y ha firmado el Contrato. Todos los Clientes son Usuarios, pero no todos los Usuarios son Clientes. La relación jurídica entre Reclama Smart y el Cliente surge a partir del momento en el que el Cliente acepta a los Términos y Condiciones del Servicio mediante la firma del Contrato  A partir de este punto, Reclama Smart Iniciará los trámites de reclamación.
                Proveedor: Persona natural o jurídica que habría realizado negocios jurídicos con el Cliente, con la cual este último mantendría una relación de consumo. 
                -Reclamo: Queja correspondiente del Cliente hacia el Proveedor, respecto a una falla en alguno de los productos o servicios del mismo que Reclama Smart realizará y gestionará como parte de los Servicios. 
                Horario Laboral: De lunes a viernes, desde las 10:00h a 17:00h, a excepción de los días feriados, festivos o no laborables.
                -IGV: Se refiere al Impuesto General a las Ventas.
                 `
            }

        ],
        [

            {
                title: "SEGUNDA: GENERALIDADES, DATOS ALMACENADOS Y DECLARACIONES",
                segment: "2.1. Generalidades",
                text: "Al utilizar nuestro Canal de WhatsApp, el Usuario reconoce haber leído, entendido y aceptado los Términos y Condiciones. De no encontrarse de acuerdo con los Términos y Condiciones, el Usuario no deberá hacer uso de nuestro Canal de WhatsApp. Estos Términos y Condiciones regulan el uso de nuestro Canal de WhatsApp, que es de propiedad de Reclama Smart. El uso del Canal de WhatsApp y todo aquello que se encontrase relacionado con este instrumento se encontrará sujeto a los Términos y Condiciones, lo cual constituye un acuerdo legal y vinculante entre Reclama Smart y el Usuario por lo que es importante que lea detenidamente el presente documento.Los Términos y Condiciones del Canal de WhatsApp de Reclama Smart se encuentran a disposición del Usuario en www.reclamasmart.com.pe. Adicionalmente, serán puestas a disposición del Usuario de forma oportuna, al inicio de la comunicación con nuestro Canal de WhatsApp. El Usuario declara conocer los riesgos propios de las operaciones y consultas por internet (tales como el phishing, malware, virus, entre otros). Por tanto, al hacer uso del Canal de WhatsApp, acepta dichos riesgos y responsabilidades derivadas del uso del mismo, salvo que se acredite la vulneración de la seguridad de los sistemas informáticos de Reclama Smart."

            },
            {
                segment: "2.2. Accesibilidad",
                text: "Contactarnos a través del Canal de WhatsApp es gratuito y no requiere de un registro previo. El Canal de WhatsApp se encuentra disponible las veinticuatro (24) horas del día, los siete (7) días de la semana. Sin embargo, las solicitudes del Canal de Whatsapp sólo serán atendidas durante el Horario Laboral. Los Usuarios deberán contar con un teléfono inteligente (“Smartphone”) con tecnología que permita la instalación y el uso de la aplicación de Whatsapp, o podrán acceder al Servicio a través de una computadora con tecnología suficiente que permita el acceso a Whatsapp. El Usuario es responsable de todas las operaciones que se realicen mediante su Smartphone o la computadora a través de los cuales tenga acceso al Canal de WhatsApp de Reclama Smart.En caso de un robo, hurto o pérdida del Smartphone o de su computadora personal, el Usuario se obliga a comunicarse inmediatamente con Reclama Smart por medio de la dirección de correo electrónico info@reclamasmart.pe. El Usuario declara conocer que el servicio de WhatsApp puede sufrir caídas, lo que haría que el Canal de WhatsApp de Reclama Smart deje de funcionar hasta que WhatsApp re-establezca el servicio. Esta falla en el Servicio no le dará ningún derecho al Usuario a obtener una compensación. Reclama Smart no asumirá responsabilidad alguna por culpa leve o por cualquier problema o inconveniente imputable a terceros, sea éste de índole técnico, físico o producto de un caso fortuito o fuerza mayor que imposibilite, retrase, demore la ejecución o no permita la realización exitosa del servicio. Asimismo, Reclama Smart no asumirá responsabilidad alguna por el acceso al servicio de WhatsApp a través de computadoras y/o equipos celulares de terceros y/o de acceso al público, siendo el Usuario responsable de resguardar sus datos personales y cerrar la sesión. Asimismo, Reclama Smart no asumirá responsabilidad en caso que el Usuario comparta su información con un número no oficial, que no corresponda al Canal de WhatsApp del Reclama Smart. "
            },
            {
                segment: "2.3. Servicios",
                text: "Para acceder a los Servicios de Reclama Smart, el Cliente no deberá tener representación externa y deberá cederle los derechos de representación a uno de los abogados de Reclama Smart, según corresponda. Reclama Smart se reserva el derecho de rechazar un caso en cualquier momento, sin importar el estado de trámite del mismo, si existen razones para sospechar que el Usuario ha incumplido con estos Términos y Condiciones. \n" +
                    "A través del Canal de WhatsApp de Reclama Smart se ofrece la siguiente modalidad del Servicio:"
            },
            {
                segment: "2.3.1. Evaluación del caso",
                text: "Cuando utilice nuestro Canal de WhatsApp, Reclama Smart permitirá al Usuario:\n" +
                    "1-Describir detalladamente los hechos relacionados con su caso. 2-Enviar documentos pertinentes, como comprobantes de pago, mensajes intercambiados con el Proveedor y constancia del libro de reclamaciones, entre otros. Una vez que Reclama Smart haya evaluado los documentos, un representante se pondrá en contacto con el Usuario durante nuestro Horario de Atención, en caso de que necesitemos información adicional para completar la evaluación. Es importante destacar que nuestra respuesta en esta etapa no constituye un dictamen jurídico." +
                    "Este contacto se realizará en un período de tiempo tentativo y aproximado que oscilará entre uno (1) y tres (3) días hábiles. Esto se refiere a los días laborables de lunes a viernes, excluyendo días feriados, festivos o no laborables. El Usuario debe comprender y aceptar que la decisión de Reclama Smart es definitiva e inapelable.Además, si Reclama Smart considera, a su discreción, que es necesario para evaluar su caso, se ofrecerá al Usuario la posibilidad de agendar una llamada gratuita de hasta quince (15) minutos con uno de nuestros asesores. La programación de la llamada se realizará a través de la plataforma Calendly, sujeta a sus propios términos y condiciones."

            },
            {
                segment: "2.3.2. Reclamamos por ti",
                text: "Reclamaquí presta un servicio de reclamación, pero no garantiza el éxito de este. En función de las necesidades de cada caso en particular, Reclamaquí se compromete a gestionar y velar por los derechos del Cliente ante: " + "Los canales de atención al cliente brindados por el Proveedor. -El Servicio de Atención al Ciudadano (“SAC”) del Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual ('INDECOPI'), -Una Denuncia Administrativa ante la primera instancia del INDECOPI, sea Órgano Resolutivo de Procedimientos Sumarísimos (“ORPS”) o la Comisión de Protección al Consumidor del INDECOPI (“CPC”), y/o-El trámite de la apelación ante el Tribunal de Defensa de la Competencia y la Propiedad Intelectual del INDECOPI, de ser necesario. Los Servicios se limitan a las instancias mencionadas anteriormente."
            },
            {
                segment: "2.3.2.1. Coordinación con el Proveedor",
                text: "En caso que el Cliente no se hubiera comunicado con el Proveedor respecto a su Reclamo aún, Reclama Smart se encargará de hacerlo e intentar llegar a un acuerdo. La cooperación del Cliente es fundamental para proceder con este paso. "
            },
            {
                segment: "2.3.2.2. Actuaciones en el SAC",
                text: "Reclama Smart se responsabilizará de presentar el Reclamo ante el Servicio de Atención al Cliente (SAC) en aquellos casos en los que lo considere necesario o como parte integral de la estrategia legal diseñada para el Cliente. En el SAC, Reclama Smart se encargará de realizar el debido seguimiento del Reclamo, así como de asistir a la Audiencia de Conciliación virtual que se programe, conjuntamente con el Cliente. En el caso que el Cliente no asista a la Audiencia de Conciliación virtual programada, será exclusivamente su responsabilidad si la autoridad administrativa tiene por no presentada la parte reclamante. "
            },
            {
                segment: "2.3.2.3. Actuaciones en la Denuncia Administrativa",
                text: "Reclama Smart se encargará de la interposición de los recursos legales correspondientes ante las entidades enumeradas en el acápite 2.3.2. a fin de poder brindar los servicios de manera adecuada, debe colaborar con Reclama Smart firmando los documentos necesarios, así como la información que sea solicitada para el trámite de su caso. Asimismo, el El Cliente reconoce que deberá mantener informado a Reclama Smart de cualquier comunicación que reciba por parte del proveedor."
            },
            {
                segment: "2.4. Declaraciones del Usuario",
                text: "El Usuario reconoce que las declaraciones que se indican en los numerales siguientes son válidas y verdaderas, y que, por tanto, se mantienen mientras haga uso del Canal de WhatsApp. Asimismo, el Usuario reconoce que el cumplimiento y veracidad de las siguientes declaraciones es requisito esencial para el uso del Canal de WhatsApp: \n" +
                    "En caso el Usuario sea una persona natural, declara haber cumplido la mayoría de edad para poder realizar las transacciones y actos permitidos por el Canal de WhatsApp." +
                    "En caso el Usuario sea una persona jurídica, declara encontrarse válidamente constituida e inscrita según las Leyes Aplicables; y que sus representantes o funcionarios que interactúen con el Canal de WhatsApp cuentan con todos los poderes y autorizaciones otorgados por el Usuario para dichos fines." +
                    "El Usuario declara reconocer que el uso del Canal de WhatsApp y el cumplimiento de las obligaciones derivadas de lo anterior por parte suya se encuentran dentro de sus facultades estatutarias y no infringen: (i) su estatuto social (en caso el Usuario sea una persona jurídica), (ii) ninguna Ley Aplicable, (iii) ninguna orden, sentencia, resolución o laudo de cualquier tribunal u otra dependencia judicial, administrativa o arbitral que le sea aplicable y le haya sido correctamente notificada; o, (iv) ningún contrato, garantía, instrumento u otro compromiso legalmente obligatorio que le resulta aplicable y del cual sea parte. \n" +
                    "El Usuario declara reconocer que el uso del Canal de WhatsApp y la adquisición de los Servicios se llevará a cabo dentro del marco de lo señalado en el primer párrafo del numeral 2.2 de esta sección segunda. \n" +
                    "El Usuario declara reconocer que el uso del Canal de WhatsApp y la venta o adquisición de los Servicios no origina en modo alguno relación laboral entre Reclama Smart y el Usuario."
            },
            {
                segment: "2.5. Datos Almacenados",
                text: "Reclama Smart almacena información proporcionada por el Usuario, incluyendo datos personales, información relativa a su caso, entre otras. Toda la información entregada por el Usuario es tratada por Reclama Smart bajo las más estrictas medidas de seguridad y conforme a las Políticas de Privacidad, la cual será brindada de manera oportuna al Usuario a través del Canal de Whatsapp, además, de encontrarse disponible en la página web (www.reclamasmart.pe). El Usuario declara conocer que WhatsApp almacena los datos y reconoce que las conversaciones con el Canal de WhatsApp de Reclama Smart permanecerán disponibles en el historial de Whatsapp. La información proporcionada por parte del Cliente se considera privada y se rige por nuestra Política de Privacidad. Reclama Smart se compromete a no compartir, en su totalidad o de manera parcial, los datos privados de el Cliente a ninguna otra entidad o individuo, salvo lo necesario para el trámite del reclamo y la denuncia, de ser el caso, para lo cual, Reclama Smart le comunicará al Cliente."
            }
        ],
        [
            {
                title: "TERCERA: REGISTRO Y AUTENTICACIÓN",
                segment: "3.1 Registro",
                text: "Reclama Smart requerirá información personal del Usuario, con el fin de realizar el registro de su Reclamo a través del Canal de WhatsApp. Los datos que Reclama Smart le requerirá al Usuario son: n\ " +
                    "a)Nombre completo." +
                    "b)Tipo y número de documento de identidad (DNI, CE o Pasaporte). \n" +
                    "c)Dirección de correo electrónico. \n" +
                    "d)Dirección domiciliaria. \n" +
                    "e)Número de teléfono celular. \n" +
                    "Cualquier otro dato relevante para el funcionamiento del Canal de WhatsApp, por ejemplo:" +
                    "a)Circunstancias que llevaron al Reclamo." +
                    "b)Recibos y Pruebas que sustenten el Reclamo." +
                    "c)Documentos adicionales."

            },
            {
                segment: "3.2  Autenticación",
                text: "Una vez el Reclamo del Cliente sea registrado, el Cliente deberá facilitar determinada información en forma correcta y completa para efectos de poder verificar el estado de su Reclamo en el Canal de WhatsApp, cuyo tratamiento se rige por el presente documento. La información que pudiese ser requerida conforme a lo anterior será proporcionada por el Usuario y deberá mantenerla bajo absoluta confidencialidad y, en ningún caso, deberá revelarla o compartirla con otras personas. El Usuario será el responsable único de todos los actos que se lleven a cabo a partir del ingreso de la información que sea requerida por el Canal de WhatsApp para efectos de la autenticación del Usuario y posterior ingreso, lo que incluye responsabilizarse por los perjuicios que eventualmente puedan sufrir otros Usuarios, terceros o el Canal de WhatsApp por tal motivo."
            }
        ],
        [
            {

                title: "CUARTA: CONDICIONES DE USO DEL CANAL DE WHATSAPP",
                // segment: "",
                text: "4.1      El Usuario se compromete a hacer uso del Canal de WhatsApp con fines exclusivamente comerciales y dentro del marco de lo establecido en el acápite 2.2. \n" +
                    "4.2      El Usuario no podrá hacer uso del Canal de WhatsApp con fines ilícitos, que lesionan derechos e intereses de Reclama Smart, terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar, afectar o impedir la normal utilización del Canal de WhatsApp, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático de Reclama Smart. Especialmente se considerará conductas contrarias a las presentes políticas de uso del Canal de WhatsApp, sin ser esta lista taxativa, la extracción de información del Canal de WhatsApp, copia de la información alojada en el Canal de WhatsApp para usos no establecidos en el presente instrumento y la comercialización a terceros de la información obtenida desde del Canal de WhatsApp. \n" +
                    "4.3      El incumplimiento de los Términos y Condiciones de uso del Canal de WhatsApp por parte del Usuario, implica la cancelación/inhabilitación automática del Usuario y la eliminación de todos sus datos, quedando impedido de poder utilizar el Canal de WhatsApp a futuro. Reclama Smart hace expresa reserva de las acciones legales que estime pertinentes para los casos de incumplimiento de estas disposiciones y en general, cualquier Ley Aplicable."

            },
        ],
        [
            {
                title: "QUINTA: PROPIEDAD INTELECTUAL",
                // segment: "",
                text: "5.1      El  Canal de WhatsApp contiene material registrado, marcas, patentes, logos, derechos de propiedad intelectual e industrial de exclusiva propiedad de Reclama Smart, asimismo incluyendo, sin ser esta lista taxativa, información, texto, software, diseños, dibujos, fotos y gráficas de titularidad de Reclama Smart. Tanto el Contenido del Canal de WhatsApp, como la organización, disposición, arreglo y diseño de los elementos presentes en la misma y en cada una de sus páginas, son de propiedad de Reclama Smart (o son materiales, bienes y/o activos respecto de los cuales Reclama Smart cuenta con los permisos y/o licencias de sus respectivos titulares) y están protegidas por derechos de propiedad intelectual e industrial. \n" +
                    "5.2      El Usuario reconoce que no adquiere ningún derecho de ningún tipo sobre el Contenido. La información descargada a través del Canal de WhatsApp puede ser utilizada por el Usuario, según lo descrito en los presentes Términos y Condiciones, pero es de propiedad exclusiva de Reclama Smart. \n" +
                    "5.3      Reclama Smart se reserva todos los derechos de propiedad intelectual e industrial que le correspondan sobre el Contenido."

            }
        ],
        [
            {
                title: "SEXTA: CAMBIOS EN LOS TÉRMINOS Y CONDICIONES",
                // segment: "",
                text: "6.1      Reclama Smart se reserva el derecho a realizar modificaciones, actualizaciones y/o precisiones a estos Términos y Condiciones en cualquier momento y sin expresión de causa.  Los Términos y Condiciones (así como las modificaciones, actualizaciones y/o precisiones a los mismos) serán válidos desde el momento de su publicación en el Canal de WhatsApp. Cualquier modificación, actualización o precisión se considerará aceptada si el Usuario o el Cliente continúan realizando transacciones una vez que dichas modificaciones hayan entrado en vigencia. \n" +
                    " 6.2      Si cualquier disposición contenida en estos Términos y Condiciones se considerarán inválidas o inaplicables o de cualquier forma no puedan exigirse, dicha invalidez no afectará a las demás disposiciones incluidas en estos Términos y Condiciones. \n" +
                    "6.3      Las modificaciones en las funcionalidades ofrecidas en el Canal de WhatsApp en atención a la necesidad de innovar y mejorar su experiencia y uso pueden llevarse a cabo en cualquier momento sin necesidad de preaviso alguno por parte de Reclama Smart. La misma regla se aplica para cualquier modificación que el Usuario pueda advertir con tan solo visitar o interactuar con el Canal de WhatsApp."
            }
        ],
        [
            {
                title: "SÉPTIMA: LOGÍSTICA EN LA PRESTACIÓN DEL SERVICIO ",
                // segment: "",
                text: "7.1 	Una vez el Usuario decida adquirir un Servicio, deberá procederá firmar el Poder y enviar los documentos correspondientes requeridos por Reclama Smart en un plazo no mayor a dos (2) días hábiles, entendiendo por tales los días que van de lunes a viernes, a excepción de los días feriados, festivos o no laborables." +
                    "7.2 	Una vez firmado el Poder y enviado los documentos indicados en el acápite anterior, el Usuario se convierte en un Cliente. " +
                    "7.3 	Es responsabilidad del Usuario que: (i) los datos relativos al trámite de su reclamo sean correctamente proporcionados y, (ii) atender cualquier requerimiento o comunicación que sea realizada por Reclama Smart para efectos de poder culminar con la prestación del servicio." +
                    " 7.4 	El Cliente reconoce que, le otorga a Reclama Smart exclusividad sobre el trámite y gestión de su caso, y se compromete a no recurrir a servicios legales de terceros. En caso Reclama Smart tome conocimiento de que el Cliente ha contratado servicios legales externos, Reclama Smart se reserva el derecho de poner fin a la prestación del Servicio, bastando para ello la sola comunicación al Cliente a través de los medios de contacto proporcionados por el mismo, dando fin a la relación contractual. "

            }
        ],
        [
            {
                title: "OCTAVA: SISTEMA DE COBROS",
                // segment: "",
                text: ""

            }, {
                segment: "8.1.  Pago en caso de éxito", text: "Si el reclamo presentado a través de uno de los Servicios descritos en la Sección 2.3 resulta exitoso y el Cliente obtiene una solución favorable, como la devolución de su dinero o la reposición del bien, o cualquier otra solución que satisfaga su reclamo, el Cliente deberá abonar una tarifa de éxito. El monto de esta tarifa será calculado de manera específica para cada caso y se le informará al Cliente antes de contratar el Servicio. Cabe destacar que este monto incluirá el Impuesto General a las Ventas (IGV).\n"
            },
            {
                segment: "8.2. Medios de pago y condiciones (delete:MEDIOS DE PAGOS Y CONDICIONES DE VENTA)", text: "En la modalidad que la empresa devuelve el dinero directo, este pago de la tarifa (8.1) deberá ser abonado en las cuentas de Reclama Smart hasta siete (7) días hábiles después de recibir el pago o bien de parte del Proveedor. De no cumplir con esta condición, Reclama Smart se reserva el derecho de iniciar un proceso legal contra el Cliente. Los Usuarios deberán cancelar la tarifa de éxito (según 8.2) a través de los siguientes medios de pago válidos y permitidos por el Canal de WhatsApp:\n"
            }
        ],
        [
            {
                title: "NOVENA:  OBLIGACIÓN DE RESERVA",
                // segment: "9.1  Pago en caso de éxito",
                text: "Los trabajadores, representantes, ejecutivos y asociados vinculados a Reclama Smart que tengan acceso a la información de carácter confidencial (no pública) entregada por el Usuario en el marco de la utilización del Canal de WhatsApp estarán sujetos a la obligación de guardar confidencialidad y reserva de la información. La obligación de reserva respecto de la información confidencial aquí regulada no aplicará respecto de la información que: \n" + "-A la fecha de revelación de dicha información, sea de conocimiento general o pueda ser conocida con facilidad por el público en general o se vuelva de conocimiento general o de ser conocida con facilidad sin culpa de la contraparte.\n " + "Deba ser divulgada por mandato de la Ley Aplicable o en cumplimiento de una resolución judicial, arbitral y/o administrativa."
            }
        ],
        [
            {
                title: "DÉCIMA: TERMINACION",
                // segment: "",
                text: "10.1 La relación contractual quedará vigente hasta obtener una respuesta en calidad de cosa juzgada en sede administrativa. Al obtener esta resolución, el Cliente pague la Tarifa de Éxito ( vease 8.1). El Contrato se dará por finalizado al haberse llevado a cabo el pago de la tarifa completa de parte del Cliente.\n" + "10.2  Reclama Smart podrá en cualquier momento dar de baja al Usuario de forma inmediata mediante simple notificación por escrito por cualquiera de las siguientes circunstancias: En caso de que el Usuario declare o proporcione a Reclama Smart cualquier información personal que sea falsa. En caso de que el Usuario incurra en insolvencia, no cuente con los recursos económicos y/o que no tenga la capacidad o se encuentre impedido de cumplir con estos Términos y Condiciones. En caso de incumplimiento por parte del Usuario a cualquiera de las obligaciones asumidas conforme a estos Términos y Condiciones y que dicho incumplimiento no sea subsanable.\n" +
                    "10.3  El hecho de que Reclama Smart no exija o no haya exigido el cumplimiento de alguna de las disposiciones incluidas en estos Términos y Condiciones, no se considerará como una renuncia realizada por Reclama Smart para exigir su cumplimiento en un futuro. \n" +
                    "10.4 	En caso el Cliente decidiese resolver el presente contrato de manera anticipada y unilateral, el Cliente deberá pagar los honorarios de abogado correspondientes, correspondientes a s/ 200 (doscientos y 00/100 Soles) por hora trabajada. Reclama Smart le presentará al Cliente la constancia de las horas trabajadas, de modo que este pueda pagar el monto correspondiente. \n" +
                    "10.5 	En este caso, el Cliente deberá comunicar su deseo de terminar el Contrato a Reclama Smart a través del Canal de WhatsApp o enviando un correo electrónico a info@reclamasmart.pe. El Contrato se dará como concluido una vez que Reclama Smart lo confirme a través de los medios anteriormente citados. "

            },
        ],
        [
            {
                title: "UNDÉCIMA: TERMINACIÓN",
                // segment: "",
                text: "Este documento queda sometido a las leyes de la República de Perú. Cualquier controversia se someterá a los tribunales del Cercado de Lima y tanto Reclama Smart como el Usuario renuncian expresamente a cualquier otro fuero que pudiera corresponderles en razón de su domicilio presente o futuro."
            }
        ]
    ]
    return (
        <div className={style.containerGeneral}>

            <aside className={style.segmentText}>
                <Segments />
                <FAB />

            </aside>

            <aside className={style.itemsText}>
                {
                    articles.map((article, i) => {
                        return (
                            <div key={i}>
                                {
                                    article.map(item => {
                                        return (
                                            <div key={item.title}>
                                                <ArticleTerms title={item.title} segment={item.segment} text={item.text} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </aside>

        </div>
    )
}
