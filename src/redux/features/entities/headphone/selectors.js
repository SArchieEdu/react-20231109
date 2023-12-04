export const selectHeadphoneModule = (state) => state.headphone;

export const selectHeadphoneIds = (state) => selectHeadphoneModule(state).ids;
export const selectHeadphoneById = (state, id) =>
  selectHeadphoneModule(state).entities[id];

export const selectHeadphoneIdsFilteredByCodecId = (state, codecId) => {
  const headphoneIds = selectHeadphoneIds(state);

  if (!codecId) {
    return headphoneIds;
  }

  return headphoneIds.filter((headphoneId) =>
    selectHeadphoneById(state, headphoneId)?.codecs?.includes(codecId)
  );
};
