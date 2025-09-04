export default function Followers(){
    return(
          <div className="w-[282px] mx-auto p-6">
            <div className="flex justify-center items-center gap-12 h-full relative">
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-sm font-medium mb-1">Takipçiler</p>
                <p className="text-gray-800 text-3xl sans-serif">213</p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex flex-col items-center relative -top-[6px]">
                <p className="text-gray-400 text-sm font-medium mb-1 relative -top-[4px]">Takip Edilenler</p>
                <p className="text-gray-800 text-3xl sans-serif relative -top-[6px]">132</p>
              </div>
            </div>
          </div>
    );
}