/* eslint-disable no-param-reassign */
import styled from 'styled-components';

class ThemeStyles {
  constructor() {
    this.styles = {};
    this.baseStyles = {};
  }

  addThemeStyles(styleName, themes, isMerge) {
    if (!Array.isArray(themes)) {
      themes = [themes];
    }

    return (...styles) => {
      themes.forEach((themeName) => {
        if (!this.styles[themeName]) {
          this.styles[themeName] = {};
        }

        this.styles[themeName][styleName] = isMerge ? [...this.styles[themeName][styleName], ...styles] : styles;
      });
    };
  }

  mergeThemeStyles(styleName, themes) {
    return this.addThemeStyles(styleName, themes, true);
  }

  addBaseStyles(styleName) {
    return (...styles) => {
      this.baseStyles[styleName] = styles;
    };
  }

  mergeBaseStyles(styleName) {
    return (...styles) => {
      this.baseStyles[styleName] = [...this.baseStyles[styleName], ...styles];
    };
  }

  get(styleName) {
    return ({ theme }) => {
      const baseStyles = this.baseStyles[styleName] ?? [];
      const styles = (this.styles[theme.name] && this.styles[theme.name][styleName]) || [];

      return [...baseStyles, ...styles];
    };
  }

  apply(component, styleName) {
    return styled(component)(this.get(styleName));
  }
}

export default ThemeStyles;
