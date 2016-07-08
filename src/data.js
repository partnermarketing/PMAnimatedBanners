/**
 * getPmData method to retrieve users template data from the api
 *
 * @param  {String} type [the type of data, either 'image', 'text', 'colour' or 'link']
 * @param  {String} name [the data reference as defined in the template editor]
 * @return {String} the template data value
 */
export default window.getPmData = (type, name) => {
  // ensure api is accessible
  if (!window.templateData) throw Error('unable to access api');
  // setup data cache
  window.pmDataCache = {};
  let result;
  // fetch data by type and name
  if (type === 'image') {
    result = templateData.getImageByName(name);
  } else if (type === 'text') {
    result = templateData.getTextByName(name);
  } else if (type === 'colour' || type === 'color') {
    result = templateData.getColoursByName(name);
  } else if (type === 'link') {
    result = templateData.getLinkByName(name);
  }
  // store data in cache
  window.pmDataCache[type][name] = result;
  return result;
};
