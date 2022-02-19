import React from 'react';
import styles from './editorCard.module.css';

const EditorCard = ({ card }) => {
    return (
        <table className={styles.table}>
            <tr>
                <td><input className={styles.input} type="text" placeholder="Name" />{card.name}</td>
                <td><input className={styles.input} type="text" placeholder="Company" /></td>
                <td>
                    <select className={styles.select}>
                        <option value="Dark">Dark</option>
                        <option value="Light">Light</option>
                        <option value="Colorful">Colorful</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><input className={styles.input} type="text" placeholder="Title" /></td>
                <td><input className={styles.input} type="text" placeholder="Email" /></td>
            </tr>
            <tr>
                <td><textarea className={styles.text} placeholder="Message" /></td>
            </tr>
            <tr>
                <td><button>No file</button></td><td><button>Add</button></td>
            </tr>
        </table>
    );
}

export default EditorCard;