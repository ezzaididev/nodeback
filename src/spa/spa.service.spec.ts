import { Test, TestingModule } from '@nestjs/testing';
import { SpaService } from './spa.service';

describe('SpaService', () => {
  let service: SpaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaService],
    }).compile();

    service = module.get<SpaService>(SpaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
