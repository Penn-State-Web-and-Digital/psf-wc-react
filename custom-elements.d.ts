// custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'psf-header': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { data: string | null };
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'psf-brand-footer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { data: string | null };
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'psf-brand-bar': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { data: string | null };
  }
}
