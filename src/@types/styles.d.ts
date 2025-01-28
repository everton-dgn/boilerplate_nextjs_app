declare module '*.css' {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  const content: { [className: string]: string }
  export = content
}
