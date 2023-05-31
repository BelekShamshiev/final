import { useState } from 'react';
import styles from './Admin.module.css';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      photo,
      price,
      name,
    };

    // Add the new product to the list of products
    setProducts([...products, newProduct]);

    // Clear the fields after submission
    setTitle('');
    setPhoto('');
    setPrice('');
    setName('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Админская панель - Добавление товара</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>
            Заголовок:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
          </label>
        </div>
        <div>
          <label>
            Фото:
            <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} className={styles.input} />
          </label>
        </div>
        <div>
          <label>
            Цена:
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className={styles.input} />
          </label>
        </div>
        <div>
          <label>
            Имя:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
          </label>
        </div>
        <button type="submit" className={styles.button}>Добавить товар</button>
      </form>

      <h2 className={`${styles.heading} ${styles.login_boss}`}>Добавленные товары:</h2>
      <ul className={styles.login}>
        {products.map((product, index) => (
          <li key={index} className={`${styles.product} ${styles.login_title}`}>
            <h3>{product.title}</h3>
            <p>Фото: {product.photo}</p>
            <p>Цена: {product.price}</p>
            <p>Имя: {product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProduct;
