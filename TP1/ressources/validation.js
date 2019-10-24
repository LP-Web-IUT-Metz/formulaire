$.validator.addMethod(
   "regex",
    function(value, element, regexp) {
        if (regexp.constructor != RegExp)
           regexp = new RegExp(regexp);
        else if (regexp.global)
           regexp.lastIndex = 0;
           return this.optional(element) || regexp.test(value);
    },"Invalid format."
 );
 $.validator.addMethod(
    "secu",
    function(value, element){
      var dep = $("input[name='dep']").val();
      var date = $("input[name='date']").val();
      var an = date.substr(2,2);
      var mois = date.substr(5,2);
      var civilite = $("#civilite").val();
      
      return value.substr(0,1) == civilite && 
      value.substr(1,2) == an && 
      value.substr(3,2) == mois && 
      value.substr(5,2) == dep;

    },"Invalid security number."
 )

$(document).ready(function(){
    $("#monFormulaire").validate({
        rules: {
            "prenom":{
              "required": true,
              "maxlength": 20
            },
            "nom": {
              "required": true,
              "maxlength": 20
            },
            "secu": {
               "required": true,
               "secu": true,
            },
            "email": {
               "required": true,
               "email": true,
            },
            "tel": {
              "required": true,
            },
      
            "adresse": {
               "required": true,
            },
            "iban": {
               "required": true,
               "regex": /^[A-Z]{2}[0-9]{2}[0-9]{4}[0-9]{3}$/,
            },
            "dep": {
               "required": true,
               "minlength": 2,
               "maxlength": 2,
            },
            "date": {
               "required": true,
            },
         },
        submitHandler: function(form){
            form.submit();
        }
    });
});
