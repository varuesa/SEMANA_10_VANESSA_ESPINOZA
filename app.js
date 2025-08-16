
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

