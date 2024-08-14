import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './joke.entity';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Joke])],
    controllers: [JokesController],
    providers: [JokesService]
})
export class JokesModule {}