export type Column = {
  name: string;
  isRequired?: boolean;
};

export type CollectionType = {
  name: string;
  columns: Column[];
};

export type Schema = {
  collections: CollectionType[];
}