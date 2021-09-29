import LogoWhatsapp from "../assets/img/logo-whatsapp 1.png";
import Image from "next/image";
import styles from "./SocmedButton.module.scss";

export default function SocmedButton() {
  return (
    <div className={`${styles.buttonContainer}`}>
      <a
        className={`${styles.linkWa}`}
        href={`https://wa.me/6281296480098?text=Hallo Admin saya mau konsultasi`}
      >
        {" "}
        <Image src={LogoWhatsapp} />
      </a>
    </div>
  );
}
