async function obtPosCom() {
  try {

    const resPos = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datosPost = await resPos.json();


    for (const post of datosPost) {
      console.log(`Post:${post.id}:`, post);

      // id = postId
      const resCom = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
      const datosCom = await resCom.json();

      console.log(`Comentarios del post ${post.id}:`, datosCom);
    }
  } catch (error) {
    console.error('Ocurrio un error:', error.mensaje);
  }
}

obtPosCom();



