$(document).ready(function() {
    $('form').validate({  //aplica a validação, usando o plugin validate, plugin trabalha com a propriedade "name"
        rules: { //se os campos forem verdadeiros, ou seja, preenchidos
            nome: {
                required: true
            },
            email: { //precisa de uma validação personalizada por isso adiciona o email:true
                required: true,
                email:true,
            },
            mensagem: {
                required: true
            }
        },
        
        submitHandler: function(form){ //intercepta o submit de envio do form
            let nome  = $('#nome').val()
            let email = $('#email').val()
            let mensagem = $('#mensagem').val()
            let tel = $('#telefone').val()

            $('#nome').val('');
            $('#email').val('');
            $('#mensagem').val('');
            $('#telefone').val('');
            console.log(form)
        },

        invalidHandler: function(evento, validador) //intercepta o clique do enviar caso formulário esteja inválido
        {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }

        })

        $('#telefone').mask(`(00) 00000-0000`)
})
    