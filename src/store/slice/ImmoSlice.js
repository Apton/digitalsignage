/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

/**
 * Gestione etichetta autoanamnesi con etichetta
 */
const ImmoSlice = createSlice({
  name: 'Immo',
  initialState:
  {
    immo: [],
    rentOrSell: 0,
    idRegionSelected: { id: 0, tipo: ' ' },
    idLocalSelected: 0,
    idCategorySelected: 0,
    priceLimits: [0, 0],
    latitude: 0,
    longitude: 0,
    arrayImmo: [],

  },
  reducers: {
    setLat(state, { payload }) {
      state.latitude = payload;
    },
    setLng(state, { payload }) {
      state.longitude = payload;
    },
    setAllImmo(state, { payload }) {
      state.immo = payload;
    },
    setRentOrSell(state, { payload }) {
      state.rentOrSell = payload;
    },
    setIdRegionSelected(state, { payload }) {
      state.idRegionSelected = payload;
    },
    setIdLocalSelected(state, { payload }) {
      state.idLocalSelected = payload;
    },
    setIdCategorySelected(state, { payload }) {
      state.idCategorySelected = payload;
    },
    setPriceLimits(state, { payload }) {
      state.priceLimits = payload;
    },
    setPriceLimitsMin(state, { payload }) {
      if (Number(payload) > state.priceLimits[1]) {
        state.priceLimits[1] = payload;
        state.priceLimits[0] = payload;
      }
      state.priceLimits[0] = Number(payload);
    },
    setPriceLimitsMax(state, { payload }) {
      if (Number(payload) < state.priceLimits[0]) {
        state.priceLimits[1] = payload;
        state.priceLimits[0] = payload;
      }
      state.priceLimits[1] = Number(payload);
    },
    goToThePage(state) {
      window.location.href = `https://multimmobiliare.webflow.io/vendita-affitto?rentOrSell=${state.rentOrSell}&idRegion=${state.idRegionSelected}&idLocal=${state.idLocalSelected}&idCategory=${state.idCategorySelected}&priceMin=${state.priceLimits[0]}&priceMax=${state.priceLimits[1]}`;
    },
    resetAll(state) {
      state.rentOrSell = 0;
      state.idLocalSelected = 0;
      state.idCategorySelected = 0;
      state.priceLimits = [0, 0];
      state.idRegionSelected.id = 0;
      state.idRegionSelected.tipo = '';
    },

    setLatAndLngImmo(state, { payload }) {
      const { id, lat, lng } = payload;
      if (state.immo) {
        state.immo.find((immobile) => immobile.id === id).lat = lat;
        state.immo.find((immobile) => immobile.id === id).lng = lng;
      }
    },
    setArrayImmo(state, { payload }) {
      state.arrayImmo.push(payload);
    },

  },
});

export const longitude = (state) => state.Immo.longitude;
export const latitude = (state) => state.Immo.latitude;
export const priceLimits = (state) => state.Immo.priceLimits;
export const idCategorySelected = (state) => state.Immo.idCategorySelected;
export const idLocalSelected = (state) => state.Immo.idLocalSelected;
export const idRegionSelecter = (state) => state.Immo.idRegionSelected;
export const rentOrSell = (state) => state.Immo.rentOrSell;
export const immo = (state) => state.Immo.immo;
export const {
  setAllImmo, setRentOrSell, setIdRegionSelected, setIdLocalSelected, setIdCategorySelected,
  setPriceLimits, setPriceLimitsMin, setPriceLimitsMax, goToThePage, resetAll,
  setLat, setLng, setLatAndLngImmo, setArrayImmo,
} = ImmoSlice.actions;
export default ImmoSlice.reducer;
