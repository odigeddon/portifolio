    // Referência para o elemento de input que funciona como visor
        var visor = document.getElementById('visor');

        // Função para adicionar números e operadores ao visor
        function adicionarValor(valor) {
            visor.value += valor;
        }

        // Função para limpar completamente o visor
        function limparVisor() {
            visor.value = '';
        }

        // Função para avaliar a expressão matemática e mostrar o resultado
        function calcularResultado() {
            try {
                // A função eval processa a string no visor como código matemático
                // Como o input é readonly e só aceita os valores dos botões, é seguro usar neste contexto simples.
                if (visor.value !== '') {
                    var resultado = eval(visor.value);
                    
                    // Tratamento caso o resultado seja infinito (ex: divisão por zero)
                    if (!isFinite(resultado)) {
                        visor.value = "Erro";
                    } else {
                        visor.value = resultado;
                    }
                }
            } catch (erro) {
                // Captura erros de sintaxe (ex: "++", ou terminar com um operador "*")
                visor.value = "Erro";
            }
        }