import { Injectable } from '@nestjs/common';
import type { pokeResponse } from './seed.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '@/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from '@/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

   constructor(
      @InjectModel( Pokemon.name )
      private readonly pokemonModel: Model<Pokemon>,
      private readonly http: AxiosAdapter
   ){}

   async execute() {
      try {
         await this.pokemonModel.deleteMany({});

         const url = "https://pokeapi.co/api/v2/pokemon?limit=650"
         const data = await this.http.get<pokeResponse>( url )

         const pokePromises = data.results.map( ({ name, url } ) => {

            const segments = url.split( "/" )
            const no = +segments[ segments.length-2 ]
            
            return this.pokemonModel.create( { name, no } )
         } )

         await Promise.all( pokePromises );

         return `seed executed`;
      } catch (error) {
         console.log(error);
      }
   }

}
