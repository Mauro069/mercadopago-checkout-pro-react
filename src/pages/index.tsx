import { MercadoPagoButton } from "@/components/MercadoPagoButton";
import { formatNumber } from "@/utils/formatNumber";
import { Product } from "@/mock/product";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/Home.module.scss";

interface NotificationType {
  isOpen: boolean;
  type: "approved" | "failure" | null;
  content: string;
}

export default function Home() {
  const [notification, setNotification] = useState<NotificationType>({
    isOpen: false,
    type: null,
    content: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");

    if (status === "approved") {
      setNotification({
        content: "Pago aprobado!",
        isOpen: true,
        type: "approved",
      });
    } else if (status === "failure") {
      setNotification({
        content: "Pago fallido!",
        isOpen: true,
        type: "failure",
      });
    }

    setTimeout(() => {
      setNotification({
        isOpen: false,
        type: null,
        content: "",
      });
    }, 5000);
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.productContainer}>
        <Image
          src={Product.img}
          alt={Product.title}
          width={360}
          height={450}
          priority
        />

        <div className={styles.data}>
          <div className={styles.top}>
            <h2>{Product.title}</h2>
            <h3>{formatNumber(Product.price)}</h3>
          </div>

          <div className={styles.center}>
            <span>Lo que tenes que saber de este producto:</span>

            <ul>
              {Product.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <MercadoPagoButton product={Product} />
          </div>
        </div>
      </div>

      {notification.isOpen && (
        <div className={styles.notification}>
          <div
            className={styles.iconContainer}
            style={{
              backgroundColor:
                notification.type === "approved" ? "#00cc99" : "#ee4646",
            }}
          >
            <Image
              src={`/assets/${notification.type}.svg`}
              alt={notification.type!}
              width={25}
              height={25}
            />
          </div>

          <p>{notification.content}</p>
        </div>
      )}
    </main>
  );
}
