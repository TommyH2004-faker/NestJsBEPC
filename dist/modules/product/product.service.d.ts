import { Repository } from 'typeorm';
import { Product } from '../../entity/Product';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product | null>;
    create(productData: Partial<Product>): Promise<Product>;
    update(id: number, productData: Partial<Product>): Promise<Product | null>;
    delete(id: number): Promise<Product | null>;
}
