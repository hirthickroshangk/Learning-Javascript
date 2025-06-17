console.log(document.querySelector('.js-button').classList.contains
      ('js-button'));
      console.log(document.querySelector('.js-button').classList.contains(
        'button'
      ))
      console.log(document.querySelector('.js-button').classList)

      function changeButtonColor(selector) {
        buttonElement = document.querySelector(selector);
        if (!buttonElement.classList.contains('topic-button-clicked')) {
        removePrevious();
        buttonElement.classList.add('topic-button-clicked');
          
        } else {
          buttonElement.classList.remove('topic-button-clicked');
        }
        
      /*
        if (selector != '.js-gaming-button') {
          document.querySelector('.js-gaming-button').classList
          .remove('topic-button-clicked');
        } 
        
        if (selector != '.js-music-button') {
          document.querySelector('.js-music-button').classList
          .remove('topic-button-clicked');
        } 
        
        if (selector != '.js-tech-button') {
          document.querySelector('.js-tech-button').classList
          .remove('topic-button-clicked'); 
        }
       */
      }
      function removePrevious() {
        const previousButton = document.querySelector('.topic-button-clicked');
        if (previousButton) {
          previousButton.classList.remove('topic-button-clicked');
        }
      }
        