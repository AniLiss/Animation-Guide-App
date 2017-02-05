/**
 * Created by user on 05.02.2017.
 */
import store from '../store';
import { loadHeaderContent } from '../actions/header-actions';
import headerData from '../data/data.json';

export function getHeaderContent(curType) {
    let headerContent = {};

    return headerData.types.map( (response) => {

        headerContent.title = response.type;
        headerContent.description = response.header_description;
        }
    );

    store.dispatch(loadHeaderContent(headerContent));

    return;
}