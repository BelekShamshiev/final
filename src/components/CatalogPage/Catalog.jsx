import s from './Catalog.module.css'
import Image from 'next/image';


const Catalog = () => {
    return (
        <div className={s.catalog}>
            <div className={s.catalog__container}>
                <div className={s.catalog__body}>    
                    {/* <div className={s.catalog__content}> */}
                        <div className={s.catalog__link}>
                            <a href=""> Главная /</a>
                            <span> Каталог товаров</span>
                        </div>
                        <div className={s.catalog__title}>
                            <h1>Каталог</h1>
                        </div>
                        <div className={s.catalog__card_items}>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Смартфоны</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Планшеты</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Ноутбуки</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Наушники</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Смарт-часы</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Аксессуары</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Колонки</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Игоровые приставки</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Квадаракоптеры</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Медиаплееры</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Умный дом</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Экшен-камеры</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Фотоаппараты</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>ТВ</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={s.catalog__card}>
                                <div className={s.card__cirsle}></div>
                                <p>Sale</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                        </div>
                    {/* </div>        */}
                </div>
            </div>
        </div>
    );
};

export default Catalog;