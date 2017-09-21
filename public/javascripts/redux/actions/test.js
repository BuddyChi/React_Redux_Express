import * as types from '../../constants/test.js';
import { getUserList } from '../../utils/index.js'

export function increase() {
    return dispatch => {
        getUserList().then(data => {
            console.log('data=========',data)
            dispatch(
                {
                    type: types.INCREASE,
                    'data': data.url
                }
            )
        })
    }
}

export function decrease() {
    return {
        type: types.DECREASE
    }
}
