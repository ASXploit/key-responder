console.log('[!] Key Responder Made with '+String.fromCodePoint(0x2764)+' by Xploit @Hackedarcadegames.com [!]');
  class Responder {
    constructor(responder, callback/*, toggle*/) {
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
        /*if(typeof toggle === "boolean" ) {
          this.isToggle = toggle;
        } else {
          throw '[Key Responder] parameter (3) is not of type \'Boolean\'.';
        }*/
      }
      catch(e) {
        console.log('Error : ' + e);
      }
      finally {
        var self=this;
        if(this.responseKey!=null && this.responseKey!='undefined') {
          if(this.callback!=null && this.callback!='undefined') {
            console.log('A Responder for key code '+ this.responseKey +' has been initiated');
            $(window).on('keyup', function(e) {
              switch(e.keyCode || e.which) {
            case self.responseKey:
                self.callback();
                break;
            default:
                return;
}
            });
          }
        }
      }
    }
  }

/* let setHealth = new Responder(49, ()=>{
  console.log('Health=100!');
}, true);

let setMana = new Responder(50, ()=>{
  console.log('Mana=100!');
}, true);
*/
