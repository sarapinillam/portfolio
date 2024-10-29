  // Array con las rutas de las imágenes que quieres mostrar
  const dulces = [
    'Archivos/confite-100.jpg',
    'Archivos/cocada-100.jpg',
    'Archivos/dulce-100.jpg',
    'Archivos/dulcecitos-100.jpg',
    'Archivos/melcocha-100.jpg',
    'Archivos/merengueazul-100.jpg',
    'Archivos/merengueverde-100.jpg',
    'Archivos/muneca-100.jpg',
    'Archivos/tdelreloj-100.jpg',
  ];

  const zenu = [
    'Archivos/pajaro ibis-50.jpg',
    'Archivos/Anfibio.jpg',
    'Archivos/ceramica.jpg',
    'Archivos/Flauta.jpg',
    'Archivos/hueso.jpg',
    'Archivos/Jaguar.jpg',
    'Archivos/nariguera.jpg',
    'Archivos/Oro.jpg',
  ]

  const ajiaco = [
    'Archivos/paso 1.png',
    'Archivos/paso 2.png',
    'Archivos/paso 3.png',
    'Archivos/paso 4.png',
    'Archivos/paso 5.png',
    'Archivos/Titulo.png',
  ]

  const animales = [
    'Archivos/barranqyero-100.jpg',
    'Archivos/chuguiro-100.jpg',
    'Archivos/ballena-100.jpg',
    'Archivos/fosil-100.jpg',
  
  ]
  let indiceActualDulces = 0;
  let indiceActualZenu = 0;
  let indiceActualAjiaco = 0;
  let indiceActualAnimales = 0;


  function cambiarImagen() {
    // Selecciona el elemento img dentro del div con id "imagen-dinamica"
    const img_dulce = document.getElementById('imagen-dinamica-dulces');
    const img_zenu = document.getElementById('imagen-dinamica-zenu');
    const img_ajiaco = document.getElementById('imagen-dinamica-ajiaco');
    const img_animales = document.getElementById('imagen-dinamica-animales');


    // Cambia la imagen
    img_dulce.src = dulces[indiceActualDulces];
    img_zenu.src = zenu[indiceActualZenu];
    img_ajiaco.src = ajiaco[indiceActualAjiaco];
    img_animales.src = animales[indiceActualAnimales];


    // Actualiza el índice
    indiceActualDulces = (indiceActualDulces + 1) % dulces.length;
    indiceActualZenu = (indiceActualZenu + 1) % zenu.length;
    indiceActualAjiaco = (indiceActualAjiaco+ 1) % ajiaco.length;
    indiceActualAnimales = (indiceActualAnimales+ 1) % animales.length;

  }

  // Cambia la imagen cada 2 segundos (2000 milisegundos)
  setInterval(cambiarImagen, 2000);

