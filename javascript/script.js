

  const fecha = {
    btn: 'flechaVerMasContainer',
    cardInfo: 'cardInfoVolteadaDia',
    
    cardFlip: 'cardFlipDia',
    title: 'Día: Sábado 16 de diciembre',
    description: 'Hora: 3pm',
    flechaVerMas: 'flechaVerMas',
    
    cardInformacionContenedor: 'cardInformacionContenedor',
    
    
  };
  
  const btn = document.getElementById(fecha.btn);
  const cardInfoDia = document.getElementById(fecha.cardInfo);
  
  const cardFlipDia = document.getElementById(fecha.cardFlip);
  const flechaVerMasIcono = document.getElementById(fecha.flechaVerMas);
  const cardInformacionContenedor = document.getElementById(fecha.cardInformacionContenedor)
  
  
  
  btn.addEventListener('click', () => flipCard(cardInfoDia, cardFlipDia, fecha.title, fecha.description, flechaVerMasIcono,cardInformacionContenedor));


  const lugar = {
    btn: 'flechaVerMasContainerLugar',
    cardInfo: 'cardInfoVolteadaLugar',
    
    cardFlip: 'cardFlipLugar',
    title: 'Galaxia: Parque Bustamante ',
    description: 'Ingreso: Av. del Parque cdra. 3 o Av. Aramburú cdra. 7 - San Isidro',
    flechaVerMas: 'flechaVerMasLugar',
    
    cardInformacionContenedor: 'cardInformacionContenedorLugar',
    
    
  };
  
  const btnLugar = document.getElementById(lugar.btn);
  const cardInfoLugar = document.getElementById(lugar.cardInfo);
  
  const cardFlipLugar = document.getElementById(lugar.cardFlip);
  const flechaVerMasIconoLugar = document.getElementById(lugar.flechaVerMas);
  const cardInformacionContenedorLugar = document.getElementById(lugar.cardInformacionContenedor)
  
  
  
  btnLugar.addEventListener('click', () => flipCard(cardInfoLugar, cardFlipLugar, lugar.title, lugar.description, flechaVerMasIconoLugar,cardInformacionContenedorLugar));


  function flipCard(cardInfo, cardFlip, title, description, iconoFlechaVerMas,cardInformacionContenedor) {
    
console.log(description)
    cardInfo.innerHTML = `
    <div class="card-info-volteada">
    <p>${title} </p><p>${description} </p>
    </div>
    
    `
    ;
    
    cardInformacionContenedor.classList.toggle('oculto');
  
    
    cardInfo.classList.toggle('oculto');
    
    cardFlip.classList.add('animate__animated', 'animate__flipInY');
  
    iconoFlechaVerMas.classList.toggle('fa-circle-right');
    iconoFlechaVerMas.classList.toggle('fa-circle-left');
  
    setTimeout(() => {
      cardFlip.classList.remove('animate__animated', 'animate__flipInY');
    }, 1000);
}