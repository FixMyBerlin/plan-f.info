declare module '*.jpg';
declare module '*.pdf';
declare module '*.png';
declare module '*.svg' {
  const content: any;
  export default content;
}
