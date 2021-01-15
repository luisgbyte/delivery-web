import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FiPlusSquare, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Content, HeadContainer, CategoryContainer } from './styles';

import ModalAddCategory from '~/components/ModalAddCategory';
import ModalEditCategory from '~/components/ModalEditCategory';

import {
    categoryRequest,
    categoryDelete,
} from '~/store/modules/category/actions';

import { toggleModalEdit, toggleModalAdd } from '~/store/modules/modal/actions';

function Category() {
    const [editingProduct, setEditingProduct] = useState({});

    const { addModalOpen, editModalOpen } = useSelector((state) => state.modal);
    const { categories } = useSelector((state) => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!categories) {
            dispatch(categoryRequest());
        }
    }, []);

    function handleEdit(category) {
        dispatch(toggleModalEdit());
        console.tron.log('handleSubmit', editingProduct);
        setEditingProduct(category);
    }

    return (
        <>
            <ModalAddCategory isOpen={addModalOpen} />
            <ModalEditCategory
                isOpen={editModalOpen}
                editingProduct={editingProduct}
            />

            <Content>
                <HeadContainer>
                    <h2>Categorias</h2>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(toggleModalAdd());
                        }}
                    >
                        <div className="text">Nova Categoria</div>
                        <div className="icon">
                            <FiPlusSquare size={24} />
                        </div>
                    </button>
                </HeadContainer>
                <CategoryContainer>
                    <table>
                        <thead>
                            <tr />
                        </thead>
                        <tbody>
                            {categories &&
                                categories.map((category) => (
                                    <tr>
                                        <td>{category.name}</td>
                                        <td>
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        handleEdit(category);
                                                    }}
                                                >
                                                    <FiEdit size={18} />
                                                </button>
                                                <button type="button">
                                                    <FiTrash2
                                                        size={18}
                                                        onClick={() => {
                                                            dispatch(
                                                                categoryDelete(
                                                                    category.id
                                                                )
                                                            );
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </CategoryContainer>
            </Content>
        </>
    );
}

export default Category;