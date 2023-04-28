declare module 'react-native-responsive-mockup-screen' {
  import { Component } from 'react';

  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;
  export function listenOrientationChange(
    screenClassComponent: Component<any, any>
  ): void;
  export function removeOrientationListener(): void;
  export function widthPixelToDp(pixel: number, wireFrameWidth: number): number;
  export function heightPixelToDp(
    pixel: number,
    wireFrameHeight: number
  ): number;
}