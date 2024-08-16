import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Joke } from "./joke.entity";
import { CreateJokeDto } from "./dtos/create-joke.dto";

@Injectable()
export class JokesService {
    constructor(@InjectRepository(Joke) private readonly JokeRepository: Repository<Joke>) {}

    async create(dto: CreateJokeDto) {
        const joke = this.JokeRepository.create(dto);

        return await this.JokeRepository.save(joke);
    }

    findMany() {
        return this.JokeRepository.find();
    }

    findOne(id:number) {
        return this.JokeRepository.findOne({where: {id}});
    }

    async findUniqueTypes(): Promise<string[]> {
        const types = await this.JokeRepository
            .createQueryBuilder('joke')
            .select('DISTINCT joke.type', 'type')
            .getRawMany();

        return types.map(t => t.type);
    }
    
    async update(id:number, dto:CreateJokeDto){
        const joke = await this.JokeRepository.findOne({where: {id}});

        Object.assign(joke,dto);

        await this.JokeRepository.save(joke);
    }

    async delete(id: number) {
        const joke = await this.JokeRepository.findOne({where: {id}});
        
        await this.JokeRepository.remove(joke);

    }
}