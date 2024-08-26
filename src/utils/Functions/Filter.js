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
  console.log(meta,type,  key, );
  if (!key || !type || !Array.isArray(meta)) {
    console.log("Invalid parameters:", { key, type, meta });
    return "";
  }

  const imageItem = meta.find((item) => {
    const matchesKey = item[keyName] === key;
    const matchesType = item.image_type === type;
    console.log(`Checking item with key: ${item[keyName]}, type: ${item.image_type}`);
    console.log(`Matches key: ${matchesKey}, Matches type: ${matchesType}`);
    return matchesKey && matchesType;
  });

  console.log("Found imageItem:", imageItem);
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