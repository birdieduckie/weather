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

  > div:nth-child(1) {
    border-bottom: 3px solid white;
  }

  > div:nth-child(2) {
    justify-content: space-between;
    height: 25%;
  }

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

    ${(p) =>
    p.mainWeather === MAIN_WEATHER.HAZE &&
    css`
      background: #fecaca;
    `}
`

export const StyledP = styled.p`
  margin: 20px 0 0 20px;
`

export const Section = styled.div`
  display: flex;
  height: 70%;
`

export const Description = styled.div`
  display: flex;
  margin: auto 0 20px 20px;
  font-size: 38px;
  font-weight: 700;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  font-weight: 600;

  font-size: 22px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  font-size: 22px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

export const Note = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 20px 0 0;
  font-size: 22px;
  font-weight: 600;
  width: 65%;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    width: 35%;
  }
`

export const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 65%;
  height: 90%;

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

    ${(p) =>
    p.mainWeather === MAIN_WEATHER.HAZE &&
    css`
      background: center / contain no-repeat url(${cloud});
    `}
`
