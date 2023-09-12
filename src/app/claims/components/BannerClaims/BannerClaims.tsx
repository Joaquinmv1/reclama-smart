import style from "./BannerClaims.module.css";
export default function BannerClaims() {
  return (
    <div className={style.bannerClaimContainer}>
      <h1>Libro de reclamaciones</h1>
      <p>
        Lamentamos que no estés satisfecho. Introduzca aquí tu solicitud. Si
        facilitas un correo electrónico, te enviaremos una copia de tu
        solicitud.
      </p>
    </div>
  );
}
