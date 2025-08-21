// redux/timesSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export interface Time {
    id: number;
    nome: string;
    escudo: string;
    banner: string;
    historia: string;
    titulos: string[];
    idolos: string[];
}

interface TimesState {
    lista: Time[];
    favoritos: number[];
      loading: boolean;
}

const initialState: TimesState = {
    lista: [],
    favoritos: [],
    loading: false,
};

// IDs dos 10 clubes brasileiros (você pode ajustar conforme API)
const CLUB_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const fetchTimes = createAsyncThunk(
  "times/fetchTimes",
  async () => {
    const timesData: Time[] = [];

    for (let id of CLUB_IDS) {
    const res = await api.get(`/teams/${id}`);
    const team = res.data; // ajustar conforme resposta da API
        timesData.push({
        id: team.team.id,
        nome: team.team.name,
        escudo: team.team.logo,
        banner: `/banners/banner_${team.team.name.toLowerCase().replace(" ", "_")}.jpg`, // usar banners locais
        historia: `História do ${team.team.name} aqui`, // você pode personalizar
        titulos: [], // você pode preencher manualmente ou criar outro fetch
        idolos: [], // você pode preencher manualmente
      });
    }

    return timesData;
  }
);

const timesSlice = createSlice({
  name: "times",
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<number>) => {
      const index = state.favoritos.indexOf(action.payload);
      if (index >= 0) state.favoritos.splice(index, 1);
      else state.favoritos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTimes.fulfilled, (state, action: PayloadAction<Time[]>) => {
        state.lista = action.payload;
        state.loading = false;
      })
      .addCase(fetchTimes.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { toggleFavorito } = timesSlice.actions;
export default timesSlice.reducer;
