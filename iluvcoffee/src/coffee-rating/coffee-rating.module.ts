import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'postgres'
    }),
    CoffeesModule],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
