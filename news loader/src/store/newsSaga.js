import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure, fetchNewsRequest } from './newsSlice';

export const DATA_URL = import.meta.env.VITE_NEWS_LOADING_URL;

const selectItems = (state) => state.news.items;

function* fetchNewsWorker() {
    try {
        yield put(fetchNewsStart());

        const items = yield select(selectItems);
        const lastSeenId = items.length > 0 ? items[items.length - 1].id : null;
        const url = lastSeenId ? `${DATA_URL}?lastSeenId=${lastSeenId}` : DATA_URL;

        const { data } = yield call(axios.get, url);

        const newItems = data.filter(
            newItem => !items.some(existing => existing.id === newItem.id)
        );

        yield put(fetchNewsSuccess({
            items: newItems,
            hasMore: data.length === 5,
        }));
    } catch (error) {
        yield put(fetchNewsFailure(error.message));
    }
}

export function* newsSaga() {
    yield takeLatest(fetchNewsRequest.type, fetchNewsWorker);
}