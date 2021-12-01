export const mapRecursive = <T extends { id?: number; children?: T[] }>(
  oldArray: T[],
  callback: (item: T) => T,
  newArray: T[] = []
): T[] => {
  let interimArray: T[] = [];

  if (oldArray.length <= 0) {
    return newArray;
  } else {
    const [item, ...theRest] = oldArray;

    if (item.children) {
      item.children = mapRecursive<T>(item.children, callback);
    }

    interimArray = [...newArray, callback(item)];
    return mapRecursive<T>(theRest, callback, interimArray);
  }
};
