import {subDays,format} from 'date-fns';// es una lib para dates, si paso el mouse sobre form o sub me muestra como usarla(tipo de dato, parametros)
const date = new Date (1999, 1, 29)// 0 = ener0, 1=feb
const rat = subDays(date, 20);//date(Date or number), amount, entonces el amoutn me resta
const str = format(rat, 'yyyy/MM/dd');//date lo mismo, format en string
console.log(str);



