# 🧠 Ejercicio – Asincronía y Peticiones con JavaScript

**❓ Enunciado:**  
*Obtener un post y luego sus comentarios.*  
**(Usar los siguientes links)**  
- https://jsonplaceholder.typicode.com/posts  
- https://jsonplaceholder.typicode.com/comments  

---

## 🎯 Objetivo

Aplicar los conceptos de **asincronía** y **peticiones a APIs** para obtener datos desde un servidor externo.  
En este caso se debe:

✅ Obtener un **post** desde el endpoint de JSONPlaceholder  
✅ Obtener los **comentarios asociados a ese post**  
✅ Mostrar ambos resultados en la **consola del navegador**

---

## 📌 Requisitos previos

Antes de realizar este ejercicio es necesario conocer:

- Cómo usar **fetch()**
- Qué significan **async** y **await**
- Cómo abrir la **consola del navegador**


---

## 💻 Código utilizado


  async function obtPosCom() {
    try {
     
      const resPos = await fetch('https://jsonplaceholder.typicode.com/posts/4');
      const datosPost = await resPos.json();
      console.log('Post:', datosPost);

   
      const resCom = await fetch('https://jsonplaceholder.typicode.com/comments?postId=4');
      const datosCom = await resCom.json();
      console.log('Comentarios:', datosCom);

    } catch (error) {
      console.error('Ocurrio un error:', error.mensaje);
    }
  }

  
  obtPosCom();


