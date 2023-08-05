import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  let provider: UsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosService],
    }).compile();

    provider = module.get<UsuariosService>(UsuariosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
