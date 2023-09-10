"use client";
import { FormEvent, useState } from "react";
import style from "./FormClaims.module.css";
import emailjs from "@emailjs/browser";
import { EMAIL_ID, TEMPLATE_ID, KEY_ID } from "../../../email.credentials";
import Image from "next/image";
import check from "../../../../assets/images/Check.png";
import cancel from "../../../../assets/images/Cancel.png";

export default function FormClaims() {
  const [send, setsend] = useState("no enviado");
  const [message, setmessage] = useState("");

  //FORM DATA STATE
  const [name, setname] = useState("");
  const [dni, setdni] = useState("");
  const [adress, setadress] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [request, setrequest] = useState("");
  const [detail, setdetail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const form = document.getElementById("email-form") as HTMLFormElement;
      await emailjs.sendForm(EMAIL_ID, TEMPLATE_ID, form, KEY_ID);

      setname("");
      setdni("");
      setadress("");
      setemail("");
      setphone("");
      setrequest("");
      setdetail("");

      setsend("enviado");
      setmessage("Se envio el mail correctamente");
    } catch (error: any) {
      if (error.status === 400) {
        setsend("error");
        setmessage("400 Bad Request: Ocurrio un error al enviar el mensaje");
      }
      if (error.status === 500) {
        setsend("error");
        setmessage(
          "500 Internal Server Error: Ocurrio un error en el servidor"
        );
      }
    }
  };

  return (
    <div className={style.formContainer}>
      <form id="email-form" onSubmit={handleSubmit}>
        <div className={style.inputContain}>
          <div className={style.inputInfo}>
            <label htmlFor="name">Nombre y apellido *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="María Suarez"
              minLength={10}
              maxLength={20}
              pattern="[A-Za-z\s]+"
              title="Solo se permiten letras y espacios"
              onChange={(e) => setname(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className={style.inputInfo}>
            <label htmlFor="dni">DNI / CE / Pasaporte *</label>
            <input
              type="number"
              name="dni"
              id="dni"
              placeholder="30626751"
              required
              minLength={8}
              maxLength={12}
              onChange={(e) => setdni(e.target.value)}
              value={dni}
            />
          </div>

          <div className={style.inputInfo}>
            <label htmlFor="adress">Domicilio *</label>
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Lima 53"
              required
              minLength={5}
              maxLength={12}
              onChange={(e) => setadress(e.target.value)}
              value={adress}
            />
          </div>

          <div className={style.inputInfo}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Mariasuarez@gmail.com"
              pattern=".*\..*"
              title="El mail debe tener @ y .com, .org, etc"
              required
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>

          <div className={style.inputInfo}>
            <label htmlFor="phone">Telefono / Movil*</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="+51956321489"
              required
              onChange={(e) => setphone(e.target.value)}
              value={phone}
            />
          </div>
        </div>

        <div className={style.textAreaContain}>
          <div className={style.textAreaInfo}>
            <label htmlFor="request">Pedido del consumidor *</label>
            <input
              type="text"
              name="request"
              id="consumerRequest"
              required
              minLength={10}
              maxLength={120}
              onChange={(e) => setrequest(e.target.value)}
              value={request}
            />
          </div>

          <div className={style.textAreaInfo}>
            <label htmlFor="detail">
              Detalle de la reclamación del consumidor *
            </label>
            <input
              type="text"
              name="detail"
              id="complaintDetail"
              required
              minLength={20}
              maxLength={120}
              onChange={(e) => setdetail(e.target.value)}
              value={detail}
            />
          </div>
        </div>

        <div className={style.checkedContain}>
          <input
            type="checkbox"
            name="checkTerms"
            id="checkTerms"
            className={style.checkbox}
            required
          />
          <p>
            Declaro ser el usuario del servicio o producto y acepto el contenido
            del presente formulario manifestando bajo Declaración Jurada de la
            veracidad de los hechos descritos.
          </p>
        </div>

        {send === "no enviado" ? (
          <div className={style.buttonContain}>
            <button className={style.buttonForm}>Enviar</button>
          </div>
        ) : (
          <>
          <div className={style.backgroundStatic}></div>
          <div className={style.modalContain}>
            <div className={style.modal}>
              {send === "enviado" ? (
                <Image
                  width={100}
                  height={100}
                  src={check}
                  alt="Check Symbol"
                />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={cancel}
                  alt="Cancel Symbol"
                />
              )}
              <h2 className="">{message}</h2>
            </div>
            {send === "enviado" ? <a href="/claims">Regresar</a> : <a href="/claims">Volver a intentar</a>}
          </div>
          </>
          
        )}
      </form>
    </div>
  );
}
