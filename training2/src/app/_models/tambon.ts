// export interface Tambon {
//     id: number;
//     zip_code: number;
//     name_th: string;
//     name_en: string;
//     amphure_id: number;
//     created_at: Date;
//     updated_at: Date;
//     deleted_at?: any;
// }
export interface Tambon {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}