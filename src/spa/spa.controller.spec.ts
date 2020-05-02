import { Test, TestingModule } from '@nestjs/testing';
import { SpaController } from './spa.controller';

describe('Spa Controller', () => {
  let controller: SpaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaController],
    }).compile();

    controller = module.get<SpaController>(SpaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
