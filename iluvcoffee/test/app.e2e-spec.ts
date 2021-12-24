import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'db',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true
        })
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .set('Authorization', '03420HdwekQ923hfskOJDO')
      .expect(200)
      .expect('Hello Nest!');
  });

  afterAll(async () => {
    await app.close()
  })
});
