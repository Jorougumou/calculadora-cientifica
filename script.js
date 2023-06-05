
var contador = 0
var calculo = ''
var resquicio_verdadeirob = 'valor inicial'
var estado_operacao = false




function inserirn(num1)
{
   
    calculo = calculo + num1 // backend


    let resquicio = document.getElementById('resultado').innerHTML // frontend


    document.getElementById('resultado').innerHTML = resquicio + num1

    if (estado_operacao == true)
    {estado_operacao = false
    }

}


function inserirpi(num1)


    {calculo = calculo + '3.14'


    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + num1

    if (estado_operacao == true)
        {estado_operacao = false}
}

function e()
{
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + 'e'
    calculo = calculo + '2.71828'
}








function inseriro(operacao)
{
        if (estado_operacao === false)
        {let resquicio = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML = resquicio + operacao //frontend
       
        if (operacao == 'x')
        {calculo = calculo + '*'} //backend
        if (operacao != 'x' && operacao != '÷')
        {calculo = calculo + operacao}
        if (operacao == '÷')
        {calculo = calculo + '/'}
        estado_operacao = true
}





    }




function abrirp(ap)
{   
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + ap


    calculo = calculo + ap
}


function fecharp(fp)
{   if (estado_operacao === false)
{    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + fp}
}




function fatorial()
{
    let resquicio = calculo
    let contador = eval(resquicio)
    let resultado = 1
    for(;contador != 1;contador--)
    {
        resultado *= contador
    }
    document.getElementById('resultado').innerHTML = resultado
}


function porcentagem()
{


    document.getElementById('resultado').innerHTML = (eval(calculo) /100)
}




function sin()
{

 
    document.getElementById('resultado').innerHTML = (Math.sin(eval(calculo)))
    calculo = (Math.sin(eval(calculo)))


}




function cos()
{
    document.getElementById('resultado').innerHTML = (Math.cos(eval(calculo)))
    calculo = (Math.cos(eval(calculo)))
}


function tan()
{
    calculo = (Math.tan(eval(calculo)))
    document.getElementById('resultado').innerHTML = calculo


}


function log()
{
    document.getElementById('resultado').innerHTML = (Math.log(eval(calculo)))
    calculo = (Math.log10(eval(calculo)))
}


function raiz()
{
    calculo = Math. sqrt(calculo)
    document.getElementById('resultado').innerHTML = calculo
}


function elevado()
{
       let resquicio = document.getElementById('resultado').innerHTML  
    calculo = calculo + '**'
    document.getElementById('resultado').innerHTML = resquicio + '^'
}


function exp()
{
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + 'E'
    calculo = calculo + '*10**'
}

function ans()
{
    if (calculo == '')
    {calculo = resquicio_verdadeirob
    document.getElementById('resultado').innerHTML = calculo
    }

    if (calculo != '') //fazer uma caixa onde aparece o numero salvado
    {
        resquicio_verdadeirob = calculo
    }
}

function logn()
{
    document.getElementById('resultado').innerHTML = (Math.log(eval(calculo)))
    calculo = (Math.log2(eval(calculo)))
}

function sininv()
{
    document.getElementById('resultado').innerHTML = ((Math.sin(eval(calculo)))**-1)
    calculo = ((Math.sin(eval(calculo)))**-1)
}

function cosinv()
{
    calculo = ((Math.cos(eval(calculo)))**-1)
    document.getElementById('resultado').innerHTML = calculo
}

function taninv()
{
    calculo = ((Math.tan(eval(calculo)))**-1)
    document.getElementById('resultado').innerHTML = calculo
}

function elevadox()
{   let resquicio = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML = resquicio + 'e^'
    calculo = calculo + '2.71828**'
}

function elevado10()
{
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + '10^'
    calculo = calculo + '10**'
}

function aoquadrado()
{
    calculo = calculo **2
    document.getElementById('resultado').innerHTML = calculo 
}

function raiz()
{
    calculo = calculo +'**1/'
    document.getElementById('resultado').innerHTML = calculo
}

function aleatorio()
{
       let numeroAleatorio = Math.random(); 
    numeroAleatorio = numeroAleatorio.toString()
    calculo = calculo + numeroAleatorio
    document.getElementById('resultado').innerHTML = calculo
}











function calcular()
{
    calculo = eval(calculo)
    document.getElementById('resultado').innerHTML = calculo
    if (estado_operacao == true)
    {estado_operacao = false}
}




function apagar()
{
    document.getElementById('resultado').innerHTML = ''
    calculo = ''
}


function apagadowow()
{
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio.substring(0,resquicio.length -1)
    if (estado_operacao === true)
    {
        estado_operacao = false
    }




    calculo = calculo.substring(0,calculo.length -1)

}

function inverter()
{
    let tabelan = document.getElementById('tabela')
    let tabelai = document.getElementById('tabela_invertida')
    contador++
    if (contador % 2 == 0)
    {
        tabelan.classList.add('aparecido')
        tabelai.classList.remove('aparecido')

    }

    if (contador % 2 == 1)
    {
        tabelai.classList.add('aparecido')
        tabelan.classList.remove('aparecido')

    }
}