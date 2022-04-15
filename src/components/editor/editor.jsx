import React from 'react';
import styles from './editor.module.css';
import EditorCard from '../editorCard/editorCard';
import AddForm from '../addForm/addForm';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {Object.keys(cards).map(key => (
                <EditorCard
                    key={key}
                    card={cards[key]}
                    updateCard={updateCard}
                    deleteCard={deleteCard}
                />
            ))}
            <AddForm onAdd={addCard} />
        </section>
    );
}

export default Editor;