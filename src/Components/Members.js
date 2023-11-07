import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('fileter')==='active';
  return (
    <>
      <div>Members</div>;
      <button onClick={()=> setSearchParams({fileter:'active'})} >Aktif Üyeler</button>      {/*buton urlye filter=active arama parametresini yerleştirir, duruma göre filter ve active kelimeleri değişebilir */}
      <button onClick={()=>setSearchParams()} >Tüm Üyeler</button>                           {/* serachParam boş set etilince urlde arma parametresi olamayacak ve members olacak sadece */}
      {isActive ? <h2>Aktif Üyeler:</h2> : <h2>Tüm Üyeler</h2>}
    </>
  );
}

export default Members;

/* useSearchParam ve useParam React Router kütüphanesi içindeki iki farklı hook'tur ve URL'den veri almak için kullanılırlar.
 Ancak, farklı amaçları vardır.

useSearchParam, URL'deki bir sorgu parametresine (query parameter) erişmek için kullanılır.
 Örneğin, bir kullanıcının URL'deki ?search= sorgusu üzerinden arama yapabileceği bir arama sayfası düşünelim. Bu durumda, 
 useSearchParam hook'u kullanarak search sorgusuna erişebiliriz.

useParam ise, URL'deki bir dinamik parametreye erişmek için kullanılır. Dinamik parametreler, URL içindeki değişkenleri
 ifade eder. Örneğin, /:id gibi bir URL şablonu ile bir öğe sayfası oluşturulduğunu düşünelim. Burada id dinamik bir 
 parametredir. Bu durumda, useParam hook'u kullanarak URL'deki id parametresine erişebiliriz.

İki hook arasındaki fark, hangi veriye erişmek için kullanıldıklarındadır. useSearchParam sorgu parametrelerine, 
useParam dinamik parametrelere erişmek için kullanılır. */
