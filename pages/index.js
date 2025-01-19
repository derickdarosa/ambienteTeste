function Home() {
    return <h1>Teste</h1>
}

export default Home;

const link = document.getElementById('mostrarTexto');
const texto = document.getElementById('textoOculto');

link.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    if (texto.style.display === 'none') {
        texto.style.display = 'block'; // Mostra o texto
        link.textContent = 'Clique aqui para ocultar o texto';
    } else {
        texto.style.display = 'none'; // Esconde o texto
        link.textContent = 'Clique aqui para mostrar o texto';
    }
});