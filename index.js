// Kitab (Book):
// Bu sinif hər bir kitabı təmsil edir və aşağıdakı xüsusiyyətləri olacaq:
// ad (kitabın adı)
// muellif (kitabın müəllifi)
// movcuddur (kitab mövcuddurmu? - boolean dəyəri)
// Kitabxana (Library):
// Bu sinif kitabxananı təmsil edir və aşağıdakı xüsusiyyətləri və metodları olacaq:
// Xüsusiyyətlər:
// kitablar (kitabxanada olan kitabların siyahısı)
// Metodlar:
// kitabElaveEt(kitab): Yeni kitab əlavə edir.
// kitabSil(ad): Kitabı adına görə kitabxanadan silir.
// kitabVer(ad): Kitabı adına görə ödünc verir və movcuddur dəyərini false edir.
// kitabQaytar(ad): Kitabı adına görə geri qaytarır və movcuddur dəyərini true edir.
// muellifeGoreAxtar(muellif): Müəllifin adına görə kitabları axtarır.
// 2. İstifadə Nümunəsi:
// Kitabxana sinifindən bir nümunə yaradın.
// Bu kitabxanaya bir neçə kitab əlavə edin.
// Bir neçə kitabı ödünc alın (oxumaq ucun goturun) və onların mövcudluğunu yoxlayın.
// Kitabları geri qaytarın və yenidən mövcudluğunu yoxlayın.
// Müəllifə görə kitab axtarın və nəticəni göstərin.
// 3. Əlavə Tapşırıq (İstəyə bağlı):
// Kitabları mövcud olub-olmamasına görə siyahılayan movcudKitablariGoster() metodu yaradın.
// Kitabları adına görə sıraya salan (kitablariSirala()) funksiya əlavə edin.
// Yuxarıda qeyd olunan tələblərə uyğun olaraq layihəni həyata keçirin və nəticəni test edin



class Kitab {
    constructor(ad, muellif, movcuddur = true) {
      this.ad = ad;
      this.muellif = muellif;
      this.movcuddur = movcuddur; 
    }
  }
  class Kitabxana {
    constructor() {
      this.kitablar = [];
    }
    kitabElaveEt(kitab) {
      this.kitablar.push(kitab);
    }
    kitabSil(ad) {
      this.kitablar = this.kitablar.filter(kitab => kitab.ad !== ad);
    }
    kitabVer(ad) {
      const kitab = this.kitablar.find(kitab => kitab.ad === ad);
      if (kitab && kitab.movcuddur) {
        kitab.movcuddur = false; 
        console.log(`${ad} kitabi odunc verildi.`);
      } else {
        console.log(`${ad} kitabi movcud deyil ve ya artiq odunc verilib.`);
      }
    }
    kitabQaytar(ad) {
      const kitab = this.kitablar.find(kitab => kitab.ad === ad);
      if (kitab && !kitab.movcuddur) {
        kitab.movcuddur = true; 
        console.log(`${ad} kitabi geri qaytarildi.`);
      } else {
        console.log(`${ad} kitabi movcud deyil ve ya evvelce odunc alinmayib.`);
      }
    }
    muellifeGoreAxtar(muellif) {
      const netice = this.kitablar.filter(kitab => kitab.muellif.toLowerCase() === muellif.toLowerCase());
      if (netice.length > 0) {
        console.log(`Müəllif: ${muellif} ucun tapilan kitablar:`);
        netice.forEach(kitab => console.log(kitab.ad));
      } else {
        console.log(`${muellif} muellifine aid kitab tapilmadi.`);
      }
    }
    movcudKitablariGoster() {
      const movcudKitablar = this.kitablar.filter(kitab => kitab.movcuddur);
      console.log("Movcud olan kitablar:");
      movcudKitablar.forEach(kitab => console.log(`${kitab.ad} - ${kitab.muellif}`));
    }
    kitablariSirala() {
      this.kitablar.sort((a, b) => a.ad.localeCompare(b.ad));
      console.log("Kitablar adi ile siralandi:");
      this.kitablar.forEach(kitab => console.log(`${kitab.ad} - ${kitab.muellif}`));
    }
  }
  
