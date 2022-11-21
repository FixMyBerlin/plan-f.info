declare module '*.jpg';
declare module '*.png';
declare module '*.mp4';
declare module '*.svg' {
  const content: any;
  export default content;
}
