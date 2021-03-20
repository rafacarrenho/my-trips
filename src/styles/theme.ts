const MyPallet = {
  white: '#fff',
  whiteDark: '#fafafa',
  primaryLight: '#00CC1F',
  primary: '#00b11b',
  primaryDark: '#008F15',
  greyLight: '#dbdddb',
  grey: '#bdbfbd',
  greyDark: '#636664',
  blackLight: '#292b29',
  black: '#171B17',
  blackDark: '#171917',
  redLight: '#e04141',
  red: '#D82B2B',
  redDark: '#C30101',
  yellowLight: '#F8ED62',
  yellow: '#E9D700',
  yellowDark: '#DAB600',
  blueLight: '#01AEB2',
  blue: '#0A93C9',
  blueDark: '#0A5CBF'
}

export const lightTheme = {
  theme: 'light',
  colors: {
    white: MyPallet.white,
    background: MyPallet.whiteDark,
    backgroundSecondary: MyPallet.white,
    grayline: MyPallet.greyLight,
    text: MyPallet.greyDark,
    texthighlight: MyPallet.primaryDark,
    title: MyPallet.blackLight,
    red: MyPallet.red,
    green: MyPallet.primaryLight,
    primary: MyPallet.primary,
    primaryDark: MyPallet.primaryDark,
    bluetwitter: MyPallet.blue,
    darkMode: MyPallet.blackDark,
    reverseColorText: MyPallet.greyDark
  }
}

export const darkTheme = {
  theme: 'dark',
  colors: {
    white: MyPallet.white,
    background: MyPallet.blackDark,
    backgroundSecondary: MyPallet.blackLight,
    grayline: MyPallet.greyLight,
    text: MyPallet.greyDark,
    texthighlight: MyPallet.primaryDark,
    title: MyPallet.white,
    red: MyPallet.red,
    green: MyPallet.primaryLight,
    primary: MyPallet.primary,
    primaryDark: MyPallet.primaryDark,
    bluetwitter: MyPallet.blue,
    darkMode: MyPallet.white,
    reverseColorText: MyPallet.white
  }
}
