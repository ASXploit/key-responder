$(function() {
  console.log('[!] Key Responder Made with '+String.fromCodePoint(0x2764)+' by Xploit @Hackedarcadegames.com [!]');
  class Responder {
    constructor(responder, callback, toggler=false, active=false) {
      try {
        if(typeof responder === "number" ) {
          this.responseKey = responder;
        } else {
          throw '[Key Responder] parameter (1) is not of type \'number\'.';
        }
        
        if(typeof callback === "function" ) {
          this.callback = callback;
        } else {
          throw '[Key Responder] parameter (2) is not of type \'function\'.';
        }
        
        if(typeof toggler === "boolean" ) {
          this.toggler = toggler;
        } else {
          throw '[Key Responder] parameter (3) is not of type \'Boolean\'.';
        }
        
        if(typeof active === "boolean") {
          this.active = active;
        } else {
        throw '[Key Responder] parameter (4) is not of type \'Boolean\'.';
        }
          
          this.response = null;
          this.interval = 700;
          
      }
      catch(e) {
        console.error('Error : ' + e);
      }
      finally {
        var self=this;
        
        if(self.responseKey!=null && self.responseKey!='undefined') {
          if(self.callback!=null && self.callback!='undefined') {
            console.log('A Responder for key code '+ self.responseKey +' has been initiated');
            $(window).on('keyup', function(e) {
  if(self.toggler === true) {
  	     switch(e.keyCode || e.which) {
         case self.responseKey:
            if(self.active === false) {
                self.active = true;
                self.response = setInterval(self.callback, self.interval);
                } else {
                clearInterval(self.response);
                 //this.response = null;
                  self.active = false;
                }
                break;
         default:
                return;
              }
  } else {
  			 switch(e.keyCode || e.which) {
         case self.responseKey:
                self.callback();
                break;
         default:
                return;
              }
  }

            });
          }
        }
      }
    }
  }

let setHealth = new Responder(49, ()=>{
  console.log('Health=100!');
}, true);

let setMana = new Responder(50, ()=>{
  console.log('Mana=100!');
}, true);




});
