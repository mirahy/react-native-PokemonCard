const capitalize = text => {
    text = text.replace('-', ' ');
    return text.charAt(0).toUpperCase() + text.slice(1, text.length);
  };

  export{capitalize}