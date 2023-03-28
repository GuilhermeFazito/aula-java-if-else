// substituir texto
let texto ="estao chegando as provas"
console.log(texto.replace("provas","avaliações"))

// fixar o valor
let num= 223.455321521367
console.log(num.toFixed(6))

// caixa de alerta
//alert("Ola meu amigo(a)")

// caixa de confirmaçao 
//let teste =confirm("vc é o aluno ?")
//console.log(teste)

// caixa de promp
//let texto1 = prompt("digite seu nome ")
//console.log("o nome dele é: " ,texto1)
//document.write("O nome dele é : " ,texto1)

/*
// if
if(20 >= 20){
    document.write("20 é maior")
}
 


//if else
if(25 > 15){
    document.write("numero maior")
}else{
    document.write("numero menor")
}

// if else declarando variavel
let numero =10
if(numero > 10){
    document.write("o numero é maior")
}else{
    document.write("o numero é menor ")
}


let idade = prompt("digite sua idade")
if(idade<= 12){
    document.write("é uma Criança")
        }else if (idade <=16){
            document.write("é um adolecente")
            }else if (idade <= 30){
                document.write("é um jovem adulto")
                    }else if (idade <= 100){
                        document.write("adulto maduro") 
                        }else{ 
                            document.write("vc é um filho da puta")
                        }
*/

let idade = prompt("digite sua Idade")
if(idade <= 12){
document.write("<br>vc n pode ir em nenhuma balada<br>")
    }else if(idade <=16){
    document.write("<br>Vc pode ir em matines<br>")
        }else if(idade >=18){
            document.write("<br>Vc Pode ir em qualquer balada<br>")
        } 