(function() {

  const loadUserData = function() {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    if (!userData) {
    
      window.location.href = 'index.html';
      return false;
    }
    
  
    document.querySelector('#typed-strings span').textContent = userData.greeting;
    
 
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,        
      startDelay: 1500,     
      showCursor: true,     
      cursorChar: '|',      
      onComplete: (self) => {
       
        document.querySelector('.greeting-signature').textContent = userData.from;
        
        
        setTimeout(showNextButton, 5000);
      }
    });
    

    const userPhoto = document.getElementById('user-photo');
    userPhoto.src = userData.photo;
    
    return true;
  };
  
 
  const showNextButton = function() {
    const nextButton = document.getElementById('next-button');
    nextButton.classList.remove('hidden');
    nextButton.classList.add('show-button');
    
  
    nextButton.addEventListener('click', () => {
    
      window.location.href = 'dance.html';
    });
  };
  

  const createPetal = function() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    

    petal.style.left = Math.random() * window.innerWidth + 'px';
    
   
    const duration = 5 + Math.random() * 10;
    petal.style.animationDuration = duration + 's';
    
    
    petal.style.fontSize = (30 + Math.random() * 15) + 'px';
    
  
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    
   
    const flowers = ['🌸', '🌷', '🌹', '💮', '🌺', '🌻', '🥀', '🌼', '🌿'];
    petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    
    
    petal.style.animationDelay = Math.random() * 5 + 's';
    
    return petal;
  };
  
 
  const createPetalsAnimation = function() {
    const petalsContainer = document.querySelector('.petals-container');
  
    for (let i = 0; i < 70; i++) {
      const petal = createPetal();
      petalsContainer.appendChild(petal);
    }
  };
  
  
  const init = function() {
   
    if (!loadUserData()) return;
    
   
    createPetalsAnimation();
  };
  
  
  window.addEventListener('DOMContentLoaded', init);
})(); 