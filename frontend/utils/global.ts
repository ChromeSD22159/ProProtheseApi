  export const isObjectNotEmpty = (obj: Object, debug: String) => {      
      return Object.keys(obj).length !== 0;
  };

export const isNotNullOrUndefined = (obj: Object, debug: String) => {    
    return obj !== null && obj !== undefined
};

export const getElementSize = (el: object) => {
  if (el.value) {
    return { width: el.value.clientWidth, height: el.value.clientHeight};
  }
};

export const isContentHeigherAsViewport = (content: number, viewport: number) => {
  if (content && viewport) {
    return content > viewport
  }
};