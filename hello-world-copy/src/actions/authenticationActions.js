import { browserHistory} from 'react-router';
import * as apiurl  from '../common/apiURL';
import * as spinnerActions from './spinnerActions';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_USER
} from './actionTypes';

 //const ROOT_URL = apiurl.BASE_URL;
//const ROOT_URL = 'https://peaceful-mesa-72076.herokuapp.com';
export const signinUser = ({ usernameOrEmail, password }) => {
    return (dispatch) => {
        dispatch(spinnerActions.loadSpinner(true));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usernameOrEmail, password })
        };
        // submit email/password to the server
        return fetch(`${apiurl.BASE_URL}/api/auth/signin`, requestOptions)
            .then(handleResponse)
            .then(user => {

                // if request is good...
                // - update state to indicate user is authenticated
                //fetchUser();
                dispatch({ type: AUTH_USER });
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    let token = user.accessToken.toString();
                    localStorage.setItem('token', token);
                    localStorage.setItem('currentUser', usernameOrEmail);
                    dispatch(spinnerActions.loadSpinner(false));
                    //fetchUser();
                }
                
                // - save the jwt token
               //localStorage.setItem('token', user.token);

                // - redirect to the route '/feature'
                browserHistory.push('/clientsdash');

            }).catch((error) => {
                // if request is bad...
                // - show an error to the user
                localStorage.removeItem('token');
                if(error === 'Unauthorized'){
                    dispatch(authError('Invalid Username or Password , please check your details or signup as a new User'));
                }else{
                    dispatch(authError('Sorry unable to reach Backend server for now Please try again later'));
                }
                
                dispatch(spinnerActions.loadSpinner(false));
            });
    };
};

export const signupUser = ({ email,name, password, username }) => {
    return (dispatch) => {
        dispatch(spinnerActions.loadSpinner(true));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email,name, password, username  })
        };
        // submit email/password to the server
        return fetch(`${apiurl.BASE_URL}/api/auth/signup`, requestOptions)
            .then(handleResponse(dispatch))
            .then(() => {
                    //dispatch({ type: AUTH_USER });
                    //localStorage.setItem('token', response.data.token);
                    dispatch(spinnerActions.loadSpinner(false));
                    browserHistory.push('/signin');
                })
            .catch(() => {
                    dispatch(authError('Bad Sign up Info'));
                    dispatch(spinnerActions.loadSpinner(false));
                });
    };
};


export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
};

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(spinnerActions.loadSpinner(true));
        return fetch(`${apiurl.BASE_URL}/user/me`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
          // headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTM0MDA4MTU2LCJleHAiOjE1MzQ2MTI5NTZ9.1IDDb_5O-GPhVYO0OMHlXNqTVz5qiV1pNZ46PKujlbxVaHZnKhZDhun5Bw_gguKC2LHiF7c7ZaJTNibg8_VeqQ'}
        })
        .then(handleResponse)
        .then(response =>{
            console.log('setting respone '+response.name);
            dispatch({
                
                type: FETCH_USER,
                payload: response

             });
             dispatch(spinnerActions.loadSpinner(false));
        });
    };
};
function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // dispatch(authError('Bad Login Info'));
                // dispatch(spinnerActions.loadSpinner(false));
                //return Promise.reject(response)
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}