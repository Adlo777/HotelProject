import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'replaceComma'
})

export class ReplaceComma implements PipeTransform
{
    transform(value:string):string
    {
        if(!!value)//Si la valeur n'est ni undefined ni null
        {
            return value.replace(/,/g, '.');
        }
        else
        {
            return '';
        }

    }
}