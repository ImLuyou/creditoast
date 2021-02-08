class Creditoast {

    constructor(debug = false) {
        if (debug) {
            console.warn('[Creditoast has been loaded from local]');
        }

        this.toastTimeout = null;
        this.tmpToast = null;
    }

    toast(message = '', options = {
        timeoutms: 4000, 
        color: 'secondary'
    }) {
        let main = this;
        let className = '';
        let timeoutms = 4000;

        if (!!options.color) {
            switch(options.color) {
                case 'success':
                    className = 'alert-success';
                break;
                
                case 'danger':
                    className = 'alert-danger';
                break;

                default: 
                    className = 'alert-secondary';
                break;
            }
        }

        if (!!options.timeoutms) {
            timeoutms = options.timeoutms;
        }
        
        if (!(!!this.tmpToast)) {
            this.tmpToast = document.createElement('div');
            this.tmpToast.id = 'main-toast-id';
            this.tmpToast.classList.add(className);
            this.tmpToast.classList.add('alert');
            document.body.appendChild(this.tmpToast); 
        } else {
          this.tmpToast.style.display = 'block';
        }
        
        this.tmpToast.innerText = message;

        try {
            if (this.toastTimeout) {
                clearTimeout(this.toastTimeout);
            }

            this.toastTimeout = setTimeout(function() {
                main.tmpToast.style.display = "none";
            }, timeoutms);
          
          this.toastTimeout = null;
        } catch(e) {
            console.log('[UserDashboard-1/userDasboard.js] toast', e)
        }

    }
}
