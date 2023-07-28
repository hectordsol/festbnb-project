import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <Link href="/" className={style.footer__logo}>
        <h3>festbnb</h3>
      </Link>
      <Link href="./terms" className={style.footer__terms}>
        <h3>Términos y Condiciones</h3>
      </Link>
      <div className={style.footer__links}>
        <ul className="flex items-center">
          <li className="mr-2">
            <a href="#">Contacto:</a>
          </li>
          <li className="ml-4">
            <span
              className={`${style.footer__contactIcon} inline-block transform transition-transform hover:scale-125`}
            >
              <Link href="/form">
                <FaEnvelope className={`text-xxl ${style.email}`} />
              </Link>
            </span>
          </li>

          <li className="ml-4">
            <span
              className={`${style.footer__contactIcon} inline-block transform transition-transform hover:scale-125`}
            >
              <Link href="https://www.twitter.com/FestBnB" target="_blank">
                <FaTwitter className={`text-xxl ${style.linkedin}`} />
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
