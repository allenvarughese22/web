$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
            required: true,
            minlength:4
            },

            sname:{
            required: true,
             minlength:4
             },

            email:{
                required: true,
                email:true
                 },

            newpassword:{
                minlength:6
            },

            day:{
                required: true,
                 },

            Gender:{
                    required: true,
                     }

            },
            messages:{
                fname:{
                    required:"enter the name",
                    minlength:"Enter atleast 4 letters. Thank you"
                }
            }
    })

})