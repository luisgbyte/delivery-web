import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container } from './styles';

function Product({ product }) {
    const [isAvailable, setIsAvailable] = useState(true);

    async function toggleAvailable() {
        // TODO UPDATE STATUS (available)
        setIsAvailable(false);
    }

    function setEditingFood() {
        // TODO - SET THE ID OF THE CURRENT ITEM TO THE EDITING FOOD AND OPEN MODAL
    }

    function handleDelete() {}

    return (
        <Container available={isAvailable}>
            <header>
                <img src={product.file} alt={product.name} />
            </header>
            <section className="body">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">
                    R$ <b>{product.price}</b>
                </p>
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={() => setEditingFood()}
                    >
                        <FiEdit3 size={20} />
                    </button>

                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleDelete(product.id)}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>

                <div className="availability-container">
                    <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

                    <label
                        htmlFor={`available-switch-${product.id}`}
                        className="switch"
                    >
                        <input
                            id={`available-switch-${product.id}`}
                            type="checkbox"
                            checked={isAvailable}
                            onChange={toggleAvailable}
                        />
                        <span className="slider" />
                    </label>
                </div>
            </section>
        </Container>
    );
}

export default Product;
