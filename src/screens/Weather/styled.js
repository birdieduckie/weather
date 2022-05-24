import styled, { css } from 'styled-components'

import { MAIN_WEATHER } from './lib/weather'

import circle from '../../assets/circle.svg'
import cloud from '../../assets/cloud.svg'
import drops from '../../assets/drops.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
  font-weight: bold;
  font-family: 'Lato', sans-serif;

  ${(p) =>
    p.mainWeather === MAIN_WEATHER.CLOUDS &&
    css`
      background: #068050;
    `}

  ${(p) =>
    p.mainWeather === MAIN_WEATHER.CLEAR &&
    css`
      background: #fecaca;
    `}

    ${(p) =>
    p.mainWeather === MAIN_WEATHER.RAIN &&
    css`
      background: #0b61f1;
    `}
`

export const StyledP = styled.p`
  font-size: 22px;
  font-weight: lighter;
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
`

export const Description = styled.h1`
  font-size: 32px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 2;
`

export const Line = styled.hr`
  display: flex;
  align-self: flex-end;
  width: 95%;
  height: 4px;
  background: white;
  margin-inline: 0;
  border-width: 0;
  border-radius: 2px;
  z-index: 2;
`

export const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 400px;
  height: 400px;
  z-index: 1;

  ${(p) =>
    p.mainWeather === MAIN_WEATHER.CLOUDS &&
    css`
      background: center / contain no-repeat url(${cloud});
    `}

  ${(p) =>
    p.mainWeather === MAIN_WEATHER.CLEAR &&
    css`
      background: center / contain no-repeat url(${circle});
    `}

    ${(p) =>
    p.mainWeather === MAIN_WEATHER.RAIN &&
    css`
      background: center / contain no-repeat url(${drops});
    `}
`
