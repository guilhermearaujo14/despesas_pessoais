const  DataHora = ()=>{
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const dataHora = `${ano}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
    console.log(dia)
    return dataHora;
}
