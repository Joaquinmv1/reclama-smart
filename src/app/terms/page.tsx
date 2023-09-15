'use client'
import style from './Terms.module.css';
import FAB from './components/FABresponsive/FAB';
import Segments from './components/Segments/Segments';

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
const articles: Array<Array<ArticleProps>> = [
  [
    {
      title: "PRIMERA: DEFINICIONES",
      // segment: "",
      text: `Para efectos de los términos y condiciones aquí regulados (los “Términos y Condiciones”), las palabras indicadas a continuación tendrán el significado que se les atribuye más adelante: 
              -Autoridad Gubernamental: Es cualquier entidad que ejerza funciones ejecutivas, legislativas, judiciales o arbitrales, municipales, regionales, regulatorias o administrativas de, o que correspondan, a funciones de gobierno y ejerzan jurisdicción sobre cualquier persona o materia en cuestión, con competencia según las Leyes Aplicables en la República del Perú. \n -Contenido: Material registrado, marcas, patentes, logos, derechos de propiedad intelectual e industrial de exclusiva propiedad de Reclamaquí, asimismo incluyendo, sin ser esta lista taxativa, información, texto, software, diseños, dibujos, fotos y gráficas de titularidad de Reclamaquí y otros explicados en la sección 5.1 del presente documento. \n -Leyes Aplicables: Es la Constitución Política del Perú, cualquier Ley, Decreto de Urgencia, Decreto Ley, Decreto Legislativo, Decreto Supremo, y en general, cualquier norma u otra disposición de carácter legal o reglamentario vigente en la República del Perú, que puedan ser expedidas por los distintos poderes y autoridades de la República del Perú. \n -Reclamaquí o reclamaquí: RECLAMAQUÍ S.A.C., con Registro Único de Contribuyentes Nº 20610421157. \n Plataforma Web: Sitio web con la dirección https://www.reclamaqui.pe. \n -Políticas de Privacidad: Son las políticas de privacidad de Reclamaquí que resultan aplicables para efectos de la utilización de nuestro Canal de WhatsApp de Reclamaquí o nuestra Plataforma Web o nuestro correo electrónico mesadepartes.legal@reclamasmart.com.pe, con relación al tratamiento de sus datos personales de conformidad con la Ley N° 29733, Ley de Protección de Datos Personales y su Reglamento. \n -Servicios: Son los servicios brindados por Reclamaquí, que son comercializados u ofrecidos a través del Canal de WhatsApp de Reclamaquí con número +51 943 959 114, sea gratuito u oneroso. \n -Canal de WhatsApp: Es el medio de comunicación de Reclamaquí a través de la aplicación WhatsApp con número +51 943 959 114. A través de esta, los Usuarios se podrán poner en contacto con Reclamaquí. Los Usuarios podrán presentar sus peticiones, quejas, reclamos, felicitaciones y sugerencias al correo electrónico mesadepartes.legal@reclamasmart.com.pe. \n -Usuario: Toda persona, natural o jurídica, que utilice el Canal de Whatsapp de Reclamaquí. Estos podrán o no ser clientes de Reclamaquí. \n -Contrato: Es el acuerdo de voluntades entre el Usuario y Reclamaquí, mediante el cual el primero se establecen las obligaciones de Reclamaquí ante el Usuario y viceversa, y mediante el cual se convierte en un Cliente. \n -Cliente: Toda persona, natural o jurídica que accede a uno de nuestros Servicios a través del Canal de WhatsApp y ha firmado el Contrato. Todos los Clientes son Usuarios, pero no todos los Usuarios son Clientes. La relación jurídica entre Reclamaquí y el Cliente surge a partir del momento en el que el Cliente acepta a los Términos y Condiciones del Servicio mediante la firma del Contrato  A partir de este punto, Reclamaquí Iniciará los trámites de reclamación. \n -Proveedor: Persona natural o jurídica que habría realizado negocios jurídicos con el Cliente, con la cual este último mantendría una relación de consumo. \n -Reclamo: Queja correspondiente del Cliente hacia el Proveedor, respecto a una falla en alguno de los productos o servicios del mismo que Reclamaquí realizará y gestionará como parte de los Servicios. \n  -Horario Laboral: De lunes a viernes, desde las 10:00h a 17:00h, a excepción de los días feriados, festivos o no laborables. \n -IGV: Se refiere al Impuesto General a las Ventas.`
    }

  ],
  [

    {
      title: "SEGUNDA: GENERALIDADES, DATOS ALMACENADOS Y DECLARACIONES",
      segment: "2.1. Generalidades",
      text: "Al utilizar nuestro Canal de WhatsApp, el Usuario reconoce haber leído, entendido y aceptado los Términos y Condiciones. De no encontrarse de acuerdo con los Términos y Condiciones, el Usuario no deberá hacer uso de nuestro Canal de WhatsApp" +
        "Estos Términos y Condiciones regulan el uso de nuestro Canal de WhatsApp, que es de propiedad de Reclamaquí. El uso del Canal de WhatsApp y todo aquello que se encontrase relacionado con este instrumento se encontrará sujeto a los Términos y Condiciones, lo cual constituye un acuerdo legal y vinculante entre Reclamaquí y el Usuario por lo que es importante que lea detenidamente el presente documento." +
        "Los Términos y Condiciones del Canal de WhatsApp de Reclamaquí se encuentran a disposición del Usuario en www.reclamaqui" +
        "Adicionalmente, serán puestas a disposición del Usuario de forma oportuna, al inicio de la comunicación con nuestro Canal de WhatsApp. El Usuario declara conocer los riesgos propios de las operaciones y consultas por internet (tales como el phishing, malware, virus, entre otros). Por tanto, al hacer uso del Canal de WhatsApp, acepta dichos riesgos y responsabilidades derivadas del uso del mismo, salvo que se acredite la vulneración de la seguridad de los sistemas informáticos de Reclamaquí."

    },
    {
      segment: "2.2. Accesibilidad",
      text: "Hablar con el Canal de WhatsApp es gratuito, y no requiere de un registro previo. El Canal de WhatsApp se encuentra disponible las veinticuatro horas del día, los siete días de la semana. Sin embargo, las solicitudes no automatizadas sólo serán atendidas durante el Horario Laboral del Canal de WhatsApp. Los Usuarios deberán contar con un teléfono inteligente (“Smartphone”) con tecnología que permita la instalación y el uso de la aplicación de Whatsapp, o podrán acceder al Servicio a través de una computadora con tecnología suficiente que permita el acceso a Whatsapp. El Usuario es responsable de todas las operaciones que se realicen mediante su Smartphone o la computadora a través de los cuales tenga acceso al Canal de WhatsApp de Reclamaquí. En caso de un robo, hurto o pérdida del Smartphone o de su computadora personal, el Usuario se obliga a comunicarse inmediatamente con Reclamaqui por medio de la dirección de correo electrónico mesadepartes.legal@reclamasmart.com.pe. El Usuario declara conocer que el servicio de WhatsApp puede sufrir caídas, lo que haría que el Canal de WhatsApp de Reclamaquí deje de funcionar hasta que WhatsApp re-establezca el servicio. Esta falla en el Servicio no le dará ningún derecho al Usuario a obtener una compensación. Reclamaquí no asumirá responsabilidad alguna por culpa leve o por cualquier problema o inconveniente imputable a terceros, sea éste de índole técnico, físico o producto de un caso fortuito o fuerza mayor que imposibilite, retrase, demore la ejecución o no permita la realización exitosa del servicio. Asimismo, Reclamaquí no asumirá responsabilidad alguna por el acceso al servicio de WhatsApp a través de computadoras y/o equipos celulares de terceros y/o de acceso al público, siendo el Usuario responsable de resguardar sus datos personales y cerrar la sesión. Asimismo, Reclamaquí no asumirá responsabilidad en caso que el Usuario comparta su información con un número no oficial, que no corresponda al Canal de WhatsApp del Reclamaquí. "
    },
    {
      segment: "2.3. Servicios",
      text: "Para acceder a los Servicios de Reclamaquí, el Cliente no deberá tener representación externa y deberá cederle los derechos de representación a uno de los abogados de Reclamaquí, según corresponda. Reclamaquí se reserva el derecho de rechazar un caso  en cualquier momento, sin importar el estado de trámite del mismo, si existen razones para sospechar que el Usuario ha incumplido con estos Términos y Condiciones.A través del Canal de WhatsApp de Reclamaquí se ofrece la siguiente modalidad del Servicio:"
    },
    {
      segment: "2.3.1. Evaluación gratuita del caso",
      text: "Al momento de hacer uso del Canal de WhatsApp, Reclamaquí le brindará al Usuario la posibilidad de enviar los documentos relativos a su reclamo (comprobantes de pago, mensajes intercambiados con el Proveedor, constancia del libro de reclamaciones, entre otros). Una vez los documentos fueran evaluados por Reclamaquí, un representante se pondrá en contacto con el Usuario durante el Horario de Atención si Reclamaquí requiere de mayor información a fin de completar la evaluación. Reclamaquí estima que el caso tendría probabilidades de éxito. En este punto, nuestra respuesta no implica un dictamen jurídico. Esta comunicación se realizará en un plazo tentativo y aproximado no menor de uno (1) ni mayor a tres (3) días hábiles, entendiendo por tales los días que van de lunes a viernes, a excepción de los días feriados, festivos o no laborables. El Usuario acepta que la decisión de Reclamaquí es inapelable. En caso Reclamaquí evalúe el caso con posibilidad de ser exitoso, se le ofrecerá al Usuario la posibilidad de contratar los servicios de Reclamaquí."
    },
    {
      segment: "2.3.2. Reclamamos por ti",
      text: "Reclamaquí presta un servicio de reclamación, pero no garantiza el éxito de este. En función de las necesidades de cada caso en particular, Reclamaquí se compromete a gestionar y velar por los derechos del Cliente ante: " + "Los canales de atención al cliente brindados por el Proveedor. -El Servicio de Atención al Ciudadano (“SAC”) del Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual ('INDECOPI'), -Una Denuncia Administrativa ante la primera instancia del INDECOPI, sea Órgano Resolutivo de Procedimientos Sumarísimos (“ORPS”) o la Comisión de Protección al Consumidor del INDECOPI (“CPC”), y/o-El trámite de la apelación ante el Tribunal de Defensa de la Competencia y la Propiedad Intelectual del INDECOPI, de ser necesario. Los Servicios se limitan a las instancias mencionadas anteriormente."
    },
    {
      segment: "2.3.2.1. Coordinación con el Proveedor",
      text: "En caso que el Cliente no se hubiera comunicado con el Proveedor respecto a su Reclamo aún, Reclamaquí se encargará de hacerlo e intentar llegar a un acuerdo. La cooperación del Cliente es fundamental para proceder con este paso."
    },
    {
      segment: "2.3.2.2. Actuaciones en el SAC",
      text: "Reclamaquí se encargará de la interposición del Reclamo ante el SAC.En el SAC, Reclamaquí se encargará de realizar el debido seguimiento del Reclamo, así como de asistir a la Audiencia de Conciliación virtual que se programe, conjuntamente con el Cliente. En el caso que el Cliente no asista a la Audiencia de Conciliación virtual programada, será exclusivamente su responsabilidad si la autoridad administrativa tiene por no presentada la parte reclamante"
    },
    {
      segment: "2.3.2.3. Actuaciones en la Denuncia Administrativa",
      text: "Reclamaquí se encargará de la interposición de los recursos legales correspondientes ante las entidades enumeradas en el acápite 2.3.2. a fin de poder brindar los servicios de manera adecuada, debe colaborar con Reclamaquí firmando los documentos necesarios, así como la información que sea solicitada para el trámite de su caso. Asimismo, el El Cliente reconoce que deberá mantener informado a Reclamaquí de cualquier comunicación que reciba por parte del proveedor."
    },
    {
      segment: "2.4. Declaraciones del Usuario",
      text: "El Usuario reconoce que las declaraciones que se indican en los numerales siguientes son válidas y verdaderas, y que, por tanto, se mantienen mientras haga uso del Canal de WhatsApp. Asimismo, el Usuario reconoce que el cumplimiento y veracidad de las siguientes declaraciones es requisito esencial para el uso del Canal de WhatsApp: 1. En caso el Usuario sea una persona natural, declara haber cumplido la mayoría de edad para poder realizar las transacciones y actos permitidos por el Canal de WhatsApp. \n 2. En caso el Usuario sea una persona jurídica, declara encontrarse válidamente constituida e inscrita según las Leyes Aplicables; y que sus representantes o funcionarios que interactúen con el Canal de WhatsApp cuentan con todos los poderes y autorizaciones otorgados por el Usuario para dichos fines.\n 3.El Usuario declara reconocer que el uso del Canal de WhatsApp y el cumplimiento de las obligaciones derivadas de lo anterior por parte suya se encuentran dentro de sus facultades estatutarias y no infringen: (i) su estatuto social (en caso el Usuario sea una persona jurídica), (ii) ninguna Ley Aplicable, (iii) ninguna orden, sentencia, resolución o laudo de cualquier tribunal u otra dependencia judicial, administrativa o arbitral que le sea aplicable y le haya sido correctamente notificada; o, (iv) ningún contrato, garantía, instrumento u otro compromiso legalmente obligatorio que le resulta aplicable y del cual sea parte. \n 4. El Usuario declara reconocer que el uso del Canal de WhatsApp y la adquisición de los Servicios se llevará a cabo dentro del marco de lo señalado en el primer párrafo del numeral 2.2 de esta sección segunda. \n 5. El Usuario declara reconocer que el uso del Canal de WhatsApp y la venta o adquisición de los Servicios no origina en modo alguno relación laboral entre Reclamaquí y el Usuario."
    },
    {
      segment: "2.5. Datos Almacenados",
      text: "Reclamaquí almacena información proporcionada por el Usuario, incluyendo datos personales, información relativa a su caso, entre otras. Toda la información entregada por el Usuario es tratada por Reclamaquí bajo las más estrictas medidas de seguridad y conforme a las Políticas de Privacidad, la cual será brindada de manera oportuna al Usuario a través del Canal de Whatsapp, además, de encontrarse disponible en la página web https://www.reclamaqui.pe/politica-de-privacidad. \n El Usuario declara conocer que WhatsApp almacena los datos y reconoce que las conversaciones con el Canal de WhatsApp de Reclamaquí permanecerán disponibles en el historial de Whatsapp. \n La información proporcionada por parte del Cliente se considera privada y se rige por nuestra Política de Privacidad. Reclamaquí se compromete a no compartir, en su totalidad o de manera parcial, los datos privados de el Cliente a ninguna otra entidad o individuo, salvo lo necesario para el trámite del reclamo y la denuncia, de ser el caso, para lo cual, Reclamaquí le comunicará al Cliente."
    }
  ],
  [
    {
      title: "TERCERA: REGISTRO Y AUTENTICACIÓN",
      segment: "3.1 Registro",
      text: "Reclamaquí requerirá información personal del Usuario, con el fin de realizar el registro de su Reclamo a través del Canal de WhatsApp. Los datos que Reclamaquí le requerirá al Usuario son: \n 1. Nombre completo. \n 2. Tipo y número de documento de identidad (DNI, CE o Pasaporte).\n 3. Dirección de correo electrónico.\n 4. Dirección domiciliaria. \n 5. Número de teléfono celular. \n Cualquier otro dato relevante para el funcionamiento del Canal de WhatsApp, por ejemplo: \n  1.Circunstancias que llevaron al Reclamo.2. Recibos y Pruebas que sustenten el Reclamo. \n 3. Documentos adicionales."
    },
    {
      segment: "3.2  Autenticación",
      text: "Una vez el Reclamo del Cliente sea registrado, el Cliente deberá facilitar determinada información en forma correcta y completa para efectos de poder verificar el estado de su Reclamo en el Canal de WhatsApp, cuyo tratamiento se rige por el presente documento. \n La información que pudiese ser requerida conforme a lo anterior será proporcionada por el Usuario y deberá mantenerla bajo absoluta confidencialidad y, en ningún caso, deberá revelarla o compartirla con otras personas. \n El Usuario será el responsable único de todos los actos que se lleven a cabo a partir del ingreso de la información que sea requerida por el Canal de WhatsApp para efectos de la autenticación del Usuario y posterior ingreso, lo que incluye responsabilizarse por los perjuicios que eventualmente puedan sufrir otros Usuarios, terceros o el Canal de WhatsApp por tal motivo."
    }
  ],
  [
    {

      title: "CUARTA: CONDICIONES DE USO DEL CANAL DE WHATSAPP",
      // segment: "",
      text: "4.1  El Usuario se compromete a hacer uso del Canal de WhatsApp con fines exclusivamente comerciales y dentro del marco de lo establecido en el acápite 2.2. \n 4.2  El Usuario no podrá hacer uso del Canal de WhatsApp con fines ilícitos, que lesionen derechos e intereses de Reclamaquí, terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar, afectar o impedir la normal utilización del Canal de WhatsApp, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático de Reclamaquí.Especialmente se considerará conductas contrarias a las presentes políticas de uso del Canal de WhatsApp, sin ser esta lista taxativa, la extracción de información del Canal de WhatsApp, copia de la información alojada en el Canal de WhatsApp para usos no establecidos en el presente instrumento y la comercialización a terceros de la información obtenida desde del Canal de WhatsApp. \n 4.3  El incumplimiento de los Términos y Condiciones de uso del Canal de WhatsApp por parte del Usuario, implicará la cancelación/ inhabilitación automática del Usuario y la eliminación de todos sus datos, quedando impedido de poder utilizar el Canal de WhatsApp a futuro.Reclamaquí hace expresa reserva de las acciones legales que estime pertinentes para los casos de incumplimiento de estas disposiciones y en general, cualquier Ley Aplicable."
    }
  ],
  [
    {
      title: "QUINTA: PROPIEDAD INTELECTUAL",
      // segment: "",
      text: "5.1  El  Canal de WhatsApp contiene material registrado, marcas, patentes, logos, derechos de propiedad intelectual e industrial de exclusiva propiedad de Reclamaquí, asimismo incluyendo, sin ser esta lista taxativa, información, texto, software, diseños, dibujos, fotos y gráficas de titularidad de Reclamaquí. Tanto el Contenido del Canal de WhatsApp, como la organización, disposición, arreglo y diseño de los elementos presentes en la misma y en cada una de sus páginas, son de propiedad de Reclamaquí (o son materiales, bienes y/o activos respecto de los cuales Reclamaquí cuenta con los permisos y/o licencias de sus respectivos titulares) y están protegidas por derechos de propiedad intelectual e industrial. \n 5.2  El Usuario reconoce que no adquiere ningún derecho de ningún tipo sobre el Contenido. La información descargada a través del Canal de WhatsApp puede ser utilizada por el Usuario, según lo descrito en los presentes Términos y Condiciones, pero es de propiedad exclusiva de Reclamaquí. \n 5.3  Reclamaquí se reserva todos los derechos de propiedad intelectual e industrial que le correspondan sobre el Contenido."
    }
  ],
  [
    {
      title: "SEXTA: CAMBIOS EN LOS TÉRMINOS Y CONDICIONES",
      // segment: "",
      text: "6.1 Reclamaquí se reserva el derecho a realizar modificaciones, actualizaciones y/o precisiones a estos Términos y Condiciones en cualquier momento y sin expresión de causa.  Los Términos y Condiciones (así como las modificaciones, actualizaciones y/o precisiones a los mismos) serán válidos desde el momento de su publicación en el Canal de WhatsApp. Cualquier modificación, actualización o precisión se considerará aceptada si el Usuario o el Cliente continúan realizando transacciones una vez que dichas modificaciones hayan entrado en vigencia. \n 6.2 Si cualquier disposición contenida en estos Términos y Condiciones se considerarán inválidas o inaplicables o de cualquier forma no puedan exigirse, dicha invalidez no afectará a las demás disposiciones incluidas en estos Términos y Condiciones. \n 6.3  Las modificaciones en las funcionalidades ofrecidas en el Canal de WhatsApp en atención a la necesidad de innovar y mejorar su experiencia y uso pueden llevarse a cabo en cualquier momento sin necesidad de preaviso alguno por parte de Reclamaquí. La misma regla se aplica para cualquier modificación que el Usuario pueda advertir con tan solo visitar o interactuar con el Canal de WhatsApp."
    }
  ],
  [
    {
      title: "SÉPTIMA: MEDIOS DE PAGOS Y CONDICIONES DE VENTA",
      // segment: "",
      text: "7.1  Para adquirir los distintos Servicios ofrecidos en el Canal de WhatsApp, los Usuarios deberán cancelar el valor de estos a través de los siguientes medios de pago válidos y permitidos por el Canal de WhatsApp: \n Transferencia Bancaria (BCP): \n RECLAMAQUI S.A.C. \n Número de Cuenta: 193-74636999 \n CCI: 00219317463699900513 \n Yape (importante: también puede utilizarse para transferencias a cuentas distintas de BCP, por ejemplo, Interbank, Plin) \n Número de Teléfono: 932 468 027 \n 7.2  La transacción de pago deberá ser realizada para poder acceder a los Servicios de Reclamaquí. \n 7.3  La transacción que el Usuario realice para cancelar el precio de los Servicios adquiridos estará sujeta a la verificación por parte de Reclamaquí. De acuerdo a ello, no se considerará como completa una transacción destinada a la adquisición de cualquiera de los Servicios mientras Reclamaquí no haya podido confirmar o acreditar que el respectivo pago por parte del Usuario para adquirir los Servicios haya sido debidamente realizado. \n 7.4  Reclamaquí no será responsable por los problemas que puedan verificarse con ocasión de los servicios prestados por las empresas procesadoras de pago o las empresas que brindan los servicios bancarios o de intermediación financiera que el usuario elija para realizar las operaciones de compra a través del Canal de WhatsApp."
    }
  ],
  [
    {
      title: "OCTAVA: LOGÍSTICA EN LA PRESTACIÓN DEL SERVICIO",
      // segment: "",
      text: "8.1 Una vez el Usuario decida adquirir un Servicio, deberá procederá firmar el Contrato, Poder y documentos correspondientes requeridos por Reclamaquí en un plazo no mayor a dos (2) días hábiles, entendiendo por tales los días que van de lunes a viernes, a excepción de los días feriados, festivos o no laborables. \n 8.2 Una vez firmados los documentos indicados en el acápite anterior, el Usuario se convierte en un Cliente. \n 8.3  Es responsabilidad del Usuario que: (i) los datos relativos al trámite de su reclamo sean correctamente proporcionados y, (ii) atender cualquier requerimiento o comunicación que sea realizada por Reclamaquí para efectos de poder culminar con la prestación del servicio. \n 8.4  El Cliente reconoce que, una vez firmado el Contrato, le otorga a Reclamaquí exclusividad sobre el trámite y gestión de su caso, y se compromete a no recurrir a servicios legales de terceros. En caso Reclamaquí tome conocimiento de que el Cliente ha contratado servicios legales externos, Reclamaquí se reserva el derecho de resolver el contrato, bastando para ello la sola comunicación al Cliente a través de los medios de contacto proporcionados por el mismo, dando fin a la relación contractual. El Cliente reconoce que en este caso, Reclamaquí se quedará con la contraprestación pagada, así como cualquier garantía proporcionada por el Cliente, de ser el caso. \n 8.5  El Contrato quedará vigente hasta obtener una respuesta en calidad de cosa juzgada en sede administrativa. Al tener esta resolución, las partes acuerdan dar por finalizado el Contrato. En este momento, corresponderá que el Cliente pague la Tarifa de Éxito. El Contrato se dará por finalizado al haberse llevado a cabo el pago de la tarifa completa de parte del Cliente. \n 8.6  Reclamaquí podrá poner término al Contrato a su sola discreción, dando aviso con quince (15) días de anticipación a la otra parte de tal hecho y comunicando la fecha del cese efectivo del Servicio contratado. En el caso que Reclamaquí decida poner fin unilateral al Contrato sin razón aparente, reconoce que deberá reembolsar al Cliente la tarifa inicial, en caso el Cliente la hubiera pagado. \n 8.7  En caso el Cliente decidiese resolver el presente contrato de manera anticipada y unilateral, el Cliente deberá pagar los honorarios de abogado correspondientes, correspondientes a s/ 200 (doscientos y 00/100 soles) por hora trabajada. Reclamaquí le presentará al Cliente la constancia de las horas trabajadas, de modo que este pueda pagar el monto correspondiente. \n 8.8 En este caso, el Cliente deberá comunicar su deseo de terminar el Contrato a Reclamaquí a través del Canal de WhatsApp o enviando un correo electrónico a mesadepartes.legal@reclamasmart.com.pe. El Contrato se dará como concluido una vez que Reclamaquí lo confirme a través de los medios anteriormente citados."
    }
  ],
  [
    {
      title: "NOVENA: SISTEMA DE COBROS",
      segment: "9.1  Pago en caso de éxito",
      text: "En caso el reclamo resulte exitoso y el Cliente obtenga la devolución de su dinero o la reposición de su bien (en el caso de solicitud de cambios de productos), el Cliente deberá pagar una tarifa de éxito, correspondiente al veinte por ciento (20%) del valor del caso (para el casos que versen sobre productos, se entenderá “valor del caso” como valor pagado por el producto materia de reclamo). \n Este pago deberá ser abonado en las cuentas de Reclamaquí hasta siete (7) días hábiles después de recibir el pago o bien de parte del Proveedor. De no cumplir con esta condición, Reclamaquí se reserva el derecho de iniciar un proceso legal contra el Cliente. "
    }, {
      segment: "9.2  Costos y Costas",
      text: "Para poder cumplir su misión de promover el acceso a la justicia, Reclamaquí financia el procedimiento administrativo del Cliente. \n Por tanto, nuestros honorarios dependen del reembolso de los costos y costas del procedimiento administrativo, de haberlos. \n En esa línea, cuando el caso obtiene una resolución favorable, el Cliente le cederá a Reclamaquí el monto correspondiente a los costos y costas del procedimiento administrativo por los servicios realizados por nuestros abogados."
    }
  ],
  [
    {
      title: "DÉCIMA: OBLIGACIÓN DE RESERVA",
      // segment: "",
      text: "Los trabajadores, representantes, ejecutivos y asociados vinculados a Reclamaquí que tengan acceso a la información de carácter confidencial (no pública) entregada por el Usuario en el marco de la utilización del Canal de WhatsApp estarán sujetos a la obligación de guardar confidencialidad y reserva de la información. \n Reclamaquí declara que ha hecho y hará sus mejores esfuerzos para evitar la divulgación no autorizada bajo el presente instrumento de cualquier información de carácter confidencial relativa a sus Usuarios. \n  La obligación de reserva respecto de la información confidencial aquí regulada no aplicará respecto de la información que: \n A la fecha de revelación de dicha información, sea de conocimiento general o pueda ser conocida con facilidad por el público en general o se vuelva de conocimiento general o de ser conocida con facilidad sin culpa de la contraparte. \n Deba ser divulgada por mandato de la Ley Aplicable o en cumplimiento de una resolución judicial, arbitral y/o administrativa."
    },
  ],
  [
    {
      title: "UNDÉCIMA: TERMINACIÓN",
      // segment: "",
      text: "10.1  Reclamaquí podrá en cualquier momento dar de baja al Usuario de forma inmediata mediante simple notificación por escrito por cualquiera de las siguientes circunstancias: \n En caso de que el Usuario declare o proporcione a Reclamaquí cualquier información personal que sea falsa. \n En caso de que el Usuario incurra en insolvencia, no cuente con los recursos económicos y/o que no tenga la capacidad o se encuentre impedido de cumplir con estos Términos y Condiciones. \n En caso de incumplimiento por parte del Usuario a cualquiera de las obligaciones asumidas conforme a estos Términos y Condiciones y que dicho incumplimiento no sea subsanable. \n 10.2   El hecho de que Reclamaquí no exija o no haya exigido el cumplimiento de alguna de las disposiciones incluidas en estos Términos y Condiciones, no se considerará como una renuncia realizada por Reclamaquí para exigir su cumplimiento en un futuro."
    }
  ],
  [
    {
      title: "DUODÉCIMA: SERVICIO AL USUARIO",
      // segment: "",
      text: "Reclamaquí pone a disposición de sus Usuarios un servicio de ayuda, con el fin de absolver todas las dudas que éstos puedan tener sobre las políticas de uso del Canal de WhatsApp y/o brindar asistencia respecto de cualquier problema relacionado u originado con el uso del Canal de WhatsApp. \n Los datos de contacto del servicio de ayuda que pone a disposición Reclamaquí en beneficio de los Usuarios es la dirección de correo electrónico: mesadepartes.legal@reclamasmart.com.pe "
    }
  ],
  [
    {
      title: "DÉCIMATERCERA: JURISDICCIÓN",
      // segment: "",
      text: "Este documento queda sometido a las leyes de la República de Perú. Cualquier controversia se someterá a los tribunales del Cercado de Lima y tanto Reclamaquí como el Usuario renuncian expresamente a cualquier otro fuero que pudiera corresponderles en razón de su domicilio presente o futuro."
    }
  ]
]

export default function TermsAndConditions() {

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
