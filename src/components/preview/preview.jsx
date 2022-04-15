import React from 'react';
import styles from './preview.module.css';
import PreviewCard from '../previewCard/previewCard';

const Preview = ({ cards }) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.ul}>
                {Object.keys(cards).map(key => (
                    <PreviewCard
                        key={key}
                        card={cards[key]}
                    />
                ))}
            </ul>
        </section>
    );
}

export default Preview;