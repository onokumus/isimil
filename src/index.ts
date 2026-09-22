/**
 * Türkiye'deki 81 ilin tam listesi.
 * Orijinal paketle uyumlu olması için isimler küçük harfle tutulur.
 */
const provinces = [
  'adana',
  'adıyaman',
  'afyonkarahisar',
  'ağrı',
  'amasya',
  'ankara',
  'antalya',
  'artvin',
  'aydın',
  'balıkesir',
  'bilecik',
  'bingöl',
  'bitlis',
  'bolu',
  'burdur',
  'bursa',
  'çanakkale',
  'çankırı',
  'çorum',
  'denizli',
  'diyarbakır',
  'edirne',
  'elazığ',
  'erzincan',
  'erzurum',
  'eskişehir',
  'gaziantep',
  'giresun',
  'gümüşhane',
  'hakkari',
  'hatay',
  'ısparta',
  'mersin',
  'istanbul',
  'izmir',
  'kars',
  'kastamonu',
  'kayseri',
  'kırklareli',
  'kırşehir',
  'kocaeli',
  'konya',
  'kütahya',
  'malatya',
  'manisa',
  'kahramanmaraş',
  'mardin',
  'muğla',
  'muş',
  'nevşehir',
  'niğde',
  'ordu',
  'rize',
  'sakarya',
  'samsun',
  'siirt',
  'sinop',
  'sivas',
  'tekirdağ',
  'tokat',
  'trabzon',
  'tunceli',
  'şanlıurfa',
  'uşak',
  'van',
  'yozgat',
  'zonguldak',
  'aksaray',
  'bayburt',
  'karaman',
  'kırıkkale',
  'batman',
  'şırnak',
  'bartın',
  'ardahan',
  'ığdır',
  'yalova',
  'karabük',
  'kilis',
  'osmaniye',
  'düzce',
] as const satisfies readonly string[];

/** İl adı tipi (81 ilin literal birleşimi). */
export type Province = (typeof provinces)[number];

/** 81 ilin tamamı. */
export const all: readonly Province[] = provinces;

/**
 * 81 ilden rastgele birini döndürür.
 * Her çağrıda her il eşit olasılıkla seçilir.
 */
export function random(): Province {
  const index = Math.floor(Math.random() * provinces.length);
  return provinces[index];
}

export default { all, random };