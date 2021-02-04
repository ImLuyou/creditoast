class Creditoast {

    constructor(debug = false) {
        if (debug) {
            console.warn('[Creditoast has been loaded]');
        }

        this.toastTimeout = null;
        this.tmpToast = null;
    }

    toast(message = '', timeoutms = 4000) {
        let main = this;
        if (!(!!this.tmpToast)) {
            this.tmpToast = document.createElement('div');
            this.tmpToast.id = 'main-toast-id';
            this.tmpToast.classList.add("alert-success");
            this.tmpToast.classList.add('alert');
            document.body.appendChild(this.tmpToast); 
        }
        
        this.tmpToast.innerText = message;
    
        try {
            if (this.toastTimeout) {
                clearTimeout(this.toastTimeout);
            }
    
            this.toastTimeout = setTimeout(function() {
                main.tmpToast.style.display = "none";
            }, timeoutms);
        } catch(e) {
            console.log('[UserDashboard-1/userDasboard.js] toast', e)
        }
    
      }
}