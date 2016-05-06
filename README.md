# Dialog
A simple modal dialog controller to display messages in a more efficient manner.

# Dependencies
JQuery
Bootstrap

# Usage
  1 - Insert 'dialog.js' into the page

  2 - Create a dialog object like so:

    var dialog = new DialogController();

  3 - Use the dialog as you need:

    dialog.setDialogType(dialog.TYPE_INFO);
    dialog.setTitle("Muito obrigado");
    dialog.setMsg("Recebemos seu email e em breve entraremos em contato.");
    dialog.showDialog();    
