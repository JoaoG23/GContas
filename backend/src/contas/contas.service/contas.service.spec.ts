import { Test, TestingModule } from '@nestjs/testing';
import { ContasService } from './contas.service';

describe('ContasService', () => {
  let provider: ContasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasService],
    }).compile();

    provider = module.get<ContasService>(ContasService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
