import { Test, TestingModule } from '@nestjs/testing';
import { ContasRepositories } from './contas.repositories';

describe('ContasRepositories', () => {
  let provider: ContasRepositories;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasRepositories],
    }).compile();

    provider = module.get<ContasRepositories>(ContasRepositories);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
