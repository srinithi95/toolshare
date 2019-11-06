const INITIAL_STATE = {
    showCarousel: false
}

const shareYourStoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_SHOW_CAROUSEL':
            return{
                ...state,
                showCarousel: action.showCarousel
            };
        default:
            return state;
    }
};

export default shareYourStoryReducer;