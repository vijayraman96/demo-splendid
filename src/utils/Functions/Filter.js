export function isValidArray(arr) {
    return Boolean(arr && arr.length > 0);
  }
export const getImage = (
  meta,
  type,
  // any = false,
  key,
  keyName
  // isMobile = true,
) => {
  if (!key || !isValidArray(meta)) {
    return "";
  }
  return meta.find((x) => x[keyName]?.includes(key))
    ? meta.find((x) => x[keyName]?.includes(key)).url
    : "";
};

export const getImageUrl = (meta, type, key, keyName = 'key') => {
    if (!key || !Array.isArray(meta)) {
      return "";
    }
  
    const imageItem = meta.find(
      (item) => item[keyName] === key && item.image_type === type
    );
  
    return imageItem ? imageItem.url : "";
  };
export const getMetaValue = (meta, key = '', keyName = 'key') => {
    if (!key || !isValidArray(meta)) {
      return '';
    }
    return meta.find((x) => x[keyName]?.includes(key))
      ? meta.find((x) => x[keyName]?.includes(key)).value
      : '';
  };