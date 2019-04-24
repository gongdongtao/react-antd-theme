export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_NAVTYPE = 'SET_NAVTYPE';
export const SET_NAVTHEME = 'SET_NAVTHEME';

export function setLoadingStatus(loadingStatus) {
    return {
        type: SET_LOADING_STATUS,
        loadingStatus
    }
}

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language
  }
}

export function setNavType(navType) {
  return {
    type: SET_NAVTYPE,
    navType
  }
}

export function setNavTheme(navTheme) {
  return {
    type: SET_NAVTHEME,
    navTheme
  }
}
