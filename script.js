    const txtnome = document.querySelector('txtlogar');

    const txtsenha = document.querySelector('txtsenha');

    function acao() {

        let modal = document.querySelector('.modal');

        modal.style.display = 'block';

        let btn = document.querySelector('.btn');

        btn.style.display = 'none';

    }

    function Fechar() {

        let modal = document.querySelector('.modal');

        modal.style.display = 'none';

        let btn = document.querySelector('.btn');

        btn.style.display = 'block';

    }

    function Logar() {

        var done = 0;

        var usuario = document.getElementsByName('txtlogar')[0].value;
        usuario = usuario.toLowerCase();

        var senha = document.getElementsByName('txtsenha')[0].value;
        seha = senha.toLowerCase();


        if (usuario == "admin" && senha == "admin") {

            alert("Logado com Sucesso!");

            done = 1;
        }

        if (done == 0) { alert("Dados incorretos, tente novamente"); }

    }