const FEED_USERS ='feed/FEED_USERS'

export const loadFeedUsers = (feedUsers) => {
    if(!feedUsers) {
        return {
            type: FEED_USERS,
            feedUsers: {}
        };  
    }
    return {
        type: FEED_USERS,
        feedUsers
    };
};

export const getFeedUsers = () => {
    return async dispatch => {
        const res = await fetch('/api/users/feed', {
            method: 'get'
        })
        res.data = await res.json();
        if (res.ok) { 
            dispatch(loadFeedUsers(res.data.feedUsers))
        }
        return res;
    }
}

export default function feedReducer(state = [], action) {
    switch (action.type) {
        case FEED_USERS:
            return action.feedUsers;
        default:
            return state;
    }
  }