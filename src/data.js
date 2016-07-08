/**
 * getPmData method to retrieve users template data from the api
 *
 * @param  {String} type [the type of data, either 'image', 'text', 'colour' or 'link']
 * @param  {String} name [the data reference as defined in the template editor]
 * @return {String} the template data value
 */
export default window.getPmData = (type, name) => {
  // setup data cache
  window.pmDataCache = {};
  let result;

  // fetch data by type and name
  if (type === 'image') {
    result = templateData.images.getByName(name);
  } else if (type === 'text') {
    result = templateData.texts.getByName(name);
  } else if (type === 'colour' || type === 'color') {
    result = templateData.colours.getByName(name);
  } else if (type === 'link') {
    result = templateData.links.getByName(name);
  }

  if (!result) {
    throw Error(`${type} with identifier ${name} was not found!`);
  }

  // store data in cache
  window.pmDataCache[type][name] = result.value;

  return type === 'link' ? result.url : result.value;
};
