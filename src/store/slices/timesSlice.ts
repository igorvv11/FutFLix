import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Time {
  id: number;
  nome: string;
  escudo: string;
  banner: string;
  historia: string;
  titulos: string[];
  idolos: string[];
}

// Estado do slice
interface TimesState {
  lista: Time[];
  favoritos: number[]; // IDs dos times favoritos
  loading: boolean;
}

// Estado inicial
const initialState: TimesState = {
  lista: [],
  favoritos: [],
  loading: false,
};

const timesSlice = createSlice({
  name: "times",
  initialState,
  reducers: {
    setLista: (state, action: PayloadAction<Time[]>) => {
      state.lista = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleFavorito: (state, action: PayloadAction<number>) => {
      if (state.favoritos.includes(action.payload)) {
        state.favoritos = state.favoritos.filter(id => id !== action.payload);
      } else {
        state.favoritos.push(action.payload);
      }
    },
  },
});

// Exporta actions e reducer
export const { setLista, setLoading, toggleFavorito } = timesSlice.actions;
export default timesSlice.reducer;
