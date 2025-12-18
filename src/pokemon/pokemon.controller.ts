import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ParseMongoIdPipe } from '@/common/pipes/parse-mongo-id.pipe';
import { QueriesParametersDto } from './dto/queriesParameters.dto';
import { ConfigService } from '@nestjs/config';

@Controller('pokemon')
export class PokemonController {

   constructor(
      private readonly pokemonService: PokemonService,
      private readonly configService: ConfigService
   ) {}

   @Post()
   @HttpCode(HttpStatus.CREATED)
   create(@Body() createPokemonDto: CreatePokemonDto) {
      return this.pokemonService.create(createPokemonDto);
   }

   @Get()
   @HttpCode(HttpStatus.OK)
   findAll( @Query() queries: QueriesParametersDto ) {
      return this.pokemonService.findAll( queries );
   }

   @Get(':term')
   @HttpCode(HttpStatus.OK)
   findOne(@Param('term') term: string) {
      return this.pokemonService.findOne(term);
   }

   @Patch(':term')
   @HttpCode(HttpStatus.ACCEPTED)
   update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto) {
      return this.pokemonService.update(term, updatePokemonDto);
   }

   @Delete(':id')
   @HttpCode(HttpStatus.ACCEPTED)
   remove(@Param('id', ParseMongoIdPipe ) id: string) {
      return this.pokemonService.remove(id);
   }
}
