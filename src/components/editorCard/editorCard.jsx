import React from 'react';
import styles from './editorCard.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';

const EditorCard = ({ card }) => {
    const { name, company, title, email, message, theme, fileName, fileURL } = card;

    const onSubmit = () => {

    };

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="company" value={company} />
            <select className={styles.select} name="theme" value={theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} />
            <input className={styles.input} type="text" name="email" value={email} />
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput className={styles.fileInput} />
            </div>
            <Button className={styles.button} name="Delete" onClick={onSubmit} />
        </form>
    );
}

export default EditorCard;