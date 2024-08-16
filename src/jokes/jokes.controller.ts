import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { JokesService } from "./jokes.service";
import { CreateJokeDto } from "./dtos/create-joke.dto";

@Controller('jokes')
export class JokesController {
    constructor(private readonly jokesService: JokesService) {}

    @Post()
    create(@Body() dto: CreateJokeDto) {
        return this.jokesService.create(dto);
    }

    @Get()
    findMany() {
        return this.jokesService.findMany();
    }

    @Get('types')
    findTypes() {
        return this.jokesService.findUniqueTypes();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.jokesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateJokeDto) {
        return this.jokesService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.jokesService.delete(id);
    }
}