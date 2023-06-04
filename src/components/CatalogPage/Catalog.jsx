import Link from "next/link";
import s from "./Catalog.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const Catalog = () => {
  return (
    <div className={s.catalog}>
      <div className={s.catalog__container}>
        <div className={s.catalog__body}>
          <div className={s.catalog__link}></div>
          <div className={s.catalog__title}>
            <h1>Каталог</h1>
          </div>
          <div className={s.catalog__card_items}>
            <motion.div className={s.catalog__card}
            
            layout
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.5 },
              duration: 0.7,
            }}
            initial="hidden"
            // transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            >
              <div className={s.card__cirsle}></div>
              <p>Смартфоны</p>
              <div>
                <Link href="/mobil">
                  <Image
                    src="/violet.svg"
                    alt="Smartfon"
                    width={123}
                    height={135}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div className={s.catalog__card}
            
            layout
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.5 },
              duration: 0.7,
            }}
            initial="hidden"
            // transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            >
              <div className={s.card__cirsle}></div>
              <p>Планшеты</p>
              <div>
                <Link href="/ipad">
                  <Image
                    src="/ipad.svg"
                    alt="Smartfon"
                    width={123}
                    height={135}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div className={s.catalog__card}
                  layout
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 0.5 },
                    duration: 0.7,
                  }}
                  initial="hidden"
                  // transition={{ duration: 0.6 }}
                  whileInView="visible"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
            
            >
              <div className={s.card__cirsle}></div>
              <p>Ноутбуки</p>
              <div>
                <Link href="/laptop">
                  <Image
                    src="/mackbook.svg"
                    alt="Smartfon"
                    width={175}
                    height={105}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div className={s.catalog__card}
                  layout
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 0.5 },
                    duration: 0.7,
                  }}
                  initial="hidden"
                  // transition={{ duration: 0.6 }}
                  whileInView="visible"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
            
            >
              <div className={s.card__cirsle}></div>
              <p>TV</p>
              <div>
                <Link href="/television">
                  <Image
                    src="/qled.png"
                    alt="Smartfon"
                    width={173}
                    height={165}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div className={s.catalog__card}
                  layout
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 0.5 },
                    duration: 0.7,
                  }}
                  initial="hidden"
                  // transition={{ duration: 0.6 }}
                  whileInView="visible"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
            
            >
              <div className={s.card__cirsle}></div>
              <p>Смарт-часы</p>
              <div>
                <Link href="/applewatch">
                  <Image
                    src="/watch.png"
                    alt="Smartfon"
                    width={163}
                    height={155}
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div className={s.catalog__card}
                  layout
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 0.5 },
                    duration: 0.7,
                  }}
                  initial="hidden"
                  // transition={{ duration: 0.6 }}
                  whileInView="visible"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
            
            >
              <div className={s.card__cirsle}></div>
              <p>Наушники</p>
              <div>
                <Link href="/pods">
                  <Image
                    src="/airpods.svg"
                    alt="Smartfon"
                    width={123}
                    height={135}
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
