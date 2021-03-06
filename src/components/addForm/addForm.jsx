import React, { useRef } from 'react';
import styles from './addForm.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';

const AddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const card = {
      id: Date.now(), // uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: ''
    }
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input} type="text" name="name" placeholder="Name" />
      <input
        ref={companyRef}
        className={styles.input} type="text" name="company" placeholder="Company" />
      <select
        ref={themeRef}
        className={styles.select} name="theme" placeholder="theme">
        <option placeholder="dark">dark</option>
        <option placeholder="light">light</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input} type="text" name="title" placeholder="Title" />
      <input
        ref={emailRef}
        className={styles.input} type="text" name="email" placeholder="Email" />
      <textarea
        ref={messageRef}
        className={styles.textarea} name="message" placeholder="Message" ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput className={styles.fileInput} />
      </div>
      <Button
        className={styles.button}
        name="Add"
        onClick={onSubmit}
      />
    </form>
  );
}

export default AddForm;