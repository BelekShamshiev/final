import { catalog } from '@/constans/Catalog';
import s from './Catalog.module.css'
import Image from 'next/image';
import CatalogCard from './CatalogCard/CatalogCard';


const Catalog = () => {
    return (
        <div className={s.catalog}>
            <div className={s.catalog__container}>
                <div className={s.catalog__body}>    
                        <div className={s.catalog__link}>
                            <a href=""> Главная /</a>
                            <span> Каталог товаров</span>
                        </div>
                        <div className={s.catalog__title}>
                            <h1>Каталог</h1>
                        </div>
                        <div className={s.catalog_tabl}>
                     {catalog.map ((item) =>{
                        return <CatalogCard id={item.id} img={item.img} title={item.title}/>
                     })}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;