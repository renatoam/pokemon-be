import { GetPokemonService } from "../services/GetPokemonService"

const getPokemonService = new GetPokemonService()

describe('Get Pokemon service', () => {
  test('Should be retrieved a valid structure result', async () => {
    const bulbasaurId = 1
    const response = await getPokemonService.execute(bulbasaurId)

    expect(response).toHaveProperty('id')
  })

  test('Should be retrieved the correct pokemon by its id', async () => {
    const bulbasaurId = 1
    const response = await getPokemonService.execute(bulbasaurId)

    expect(response?.identifier).toBe('bulbasaur')
  })
})