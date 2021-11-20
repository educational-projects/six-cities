import { createReducer } from '@reduxjs/toolkit';
import { OffersState } from '../../types/state';
import { changeFavoriteStatusRequest, changeFavoriteStatusSucces, loadCardsError, loadCardsRequest,
  loadCardsSuccess, loadFavoritesOffersError, loadFavoritesOffersRequets, loadFavoritesOffersSuccess,
  loadNearbyError, loadNearbyRequest, loadNearbySuccess, loadOfferError, loadOfferRequest,
  loadOfferSuccess,
  resetOfferError} from '../action';

const initialState: OffersState = {
  cardList: [],
  offersLoading: false,
  offersError: false,
  offerLoading: false,
  offerError: false,
  offer: null,
  offersNearbyLoading: false,
  offersNearbyError: false,
  offersNearby: [],
  FavoritesOffersLoading: false,
  FavoritesOffersError: false,
  FavoritesOffers: [],
  changeFavoriteStatusLoading: false,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCardsRequest, (state) => {
      state.offersLoading = true;
    })
    .addCase(loadCardsSuccess, (state, action) => {
      const {cards} = action.payload;
      state.offersLoading = false;
      state.cardList = cards;
    })
    .addCase(loadCardsError, (state) => {
      state.offersLoading = false;
      state.offersError = true;
    })
    .addCase(loadOfferRequest, (state) => {
      state.offerLoading = true;
    })
    .addCase(loadOfferSuccess, (state, action) => {
      const {offer} = action.payload;
      state.offerLoading = false;
      state.offer = offer;
    })
    .addCase(loadOfferError, (state) => {
      state.offerLoading = false;
      state.offerError = true;
    })
    .addCase(loadNearbyRequest, (state) => {
      state.offersNearbyLoading = true;
    })
    .addCase(loadNearbySuccess, (state, action) => {
      const {nearOffers} = action.payload;
      state.offersNearbyLoading = false;
      state.offersNearby = nearOffers;
    })
    .addCase(loadNearbyError, (state) => {
      state.offersNearbyLoading = false;
      state.offersNearbyError = true;
    })
    .addCase(loadFavoritesOffersRequets, (state) => {
      state.FavoritesOffersLoading = true;
    })
    .addCase(loadFavoritesOffersSuccess, (state, action) => {
      const {favoritesOffers} = action.payload;
      state.FavoritesOffersLoading = false;
      state.FavoritesOffers = favoritesOffers;
    })
    .addCase(loadFavoritesOffersError, (state) => {
      state.FavoritesOffersLoading = false;
      state.FavoritesOffersError = true;
    })
    .addCase(changeFavoriteStatusRequest, (state) => {
      state.changeFavoriteStatusLoading = true;
    })
    .addCase(changeFavoriteStatusSucces, (state, action) => {
      const {offer} = action.payload;
      state.cardList = state.cardList.map((item) => item.id !== offer.id ? item : offer);
      state.offersNearby = state.offersNearby.map((item) => item.id !== offer.id ? item : offer);
      if (state.offer !== null) {
        state.offer.isFavorite = offer.isFavorite;
      }
      state.changeFavoriteStatusLoading = false;
    })
    .addCase(resetOfferError, (state) => {
      state.offer = null;
      state.offersNearby = [];
      state.offerError = false;
      state.offersNearbyError = false;
    });
});

export {offers};
