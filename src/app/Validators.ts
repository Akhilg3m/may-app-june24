import { AbstractControl, ValidationErrors } from "@angular/forms";

export function domainValidator(control: AbstractControl): any{

    if(control.value?.includes('@capgemini.com')){
        return null;
    }
    else{
        return {'domainValidator':'Invalid domain'};
    }

}