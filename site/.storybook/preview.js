const customViewports = {
  BootstrapXS: {
    name: 'Bootstrap XS',
    styles: {
      width: '320px',
      height: '740px',
    },
  },
  BootstrapXS: {
    name: 'Bootstrap SM',
    styles: {
      width: '576px',
      height: '740px',
    },
  },
  BootstrapMD: {
    name: 'Bootstrap MD',
    styles: {
      width: '768px',
      height: '740px',
    },
  },
  BootstrapLG: {
    name: 'Bootstrap LG',
    styles: {
      width: '992px',
      height: '740px',
    },
  },
  BootstrapXL: {
    name: 'Bootstrap XL',
    styles: {
      width: '1200px',
      height: '740px',
    },
  },
  BootstrapXXL: {
    name: 'Bootstrap XXL',
    styles: {
      width: '1400px',
      height: '740px',
    },
  },
};


export const parameters = {
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: ["materials","atoms", "components","pages"], 
      locales: '', 
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <div className="container m-auto pt-5">
        <Story />
      </div>
    </>
  ),
]