import { GetPokemonService } from "../services/GetPokemonService"

const getPokemonService = new GetPokemonService()

describe('Get Pokemon service', () => {
  test('Should be passed an id to service', async () => {
    const response = await getPokemonService.execute(1)

    expect(!!response).toBe(true)
  })
})