import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class isUpperCase implements ValidatorConstraintInterface {
    validate(text: string, validationArguments: ValidationArguments): boolean;
}
export declare class CreateProductDto {
    name: string;
    description: string;
    price: number;
}
