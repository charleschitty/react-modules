

/** Give an array of items, returns a randomly selected item */
function choice(items){
  return items[Math.floor(Math.random() * items.length)];
};

/** Removes the first matching item from items, if item exists, and returns it.
 *  Otherwise returns undefined. */
function remove(items, item){
  if (items.includes(item)){
    const i = items.indexOf(item)
    items.splice(i, 1);
    return item;
  };
  return undefined;
};

export { choice, remove };