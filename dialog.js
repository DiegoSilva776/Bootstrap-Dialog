/**
 * Insert a global modal dialog window into the DOM.
 * 
 * License: MIT
 * Created by: Diego M. Silva
 */
 
// DEPENDENCIES 
/*
    global $
*/ 
 
var DialogController = function(){
    
    // ATTRIBUTES
    this.TYPE_INFO = "DIALOG_TYPE_INFO";
    this.TYPE_CONFIRMATION = "DIALOG_TYPE_CONFIRMATION";
    
    var CLASS_SHOW = "show";
    var CLASS_HIDE = "hide";
    var CLASS_HIDDEN = "hidden";
    var CLASS_MODAL_OPTIONS = "modal-footer";
    
    var SLCT_OBJ_CONTAINER = "body";
    var SLCT_CLASS_HIDDEN = "." + CLASS_HIDDEN;
    var SLCT_CLASS_MODAL_OPTIONS = "." + CLASS_MODAL_OPTIONS;
    
    // dialog UI element
    var MODAL_TARGET = "responseModal";
    var MODAL_TITLE = "responseModalLabel";
    var MODAL_MSG = "responseModalMsg";
    var MODAL_BTN_CONFIRM = "btnModalConfirm";
    var MODAL_BTN_CANCEL = "btnModalCancel";
    var MODAL_DEFAULT_TITLE = "Dialog Title";
    var MODAL_DEFAULT_MSG = "Dialog Message";
    var MODAL_DEFAULT_BTN_CONFIRM_LABEL = "Confirm";
    var MODAL_DEFAULT_BTN_CANCEL_LABEL = "Cancel";
    
    var dialog = {
        modal      : "#" + MODAL_TARGET,
        title      : "#" + MODAL_TITLE,
        msg        : "#" + MODAL_MSG,
        btnConfirm : "#" + MODAL_BTN_CONFIRM,
        btnCancel  : "#" + MODAL_BTN_CANCEL,
        type       : this.TYPE_INFO,
        confirmed  : false
    };
    

    /** 
     * Insert the dialog into the DOM and make accessible the functions of an
     * instance of this object.
     */
    function insertDialogIntoPage(){
        var DIALOG = '<!-- Response modal -->'
        +'<div id="'+MODAL_TARGET+'" class="modal fade response-modal-container" tabindex="-1" role="dialog" aria-labelledby="'+MODAL_TITLE+'">'
            +'<div class="modal-dialog response-modal" role="document">'
                +'<div class="modal-content">'
                    +'<div class="modal-header">'
                        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                            +'<span aria-hidden="true">&times;</span>'
                        +'</button>'
                        +'<h4 id="'+MODAL_TITLE+'" class="modal-title">'+MODAL_DEFAULT_TITLE+'</h4>'
                    +'</div>'
                    +'<div class="modal-body">'
                        +'<p id="'+MODAL_MSG+'">'+MODAL_DEFAULT_MSG+'</p>'
                    +'</div>'
                    +'<div class="modal-footer">'
                        +'<button id="'+MODAL_BTN_CANCEL+'" type="button" class="btn btn-default" data-dismiss="modal">'+MODAL_DEFAULT_BTN_CANCEL_LABEL+'</button>'
                        +'<button id="'+MODAL_BTN_CONFIRM+'" type="button" class="btn btn-default" data-dismiss="modal">'+MODAL_DEFAULT_BTN_CONFIRM_LABEL+'</button>'
                    +'</div>'
                +'</div>'
            +'</div>'
        +'</div>'
        +'<!-- End of response modal -->';
        
        // Insert dialog into the page
        $(SLCT_OBJ_CONTAINER).append(DIALOG);
    }

    /**
     * @public
     * 
     * Set dialog type
     */
    this.setDialogType = function(type){
        switch(type){
            case this.TYPE_INFO:
                setDialogToDisplayInfo();
                break;
            
            case this.TYPE_CONFIRMATION:
                setDialogToConfirmInfo();
                break;
                
            default:
                setDialogToDisplayInfo();
                break;
        }
    }
    
    /**
     * Hide the fields that are not necessary for simple informational dialog,
     * button 'Cancel' and 'Confirm'
     */
    function setDialogToDisplayInfo(){
        dialog.type = this.TYPE_INFO;
        
        var dialogFooter = $(dialog.modal).find(SLCT_CLASS_MODAL_OPTIONS).addClass(CLASS_HIDDEN);
        if(!$(dialogFooter).hasClass(SLCT_CLASS_HIDDEN)){
            $(dialogFooter).addClass(CLASS_HIDDEN);
        }
    }
    
    /**
     * Show the fields that are necessary for a confirmation dialog button 
     * 'Cancel' and 'Confirm'.
     */
    function setDialogToConfirmInfo(){
        dialog.type = this.TYPE_CONFIRMATION;
        
        var dialogFooter = $(dialog.modal).find(SLCT_CLASS_MODAL_OPTIONS).addClass(CLASS_HIDDEN);
        window.console.debug(dialogFooter);
        if($(dialogFooter).hasClass(SLCT_CLASS_HIDDEN)){
            $(dialogFooter).removeClass(CLASS_HIDDEN);
        }
    }
    
    /**
     * Show dialog
     */
    this.showDialog = function(){
        var modal = $(SLCT_OBJ_CONTAINER).find(dialog.modal).modal(CLASS_SHOW);
    }
     
    /**
     * Hide dialog
     */
    this.hideDialog = function(){
        $(SLCT_OBJ_CONTAINER).find(dialog.modal).modal(CLASS_HIDE);
    }
    
    // Setters
    this.setTitle = function(title){
        $(dialog.title).text(title);
    }
    this.setMsg = function(msg){
        $(dialog.msg).text(msg);
    }
    
    // Getters
    this.getTitle = function(){
        return $(dialog.title).text();
    }
    this.getMsg = function(){
        return $(dialog.msg).text();
    }
    
    // INITIALIZER
    function init(){
        insertDialogIntoPage();
    }
    init();
}