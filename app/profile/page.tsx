export default function ProfilePage() {
  return (
    <main className="min-h-screen w-full p-6 relative">
      <div className="absolute w-[560px] h-[560px] top-[-300px] left-1/2 -translate-x-1/2 rounded-full opacity-100 bg-muted z-0" />
      <div className="absolute w-[124px] h-[124px] top-[190px] left-[139px] rounded-[500px] border-[3px] border-border opacity-100 bg-muted overflow-hidden z-10" />
      <div className="absolute w-[222px] h-[88px] top-[310px] left-[90px] z-10 flex flex-col items-center justify-center gap-[6px] text-center px-2 opacity-100 font-urbanist">
        <div className="text-[28px] leading-[36px] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          Halil Ayyıldırım
        </div>
        <div className="text-[16px] leading-[22px] font-medium text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
          @halilayyildirim
        </div>
        <div className="text-[14px] leading-[20px] font-normal text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
          Yönetim Bilişim Sistemleri - 3. Sınıf
        </div>
      </div>
      <div className="absolute w-[222px] top-[406px] left-[90px] z-10 flex flex-row items-center justify-center gap-2">
        <span className="px-3 py-1 rounded-full bg-[#DAE2FF] text-[#5083F0] text-[12px] leading-[16px] font-medium">
          Öğrenci
        </span>
        <span className="px-3 py-1 rounded-full bg-[#DAE2FF] text-[#5083F0] text-[12px] leading-[16px] font-medium">
          Organizatör
        </span>
      </div>
      <div className="bg-red-500 absolute w-[282px] h-[78px] top-[441px] left-[60px] z-10 flex flex-row items-center justify-between gap-[48px] opacity-100 font-urbanist">
        <div className="flex flex-col items-center">
          <div className="w-[62px] h-[40px] text-[16px] leading-[20px] font-medium text-muted-foreground text-center">Takipçi</div>
          <div className="w-[93px] h-[1s0px] text-[24px] leading-[40px] font-semibold text-center">2.4K</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[62px] h-[45px] text-[45px] leading-[20px] font-medium text-muted-foreground text-center">Takip hgbjk</div>
          <div className="w-[93px] h-[10px] text-[24px] leading-[40px] font-semibold text-center">128</div>
        </div>
      </div>
    </main>
  );
}

