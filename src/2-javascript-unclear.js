// What is the correct type of each parameter that we need to pass into this function?

// What type of thing does it return?

async function getAllRecords(tableName, includeId, linkedFields) {
  try {
    const allRecordsRaw = await module.exports.client().table(tableName).select().all();

    return await Promise.all(
      allRecordsRaw.map(async (record) => {

        if (linkedFields?.length) {
          record = await addLinkedFields(tableName, record, linkedFields);
        }

        return includeId
          ? {
              id: record.id,
              ...record.fields,
            }
          : record.fields;
      }),
    );
  } catch (error) {
    return error;
  }
}
