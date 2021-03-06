import React, { useRef } from 'react';
import styles from './editorCard.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';

const EditorCard = ({ card, updateCard, deleteCard }) => {
    const { name, company, title, email, message, theme, fileName, fileURL } = card;

    const onChange = (e) => {
        if (e.currentTarget == null) {
            return;
        }
        e.preventDefault();
        updateCard({ ...card, [e.currentTarget.name]: e.currentTarget.value });
    }

    const onSubmit = () => {
        deleteCard(card);
    };

    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={company}
                onChange={onChange} />
            <select
                className={styles.select}
                name="theme"
                value={theme}
                onChange={onChange}
            >
                <option value="dark">dark</option>
                <option value="light">light</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                className={styles.input}
                type="text"
                name="title"
                value={title}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                value={email}
                onChange={onChange}
            />
            <textarea
                className={styles.textarea}
                name="message"
                value={message}
                onChange={onChange}
            ></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput className={styles.fileInput} />
            </div>
            <Button className={styles.button} name="Delete" onClick={onSubmit} />
        </form>
    );
}

export default EditorCard;