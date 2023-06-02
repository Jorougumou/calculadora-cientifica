

var calculo = ''
var resquicio_verdadeirob = ''




function inserirn(num1)
{
   
    calculo = calculo + num1 // backend


    let resquicio = document.getElementById('resultado').innerHTML // frontend


    document.getElementById('resultado').innerHTML = resquicio + num1


}


function inserirpi()


    {calculo = calculo + '3.14'


    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + num1
}










function inseriro(operacao)
{
 
        let resquicio = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML = resquicio + operacao //frontend
       
        if (operacao == 'x')
        {calculo = calculo + '*'} //backend
        if (operacao != 'x' && operacao != '÷')
        {calculo = calculo + operacao}
        if (operacao == '÷')
        {calculo = calculo + '/'}






    }




function abrirp(ap)
{
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + ap


    calculo = calculo + ap
}


function fecharp(fp)
{
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + fp
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
    calculo = (Math.log2(eval(calculo)))
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


function e()
{
    let resquicio = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resquicio + 'E'
    calculo = calculo + '*10**'
}

function ans()
{
    if (calculo = '')
    {calculo = resquicio_verdadeirob
    document.getElementById('resultado').innerHTML = calculo
    }

    if (calculo != '') //fazer uma caixa onde aparece o numero salvado
    {
        resquicio_verdadeirob = calculo
    }
}
















function calcular()
{
    calculo = eval(calculo)
    document.getElementById('resultado').innerHTML = calculo

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




    calculo = calculo.substring(0,calculo.length -1)


}





