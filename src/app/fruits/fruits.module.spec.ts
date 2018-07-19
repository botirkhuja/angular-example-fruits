import { FruitsModule } from './fruits.module';

describe('FruitsModule', () => {
  let fruitsModule: FruitsModule;

  beforeEach(() => {
    fruitsModule = new FruitsModule();
  });

  it('should create an instance', () => {
    expect(fruitsModule).toBeTruthy();
  });
});
