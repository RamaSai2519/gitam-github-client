const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          
          '@primary-color': '#1890ff',    // Primary color for all components
          '@link-color': '#1890ff',       // Link color
          '@success-color': '#52c41a',    // Success state color
          '@warning-color': '#faad14',    // Warning state color
          '@error-color': '#f5222d',      // Error state color
          '@font-size-base': '14px',      // Major text font size
          '@heading-color': '#333333',    // Heading text color
          '@text-color': '#333333',       // Major text color
          '@text-color-secondary': '#666666', // Secondary text color
          '@disabled-color': '#d9d9d9',   // Disabled state color
          '@border-radius-base': '4px',   // Component/layer border radius
          '@border-color-base': '#d9d9d9',// Major border color
          '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // Box shadow
        },
      },
    },
  ],
};
