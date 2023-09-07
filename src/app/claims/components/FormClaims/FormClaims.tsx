"use client";
import { FormEvent, useState } from "react";
import style from "./FormClaims.module.css";
import emailjs from "@emailjs/browser";

export default function FormClaims() {
  const [send, setsend] = useState("no enviado");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailServiceId = "service_z3px95g";
    const templateId = "template_nqq9mf4";
    const keyId = "rWreg_YhrnMARKfuN";

    try {
      const form = document.getElementById("email-form") as HTMLFormElement;
      await emailjs.sendForm(emailServiceId, templateId, form, keyId);

      setsend("enviado");
      setmessage("Mensaje enviado");
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
            />
          </div>

          <div className={style.inputInfo}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Mariasuarez@gmail.com"
              required
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
              minLength={20}
              maxLength={120}
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
          <div className={style.sendContain}>
            <h2 className={send === "enviado" ? style.green : style.red}>
              {message}
            </h2>
          </div>
        )}
      </form>
    </div>
  );
}
