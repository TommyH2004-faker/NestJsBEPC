import { PipeTransform } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../entity/Product';
import { CreateProductDto } from './dto/create-product.dto';
import UpdateProductDto from './dto/update-product.dto';
import { Request } from 'express';
export declare class ValidationPipe implements PipeTransform {
    private readonly request;
    constructor(request: Request);
    transform(value: UpdateProductDto): UpdateProductDto;
}
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(req: Request & {
        user: string;
    }): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create1(productData: CreateProductDto): Promise<Product>;
    create(productData: CreateProductDto): Promise<Product>;
    update(id: string, productData: UpdateProductDto): Promise<Product | null>;
    delete(id: string): Promise<Product | null>;
}
