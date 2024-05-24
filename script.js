    // Segmentação do numero de telefone 

    function formatarTelefone(input) {
        var telefone = input.value.replace(/\D/g, ''); 
        telefone = telefone.substring(0, 11); 
    
        if (telefone.length > 0) {
            telefone = '(' + telefone;
        }
        if (telefone.length > 3) {
            telefone = telefone.slice(0, 3) + ') ' + telefone.slice(3);
        }
        if (telefone.length > 10) {
            telefone = telefone.slice(0, 10) + '-' + telefone.slice(10);
        }
        input.value = telefone;
    }
        // Proximo script
    