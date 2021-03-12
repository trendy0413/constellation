module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
  ],
  rules: {
    "property-no-vendor-prefix": null,
    "media-feature-name-disallowed-list": ["max-width", "min-width"],
    "at-rule-disallowed-list": ["media"],
    "no-descending-specificity": null,
  },
};
