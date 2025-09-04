export default function ExtraContent(){
    return(
            <div className="flex flex-col gap-8 mb-20">
            <div className="flex gap-2 justify-center">
              <div className="bg-[#5083F0] px-4 py-2 rounded-full text-white text-sm urbanist">
                Etkinlikler
              </div>
              <div className="px-4 py-2 rounded-full bg-[#DAE2FF] text-gray-700 text-sm urbanist">
                Gönderiler
              </div>
              <div className="px-4 py-2 rounded-full bg-[#DAE2FF] text-gray-700 text-sm urbanist">
                Yorumlar
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 mx-auto w-[400px] text-center urbanist text-gray-500">
              Bura etkinlik alanı
            </div>
            <div className="bg-gray-100 rounded-lg p-8 mx-auto w-[400px] text-center text-gray-500">
              Daha fazla içerik ekleyin.
            </div>
          </div>
    );
}