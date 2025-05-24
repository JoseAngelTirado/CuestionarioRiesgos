import { QuestionType } from '../types';

const questions: QuestionType[] = [
  {
    id: 'q1',
    text: '¿Usas una Red Privada Virtual (VPN) para proteger tu conexión a internet?',
    weight: 1,
    options: [
      { id: 'q1a', text: 'Sí', value: 1 },
      { id: 'q1b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q2',
    text: '¿Conoces cómo bloquear o borrar a distancia la información de tu teléfono móvil o tablet en caso de ser necesario?',
    weight: 1,
    options: [
      { id: 'q2a', text: 'Sí', value: 1 },
      { id: 'q2b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q3',
    text: '¿Consideras que proteger tus datos personales en internet es principalmente tu responsabilidad?',
    weight: 1,
    options: [
      { id: 'q3a', text: 'Sí', value: 1 },
      { id: 'q3b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q4',
    text: '¿Conoces qué es la autenticación de dos factores (2FA)?',
    weight: 1,
    options: [
      { id: 'q4a', text: 'Sí', value: 1 },
      { id: 'q4b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q5',
    text: 'En caso de que encuentres información personal tuya publicada en internet sin tu permiso ¿sabes qué pasos tomar para protegerla o eliminarla?',
    weight: 1,
    options: [
      { id: 'q5a', text: 'Sí', value: 1 },
      { id: 'q5b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q6',
    text: 'Cuando usas redes sociales ¿aceptas solicitudes de amistad o conexión de personas que no conoces en la vida presencial?',
    weight: 1,
    options: [
      { id: 'q6a', text: 'Sí', value: 0 },
      { id: 'q6b', text: 'No', value: 1 }
    ]
  },
  {
    id: 'q7',
    text: 'Cuando instalas una aplicación en tu teléfono o tablet ¿revisas qué información o funciones de tu dispositivo pide usar (por ejemplo, acceso a fotos, contactos o tu ubicación)?',
    weight: 1,
    options: [
      { id: 'q7a', text: 'Sí', value: 1 },
      { id: 'q7b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q8',
    text: 'Selecciona la respuesta que define correctamente un “dato personal”.',
    weight: 1,
    options: [
      { id: 'q8a', text: 'Cualquier información concerniente a una persona física, identificada o identificable.', value: 1 },
      { id: 'q8b', text: 'Grupo de información susceptible de una reconsideración respecto a una categoría general y homogénea por sus especiales peculiaridades y características identificativas.', value: 0 }
    ]
  },
  {
    id: 'q9',
    text: 'Selecciona 6 tipos de datos personales.',
    weight: 1,
    options: [
      { id: 'q9a', text: 'Nombre completo, Expediente médico, CURP, Fecha de nacimiento, Preferencia sexual.', value: 1 },
      { id: 'q9b', text: 'Dirección electrónica, Personalidad, Voz, Fecha de ingreso a la UNAM, Nivel de estudios, Número de tu casa.', value: 0 }
    ]
  },
  {
    id: 'q10',
    text: '¿Qué institución protege actualmente los datos personales en México?',
    weight: 1,
    options: [
      { id: 'q10a', text: 'Inai', value: 0 },
      { id: 'q10b', text: 'Transparencia para el pueblo', value: 1 }
    ]
  },
  {
    id: 'q11',
    text: '¿Estás consciente de que tus datos personales pueden ser muy valiosos y vendidos por delincuentes en internet?',
    weight: 1,
    options: [
      { id: 'q11a', text: 'Sí', value: 1 },
      { id: 'q11b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q12',
    text: '¿Estás consciente de que compartir ciertos detalles personales en redes sociales puede aumentar tu riesgo de seguridad?',
    weight: 1,
    options: [
      { id: 'q12a', text: 'Sí', value: 1 },
      { id: 'q12b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q13',
    text: '¿Conoces que compartir tu ubicación en tiempo real puede tener riesgos para tu seguridad o privacidad?',
    weight: 1,
    options: [
      { id: 'q13a', text: 'Sí', value: 1 },
      { id: 'q13b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q14',
    text: '¿Conoces cómo denunciar un perfil falso en redes sociales?',
    weight: 1,
    options: [
      { id: 'q14a', text: 'Sí', value: 1 },
      { id: 'q14b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q15',
    text: '¿Has entregado la prueba de amor? (Entregar tus contraseñas a tu pareja)',
    weight: 1,
    options: [
      { id: 'q15a', text: 'Sí', value: 0 },
      { id: 'q15b', text: 'No', value: 1 }
    ]
  },
  {
    id: 'q16',
    text: 'Cuando una persona tiene público su perfil y alguien usa sus publicaciones o información sin su permiso ¿Podrá denunciar?',
    weight: 1,
    options: [
      { id: 'q16a', text: 'Sí', value: 1 },
      { id: 'q16b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q17',
    text: '¿Te conectas a redes públicas?',
    weight: 1,
    options: [
      { id: 'q17a', text: 'Sí', value: 0 },
      { id: 'q17b', text: 'No', value: 1 }
    ]
  },
  {
    id: 'q18',
    text: '¿Verificas la seguridad de un sitio web antes de ingresar tus datos personales?',
    weight: 1,
    options: [
      { id: 'q18a', text: 'Sí', value: 1 },
      { id: 'q18b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q19',
    text: '¿Realizas copias automáticas de seguridad de tu información y datos?',
    weight: 1,
    options: [
      { id: 'q19a', text: 'Sí', value: 1 },
      { id: 'q19b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q20',
    text: '¿Conoces los riesgos de descargar archivos adjuntos desconocidos en tu correo electrónico?',
    weight: 1,
    options: [
      { id: 'q20a', text: 'Sí', value: 1 },
      { id: 'q20b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q21',
    text: '¿Conoces la importancia de destruir los documentos físicos con tu información personal antes de tirarlos a la basura?',
    weight: 1,
    options: [
      { id: 'q21a', text: 'Sí', value: 1 },
      { id: 'q21b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q22',
    text: '¿Conoces que conectar una memoria USB que encuentras en la calle a tu computadora o teléfono puede ser peligroso para la seguridad de tu información y datos?',
    weight: 1,
    options: [
      { id: 'q22a', text: 'Sí', value: 1 },
      { id: 'q22b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q23',
    text: '¿Cubres los micrófonos y cámaras web de tus dispositivos y móviles?',
    weight: 1,
    options: [
      { id: 'q23a', text: 'Sí', value: 1 },
      { id: 'q23b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q24',
    text: '¿Comprendes por qué es importante proteger tus datos personales en internet para evitar riesgos?',
    weight: 1,
    options: [
      { id: 'q24a', text: 'Sí', value: 1 },
      { id: 'q24b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q25',
    text: '¿Consideras que puedes controlar la información personal que compartes en internet?',
    weight: 1,
    options: [
      { id: 'q25a', text: 'Sí', value: 1 },
      { id: 'q25b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q26',
    text: '¿Consideras que es posible mantener tu información completamente privada en internet?',
    weight: 1,
    options: [
      { id: 'q26a', text: 'Sí', value: 0 },
      { id: 'q26b', text: 'No', value: 1 }
    ]
  },
  {
    id: 'q27',
    text: '¿Está de acuerdo con la práctica de "exponer" públicamente a personas en redes sociales por presuntas faltas antes de que exista una investigación formal?',
    weight: 1,
    options: [
      { id: 'q27a', text: 'Sí', value: 0 },
      { id: 'q27b', text: 'No', value: 1 }
    ]
  },
  {
    id: 'q28',
    text: '¿Utilizas pestañas de navegación anónima?',
    weight: 1,
    options: [
      { id: 'q28a', text: 'Sí', value: 1 },
      { id: 'q28b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q29',
    text: '¿Dirías que utilizas contraseñas fuertes para tus cuentas en línea?',
    weight: 1,
    options: [
      { id: 'q29a', text: 'Sí', value: 1 },
      { id: 'q29b', text: 'No', value: 0 }
    ]
  },
  {
    id: 'q30',
    text: '¿Conoces que mantener tus programas y aplicaciones actualizados es una forma importante de protección contra ataques cibernéticos?',
    weight: 1,
    options: [
      { id: 'q30a', text: 'Sí', value: 1 },
      { id: 'q30b', text: 'No', value: 0 }
    ]
  }
];

export default questions;


