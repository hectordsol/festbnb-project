import React from "react";
import style from "./Terms.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoMP from "../../../public/images/logos/mp.png";
import Back from "@/components/back/Back";

export default function Terms() {
  return (
    <div className={style.terms}>
      <div className={style.backContainer}>
        <Back />
      </div>
      <h1>Términos y Condiciones de Uso</h1>
      <p>
        Bienvenido a FestBnB nuestra plataforma de arriendo de salones de
        fiesta. Antes de utilizar nuestros servicios, te pedimos que leas
        detenidamente estos términos y condiciones, ya que constituyen un
        contrato legalmente vinculante entre tú (el Usuario) y nosotros (la
        plataforma). Al utilizar nuestro sitio web o aplicación móvil, aceptas
        cumplir con estos términos y condiciones.
      </p>
      <h2>Registro y Cuenta de Usuario</h2>
      <p>
        1.1. Para acceder a ciertas funciones y servicios de nuestra plataforma,
        es posible que debas registrarte y crear una cuenta de usuario.
        Asegúrate de proporcionar información precisa, actualizada y completa
        durante el proceso de registro. Eres responsable de mantener la
        confidencialidad de tu información de inicio de sesión y de todas las
        actividades que ocurran bajo tu cuenta.
      </p>
      <p>
        1.2. Al registrarte, debes tener al menos 18 años de edad. Si eres menor
        de edad, debes obtener el consentimiento de tus padres o tutores legales
        antes de utilizar nuestros servicios.
      </p>
      <h2>Arriendo de Salones de Fiesta</h2>
      <p>
        2.1. Nuestra plataforma facilita la búsqueda, reserva y arriendo de
        salones de fiesta disponibles. Sin embargo, no garantizamos la
        disponibilidad de los salones de fiesta en todo momento, ya que esto
        depende de la información proporcionada por los propietarios y otros
        factores externos.
      </p>
      <p>
        2.2. Al arrendar un salón de fiesta, aceptas cumplir con las políticas y
        condiciones establecidas por el propietario. Esto puede incluir reglas
        de uso, restricciones de capacidad, horarios de arriendo y cualquier
        otro término especificado por el propietario.
      </p>
      <p>
        2.3. El pago por el arriendo se realiza a través de nuestra plataforma
        utilizando métodos de pago seguros. Al completar una reserva, aceptas
        pagar el monto total indicado, incluidos los impuestos y las tarifas
        aplicables.
      </p>
      <h2>Responsabilidad y Uso Adecuado</h2>
      <p>
        3.1. Eres responsable de tu conducta y uso adecuado de nuestra
        plataforma. No debes utilizar nuestros servicios para ningún propósito
        ilegal, fraudulento, difamatorio, acosador, obsceno o que viole los
        derechos de terceros.
      </p>
      <p>
        3.2. No nos responsabilizamos por la calidad, seguridad o exactitud de
        los salones de fiesta anunciados en nuestra plataforma. Recomendamos que
        revises las políticas y condiciones del propietario antes de realizar un
        arriendo.
      </p>
      <p>
        <h2>Cancelaciones y Reembolsos</h2>
        4.1. Las políticas de cancelación y reembolso varían según el
        propietario del salón de fiesta. Te recomendamos revisar las políticas
        específicas al momento de realizar una reserva. Nosotros no nos hacemos
        responsables de los reembolsos o cancelaciones, ya que estas son
        responsabilidad del propietario.
      </p>
      <h2>Propiedad Intelectual</h2>
      <p>
        5.1. Todos los derechos de propiedad intelectual relacionados con
        nuestra plataforma y su contenido son propiedad de la plataforma o de
        terceros con los que tenemos acuerdos de licencia. No se permite el uso
        no autorizado de dichos derechos de propiedad intelectual.
      </p>
      <h2>Limitación de Responsabilidad</h2>
      <p>
        6.1. En la medida máxima permitida por la ley, no nos hacemos
        responsables de ningún daño, pérdida o lesión relacionados con el uso de
        nuestra plataforma o el arriendo de salones de fiesta a través de ella.
        Esto incluye, entre otros, daños directos, indirectos, incidentales,
        consecuentes o punitivos.
      </p>
      <h2>Modificaciones y Terminación</h2>
      <p>
        7.1. Nos reservamos el derecho de modificar, suspender o terminar
        nuestra plataforma y sus servicios en cualquier momento y sin previo
        aviso. Asimismo, nos reservamos el derecho de modificar estos términos y
        condiciones en cualquier momento. Te recomendamos revisar periódicamente
        estos términos y condiciones para estar al tanto de cualquier cambio.
      </p>
      <h2>Ley Aplicable y Jurisdicción</h2>
      <p>
        8.1. Estos términos y condiciones se regirán e interpretarán de acuerdo
        con las leyes del país o jurisdicción correspondiente. Cualquier disputa
        que surja en relación con estos términos y condiciones estará sujeta a
        la jurisdicción exclusiva de los tribunales de dicha jurisdicción.
      </p>
      <p>
        8.2.Además de estos Términos y Condiciones, Mercado Pago tiene sus
        propias reglas de uso:
        <strong>
          <p className="text-center text-rose-500">
            Enlace a los Términos y Condiciones de Mercado Pago
          </p>
        </strong>
      </p>
      <div className={style.logoContainer}>
        <Link href="https://www.mercadolibre.cl/ayuda/299" target="blank">
          <Image
            src={LogoMP}
            alt="logo"
            width={70}
            height={70}
            className={style.logo}
          />
        </Link>
      </div>
      <p>
        8.3. Si alguna disposición de estos términos y condiciones se considera
        inválida o inaplicable, dicha disposición se eliminará y las
        disposiciones restantes se aplicarán.
      </p>
      <p>
        Al utilizar nuestra plataforma, aceptas cumplir con estos términos y
        condiciones. Si no estás de acuerdo con alguno de estos términos, te
        recomendamos no utilizar nuestros servicios. Si tienes alguna pregunta o
        inquietud, por favor contáctanos.
      </p>
      <p>
        Última actualización: [Fecha de última actualización de los términos y
        condiciones].
      </p>
    </div>
  );
}
