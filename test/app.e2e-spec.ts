import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service';

describe('Balance', () => {
  let app: INestApplication;
  const moneyService = {
    getMoney: (id: number, amount: number) => ({ reference_id: 1 }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(moneyService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`GET /money`, () => {
    return request(app.getHttpServer())
      .get('/money?user_id=1&amount=1')
      .expect(200)
      .expect({
        data: moneyService.getMoney(1, 1),
      });
  });

  it(`GET /money invalid user id`, () => {
    return request(app.getHttpServer()).get('/money?amount=1').expect(400);
  });

  it(`GET /money invalid amount`, () => {
    return request(app.getHttpServer()).get('/money?amount=dsf').expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
