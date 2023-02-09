interface LinkedField {
  fieldName: string;
  tableName: string;
}

interface DatabaseRecord {
  id: string;
  fields: string[];
}

function getRecords(tableName: string, includeId: boolean, linkedFields: LinkedField[]): DatabaseRecord[] {
  // Code goes here
  // ...
  // ...

  // Dummy code added here just to give it a return value
  const records = [
    {
      id: 'abc123',
      fields: ['name', 'age'],
    },
  ] as DatabaseRecord[];

  return records;
}
