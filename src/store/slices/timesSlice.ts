import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Time {
  id: number
  nome: string
  escudo: string
  banner: string
  historia: string
  titulos: string[]
  idolos: string[]
}

export interface TimesState {
  lista: Time[]
  favoritos: number[]
}

export const initialState: TimesState = {
  lista: [
    {
      id: 1,
      nome: "Flamengo",
      escudo: "escudos/flamengo.png",
      banner: "/banners/banner_flamengo.jpg",
      historia:
        "Fundado em 1895 no Rio de Janeiro, o Flamengo é um dos clubes mais populares do mundo. Conhecido como o 'Mengão', tem a maior torcida do Brasil.",
      titulos: [
        "Copa Libertadores: 1981, 2019, 2022",
        "Campeonato Brasileiro: 1980, 1982, 1983, 1992, 2009, 2019, 2020",
        "Copa Intercontinental: 1981"
      ],
      idolos: ["Zico", "Júnior", "Gabigol"]
    },
    {
      id: 2,
      nome: "Palmeiras",
      escudo: "/escudos/palmeiras.png",
      banner: "/banner_palmeiras.jpg",
      historia:
        "Fundado em 1914, em São Paulo, o Palmeiras é o clube brasileiro com mais títulos nacionais, conhecido como 'Verdão'.",
      titulos: [
        "Copa Libertadores: 1999, 2020, 2021",
        "Campeonato Brasileiro: 11 títulos (recordista)",
        "Copa do Brasil: 1998, 2012, 2015, 2020"
      ],
      idolos: ["Marcos", "Ademir da Guia", "Dudu"]
    },
    {
      id: 3,
      nome: "Corinthians",
      escudo: "escudos/corinthians.png",
      banner: "/banner_corinthians.jpg",
      historia:
        "Fundado em 1910, em São Paulo, o Corinthians tem a 'Fiel', uma das maiores torcidas do mundo. Conhecido como 'Timão'.",
      titulos: [
        "Copa Libertadores: 2012",
        "Mundial de Clubes: 2000, 2012",
        "Campeonato Brasileiro: 7 vezes"
      ],
      idolos: ["Sócrates", "Ronaldo Fenômeno", "Cássio"]
    },
    {
      id: 4,
      nome: "São Paulo",
      escudo: "/escudos/saopaulo.png",
      banner: "/banner_saopaulo.png",
      historia:
        "Fundado em 1930, o São Paulo é o clube brasileiro mais vitorioso em competições internacionais.",
      titulos: [
        "Copa Libertadores: 1992, 1993, 2005",
        "Mundial de Clubes: 1992, 1993, 2005",
        "Campeonato Brasileiro: 6 vezes"
      ],
      idolos: ["Rogério Ceni", "Raí", "Careca"]
    },
    {
      id: 5,
      nome: "Santos",
      escudo: "escudos/santos.png",
      banner: "/banner_santos.jpg",
      historia:
        "Fundado em 1912, o Santos ficou famoso mundialmente com Pelé, considerado o maior jogador da história.",
      titulos: [
        "Copa Libertadores: 1962, 1963, 2011",
        "Campeonato Brasileiro: 8 vezes",
        "Mundial de Clubes: 1962, 1963"
      ],
      idolos: ["Pelé", "Neymar", "Robinho"]
    },
    {
      id: 6,
      nome: "Grêmio",
      escudo: "escudos/gremio.png",
      banner: "/banner_gremio.jpg",
      historia:
        "Fundado em 1903, em Porto Alegre, o Grêmio é conhecido como 'Imortal Tricolor' e tem forte tradição na Libertadores.",
      titulos: [
        "Copa Libertadores: 1983, 1995, 2017",
        "Mundial de Clubes: 1983",
        "Copa do Brasil: 5 vezes"
      ],
      idolos: ["Renato Gaúcho", "André Catimba", "Luan"]
    },
    {
      id: 7,
      nome: "Internacional",
      escudo: "escudos/inter.png",
      banner: "/banner_inter.jpg",
      historia:
        "Fundado em 1909, em Porto Alegre, o Internacional é conhecido como 'Colorado' e tem grande rivalidade com o Grêmio.",
      titulos: [
        "Copa Libertadores: 2006, 2010",
        "Mundial de Clubes: 2006",
        "Campeonato Brasileiro: 3 vezes"
      ],
      idolos: ["Falcão", "Fernandão", "D’Alessandro"]
    },
    {
      id: 8,
      nome: "Atlético Mineiro",
      escudo: "escudos/atletico_mg.png",
      banner: "/banner_atletico_mg.jpg",
      historia:
        "Fundado em 1908, em Belo Horizonte, o Atlético Mineiro é conhecido como 'Galo' e tem uma torcida apaixonada.",
      titulos: [
        "Copa Libertadores: 2013",
        "Campeonato Brasileiro: 1971, 2021",
        "Copa do Brasil: 2014, 2021"
      ],
      idolos: ["Reinaldo", "Ronaldinho Gaúcho", "Hulk"]
    },
    {
      id: 9,
      nome: "Cruzeiro",
      escudo: "escudos/cruzeiro.png",
      banner: "/banner_cruzeiro.jpg",
      historia:
        "Fundado em 1921, em Belo Horizonte, o Cruzeiro é conhecido como 'Raposa' e tem tradição em títulos nacionais.",
      titulos: [
        "Copa Libertadores: 1976, 1997",
        "Campeonato Brasileiro: 2003, 2013, 2014",
        "Copa do Brasil: 6 vezes"
      ],
      idolos: ["Dirceu Lopes", "Alex", "Fábio"]
    },
    {
      id: 10,
      nome: "Vasco da Gama",
      escudo: "escudos/vasco.png",
      banner: "/banner_vasco.jpg",
      historia:
        "Fundado em 1898, no Rio de Janeiro, o Vasco é conhecido como 'Gigante da Colina' e tem papel histórico na luta contra o racismo no futebol.",
      titulos: [
        "Copa Libertadores: 1998",
        "Campeonato Brasileiro: 1974, 1989, 1997, 2000",
        "Copa Mercosul: 2000"
      ],
      idolos: ["Roberto Dinamite", "Edmundo", "Romário"]
    }
  ],
  favoritos: []
}

export const timesSlice = createSlice({
  name: "times",
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<number>) => {
      const id = action.payload
      if (state.favoritos.includes(id)) {
        state.favoritos = state.favoritos.filter(f => f !== id)
      } else {
        state.favoritos.push(id)
      }
    }
  }
})

export const { toggleFavorito } = timesSlice.actions
export default timesSlice.reducer
