import { Role } from 'src/entity/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
}
