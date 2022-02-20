import React from 'react';
import styles from './editor.module.css';
import EditorCard from '../editorCard/editorCard';

const Editor = ({ cards }) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {cards.map(card => (
                <EditorCard
                    key={card.id}
                    card={card}
                />
            ))}
        </section>
    );
}

export default Editor;