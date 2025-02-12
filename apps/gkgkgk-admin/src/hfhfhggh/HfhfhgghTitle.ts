import { Hfhfhggh as THfhfhggh } from "../api/hfhfhggh/Hfhfhggh";

export const HFHFHGGH_TITLE_FIELD = "id";

export const HfhfhgghTitle = (record: THfhfhggh): string => {
  return record.id?.toString() || String(record.id);
};
