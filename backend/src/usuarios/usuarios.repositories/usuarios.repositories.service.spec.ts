import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosRepositories } from './usuarios.repositories';

describe('UsuariosRepositories', () => {
  let service: UsuariosRepositories;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosRepositories],
    }).compile();

    service = module.get<UsuariosRepositories>(UsuariosRepositories);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
