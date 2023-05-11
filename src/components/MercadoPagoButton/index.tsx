import { useEffect, useState } from "react";
import { IProduct } from "@/mock/product";
import { Loader } from "../Loader";
import axios from "axios";

import styles from "./styles.module.scss";

interface MercadoPagoButtonProps {
  product: IProduct;
}

export const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);

      try {
        const { data: preference } = await axios.post("/api/checkout", {
          product,
        });

        setUrl(preference.url);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    generateLink();
  }, [product]);

  return (
    <div>
      {loading ? (
        <button className={styles.button} disabled>
          <Loader />
        </button>
      ) : (
        <a className={styles.button} href={url!}>
          Comprar ahora
        </a>
      )}
    </div>
  );
};
